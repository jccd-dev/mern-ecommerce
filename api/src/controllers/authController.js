import { Users } from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/hashUtils.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const newUser = new Users({
    username: req.body.username,
    email: req.body.email,
    password: await hashPassword(req.body.password),
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    phoneNumber: req.body.p_number,
  });

  try {
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });

    if (!user) {
      return res
        .status(401)
        .json({ message: "You provided invalid username or password" });
    }

    //compare password from input and from db
    const isPassword = await comparePassword(req.body.password, user.password);

    if (!isPassword) {
      return res.status(401).json("You provided invalid username or password");
    }

    //create token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_TOKEN,
      { expiresIn: "3d" }
    );

    //remove the 'password' from the set of data that will be pass.
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server Error");
  }
};

export { registerUser, loginUser };

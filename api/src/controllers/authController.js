import { Users } from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/hashUtils.js";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

const registerUser = async (req, res) => {
  const newUser = new Users({
    username: req.body.username,
    email: req.body.email,
    password: await hashPassword(req.body.password),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
  });

  const saveUser = await newUser.save();
  res.status(200).json(saveUser);
};

const loginUser = async (req, res, next) => {
  const user = await Users.findOne({ username: req.body.username });

  if (!user) {
    const error = AppError.authenticationError({
      msg: "You provided incorrect Username or Password",
    });

    return next(error);
  }

  //compare password from input and from db
  const isPassword = await comparePassword(req.body.password, user.password);

  if (!isPassword) {
    const error = AppError.authenticationError({
      msg: "You provided incorrect Username or Password",
    });
    return next(error);
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
};

export { registerUser, loginUser };

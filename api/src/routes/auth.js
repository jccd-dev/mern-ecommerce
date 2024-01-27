import Express from "express";
import { Users } from "../models/UserModel.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const router = Express.Router();

//register users
router.post("/register", async (req, res) => {
  const newUser = new Users({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json({ message: "Wrong Credential" });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );
    const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    console.log(userPassword);
    if (userPassword !== req.body.password) {
      return res.status(401).json("Wrong Password");
    }

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
});

export default router;

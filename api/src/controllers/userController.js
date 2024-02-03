import { Users } from "../models/UserModel.js";
import { hashPassword } from "../utils/hashUtils.js";

//update
export const updateUserController = async (req, res) => {
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: await hashPassword(req.body.password),
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    phoneNumber: req.body.p_number,
  };
  const updatedUser = await Users.findByIdAndUpdate(
    req.params.id,
    {
      $set: userData,
    },
    { new: true }
  );
  res.status(200).json(updatedUser);
};

//delete
export const deleteUserController = async (req, res) => {
  await Users.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Deleted Successfully" });
};

//find user
export const getUserController = async (req, res) => {
  const projection = {
    password: 0,
    isAdmin: 0,
  };

  const user = await Users.findById(req.params.id, projection);
  res.status(200).json(user);
};

// retrieve all users data except for admin data
export const getUsersController = async (req, res) => {
  const projection = {
    password: 0,
    isAdmin: 0,
  };

  const newQuery = req.query.new;
  const users = newQuery
    ? await Users.find({ isAdmin: { $ne: true } }, projection)
        .sort({ _id: -1 })
        .limit(5)
    : await Users.find({ isAdmin: { $ne: true } }, projection);
  res.status(200).json(users);
};

export const userStatsController = async (req, res) => {
  // Today's date is used as a reference point.
  const today = new Date();
  // Calculate the date one year ago from today.
  const lastYear = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  // Aggregate function to gather user statistics.
  const data = await Users.aggregate([
    // $match is used to filter users created in the last year.
    { $match: { createdAt: { $gte: lastYear } } },

    // $project is used to extract the month part from each user's createdAt date.
    {
      $project: {
        month: { $month: "$createdAt" },
      },
    },

    // $group is used to group the data by month and count the total users per month.
    {
      $group: {
        _id: "$month",
        total: { $sum: 1 },
      },
    },

    // Optional: Sort the result by month for chronological order.
    { $sort: { _id: 1 } },
  ]);

  // Sending the aggregated data as a response.
  res.status(200).json(data);
};

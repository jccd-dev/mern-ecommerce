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

  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: userData,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

//delete
export const deleteUserController = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

//find user
export const getUserController = async (req, res) => {
  const projection = {
    password: 0,
    isAdmin: 0,
  };

  try {
    const user = await Users.findById(req.params.id, projection);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

// rettrieve all users data except for admin data
export const getUsersController = async (req, res) => {
  const projection = {
    password: 0,
    isAdmin: 0,
  };

  const newQuery = req.query.new;
  try {
    const users = newQuery
      ? await Users.find({ isAdmin: { $ne: true } }, projection)
          .sort({ _id: -1 })
          .limit(5)
      : await Users.find({ isAdmin: { $ne: true } }, projection);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server Error" });
  }
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

  try {
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
  } catch (error) {
    // Log the error for debugging and send a 500 internal server error response.
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

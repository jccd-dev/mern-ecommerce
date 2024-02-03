import { Order } from "../models/OrdersModel.js";

export const createOrderController = async (req, res) => {
  const newOrder = new Order(req.body);
  const savedOrder = await newOrder.save();

  res.status(200).json(savedOrder);
};

export const updateOrderController = async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json(updatedOrder);
};

export const deleteOrderController = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Oder Successfully deleted" });
};

export const getUserOrdersController = async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.status(200).json(orders);
};

export const getAllOrdersController = async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
};

//edit this.. only orders that is delivered
export const monthlyIncomeStatsController = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  const income = await Order.aggregate([
    { $match: { createdAt: { $gte: prevMonth } } },
    {
      $project: {
        month: { $month: "createdAt" },
        sales: "$amount",
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales" },
      },
    },
  ]);

  res.status(200).json(income);
};

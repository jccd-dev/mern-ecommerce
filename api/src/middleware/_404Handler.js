export default (req, res, next) => {
  const error = new Error("Resource Not Found");
  error.status = 404;
  next(error);
};

import AppError from "./AppError.js";

// export default (err, req, res, next) => {
//   const statusCode = err.status || 500;
//   const response = {
//     message: err.message || "Interval Server Error",
//   };
//   response.errors = [{ msg: "Something went wrong in the server" }];

//   // Check if error is an instance of CustomError
//   if (err instanceof AppError) {
//     // Further refine the response based on the nature of the CustomError
//     // For example, handling validation errors specifically
//     if (statusCode === 422 && err.data && err.data.errors) {
//       response.errors = err.data.errors;
//     } else if (err.data) {
//       // Handling other custom errors that might carry additional data
//       response.errors = [err.data];
//     }
//   }

//   //   // Include stack trace for development environment only
//   if (process.env.NODE_ENV === "development") {
//     response.stack = err.stack;
//   }

//   res.status(statusCode).json(response);
// };

//refactored
export default (err, req, res, next) => {
  const statusCode = err.status || 500;
  const response = {
    status: "error", // This can be 'error', 'fail', or a custom status
    message: err.message || "Internal Server Error", // General message
    errors: [], // Details about the specific errors
  };

  // Handling validation errors
  if (
    err instanceof AppError &&
    statusCode === 422 &&
    err.data &&
    err.data.errors
  ) {
    response.errors = err.data.errors;
  }
  // Handling other custom errors with additional data
  else if (err instanceof AppError && err.data) {
    response.errors.push(err.data);
  }
  // Handling generic errors without specific details
  else {
    response.errors.push({ message: "Something went wrong in the server" });
  }

  // Include stack trace for development environment only
  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
};

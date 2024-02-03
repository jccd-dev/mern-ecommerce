import jwt from "jsonwebtoken";
import AppError from "./../utils/AppError.js";

/**
 * just validate the token for a user
 *
 * @param {} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (!authHeader) {
    const error = AppError.authorizationError({
      msg: "Authentication failed!",
    });
    return next(error);
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) {
      const error = AppError.authorizationError({
        msg: "Token error. Please try again.",
      });
      return next(error);
    }

    next();
  });
};

/**
 * use to authenticate and athorized the user action for both normal account and admin
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const verifyTokenAndAuth = (req, res, next) => {
  const authHeader = req.headers.token;

  if (!authHeader) {
    const error = AppError.authorizationError({
      msg: "Authentication failed!",
    });
    return next(error);
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) {
      const error = AppError.authorizationError({
        msg: "Token error. Please try again.",
      });
      return next(error);
    }

    if (user.id === req.params.id || user.isAdmin) {
      next();
    } else {
      const error = AppError.authorizationError({
        msg: "Unauthorized Action!",
      });
      return next(error);
    }
  });
};

/**
 * use to authenticate and athorized the user action if it is an admin
 * the middleware will pass if user is an admin, else unauthorized.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const verifyTokenAndAdmin = (req, res, next) => {
  const authHeader = req.headers.token;

  if (!authHeader) {
    const error = AppError.authorizationError({
      msg: "Authentication failed!",
    });
    return next(error);
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) {
      const error = AppError.authorizationError({
        msg: "Token error. Please try again.",
      });
      return next(error);
    }

    if (!user.isAdmin) {
      const error = AppError.authorizationError({
        msg: "Unauthorized Action!",
      });
      return next(error);
    }
    next();
  });
};

export { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin };

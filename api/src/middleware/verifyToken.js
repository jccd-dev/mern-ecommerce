import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
      if (err) return res.status(403).json("Token is not Valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ message: "You are not Authenticated" });
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ message: "Unauthorized Action!" });
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ message: "Unauthorized Action!" });
    }
  });
};

export { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin };

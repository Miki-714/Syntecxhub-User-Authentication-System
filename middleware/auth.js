const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // <--- Is 'next' defined here?
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next(); // <--- Is this being called correctly?
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

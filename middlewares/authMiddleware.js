const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log("Token",token)
  
    try {
      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.body.userId=decoded.id;
      // req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json("Not authorized, token failed");
    }
  }

module.exports = authenticate;
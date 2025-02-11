require("dotenv").config();

const verifyAdminAPIKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(403).json({ message: "Unauthorized: Invalid API Key" });
  }

  next(); 
};

module.exports = verifyAdminAPIKey;

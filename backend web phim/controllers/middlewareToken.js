const Token = require("../models/movies");

const movies = Token.userToken();
// sử dụng API: /api/movies/trending?page=1 để lấy 20 movies phổ biến nhất!
exports.PostToken = (req, res, next) => {
  const token = req.query.API_Token;
  const API = movies.some((x) => x.token === token);
  if (API) {
    return next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

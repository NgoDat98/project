const List = require("../models/movies");

const movies = List.genreList();
// sử dụng API: /api/movies/trending?page=1 để lấy 20 movies phổ biến nhất!
exports.getMovies = (req, res, next) => {
  if (movies) {
    res.status(200).json(movies);
  } else {
    res.status(404).json({
      message: "Lỗi",
    });
  }
};

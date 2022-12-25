const Rating = require("../models/movies");

const movies = Rating.movieList();
// sử dụng API: /api/movies/top-rate?API_Token=&page=1 để lấy 20 movies xếp hạng cao nhất!
exports.getMovies = (req, res, next) => {
  // sắp xếp theo thứ tự vote_average giảm dần
  const ratingMovies = movies.sort(function (a, b) {
    return -a.vote_average + b.vote_average;
  });

  const dataMovie = ratingMovies;
  const PAGE_SIZE = 20;
  const curruntPage = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
  const start = (curruntPage - 1) * PAGE_SIZE;
  const end = (curruntPage - 1) * PAGE_SIZE + PAGE_SIZE;
  const item = dataMovie.slice(start, end);
  const total_pages = Math.ceil(dataMovie.length / PAGE_SIZE);

  if (curruntPage <= total_pages) {
    res.status(200).json({
      results: item,
      page: curruntPage,
      total_pages: total_pages,
    });
  } else {
    res
      .status(400)
      .send(
        `<h1>This page is out of data!</h1> <br /> <p>This page only has data up to ${total_pages} pages</p>`
      );
  }
};

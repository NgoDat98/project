const mediaType = require("../models/movies");

const movies = mediaType.movieList();
// sử dụng API: /api/movies/trending?page=1 để lấy 20 movies phổ biến nhất!
exports.getMovies = (req, res, next) => {
  const parramType = req.query.Type;
  const filterType = movies.filter(
    (x) =>
      x &&
      x.media_type &&
      x.media_type.toUpperCase().includes(parramType.toUpperCase())
  );

  const dataMovie = filterType;
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
      .status(404)
      .send(
        `<h1>This page is out of data!</h1> <br /> <p>This page only has data up to ${total_pages} pages</p>`
      );
  }
};

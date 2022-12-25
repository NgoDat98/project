const Trending = require("../models/movies");

const movies = Trending.movieList();
// sử dụng API: /api/movies/trending?page=1 để lấy 20 movies phổ biến nhất!
exports.getMovies = (req, res, next) => {
  // sắp xếp theo thứ tự popularity giảm dần
  const trendingMovies = movies.sort(function (a, b) {
    return -a.popularity + b.popularity;
  });

  // lọc theo Type
  const parramType = req.query.Type;
  const parramYear = req.query.Year;

  const filterType = trendingMovies.filter(
    (x) =>
      x &&
      parramType &&
      x.media_type &&
      x.media_type.toUpperCase().includes(parramType.toUpperCase())
  );

  const filterYear = trendingMovies.filter(
    (x) =>
      (x &&
        x.release_date &&
        x.release_date.slice(0, 4).includes(parramYear)) ||
      (x &&
        x.first_air_date &&
        x.first_air_date.slice(0, 4).includes(parramYear))
  );

  const filterYearAndtype = trendingMovies.filter(
    (x) =>
      ((x &&
        parramYear &&
        parramType &&
        x.release_date &&
        x.release_date.slice(0, 4).includes(parramYear)) ||
        (x &&
          x.first_air_date &&
          x.first_air_date.slice(0, 4).includes(parramYear))) &&
      x &&
      parramType &&
      x.media_type &&
      x.media_type.toUpperCase().includes(parramType.toUpperCase())
  );

  // // Step 1
  // const uniqueSet = new Set(arr);
  // // Set { '🐣', 1, 2, 3 }

  // // Step 2
  // const backToArray = [...uniqueSet];
  // // ['🐣', 1, 2, 3]

  const dataMovie =
    parramType && parramYear
      ? filterYearAndtype
      : parramYear
      ? filterYear
      : parramType
      ? filterType
      : trendingMovies;
  const PAGE_SIZE = 20;
  const curruntPage = parseInt(req.query.page);
  const start = (curruntPage - 1) * PAGE_SIZE;
  const end = (curruntPage - 1) * PAGE_SIZE + PAGE_SIZE;
  const item = dataMovie.slice(start, end);
  const total_pages = Math.ceil(dataMovie.length / PAGE_SIZE);
  if (curruntPage) {
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
  } else {
    res.status(200).json({
      results: dataMovie,
      page: total_pages,
      total_pages: total_pages,
    });
  }
};

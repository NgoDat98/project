const genre = require("../models/movies");

const movies = genre.movieList();
const genreMovie = genre.genreList();

// sử dụng API: http://localhost:3001/api/movies/discover/Action?page=1 - để tìm các phim hành động.
// thay đổi Action = Adventure,Animation,Comedy,Crime,Documentary,Drama,Family,Fantasy,History,Horror,Music,Mystery,Romance,Science Fiction,TV Movie,Thriller,War,Western,
// để thay đổi thể loại phim.
exports.getMovies = (req, res, next) => {
  const discover = req.params.id;

  // lọc ra id theo discover
  const abc = genreMovie.find((x) => x.name === discover);

  const bcd = [];
  const resAPI = [];
  if (abc) {
    // lọc phim từ id của thể loại phim.
    for (let key in movies) {
      for (let k in movies[key].genre_ids) {
        if (movies[key].genre_ids[k] === abc.id) {
          const bvv = movies[key].id;
          bcd.push(bvv);
        }
      }
    }

    // lọc ra danh sách phim từ id bên trên!
    for (let k in bcd) {
      for (let key in movies) {
        if (bcd[k] === movies[key].id) {
          const filtergr = movies[key];
          resAPI.push(filtergr);
        }
      }
    }
    const dataMovie = resAPI;
    const PAGE_SIZE = 20;
    const curruntPage = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
    const start = (curruntPage - 1) * PAGE_SIZE;
    const end = (curruntPage - 1) * PAGE_SIZE + PAGE_SIZE;
    const item = dataMovie.slice(start, end);
    const total_pages = Math.ceil(dataMovie.length / PAGE_SIZE);

    if (discover) {
      if (curruntPage <= total_pages) {
        res.status(200).json({
          results: item,
          page: curruntPage,
          total_pages: total_pages,
          genre_name: abc.name,
        });
      } else {
        res.status(400).json({
          message: `This page is out of data ,This page only has data up to ${total_pages} pages`,
        });
      }
    } else {
      res.status(404).json({ message: "Not found gerne parram" });
    }
  } else {
    res.status(400).json({
      message:
        "Not found that gerne id,You can try the following discoveries: Action,Adventure,Animation,Comedy,Crime,Documentary,Drama,Family,Fantasy,History,Horror,Music,Mystery,Romance,Science Fiction,TV Movie,Thriller,War,Western",
    });
  }
};

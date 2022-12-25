const Search = require("../models/movies");

const movies = Search.movieList();
const genreMovie = Search.genreList();

// sử dụng API: /api/movies/search?keyword=...&page=1 để tìm danh sách 20 movies!
exports.getMovies = (req, res, next) => {
  const valueSearch = req.query.keyword;
  const All = [];

  // lọc ra danh sách movies từ kết quả tìm kiếm.
  if (valueSearch !== "" && valueSearch) {
    const filterSearch = movies.filter(
      (x) =>
        (x &&
          x.title &&
          x.title.toUpperCase().includes(valueSearch.toUpperCase())) ||
        (x &&
          x.overview &&
          x.overview.toUpperCase().includes(valueSearch.toUpperCase()))
    );

    const parramType = req.query.Type;
    const parramYear = req.query.Year;
    const paramsGenre = req.query.Genre;
    const paramsLanguage = req.query.Language;

    // lọc ra media_type từ kết quả tìm kiếm
    const filterType = filterSearch.filter(
      (x) =>
        x &&
        parramType &&
        x.media_type &&
        x.media_type.toUpperCase().includes(parramType.toUpperCase())
    );

    // lọc ra year từ kết quả tìm kiếm
    const filterYear = filterSearch.filter(
      (x) =>
        (x &&
          x.release_date &&
          x.release_date.slice(0, 4).includes(parramYear)) ||
        (x &&
          x.first_air_date &&
          x.first_air_date.slice(0, 4).includes(parramYear))
    );

    //lọc ra thể loại từ kết quả tìm kiếm
    const abc = genreMovie.find(
      (x) =>
        x &&
        x.name &&
        paramsGenre &&
        x.name.toUpperCase() === paramsGenre.toUpperCase()
    );

    const bcd = [];
    const resAPI = [];
    // lọc phim từ id của thể loại phim.
    if (abc) {
      for (let key in filterSearch) {
        for (let k in filterSearch[key].genre_ids) {
          if (filterSearch[key].genre_ids[k] === abc.id) {
            const bvv = filterSearch[key].id;
            bcd.push(bvv);
          }
        }
      }

      // lọc ra danh sách phim từ id bên trên!
      for (let k in bcd) {
        for (let key in filterSearch) {
          if (bcd[k] === filterSearch[key].id) {
            const filtergr = filterSearch[key];
            resAPI.push(filtergr);
          }
        }
      }
    }

    //lọc ra Language từ kết quả tìm kiếm
    const filterLanguage = filterSearch.filter(
      (x) =>
        x &&
        x.original_language &&
        paramsLanguage &&
        x.original_language.toUpperCase().includes(paramsLanguage.toUpperCase())
    );

    // const All = [
    //   ...new Set([...filterType, ...filterYear, ...filterLanguage, ...resAPI]),
    // ];
    All.push(...filterSearch);
    All.push(...filterLanguage);
    All.push(...filterType);
    All.push(...filterYear);
    All.push(...resAPI);

    const searchArr = [];

    for (let i = 0; i < All.length / 2; i++) {
      for (let j = All.length / 2; j < All.length; j++) {
        if (
          All[i] &&
          All[j] &&
          All[i].id &&
          All[j].id &&
          All[i].id - All[j].id === 0
        ) {
          searchArr.push(All[i]);
        }
      }
    }

    // Step 1
    const uniqueSet = new Set(searchArr);
    // Set { '🐣', 1, 2, 3 }

    // Step 2
    const backToArray = [...uniqueSet];
    // ['🐣', 1, 2, 3]

    const dataMovie =
      paramsGenre || paramsLanguage || parramType || parramYear
        ? backToArray
        : filterSearch;
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
      res.status(404).json({
        message: `This page is out of data,This page only has data up to ${total_pages} pages`,
      });
    }
  } else {
    res.status(400).json({ message: "Not found keyword parram" });
  }
};

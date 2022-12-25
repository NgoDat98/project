const Trailer = require("../models/movies");

const movies = Trailer.videoList();
// sử dụng API: /api/movies/video/:id để lấy ra các obj chứa link video trailer phim
exports.PostTrailer = (req, res, next) => {
  const id = parseInt(req.params.id);

  const PostId = movies.find((x) => x.id === id);

  const arr = [];

  if (PostId !== undefined) {
    for (let key in PostId.videos) {
      const copy = PostId.videos[key];
      if (
        copy.official === true &&
        copy.site === "YouTube" &&
        (copy.type === "Trailer" || copy.type === "Tease")
      ) {
        const videoSuitable = {
          iso_639_1: copy.iso_639_1,
          iso_3166_1: copy.iso_3166_1,
          name: copy.name,
          key: copy.key,
          site: copy.site,
          size: copy.size,
          type: copy.type,
          official: copy.official,
          published_at: copy.published_at,
          id: copy.id,
        };
        arr.push(videoSuitable);
      }
    }
  }

  const trailerTimeT1 = arr.sort(function (a, b) {
    return a.published_at - b.published_at;
  });

  const dataMovie = trailerTimeT1;

  if (PostId !== undefined) {
    if (dataMovie.length > 0) {
      res.status(200).json(dataMovie);
    } else {
      res.status(404).json({
        message: "Not found video",
      });
    }
  } else {
    res.status(400).json({
      message: "Not found film_id parram",
    });
  }
};

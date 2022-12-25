const fs = require("fs");
const path = require("path");

const Movies = {
  movieList: (cb) => {
    return JSON.parse(fs.readFileSync("./data/movieList.json", "utf8"));
  },
  videoList: (cb) => {
    return JSON.parse(fs.readFileSync("./data/videoList.json", "utf8"));
  },
  genreList: (cb) => {
    return JSON.parse(fs.readFileSync("./data/genreList.json", "utf8"));
  },
  mediaTypeList: (cb) => {
    JSON.parse(fs.readFileSync("./data/mediaTypeList.json", "utf8"));
  },
  userToken: (cb) => {
    return JSON.parse(fs.readFileSync("./data/userToken.json", "utf8"));
  },
};

module.exports = Movies;

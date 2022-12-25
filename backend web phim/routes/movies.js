const path = require("path");
const bodyParser = require("body-parser");

const express = require("express");
const urlbody = bodyParser.urlencoded({ extended: true });

const trending = require("../controllers/trending");
const rating = require("../controllers/Rating");
const genre = require("../controllers/genre");
const videoTrailer = require("../controllers/GetTrailer");
const search = require("../controllers/searchMovies");
const API_Token = require("../controllers/middlewareToken");
const theloai = require("../controllers/moviesList");
const mediaType = require("../controllers/mediaType");

const routes = express.Router();

// /api/movies/trending?API_Token=&page= => GET Movies Trending
routes.get("/api/movies/trending", API_Token.PostToken, trending.getMovies);

// /api/movies/top-rate?API_Token=&page= => GET Movies Rating
routes.get("/api/movies/top-rate", API_Token.PostToken, rating.getMovies);

// /api/movies/discover/movie?API_Token=&page= => GET movies genre
routes.get("/api/movies/discover/:id", API_Token.PostToken, genre.getMovies);

// /api/movies/video/movie?API_Token =>POST Trailer
routes.get(
  "/api/movies/video/:id",
  API_Token.PostToken,
  videoTrailer.PostTrailer
);

// /api/movies/search?keyword=&API_Token=&page= => POST value search movies
routes.get(
  "/api/movies/search",
  urlbody,
  API_Token.PostToken,
  search.getMovies
);

// lười
routes.get("/api/movies/theloai", API_Token.PostToken, theloai.getMovies);

module.exports = routes;

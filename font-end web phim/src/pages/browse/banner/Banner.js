import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import BannerMovie from "./BannerMovie";

const BannerFont = styled.div`
  width: 100%;
  min-height: 400px;
  background-image: url(${(props) =>
    "https://image.tmdb.org/t/p/w500" + props.img});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 25%;
  padding-top: 5%;

  & h1 {
    margin-top: 5%;
    width: 40%;
    margin-left: 2%;
    color: white;
  }

  & button {
    width: 10%;
    height: 40px;
    margin-left: 2%;
    background-color: rgba(5, 5, 4, 0.638);
    color: white;
  }

  & p {
    width: 40%;
    height: 60px;
    margin-left: 2%;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Banner = (props) => {
  const [banner, setBanner] = useState([]);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:3001/api/movies${props.item}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.name,
          overview: movieData.overview,
          backdrop_path: movieData.backdrop_path,
          poster: movieData.poster_path,
        };
      });

      const bannerMovie =
        transformedMovies[
          Math.floor(Math.random() * transformedMovies.length - 1)
        ];

      const bannerMovie2 =
        transformedMovies[
          Math.floor(Math.random() * transformedMovies.length + 1)
        ];

      if (bannerMovie !== undefined) {
        setBanner(bannerMovie);
      } else {
        setBanner(bannerMovie2);
      }
    } catch (error) {
      console.log(error.masage);
    }
  }, [props]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <BannerFont img={banner.backdrop_path}>
      {!error && <BannerMovie name={banner.name} overview={banner.overview} />}
      {error && <p>{error}</p>}
    </BannerFont>
  );
};

export default Banner;

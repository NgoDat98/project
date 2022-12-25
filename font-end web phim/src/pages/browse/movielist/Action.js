import React, { useState, useEffect, useCallback } from "react";
import useMovie from "../../../hook/use-Movie";
import ListMovieCP from "./ListMovieCP";
import styled from "styled-components";

const MovieListFont = styled.div`
  width: 100%;
  height: 250px;
  overflow-x: scroll;

  & h1 {
    color: white;
    user-select: none;
  }

  & ul {
    width: auto;
    padding-left: 0;
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 14.5%;
    user-select: none;
  }

  & li {
    max-width: 100%;
    overflow: hidden;
  }
  & img {
    max-width: 95%;
  }

  & li:hover img {
    max-width: 100%;
    transition: all 0.3s ease-in-out;
    display: block;
  }
`;

const Action = (props) => {
  const [movie, setMovie] = useState();
  const dataMovie = useCallback((dataObj) => {
    setMovie(dataObj);
  }, []);
  const { sendRequest: fetchMovie } = useMovie(dataMovie);

  useEffect(() => {
    fetchMovie({
      url: `http://localhost:3001/api/movies${props.item}`,
    });
  }, [fetchMovie, props.item]);

  return (
    <MovieListFont>
      <h1>Phim hành động</h1>
      <ListMovieCP movies={movie} />
    </MovieListFont>
  );
};

export default Action;

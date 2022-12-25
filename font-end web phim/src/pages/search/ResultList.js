import React, { useState, useEffect, useCallback } from "react";
import useMovie from "../../hook/use-Movie";
import ListMovieCP from "./ListMovieCP3";
import styled from "styled-components";

const MovieListFont = styled.div`
  width: 100%;

  & h1 {
    color: white;
    user-select: none;
  }

  & h3 {
    height: 700px;
    color: white;
    user-select: none;
    text-align: center;
  }
  & ul {
    width: auto;
    padding-left: 0;
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto;
    gap: 5px;
    user-select: none;
    overflow: hidden;
  }

  & li {
    max-width: 100%;
    overflow: hidden;
  }
  & img {
    max-width: 90%;
  }

  & li:hover img {
    max-width: 100%;
    transition: all 0.3s ease-in-out;
    display: block;
  }
`;

const ResultList = (props) => {
  const [movie, setMovie] = useState([]);
  const dataMovie = useCallback((dataObj) => {
    setMovie(dataObj);
  }, []);
  const { error, sendRequest: fetchMovie } = useMovie(dataMovie);

  useEffect(() => {
    fetchMovie({
      url: `http://localhost:3001/api/movies/${props.cong}/${props.ID}?API_Token=${props.KEY}&keyword=${props.name}&Year=${props.year}&Type=${props.type}&Language=${props.language}&Genre=${props.genre}&page=1`,
    });
  }, [
    fetchMovie,
    props.KEY,
    props.name,
    props.cong,
    props.ID,
    props.type,
    props.year,
    props.language,
    props.genre,
  ]);

  return (
    <MovieListFont>
      <h1>Search Result</h1>
      {!error && <ListMovieCP movies={movie} />}
      {!props.name && error && <h3>Haven't searched for movies yet!</h3>}
      {props.name && error && (
        <h3 style={{ color: "red" }}>Not found video!</h3>
      )}
    </MovieListFont>
  );
};

export default ResultList;

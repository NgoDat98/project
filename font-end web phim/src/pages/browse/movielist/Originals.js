import React, { useState, useEffect, useCallback } from "react";
import useMovie from "../../../hook/use-Movie";
import ListMovieCP2 from "./abc/ListMovieCP2";
import styled from "styled-components";

const OriginalFont = styled.div`
  width: 100%;
  height: 470px;
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
    gap: 6px;
    grid-auto-flow: column;
    grid-auto-columns: 14.5%;
    user-select: none;
  }

  & li {
    max-width: 100%;
    overflow: hidden;
  }

  & img {
    max-width: 100%;
  }

  & li:hover img {
    max-width: 105%;
    transition: all 0.3s ease-in-out;
  }
`;

const Originals = (props) => {
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
    <OriginalFont>
      <h1>Original</h1>
      <ListMovieCP2 movies={movie} />
    </OriginalFont>
  );
};

export default Originals;

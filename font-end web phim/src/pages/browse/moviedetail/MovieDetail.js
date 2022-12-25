import React from "react";
import styled from "styled-components";
import MovieTrailer from "./MovieTrailer";
import { useContext } from "react";
import { contextdata } from "../Browse";

const MovieDetailFont = styled.div`
  display: ${(props) => (props.item === true ? "block" : "none")};
  width: 100%;

  .div1 {
    width: 100%;
    display: flex;
    background-color: black;
    overflow: hidden;
    position: fixed;
    top: 40%;
    left: 0%;
    height: 60%;
  }

  .div2 {
    width: 50%;
    color: white;
  }
  .div2 h1 {
    border-bottom-style: solid;
    border-bottom-width: 5px;
    border-color: gray;
  }

  .div3 {
    width: 50%;
    align-self: center;
    text-align: right;
  }
`;

const MovieDetail = (props) => {
  const closes = useContext(contextdata);

  const close = () => closes.openDetail(null);

  let name = "name";
  if (props.movieData) {
    name =
      props.movieData.name !== undefined
        ? props.movieData.name
        : props.movieData.title;
  }
  let date = "date";
  if (props.movieData) {
    date =
      props.movieData.date !== undefined
        ? props.movieData.date
        : props.movieData.date2;
  }
  let vote = "vote";
  if (props.movieData) {
    vote = props.movieData.vote;
  }
  let overview = "overview";
  if (props.movieData) {
    overview = props.movieData.overview;
  }

  return (
    <MovieDetailFont item={props.showHandler}>
      <div className="div1">
        <div className="div2">
          <h1>{name}</h1>
          <h4>{date}</h4>
          <h4>{vote}/10</h4>
          <p>{overview}</p>
        </div>
        <div className="div3">
          <button onClick={close}>
            <b>Closes</b>
          </button>
          <MovieTrailer
            API={props.API}
            id={props.movieData ? props.movieData.id : ""}
            backdrop={props.movieData ? props.movieData.backdrop : ""}
          />
        </div>
      </div>
    </MovieDetailFont>
  );
};

export default MovieDetail;

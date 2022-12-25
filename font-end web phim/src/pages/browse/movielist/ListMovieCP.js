import React from "react";
import MovieCP from "./MovieCP";

const ListMovieCP = (props) => {
  return (
    <ul>
      {props.movies &&
        props.movies.map((data) => (
          <MovieCP
            key={data.id}
            id={data.id}
            backdrop={data.backdrop}
            name={data.name}
            date={data.date}
            date2={data.date2}
            vote={data.vote}
            overview={data.overview}
            title={data.title}
          />
        ))}
    </ul>
  );
};

export default ListMovieCP;

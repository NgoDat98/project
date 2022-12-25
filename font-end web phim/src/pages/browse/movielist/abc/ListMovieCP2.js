import React from "react";
import MovieCP2 from "./MovieCP2";

const ListMovieCP2 = (props) => {
  return (
    <ul>
      {props.movies &&
        props.movies.map((data) => (
          <MovieCP2
            key={data.id}
            id={data.id}
            backdrop={data.poster}
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

export default ListMovieCP2;

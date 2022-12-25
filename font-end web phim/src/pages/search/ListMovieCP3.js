import React from "react";
import MovieCP3 from "./MovieCP3";

const ListMovieCP3 = (props) => {
  return (
    <ul>
      {props.movies &&
        props.movies.map((data) => (
          <MovieCP3
            key={data.id}
            id={data.id}
            backdrop={data.backdrop}
            poster={data.poster}
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

export default ListMovieCP3;

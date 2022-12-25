import React from "react";
import { useContext } from "react";
import { contextdata } from "./Search";

const MovieCP3 = (props) => {
  const test = useContext(contextdata);

  const openDetail = () => {
    test.trailerDetailSearch({
      key: props.id,
      id: props.id,
      backdrop: props.backdrop,
      name: props.name,
      date: props.date,
      date2: props.date2,
      vote: props.vote,
      overview: props.overview,
      title: props.title,
    });
  };

  const closeDetail = () => {
    test.trailerDetailSearch(null);
  };

  return (
    <li
      onClick={
        (test.dataDetail === null && openDetail) ||
        (test.dataDetail.id && test.dataDetail.id !== props.id && openDetail) ||
        (test.dataDetail.id && test.dataDetail.id === props.id && closeDetail)
      }
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + props.poster}
        alt={props.name}
      />
    </li>
  );
};

export default MovieCP3;

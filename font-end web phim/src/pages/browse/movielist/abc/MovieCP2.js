import React from "react";
import { useContext } from "react";
import { contextdata } from "../../Browse";

const MovieCP2 = (props) => {
  const test = useContext(contextdata);

  const openDetail = () => {
    test.openDetail({
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
    test.openDetail(null);
  };

  return (
    <li
      method="POST"
      name="id"
      value={`${test && test.handler && test.handler.id}`}
      onClick={
        (test.handler === null && openDetail) ||
        (test.handler.id && test.handler.id !== props.id && openDetail) ||
        (test.handler.id && test.handler.id === props.id && closeDetail)
      }
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + props.backdrop}
        alt={props.name}
      />
    </li>
  );
};

export default MovieCP2;

import React from "react";
import { Fragment } from "react";

const BannerMovie = (props) => {
  return (
    <Fragment>
      <h1>{props.name}</h1>
      <button>Play</button>
      <button>MyList</button>
      <p>{props.overview}</p>
    </Fragment>
  );
};

export default BannerMovie;

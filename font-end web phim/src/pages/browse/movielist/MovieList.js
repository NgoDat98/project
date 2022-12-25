import React from "react";

import Originals from "./Originals";
import TopRated from "./TopRated";
import Trending from "./Trending";
import Action from "./Action";
import "./MovieList.css";
import ComedyMovies from "./ComedyMovies";
import HorrorMovies from "./HorrorMovies";
import RomanceMovies from "./RomanceMovies";
import Documentaries from "./Documentaries";

const MovieList = (props) => {
  return (
    <div className="movielist-font">
      <Originals item={props.originals} />
      <Trending item={props.trending} />
      <TopRated item={props.topRated} />
      <Action item={props.actionMovies} />
      <ComedyMovies item={props.comedyMovies} />
      <HorrorMovies item={props.horrorMovies} />
      <RomanceMovies item={props.romanceMovies} />
      <Documentaries item={props.documentaries} />
    </div>
  );
};

export default MovieList;

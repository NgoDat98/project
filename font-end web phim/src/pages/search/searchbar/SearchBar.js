import React, { useState, useEffect, useCallback } from "react";
import useMovie from "../../../hook/use-Movie";
import classed from "./SearchBar.module.css";

import Genre from "./Genre";
import MediaType from "./MediaType";
import Year from "./Year";

const SearchBar = (props) => {
  const [movie, setMovie] = useState();
  const [scroll, setScroll] = useState(0);

  window.onscroll = function () {
    setScroll(document.documentElement.scrollTop);
  };

  const dataMovie = useCallback((dataObj) => {
    setMovie(dataObj);
  }, []);
  const { sendRequest: fetchMovie } = useMovie(dataMovie);

  useEffect(() => {
    fetchMovie({
      url: `http://localhost:3001/api/movies/trending?API_Token=${props.KEY}`,
    });
  }, [fetchMovie, props.KEY]);

  const arr = [];
  const arr2 = [];

  // lấy dữ liệu theo Type
  for (let key in movie) {
    arr.push(movie[key].media_type);
  }

  // Step 1
  const uniqueSet = new Set(arr);
  // Set { '🐣', 1, 2, 3 }

  // Step 2
  const backToArray = [...uniqueSet];
  // ['🐣', 1, 2, 3]

  // lấy dữ liệu theo năm

  for (let key in movie) {
    arr2.push(
      Number(
        (movie[key] && movie[key].date && movie[key].date.slice(0, 4)) ||
          (movie[key] && movie[key].date2 && movie[key].date2.slice(0, 4))
      )
    );
  }

  // Step 1
  const uniqueSet2 = new Set(arr2);

  // Step 2
  const backToArray2 = [...uniqueSet2];

  const data = backToArray2.sort(function (a, b) {
    return -a + b;
  });

  const filterArr2 = data.filter((x) => x);

  return (
    <React.Fragment>
      {scroll < 50 && (
        <div className={classed.font}>
          <Genre KEY={props.KEY} />
          <MediaType item={backToArray} />
          <Year item={filterArr2} />
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchBar;

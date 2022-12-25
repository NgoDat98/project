import React, { useState, useContext } from "react";
import { contextdata } from "../Search";

const Genre = () => {
  const [onMouse, setOnMouse] = useState(false);
  const [values, setValues] = useState("");
  const [cong, setCong] = useState("");

  const List = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  const search = useContext(contextdata);

  const clickHandeler = () => setCong("discover");

  const getCong = () => cong !== "" && search.tuKhoa(cong);
  const getGenreId = () => values !== "" && search.getId(values);

  const onMouseEnterHandler = () => {
    setOnMouse(true);
    clickHandeler();
  };
  const onMouseEnterHandler2 = () => {
    getCong();
    getGenreId();
  };
  const onMouseLeaveHandler = () => setOnMouse(false);

  for (let key in List) {
    const test = document.getElementById(`${List[key].name}`);
    if (test) {
      test.addEventListener("click", function (e) {
        setValues(e.target.innerHTML);
      });
    }
  }

  return (
    <React.Fragment>
      <h2 onClick={onMouse ? onMouseLeaveHandler : onMouseEnterHandler}>
        {values !== "" ? `Genre: ${values}` : "Genre"}
      </h2>
      <ul
        style={{ display: onMouse ? "" : "none" }}
        onMouseOver={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        {List.map((item, index) => (
          <li id={item.name} key={index} onClick={onMouseEnterHandler2}>
            {item.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Genre;

import React, { useState, useContext } from "react";
import { contextdata } from "../Search";

const MediaType = (props) => {
  const [onMouse, setOnMouse] = useState(false);
  const [values, setValues] = useState("");
  const [cong, setCong] = useState("");

  const search = useContext(contextdata);

  const getGenreId = () => values !== "" && search.getType(values);
  const getCong = () => cong !== "" && search.tuKhoa(cong);
  const clickHandeler = () => setCong("trending");

  const onMouseEnterHandler = () => {
    setOnMouse(true);
    clickHandeler();
  };
  const onMouseEnterHandler2 = () => {
    getGenreId();
    getCong();
  };
  const onMouseLeaveHandler = () => setOnMouse(false);

  for (let key in props.item) {
    const test = document.getElementById(`${props.item[key]}`);
    if (test) {
      test.addEventListener("click", function (e) {
        setValues(e.target.innerHTML);
      });
    }
  }

  return (
    <React.Fragment>
      <h2 onClick={onMouse ? onMouseLeaveHandler : onMouseEnterHandler}>
        {values !== "" ? `MediaType: ${values}` : "MediaType"}
      </h2>
      <ul
        style={{ display: onMouse ? "" : "none" }}
        onMouseOver={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        {props.item.map((item, index) => (
          <li id={item} key={index} onClick={onMouseEnterHandler2}>
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default MediaType;

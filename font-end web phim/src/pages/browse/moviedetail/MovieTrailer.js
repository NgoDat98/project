import React, { useState, useEffect, useCallback } from "react";

const MovieTrailer = (props) => {
  const [data, setData] = useState([]);

  const sendRequest2 = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/movies/video/${props.id}?API_Token=${props.API}`
      );
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();

      const dataTrailer = [];

      for (const key in data) {
        dataTrailer.push({
          site: data[key].site,
          key: data[key].key,
          type: data[key].type,
        });
      }

      setData(dataTrailer);
    } catch (error) {
      console.log(error);
      return setData([]);
    }
  }, [props]);

  useEffect(() => {
    sendRequest2();
  }, [sendRequest2]);

  const filterTrailer = data.filter((x) => {
    return x.site === "YouTube" && x.type === ("Trailer" || "Teaser");
  });

  const video = () => {
    if (filterTrailer.length > 0) {
      return "https://www.youtube.com/embed/" + filterTrailer[0].key;
    } else {
      return "https://image.tmdb.org/t/p/w500" + props.backdrop;
    }
  };

  return (
    <React.Fragment>
      <iframe width="100%" height="400" src={video()} title="trailer"></iframe>
    </React.Fragment>
  );
};

export default React.memo(MovieTrailer);

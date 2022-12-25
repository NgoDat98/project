import { useState, useCallback } from "react";

const useMovie = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        const transformedMovies = [];

        for (const key in data.results) {
          transformedMovies.push({
            adult: data.results[key].adult,
            id: data.results[key].id,
            name: data.results[key].name,
            backdrop: data.results[key].backdrop_path,
            poster: data.results[key].poster_path,
            date: data.results[key].first_air_date,
            date2: data.results[key].release_date,
            vote: data.results[key].vote_average,
            overview: data.results[key].overview,
            title: data.results[key].title,
            media_type: data.results[key].media_type,
            original_language: data.results[key].original_language,
          });
        }

        applyData(transformedMovies);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [applyData]
  );

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useMovie;

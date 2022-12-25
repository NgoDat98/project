import React, { useState, createContext } from "react";
import Banner from "./banner/Banner";
import MovieDetail from "./moviedetail/MovieDetail";
import MovieList from "./movielist/MovieList";
import NavBar from "./navbar/NavBar";

export const contextdata = createContext();

function Browse() {
  const API_KEY = "ba4610f91015b61f18a06cae5722ec4a";
  const API_KEY2 = "RYoOcWM4JW";
  const requests = {
    fetchTrending: `/trending?API_Token=${API_KEY2}&page=1`,
    fetchNetflixOriginals: `/discover/TV Movie?API_Token=${API_KEY2}&page=1`,
    fetchTopRated: `/top-rate?API_Token=${API_KEY2}&page=1`,
    fetchActionMovies: `/discover/Action?API_Token=${API_KEY2}&page=1`,
    fetchComedyMovies: `/discover/Comedy?API_Token=${API_KEY2}&page=1`,
    fetchHorrorMovies: `/discover/Horror?API_Token=${API_KEY2}&page=1`,
    fetchRomanceMovies: `/discover/Romance?API_Token=${API_KEY2}&page=1`,
    fetchDocumentaries: `/discover/Documentary?API_Token=${API_KEY2}&page=1`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  };

  const [handler, setHandler] = useState(null);

  const openDetail = (movie) => setHandler(movie);

  return (
    <contextdata.Provider value={{ openDetail, handler }}>
      <div>
        <NavBar />
        <Banner item={requests.fetchNetflixOriginals} />
        <MovieList
          originals={requests.fetchNetflixOriginals}
          trending={requests.fetchTrending}
          topRated={requests.fetchTopRated}
          actionMovies={requests.fetchActionMovies}
          comedyMovies={requests.fetchComedyMovies}
          horrorMovies={requests.fetchHorrorMovies}
          romanceMovies={requests.fetchRomanceMovies}
          documentaries={requests.fetchDocumentaries}
        />
        <MovieDetail
          movieData={handler}
          showHandler={handler ? true : false}
          API={API_KEY2}
        />
      </div>
    </contextdata.Provider>
  );
}

export default Browse;

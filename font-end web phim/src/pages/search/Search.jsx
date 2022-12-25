import React, { useState, createContext } from "react";
import NavBar from "../browse/navbar/NavBar";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import MovieDetail2 from "./MovieDetail2";
import SearchBar from "./searchbar/SearchBar";

export const contextdata = createContext();

const SearchFont = styled.div`
  background-color: black;
  }
`;

const Search = () => {
  const [nameFilm, setNameFilm] = useState("");
  const [dataDetail, setDataDetail] = useState(null);
  const [tuDauTien, setTuDauTien] = useState("");
  const [genreId, setGenreID] = useState("");
  const [typeId, setTypeId] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");

  const searchFilm = (name) => setNameFilm(name);
  const tuKhoa = (name) => setTuDauTien(name);
  const getId = (name) => setGenreID(name);
  const getType = (name) => setTypeId(name);
  const getYear = (name) => setYear(name);
  const getLanguage = (name) => setLanguage(name);
  const getGenre = (name) => setGenre(name);

  const trailerDetailSearch = (data) => setDataDetail(data);

  // const API_KEY = "ba4610f91015b61f18a06cae5722ec4a";
  const API_KEY2 = "RYoOcWM4JW";

  return (
    <contextdata.Provider
      value={{
        searchFilm,
        tuKhoa,
        getId,
        getYear,
        getType,
        getLanguage,
        getGenre,
        trailerDetailSearch,
        dataDetail,
      }}
    >
      <SearchFont>
        <NavBar />
        <SearchBar KEY={API_KEY2} />
        <SearchForm />
        <ResultList
          KEY={API_KEY2}
          name={nameFilm !== "" ? nameFilm : ""}
          cong={tuDauTien !== "" ? tuDauTien : ""}
          ID={genreId !== "" ? genreId : ""}
          type={typeId !== "" ? typeId : ""}
          year={year !== "" ? year : ""}
          language={language !== "" ? language : ""}
          genre={genre !== "" ? genre : ""}
        />
        <MovieDetail2
          movieData={dataDetail}
          showHandler={dataDetail ? true : false}
          API={API_KEY2}
        />
      </SearchFont>
    </contextdata.Provider>
  );
};

export default Search;

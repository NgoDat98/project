import React, { useContext, useState } from "react";
import { contextdata } from "./Search";
import styled from "styled-components";
const SearchFormFont = styled.div`
  width: 70%;
  padding-top: 190px;
  margin-left: 30%;

  .div1 {
    background-color: white;
    width: 50%;
    display: flex;
    border-bottom-style: solid;
    border-width: 6px;
    border-color: rgba(28, 231, 231, 0.775);
  }

  .div1 input {
    width: 87%;
    border: none;
    font-size: larger;
    color: gray;
  }

  .div1 input:focus {
    outline: none;
  }
  .div1 svg {
    width: 13%;
  }

  .div2 {
    width: 47%;
    height: 40px;
    background-color: white;
    text-align: right;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-right: 3%;
  }

  .div2 .button1 {
    height: 100%;
    background-color: white;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }

  .div2 .button2 {
    height: 100%;
    background-color: rgba(28, 231, 231, 0.775);
    border: none;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
  .invalid {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }
`;

const SearchForm = () => {
  const [values, setValues] = useState("");
  const [values1, setValues1] = useState("");
  const [values2, setValues2] = useState("");
  const [values3, setValues3] = useState("");
  const [values4, setValues4] = useState("");
  const [cong, setCong] = useState("");

  const search = useContext(contextdata);

  const nameInputChangeHandler = (event) => {
    setValues(event.target.value);
    setCong("Search");
  };

  const nameInputChangeHandler1 = (event) => {
    setValues1(event.target.value);
  };

  const nameInputChangeHandler2 = (event) => {
    setValues2(event.target.value);
  };
  const nameInputChangeHandler3 = (event) => {
    setValues3(event.target.value);
  };
  const nameInputChangeHandler4 = (event) => {
    setValues4(event.target.value);
  };

  const getName = () => values !== "" && search.searchFilm(values);
  const getGenre = () => values1 !== "" && search.getGenre(values1);
  const getType = () => values2 !== "" && search.getType(values2);
  const getYear = () => values3 !== "" && search.getYear(values3);
  const getLanguage = () => values4 !== "" && search.getLanguage(values4);
  const getCong = () => cong !== "" && search.tuKhoa(cong);

  const resetValue = () => {
    setValues("");
    setValues1("");
    setValues2("");
    setValues3("");
    setValues4("");
  };
  if (values === "") {
    search.searchFilm("");
  }

  const submitHandeler = (e) => {
    e.preventDefault();
    if (values !== "" && cong !== "") {
      getCong();
      getName();
      getGenre();
      getLanguage();
      getType();
      getYear();
    } else {
      alert("You have not entered the search keyword");
    }
  };

  return (
    <SearchFormFont>
      <form onSubmit={submitHandeler}>
        <div className="div1">
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            value={values}
            placeholder={"Search Name"}
          />
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-800 -450 1900 1500"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        <div className="div1">
          <input
            type="text"
            id="name1"
            onChange={nameInputChangeHandler1}
            value={values1}
            placeholder={"Search Genre"}
          />
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-800 -450 1900 1500"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        <div className="div1">
          <input
            type="text"
            id="name2"
            onChange={nameInputChangeHandler2}
            value={values2}
            placeholder={"Search Media Type"}
          />
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-800 -450 1900 1500"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        <div className="div1">
          <input
            type="text"
            id="name3"
            onChange={nameInputChangeHandler3}
            value={values3}
            placeholder={"Search Year"}
          />
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-800 -450 1900 1500"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        <div className="div1">
          <input
            type="text"
            id="name4"
            onChange={nameInputChangeHandler4}
            value={values4}
            placeholder={"Search Language"}
          />
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-800 -450 1900 1500"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        <div className="div2">
          <button type="button" className="button1" onClick={resetValue}>
            RESET
          </button>
          <button type="submit" className="button2">
            SEARCH
          </button>
        </div>
      </form>
    </SearchFormFont>
  );
};

export default SearchForm;

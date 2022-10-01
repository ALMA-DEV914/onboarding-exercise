import React, { useState, useEffect } from "react";
import { Card, Input } from "semantic-ui-react";
import SearchResults from "./ListComponent";

export default function MovieLists() {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("movies.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <div className="search-wrapper">
      <Input
        className="input"
        icon="search"
        placeholder="Search by title..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <div className="container">
        <Card.Group className="row">
          {searchInput.length > 1
            ? filteredResults.map((item) => <SearchResults item={item} />)
            : data && data.map((item) => <SearchResults item={item} />)}
        </Card.Group>
      </div>
    </div>
  );
}
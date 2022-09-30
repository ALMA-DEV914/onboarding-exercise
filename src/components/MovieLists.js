import React, { useState, useEffect } from "react";
import { Card, Input } from "semantic-ui-react";

export default function MovieLists() {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  

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

  const handleIncrement = () => {
    //selected.includes(id) ?
    setCount(count + 1) //: null};
}
  const handleDecrement = () => {
    //selected.includes(id) ?
    setCount1(count1 - 1) //: null};
  }
  
  


  return (
    <div className="search-wrapper">
      <Input
      className="input"
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
     <div className="container">
      <Card.Group className="row">
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                
                <Card>
                  <Card.Content>
                    <Card.Header><img src={item.url} alt="item.title" /></Card.Header>
                    <Card.Description>
                     <h3>{item.title}</h3>
                    </Card.Description>
                    <button  onClick={() => handleIncrement(item.id)}>Likes: {item.likes + count}</button>
                    <button  onClick={handleDecrement}>Dislikes: {item.dislikes + count1}</button>
                  </Card.Content>
                </Card>
              );
            })
          : data &&
            data.length > 0 &&
            data.map((item, id) => {
              return (
                <Card key={id}>
                  <Card.Content>
                    <Card.Header>
                      {" "}
                      <img src={item.url} alt="item.title" />
                    </Card.Header>
                    <Card.Description>
                      <h3>{item.title}</h3>
                    </Card.Description>
                   <button  onClick={handleIncrement} >Likes: {item.likes + count}</button>
                    <button  onClick={handleDecrement}>Dislikes: {item.dislikes + count1}</button>
                  </Card.Content>
                </Card>
              );
            })}
      </Card.Group>
    </div>
    </div>
  );
}      

import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function SearchResults({ item }) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount1(count1 - 1);
  };
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <img src={item.url} alt="item.title" />
        </Card.Header>
        <Card.Description>
          <h3>
            {item.title}
            <br></br>
            <span>{item.category}</span>
          </h3>
          <button onClick={handleDecrement}>
            Dislikes:<i className="fa fa-thumbs-down"></i>{" "}
            {item.dislikes + count1}
          </button>
          <button onClick={handleIncrement}>
            Likes:<i className="fa fa-thumbs-up"></i>{" "} 
            {item.likes + count}
          </button>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default SearchResults;

import React from "react";
import "./App.css";
import logo from "./queeery-logo.png";
import MovieLists from "./components/MovieLists";


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome to Your Movies HotSpot<br></br>
            <span className="header-span">Brought to you by Queery</span>
          </h1>
          <div className="container">
            <MovieLists />
           
          </div>
        </header>
      </div>
    </>
  );
}

export default App;

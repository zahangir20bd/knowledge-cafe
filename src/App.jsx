import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  let readingTime = 0;
  const readTimeCalculation = (time) => {
    readingTime = readingTime + time;
    console.log(readingTime);
  };
  return (
    <div className="App container mx-auto w-100">
      <Header></Header>
      <Home readTimeCalculation={readTimeCalculation}></Home>
    </div>
  );
}

export default App;

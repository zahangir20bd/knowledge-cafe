import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  let readingTime = 0;
  const readTimeCalculation = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    readingTime = readingTime + time;
    if (!previousReadTime) {
      localStorage.setItem("readTime", time);
    } else {
      const totalReadTime = previousReadTime + time;
      localStorage.setItem("readTime", totalReadTime);
    }
  };
  return (
    <div className="App container mx-auto w-100">
      <Header></Header>
      <Home readTimeCalculation={readTimeCalculation}></Home>
    </div>
  );
}

export default App;

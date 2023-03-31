import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const [readTime, setReadTime] = useState(0);
  let readingTime = 0;
  const readTimeCalculation = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    readingTime = readingTime + time;
    if (!previousReadTime) {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    } else {
      const totalReadTime = previousReadTime + time;
      localStorage.setItem("readTime", totalReadTime);
      setReadTime(totalReadTime);
    }
  };
  return (
    <div className="App container mx-auto w-100">
      <Header></Header>
      <Home
        readTimeCalculation={readTimeCalculation}
        readTime={readTime}
      ></Home>
    </div>
  );
}

export default App;

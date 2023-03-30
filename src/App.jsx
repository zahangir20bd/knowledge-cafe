import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App container mx-auto w-100">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;

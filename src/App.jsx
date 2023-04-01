import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FAQBlog from "./components/FAQBlog/FAQBlog";

function App() {
  const [readTime, setReadTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  let readingTime = 0;
  const readTimeCalculation = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));

    readingTime = readingTime + time;
    if (!previousReadTime) {
      localStorage.setItem("readTime", readingTime);
      setReadTime(readingTime);
    } else {
      const totalReadTime = previousReadTime + time;
      localStorage.setItem("readTime", totalReadTime);
      setReadTime(totalReadTime);
    }
  };

  const handleBookmark = (blog, id) => {
    const isAvailable = bookmarks.find((bookmark) => bookmark.id === id);
    if (isAvailable) {
      toast("Already Bookmarked!");
      const newBookmark = bookmarks;
      setBookmarks(newBookmark);
    } else {
      const newBookmark = [...bookmarks, blog];
      setBookmarks(newBookmark);
    }
  };

  return (
    <div className="App container mx-auto w-100">
      <Header></Header>
      <Home
        readTimeCalculation={readTimeCalculation}
        readTime={readTime}
        handleBookmark={handleBookmark}
        bookmarks={bookmarks}
      ></Home>
      <FAQBlog></FAQBlog>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

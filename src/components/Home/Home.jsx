import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import SideCart from "../SideCart/SideCart";

const Home = ({ readTimeCalculation, readTime, handleBookmark, bookmarks }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div style={{ position: "relative" }} className="row">
      <div className="col-12 col-md-8 bg-white">
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            key={blog.id}
            readTimeCalculation={readTimeCalculation}
            handleBookmark={handleBookmark}
          ></Blog>
        ))}
      </div>
      <div className="col-12 col-md-4">
        <SideCart readTime={readTime} bookmarks={bookmarks}></SideCart>
      </div>
    </div>
  );
};

export default Home;

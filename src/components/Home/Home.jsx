import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-md-8 bg-white">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>
      <div className="col-12 col-md-4">Hiiii</div>
    </div>
  );
};

export default Home;

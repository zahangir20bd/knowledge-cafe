import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import SideCart from "../SideCart/SideCart";

const Home = ({ readTimeCalculation }) => {
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
          <Blog
            blog={blog}
            key={blog.id}
            readTimeCalculation={readTimeCalculation}
          ></Blog>
        ))}
      </div>
      <div className="col-12 col-md-4">
        <SideCart></SideCart>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const Blog = ({ blog, readTimeCalculation }) => {
  const {
    id,
    authorImage,
    authorName,
    blogTitle,
    coverImage,
    publishDate,
    readingTime,
    keyWords,
  } = blog;
  return (
    <div className="mt-4 card p-2">
      <img className="img-fluid rounded-3" src={coverImage} alt="Cover Image" />
      <div className="d-flex justify-content-between align-items-center mt-2">
        <div className="d-flex align-items-center mt-2">
          <img
            style={{ width: "75px" }}
            className=" rounded-circle"
            src={authorImage}
            alt="Author Image"
          />
          <div className="mt-2 ms-2">
            <h6>{authorName}</h6>
            <p>{publishDate}</p>
          </div>
        </div>
        <div className="">
          <span>{readingTime} min read</span>{" "}
          <i
            style={{ cursor: "pointer" }}
            className="fa-regular fa-bookmark"
          ></i>
        </div>
      </div>
      <h2>{blogTitle}</h2>
      <p>{keyWords}</p>
      <button
        onClick={() => readTimeCalculation(readingTime)}
        type="button"
        className="btn btn-link Mark as read"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;

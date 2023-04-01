import React, { useEffect, useState } from "react";

const SideCart = ({ readTime, bookmarks }) => {
  console.log(bookmarks);
  const [finalReadTime, setFinalReadTime] = useState(readTime);
  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setFinalReadTime(getReadTime);
  }, [readTime]);
  return (
    <div style={{ position: "sticky", top: "0px" }} className="mt-4">
      <h4 className="fw-bold text-info-emphasis bg-info-subtle p-4 card">
        Spent time on read: {finalReadTime}
      </h4>
      <div className="bg-success-subtle card p-4">
        <h4>Bookmarked Blogs: {bookmarks.length}</h4>
        {bookmarks.map((bookmark) => (
          <h5
            key={bookmark.id}
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            {bookmark.blogTitle}{" "}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default SideCart;

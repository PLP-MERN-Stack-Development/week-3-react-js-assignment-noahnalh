import React from "react";

const PostItem = ({ post }) => (
  <div
    style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}
  >
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
);

export default PostItem;

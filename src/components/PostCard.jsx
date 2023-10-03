import React from 'react';

function PostCard({ post }) {
  return (
    <div className="post-card">
      {post.image && <img src={post.image} alt="Post" />}
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <p>Date: {post.date}</p>
      <p>Lesson Number: {post.lesson_num}</p>
      <p>Author: {post.author}</p>
    </div>
  );
}

export default PostCard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://studapi.teachmeskills.by/blog/posts/10/')
      .then((response) => {
        console.log(response.data);
        const postsArray = Array.isArray(response.data) ? response.data : [response.data];
        setPosts(postsArray);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;


import React from 'react';
import { useParams } from 'react-router-dom';

const Post = ({ posts }) => {
  const {id}  = useParams();
  console.log(id,'id')
  console.log(post.content)
  console.log (posts,'posts')
  const post = posts.find((post) =>post.id===id);
  if (!post) {
    return <p>Post not found</p>;
  }
  console.log(post,'포스트')

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
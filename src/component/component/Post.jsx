import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostById = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://project2-d16b2-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch post.');
        }

        const data = await response.json();
        if (data && typeof data === 'object') {
          const fetchedPost = {
            id: id,
            ...data
          };
          setPost(fetchedPost);
        } else {
          throw new Error('Invalid response data');
        }
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchPostById();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
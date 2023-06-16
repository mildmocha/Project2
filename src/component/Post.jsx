import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Post.module.css';
import ReverseBgWrap from './ReverseBgWrap';
import Wrap from './Wrap';
import QuizBoard from './QuizBoard';
import Back from './BACK';
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
    <Wrap>
      <ReverseBgWrap>
        
    <div className={classes.post}>
      <h2 className={classes.postTitle}>{post.title}<Back></Back></h2>
      
    <div className={classes.content}>
      <p>{post.content}</p>
      </div>
      
    </div>
    </ReverseBgWrap>
    </Wrap>
  );
};

export default Post;
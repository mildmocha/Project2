import React, { useRef, useState, useEffect } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import Post from './Post';
import classes from './Board.module.css';
import Wrap from './Wrap';


const fetchPosts = async (setPosts, setIsLoading, setError) => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch('https://project2-d16b2-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json');
    if (!response.ok) {
      throw new Error('Failed to fetch posts.');
    }

    const data = await response.json();
    if (data && typeof data === 'object') {
      const postsArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      setPosts(postsArray);
    } else {
      setError('Invalid response data');
    }
  } catch (error) {
    setError(error.message);
  }

  setIsLoading(false);
};

const Board = () => {
  const titleRef = useRef("");
  const contentRef = useRef("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handlePostSubmit = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
  const content = contentRef.current.value;

  if (title.trim() === '' || content.trim() === '') {
    // 제목이나 내용이 비어있는 경우
    return;
  }


    const newPost = {
      title: titleRef.current.value,
      content: contentRef.current.value
    };

    fetch('https://project2-d16b2-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
      .then(response => response.json())
      .then(data => {
        clearValue();
        const updatedPost = {
          id: data.name, // Firebase에서 생성된 고유한 id 값
          ...newPost
        };
        
          setPosts([...posts, updatedPost]);
          
       
      })
      
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  const clearValue = () => {
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  useEffect(() => {
    fetchPosts(setPosts, setIsLoading, setError); // Fetch initial posts
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Wrap>
      <h1>BOARD</h1>
      <form onSubmit={handlePostSubmit}>
        <input type="text" name="title" placeholder="제목" ref={titleRef} />
        <textarea name="content" placeholder="내용" ref={contentRef} />
        <button type="submit">작성</button>
      </form>
      
      <ul className={classes.postList}>
        {posts.map((post) => (
          <Link to={`/Post/${post.id}`}>
          <div className={classes.shadow3}>
          <li key={post.id} className={classes.title1}>
            {post.title}
          </li>
          </div>
          </Link>
        ))}
      </ul>
      </Wrap>
      <Routes>
        
        <Route path="/Post/:id" element={<Post posts={posts} setPosts={setPosts} />} />
      </Routes>
    </div>
  );
};

export default Board;
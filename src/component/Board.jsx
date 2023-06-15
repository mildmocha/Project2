import React, { useRef, useState, useEffect } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import Post from './Post';

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
      <h1>게시판</h1>
      <form onSubmit={handlePostSubmit}>
        <input type="text" name="title" placeholder="제목" ref={titleRef} />
        <textarea name="content" placeholder="내용" ref={contentRef} />
        <button type="submit">작성</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/Post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        
        <Route path="/Post/:id" element={<Post posts={posts} setPosts={setPosts} />} />
      </Routes>
    </div>
  );
};

export default Board;
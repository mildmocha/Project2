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
  const titleRef = useRef('');
  const contentRef = useRef('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (title.trim() === '' || content.trim() === '') {
      // 제목이나 내용이 비어있는 경우
      return;
    }

    setIsSubmitting(true);

    const newPost = {
      title: title,
      content: content,
      author: '게시물 작성자',
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('https://project2-d16b2-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });

      if (!response.ok) {
        throw new Error('Failed to save post.');
      }

      clearValue();

      const data = await response.json();
      const updatedPost = {
        id: data.name,
        ...newPost
      };

      setPosts(prevPosts => [...prevPosts, updatedPost]);
    } catch (error) {
      console.error('Error saving data:', error);
    }

    setIsSubmitting(false);
    closeModal();
  };

  const clearValue = () => {
    titleRef.current.value = '';
    contentRef.current.value = '';
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <button className={classes.modalButton} onClick={openModal}>
          글쓰기
        </button>
        {isModalOpen && (
          <div className={classes.modal}>
            <form onSubmit={handlePostSubmit}>
              <input type="text" name="title" placeholder="제목" ref={titleRef} className={classes.titleInput}/>
              <textarea name="content" placeholder="내용" ref={contentRef} className={classes.text} />
              <button type="submit" disabled={isSubmitting}>
                작성
              </button>
              <button type="button" onClick={closeModal}>
                취소
              </button>
            </form>
          </div>
        )}
        <ul className={classes.postList}>
          {posts.map((post) => (
            <Link key={post.id} to={`/Post/${post.id}`}>
              <div className={classes.shadow3}>
                <li className={classes.title1}>
                  {post.title}
                </li>
                <li className={classes.author}>
                  작성자: {post.author}
                </li>
                <li className={classes.timestamp}>
                  작성 시간: {post.timestamp}
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
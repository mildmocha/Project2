import React, { useRef, useState, useEffect } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Post from './Post';
import classes from './Board.module.css';
import ReverseBgWrap from './ReverseBgWrap';
import UserProfile from './UserProfile';
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
  const [userProfile, setUserProfile] = useState(null);
  const [userDisplayName, setUserDisplayName] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      // 사용자가 로그인되어 있는 경우 프로필 정보를 가져옴
      const displayName = user.displayName;
      setUserProfile(displayName);
    } else {
      // 사용자가 로그인되어 있지 않은 경우
      setUserProfile(null);
    }
  }, []);

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
      author: userProfile, // 현재 로그인한 사용자의 프로필 정보를 작성자로 설정
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
    <div className={classes.wrapwrap}>
      <Wrap>
    
      <ReverseBgWrap>
        
        <h1 className={classes.Board}>BOARD</h1>
        
        <button className={classes.modalButton} onClick={openModal}>
          글쓰기
        </button>
        {isModalOpen && (
          <div className={classes.modal}>
            <form onSubmit={handlePostSubmit}>
              <input type="text" name="title" placeholder="제목" ref={titleRef} className={classes.titleInput} />
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
                <li className={classes.title1}>{post.title}</li>
              
              </div>
              <div className={classes.pWrap}>
              <p className={classes.author}>
                  {post.author} {/* 수정: 작성자 정보를 표시 */}
                </p>
                 
                <p className={classes.timestamp}> {new Date(post.timestamp).toLocaleString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
            </Link>
          ))}
        </ul>
      </ReverseBgWrap>
      </Wrap>
      <Routes>
        <Route path="/Post/:id" element={<Post posts={posts} setPosts={setPosts} />} />
      </Routes>
    </div>
  );
};

export default Board;
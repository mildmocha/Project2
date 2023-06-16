import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인된 경우 프로필 정보를 가져옴
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        setUserProfile({ displayName, email, photoURL });
      } else {
        // 사용자가 로그인되어 있지 않은 경우
        setUserProfile(null);
      }
    });

    // 컴포넌트가 언마운트될 때 구독 취소
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {userProfile ? (
        <>
          <p>이름: {userProfile.displayName}</p>
          <p>이메일: {userProfile.email}</p>
          <img src={userProfile.photoURL} alt="프로필 사진" />
        </>
      ) : (
        <p>로그인 필요</p>
      )}
    </div>
  );
};

export default UserProfile;
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import  classes from './UserProfile.module.css'

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

    return () => unsubscribe();
  }, []);

  return (
    <div className={classes.profileWrap}>
      {userProfile ? (
        <>
         <img src={userProfile.photoURL} alt="프로필 사진" className={classes.proimg} />
          <p className={classes.profileInfo}>이름: {userProfile.displayName}</p>
          <p className={classes.profileInfo}>이메일: {userProfile.email}</p>
         
        </>
      ) : (
        <p>로그인 필요</p>
      )}
    </div>
  );
};

export default UserProfile;
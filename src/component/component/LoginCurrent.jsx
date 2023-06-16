import React,{ useEffect, useState} from 'react'

import 'firebase/auth';

import { getAuth, onAuthStateChanged } from "firebase/auth";




const LoginCurrent = ()=> {

const auth = getAuth();
const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        // 로그인 상태 확인
        const unsubscribe=
        onAuthStateChanged(auth, user => { const current = !! user;
         setIsLogin(current);

        });
        // 컴포넌트가 언마운트되면 onAuthStateChanged 이벤트 리스너를 해제합니다.
       
        return ()=> unsubscribe();
       
      
      }, []);

        return isLogin;
    };
    

    
    export default LoginCurrent;
  
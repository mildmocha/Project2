개인프로젝트 2 퀴즈 게임  <br>
//Link : https://quizproject2.netlify.app/  <br>
 <br>
 <br>
React로 제작 <br>
React Router를 사용
 <br>
netlify로 빌드, 배포
 <br>
내용 : <br>
 <br>
Firebase를 이용해 로그인과 Realtime Database로 게시판 서버를 구현 <br>
 <br>
 <br>
로그인 했을 시 Start를 누르면 렌더링 됐을 때 한번  <br>
Quiz목록 Json에서 5개가 sort와 math.random을 이용해 랜덤한 순서로 바꾸고 useState로 배열 상태를 업데이트. <br>
문제당 시간제한이 있으며 시간 초과시 다음 문제로 강제로 넘어감.  <br>
문제가 넘어가면 Index값이 증가, TimerKey를 갱신하고 맞출 시 점수가 1점씩 오른다. <br>
갱신된 TimerKey는 Timer를 다시 처음부터 작동시킨다. <br>
index가 5가되면 결과화면이 나오며 점수표시 
 <br>
 <br>
 <br>
Board를 누르면 RealtimeDatabase를 fetch하여 게시글이 나오며 <br>
연결 error가 났을시 Failed to fetch문구가 뜨게 에러처리를 했다.  <br>
UseEffect를 사용하여 렌더링을 제한해 놓았다. <br>
글을 작성하면 json으로 변환되고 서버에 저장된다. <br>
그러면 Post에서 useParam으로 id를 전달받아  <br>
json에서 그 id와 동일한 id를 가진 객체를 찾아 그 객체의 내용을 게시글로 볼 수 있다. <br>
 <br>
Board의 제작 목적은 메인 게임 외에 퀴즈를 공유하자는 취지로 만들었다. <br>
 <br>
 <br>
후기 : <br>
 <br>
React로 처음 개인 프로젝트를 하려니 많이 어려웠는데  <br>
이 프로젝트를 하면서 FireBase 처음 써보는데다 netlify로 빌드하면서 자질구레하게 막히는 부분이 많았고 <br>
처음써보는게 많아서 머리가 굉장히 아팠다 <br>
여기저기 검색하면서 코드를 작성해 기능적으로는 어떻게 완성하긴 했지만 <br>
일단 해보자는 마인드로 만들다 보니 React는 시작할 때 Component구조를 짜고 시작하는 게 중요하다는 것을 하면서 깨달았다.  <br>

Hook과 fetch는 아직도 어렵고 공부를 더 해야할 것 같다.






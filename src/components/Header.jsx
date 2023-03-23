import React, { useState } from 'react';
import axios from 'axios';

const Header = () => {
 const [threadName, setThreadName] = useState("");
 const createThread = async () => {
  // console.log(threadName);
  await axios.post('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', {
   title: threadName
  }).then((res) => {
   console.log(res);
  }).catch((error) => {
   console.log(error);
  });
 }
  return (
<nav>
<h1>掲示板</h1>
<input type="text" placeholder="スレッド名を入力" onChange={(e) => setThreadName(e.target.value)} />
<button onClick={createThread}>スレッドを作成する</button>
</nav>  )
}

export default Header
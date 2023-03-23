import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CreateThread = () => {
 const [threadName, setThreadName] = useState("");

 const createNewThread = async () => {
   await axios.post('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', {
   title: threadName
  }).then((res) => {
   console.log(res);
  }).catch((error) => {
   console.log(error);
  });
 }

  return (
    <div>
     <input type="text" placeholder="スレッド名を入力" onChange={(e) => setThreadName(e.target.value)} />
<button onClick={createNewThread}>スレッドを作成する</button>
</div>
  )
}

export default CreateThread
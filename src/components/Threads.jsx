import React, { useState } from 'react'
import axios from 'axios';



const Threads = () => {
 const [urlList, setUrlList] = useState([]);

axios.get('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=1').then((res)=> {
 setUrlList(res.data);
})
// console.log(urlList);
  return (
    <div>
     {urlList.map((url) => {
      return <div key={url.id}>{url.title}</div>
     })}
    </div>
  )
}

export default Threads
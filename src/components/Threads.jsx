import React, { useState } from 'react'
import axios from 'axios';



const Threads = () => {
 const [urlList, setUrlList] = useState([]);

const fetchUrl = axios.get('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=1').then((res)=> {
 setUrlList(res.data);
})
// console.log(urlList);
  return (
    <div>
     {urlList.map((url) => {
      return <h2>{url.title}</h2>
     })}
    </div>
  )
}

export default Threads
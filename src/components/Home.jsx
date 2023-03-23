import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Home.css"



const Home = () => {
 const [urlList, setUrlList] = useState([]);

 //エラーハンドリング後で実装する
 useEffect(()=> {
axios.get('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0').then((res)=> {
 setUrlList(res.data);
 console.log("取得");
})
 }, [])


return (
    <div className='homeWrapper'>
     {urlList.map((url) => {
      return <div key={url.id} className='card'>{url.title}</div>
     })}
    </div>
  )
}

export default Home
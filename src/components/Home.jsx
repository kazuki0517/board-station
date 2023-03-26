import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';

const StyledList = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: #F6F1F1;
`;

const StyledContent = styled.div`
 min-height: 30px;
 height: auto;
 word-break: break-word;
 min-width: 400px;
 width: auto;
 margin: 5px 0;
 padding: 5px;
 box-shadow: 0px 0px 12px -5px #777777;
 border-radius: 5px;
 background-color: #19A7CE;
 color: #fff;
 font-weight: 700;
 display: flex;
 justify-content: center;
 align-items: center; 
`

const Home = () => {
 const [threadList, setThreadList] = useState([]);

 //エラーハンドリング後で実装する
 useEffect(()=> {
axios.get('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0').then((res)=> {
 setThreadList(res.data);
})
 }, [])


return (
    <StyledList>
      <h2>新着スレッド一覧</h2>
     {threadList.map((thread) => {
      return <StyledContent key={thread.id} className='card'>{thread.title}</StyledContent>
     })}
    </StyledList>
  )
}



export default Home
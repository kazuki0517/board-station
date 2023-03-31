import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import CreatePosts from './CreatePosts';

const ViewThread = () => {
const  [postsList, setPostList] = useState([]);
const { id } = useParams();

  useEffect(() => {
axios.get(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts?offset=0`).then((res)=> {
  console.log(res.data.posts);
  setPostList(res.data.posts);
}).catch((error) => {
  if(error) {
    console.log(error.message);
  }
})
 }, [id])



  return (
    <>
      {postsList.map((post) => {
      return <div key={post.id} >{post.post}</div>
     })}
    <CreatePosts  id ={id}/>
    </>
  )
}

export default ViewThread
import React, {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const ViewThread = () => {
const  [postsList, setPostList] = useState([]);
const [postContent, setPostContent] = useState();
 const navigate = useNavigate();
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
 }, [])

  const createNewPost = async () => {
   await axios.post(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`, {
   post: postContent
  })
  window.location.reload();
  setPostContent("");
  };

  return (
    <>
    <div>ViewThread {id} </div>
      {postsList.map((post) => {
      return <div key={post.id} >{post.post}</div>
     })}
      <h2>投稿</h2>
      <input value={postContent} type="text" name="name" placeholder="投稿内容入力" onChange={(e) => setPostContent(e.target.value)} />
      <button onClick={createNewPost}>作成</button>
      <button onClick={()=> navigate("/")}>ホームへ戻る</button>
    </>
  )
}

export default ViewThread
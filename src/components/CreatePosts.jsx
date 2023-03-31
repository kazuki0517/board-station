import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePosts = ({id}) => {
 const [postContent, setPostContent] = useState("");
 const navigate = useNavigate();

  const createNewPost = async () => {
   await axios.post(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`, {
   post: postContent
  })
  window.location.reload();
  setPostContent("");
  };

  return (
   <>
     <h2>投稿</h2>
     <input value={postContent} type="text" name="name" placeholder="投稿内容入力" onChange={(e) => setPostContent(e.target.value)} />
     <button onClick={createNewPost}>作成</button>
     <button onClick={()=> navigate("/")}>ホームへ戻る</button>
   </>

  )
}

export default CreatePosts
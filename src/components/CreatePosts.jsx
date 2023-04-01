import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useValidate } from '../hooks/useValidate';

const StyledPostsWrapper = styled.div`
  background-color: #F6F1F1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  margin: 30px;
  height: 300px;
  box-shadow: 0px 0px 15px -5px #777777;
  align-items: center;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  display: block;
  outline: none;
  border: none;
  padding: 10px;
  width: 300px;
`;

const StyledButton = styled.button`
display: block;
color: #F6F1F1;
background-color: #146C94;
cursor: pointer;
outline: none;
border: none;
padding: 10px;
margin-top: 30px;
font-weight: bold;
width: 200px;
box-shadow: 0px 0px 10px -5px #777777;
border-radius: 10px;
`;

const StyledBackButton = styled(StyledButton)`
  width: 100px;
`;

const StyledWarning = styled.p`
  margin: 0;
  padding: 0;
  color: red;
`

const StyledSuccess = styled(StyledWarning)`
  color: #146C94;
`

const CreatePosts = ({id}) => {
 const [postContent, setPostContent] = useState("");
 const navigate = useNavigate();
 const {validate, setFormError, setFormSuccess, formError, formSuccess} = useValidate();

  const createNewPost = async () => {
    //投稿内容が空の場合はエラーメッセージを出して投稿させない。
    if(postContent === "") {
      setFormSuccess(false);
      setFormError(true);
        return;
    }
    //投稿内容が入力されている場合の処理
    await axios.post(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`, {
   post: postContent
  })
    .then((res) => {
    validate(res)
  }).catch((error)=> {
    validate(error);
  })
  window.location.reload();
  setPostContent("");
  };

  return (
   <StyledPostsWrapper>
      {formError ? <StyledWarning>投稿内容を入力してください！</StyledWarning> : ""}
      {formSuccess ? <StyledSuccess>投稿完了！</StyledSuccess> : ""}
     <h2>投稿</h2>
     <StyledInput value={postContent} type="text" name="name" placeholder="投稿内容入力" onChange={(e) => setPostContent(e.target.value)} />
     <StyledButton onClick={createNewPost}>作成</StyledButton>
     <StyledBackButton onClick={()=> navigate("/")}>スレッド一覧</StyledBackButton>
   </StyledPostsWrapper>

  )
}

export default CreatePosts
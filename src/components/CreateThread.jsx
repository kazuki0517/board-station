import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, History } from 'react-router-dom';

const StyledWrapper = styled.div`
  background-color: #F6F1F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  height: 300px;
  box-shadow: 0px 0px 15px -5px #777777;
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
`

const StyledBackButton = styled(StyledButton)`
  width: 100px;
`

const CreateThread = () => {
 const [threadName, setThreadName] = useState("");
 const navigate = useNavigate();

 const createNewThread = async () => {
   await axios.post('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', {
   title: threadName
  }).then((res) => {
   console.log(res);
  }).catch((error) => {
   console.log(error);
  });
  navigate("/");
 }

  return (
    <StyledWrapper>
      <h2>スレッド新規作成</h2>
      <StyledInput type="text" placeholder="スレッド名を入力" onChange={(e) => setThreadName(e.target.value)} />
      <StyledButton onClick={createNewThread}>作成</StyledButton>
      <StyledBackButton onClick={()=> navigate("/")}>ホームへ戻る</StyledBackButton>
    </StyledWrapper>
  )
}

export default CreateThread
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useValidate } from '../hooks/useValidate';

const StyledWrapper = styled.div`
  background-color: #F6F1F1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;
  height: 300px;
  box-shadow: 0px 0px 15px -5px #777777;
  align-items: center;
  border-radius: 10px;
`;

const StyledWarning = styled.p`
  margin: 0;
  padding: 0;
  color: red;
`

const StyledSuccess = styled(StyledWarning)`
  color: #146C94;
`

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

const CreateThread = () => {
 const [threadName, setThreadName] = useState("");
 const navigate = useNavigate();
 const {validate, formError, formSuccess} = useValidate();

 const createNewThread = async () => {
  validate(threadName);
   await axios.post('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', {
   title: threadName
  })
  .then((res) => {
    validate(res)
  }).catch((error)=> {
    validate(error);
  })
  setThreadName("");
  };

  return (
    <StyledWrapper>
      {formError ? <StyledWarning>スレッド名を入力してください！</StyledWarning> : ""}
      {formSuccess ? <StyledSuccess>スレッドを作成しました！</StyledSuccess> : ""}
      <h2>スレッド新規作成</h2>
      <StyledInput required value={threadName} type="text" name="name" placeholder="スレッド名を入力" onChange={(e) => setThreadName(e.target.value)} />
      <StyledButton onClick={createNewThread}>作成</StyledButton>
      <StyledBackButton onClick={()=> navigate("/")}>スレッド一覧</StyledBackButton>
    </StyledWrapper>
  )
}

export default CreateThread
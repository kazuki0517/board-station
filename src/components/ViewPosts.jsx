import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';
import CreatePosts from './CreatePosts';

const StyledPostsList = styled.div`
 background-color: #F6F1F1;
 padding: 5px 0 40px 0;
`;

const StyledSection = styled.section`
display: flex;
justify-content: center;
gap: 50px;
`;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

`

const StyledPostsContent = styled.div`
 min-height: 30px;
 height: auto;
 word-break: break-word;
 min-width: 400px;
 width: auto;
 margin: 5px;
 padding: 5px;
 box-shadow: 0px 0px 12px -5px #777777;
 border-radius: 5px;
 background-color: whitesmoke;
 color: black;
 font-weight: 700;
 display: flex;
 justify-content: center;
 align-items: center; 
`

const ViewPosts = () => {
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
}) }, [id])

  return (
    <StyledPostsList>
      <StyledSection>
        <StyledWrap>
      <h2>投稿内容一覧</h2>
      {postsList.map((post) => {
      return <StyledPostsContent key={post.id} >{post.post}</StyledPostsContent>
     })}
        </StyledWrap>
    <CreatePosts  id ={id}/>
      </StyledSection>
    </StyledPostsList>
  )
}

export default ViewPosts
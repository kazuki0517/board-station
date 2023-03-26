import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
 color: #fff;
 text-decoration: none;
 cursor: pointer;
 font-weight: bold;
 font-size: 20px;
 `;

 const StyledNav = styled.nav`
  height: 50px;
 padding: 5px 100px;
 background-color: #146C94;
 display: flex;
 justify-content: space-between;
 align-items: center;
 `;

const Header = () => {
 return (
<StyledNav>
<StyledLink to="/">掲示板</StyledLink>
<StyledLink to="/thread/new" className='toLink'>スレッドを作成する</StyledLink>
</StyledNav>  
)
}

export default Header
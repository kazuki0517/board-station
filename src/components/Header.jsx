import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
 const createThread = async () => {

 }
 
 return (
<nav className='headerNav'>
<Link to="/" className='toLink'>掲示板</Link>
<Link to="/thread/new" className='toLink'>スレッドを作成する</Link>

</nav>  )
}

export default Header
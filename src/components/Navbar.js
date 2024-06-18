import React from 'react';
import Logo from "../assets/mylogo1.png";
import "../styles/Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='leftSide'></div>
           <img src={Logo} alt='Flower' style={{float:'left'}}/>
        <div className='rightSide'></div>
          <Link to="/">Home </Link>
          <Link to="/About">About </Link>
          <Link to="/Contact">Contact </Link>
    </div>
  )
}

export default Navbar
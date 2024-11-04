import React, { useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'
const navbar = () => {
const[Menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")}className={Menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")}className={Menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")}className={Menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")}className={Menu==="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src= {assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button >sign in</button>
      </div>
    </div>
  )
}

export default navbar

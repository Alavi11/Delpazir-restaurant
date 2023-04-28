import "./Header.css"
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
  return <>
    <div className="header">
        <div className="log-reg">
            <Link to={"/login"}><button className="log">ورود</button></Link>
            <Link to={"/register"}><button className="reg">ثبت نام</button></Link>
        </div>
        <div className="brand">
            <h1>دلپذیر</h1>
        </div>
        <div className="basket-shop">
            <FaShoppingCart/>
        </div>
    </div>
  </>
}

export default Header
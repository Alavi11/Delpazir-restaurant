import "./Header.css"
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return <>
    <div className="header">
        <div className="log-reg">
            <button className="log">ورود</button>
            <button className="reg">ثبت نام</button>
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
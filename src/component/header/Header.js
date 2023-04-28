import "./Header.css"
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

const Header = () => {

  const cart = useSelector((store)=>store)

  let numberoforders = cart.length;


  return <>
    <div className="header">
        <div className="log-reg">
            <Link to={"/login"}><button className="log">ورود</button></Link>
            <Link to={"/register"}><button className="reg">ثبت نام</button></Link>
        </div>
        <div className="brand">
            <h1>دلپذیر</h1>
        </div>
        <Link to={"/basket"}>
            <div className="basket-shop">
                <FaShoppingCart/>
                {
                  numberoforders ? <p>{numberoforders}</p> :<></>
                }
            </div>
        </Link>
        
    </div>
  </>
}

export default Header
import "./Header.css"
import React , {useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import Search from "../search/Search";

const Header = () => {

  const [islogin , setIslogin] = useState(true);

  const cart = useSelector((store)=>store)

  let numberoforders = cart.length;

  const logout=()=>{

  }

  return <>
    <div className="header">
        <div className="log-reg">
            {
              islogin
              ?
                <>
                  <Link to={"/profile"}><button className="log">پروفایل</button></Link>
                  <button className="reg" onClick={logout}>خروج</button>
                </>
              : 
                <>
                  <Link to={"/login"}><button className="log">ورود</button></Link>
                  <Link to={"/register"}><button className="reg">ثبت نام</button></Link>
                </>
            }
            
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
    {islogin ? <></> : <Search/>}
  </>
}

export default Header
import "./Header.css"
import React , {useEffect, useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

const Header = () => {

  let navigate = useNavigate()

  const [islogin , setIslogin] = useState(false);

  useEffect(()=>{
    const login = localStorage.getItem("phone");
    if(login){
      setIslogin(true)
    }
  },[])

  const cart = useSelector((store)=>store)

  let numberoforders = cart.length;

  const logout=()=>{
    localStorage.clear()
    setIslogin(false)
    window.location.reload()
    navigate("/")
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
    
  </>
}

export default Header
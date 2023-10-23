import React, { useState ,useEffect } from 'react'
import "./Login.css"
import {useNavigate} from "react-router-dom"
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import axios from "axios" ;



const Login = () => {

  let navigate = useNavigate()

  useEffect(()=>{
    const login = localStorage.getItem("phone");
    if(login){
      navigate("/")
    }
  },[])



  const [showpassword,setShowpassword] = useState(false);
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");


  const login = async (e) =>{
      e.preventDefault();
      console.log(phone);
      if(phone.length !== 11 ){
        alert("شماره موبایل باید ۱۱ رقمی باشد")
        return
      }
      else{
        let data = {
          phone : phone,
          password : password
        }
        await axios.post("http://localhost:3001/login", data)
        .then((res)=>{
            res.data.status === true && 
        
            console.log(res);
            res.data.messege ? alert(res.data.messege) : alert("با موفقیت وارد شدید" )
            localStorage.setItem("phone",res.data[0].PhonNumber)
            localStorage.setItem("access",res.data[0].AccessLevel)
            navigate("/")
            window.location.reload()
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      
  }

  return <>
     <div className="login">
        <div className="login-box">
                <form onSubmit={login}>
                    <div className="inf-box">
                        <input type={"text"} onChange={(e)=>{setPhone(e.target.value)}} placeholder="شماره موبایل خود را وارد کنید ..."></input>
                        <div className="login-password">
                          <input type={showpassword ? "text" :"password"} onChange={(e)=>{setPassword(e.target.value)}} placeholder="رمز عبور خود را وارد کنید ..."></input>
                          <div className="showpassword" style={{display:"flex",alignItems:"center"}}>
                            {
                              showpassword ? <AiFillEyeInvisible style={{marginLeft:"5px"}} onClick={()=>{setShowpassword(!showpassword)}}/> : <AiFillEye style={{marginLeft:"5px"}} onClick={()=>{setShowpassword(!showpassword)}}/>
                            }
                            </div> 
                        </div>
                    </div>
                    <button type='submit'>ورود</button>
                </form>
        </div>
     </div>
  </>
}

export default Login
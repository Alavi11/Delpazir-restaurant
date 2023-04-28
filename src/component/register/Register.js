import React from 'react'
import {useState} from "react"
import "./Register.css"

import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";


const Register = () => {


  const [showpassword,setShowpassword] = useState(false);

  const [showReppassword,setShowReppassword] = useState(false);


  return <>
        <div className="register">
        <div className="register-box">
                  <form>
                    <div className="inf-box">
                        <input type={"text"} placeholder="نام"></input>
                        <input type={"text"} placeholder="نام خانوادگی"></input>
                        <input type={"email"} placeholder="ایمیل خود را وارد کنید ..."></input>
                        <div className="register-password">
                          <input type={showpassword ? "text" :"password"} placeholder="رمز عبور خود را وارد کنید ..."></input>
                          <div className="showpassword" style={{display:"flex",alignItems:"center"}}>
                            {
                              showpassword ? <AiFillEyeInvisible style={{marginLeft:"5px"}} onClick={()=>{setShowpassword(!showpassword)}}/> : <AiFillEye style={{marginLeft:"5px"}} onClick={()=>{setShowpassword(!showpassword)}}/>
                            }
                          </div>
                        </div>
                        <div className="register-password">
                          <input type={showReppassword ? "text" :"password"} placeholder="تکرار رمز عبور ..."></input>
                          <div className="showpassword" style={{display:"flex",alignItems:"center"}}>
                            {
                              showReppassword ? <AiFillEyeInvisible style={{marginLeft:"5px"}} onClick={()=>{setShowReppassword(!showReppassword)}}/> : <AiFillEye style={{marginLeft:"5px"}} onClick={()=>{setShowReppassword(!showReppassword)}}/>
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

export default Register
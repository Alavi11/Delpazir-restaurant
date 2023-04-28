import React, { useState } from 'react'
import "./Login.css"

import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";




const Login = () => {

  const [showpassword,setShowpassword] = useState(false);

  return <>
     <div className="login">
        <div className="login-box">
                <form>
                    <div className="inf-box">
                        <input type={"email"} placeholder="ایمیل خود را وارد کنید ..."></input>
                        <div className="login-password">
                          <input type={showpassword ? "text" :"password"} placeholder="رمز عبور خود را وارد کنید ..."></input>
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
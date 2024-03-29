import React from 'react'
import {useState,useEffect} from "react"
import "./Register.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";


const Register = () => {

  let navigate = useNavigate()

  useEffect(()=>{
    const login = localStorage.getItem("phone");
    if(login){
      navigate("/")
    }
  },[])


  const [showpassword,setShowpassword] = useState(false);
  const [showReppassword,setShowReppassword] = useState(false);

  const [firstname,setFirstname] = useState();
  const [lastname,setLastname] = useState();
  const [phone,setPhone] = useState();
  const [pass,setPass] = useState();
  const [reapetpass,setReapetpass] = useState();

  const Register = async (e) =>{
    e.preventDefault()
    if(!firstname){
      alert("مقادیر را وارد کنید")
      return
    }
    if(!lastname){
      alert("مقادیر را وارد کنید")
      return
    }
    if(!phone){
      alert("مقادیر را وارد کنید")
      return
    }
    if(phone.length !== 11){
      alert("شماره موبایل باید ۱۱ رقمی باشد")
      return
    }
    if(!pass){
      alert("مقادیر را وارد کنید")
      return
    }
    if(pass === reapetpass){
        let data = {
          firstname,
          lastname,
          phone,
          role:"User",
          pass
        }
        await axios.post("http://localhost:3001/register", data)
        .then((res)=>{
          console.log(res);
          res.data[0].status ?  alert("با موفقیت ثبت نام شدید" )  : alert(res.data[0].message)
          if(res.data[0].status === true){
            localStorage.setItem("phone",res.data[0].PhonNumber)
            localStorage.setItem("firstname",res.data[0].FirstName)
            localStorage.setItem("lastname",res.data[0].LastName)
            localStorage.setItem("access",res.data[0].AccessLevel)
            navigate("/")
            window.location.reload()
          }
       })
        .catch((err)=>{
          console.log(err);
        })
    }
    else{
      alert("رمز عبور منطبق نیست !!!")
    }
  }


  return <>
        <div className="register">
        <div className="register-box">
                  <form>
                    <div className="inf-box">
                        <input onChange={(e)=>{setFirstname(e.target.value)}} type={"text"} placeholder="نام"></input>
                        <input onChange={(e)=>{setLastname(e.target.value)}} type={"text"} placeholder="نام خانوادگی"></input>
                        <input onChange={(e)=>{setPhone(e.target.value)}} type={"text"} placeholder="شماره موبایل خود را وارد کنید ..."></input>
                        <div className="register-password">
                          <input onChange={(e)=>{setPass(e.target.value)}} type={showpassword ? "text" :"password"} placeholder="رمز عبور خود را وارد کنید ..."></input>
                          <div className="showpassword" style={{display:"flex",alignItems:"center"}}>
                            {
                              showpassword ? <AiFillEyeInvisible style={{marginLeft:"5px"}} onClick={()=>{setShowpassword(!showpassword)}}/> : <AiFillEye style={{marginLeft:"5px"}} onClick={()=>{setShowpassword(!showpassword)}}/>
                            }
                          </div>
                        </div>
                        <div className="register-password">
                          <input onChange={(e)=>{setReapetpass(e.target.value)}} type={showReppassword ? "text" :"password"} placeholder="تکرار رمز عبور ..."></input>
                          <div className="showpassword" style={{display:"flex",alignItems:"center"}}>
                            {
                              showReppassword ? <AiFillEyeInvisible style={{marginLeft:"5px"}} onClick={()=>{setShowReppassword(!showReppassword)}}/> : <AiFillEye style={{marginLeft:"5px"}} onClick={()=>{setShowReppassword(!showReppassword)}}/>
                            }
                          </div>
                        </div>  
                    </div>
                    <button onClick={Register} type='submit'>ورود</button>
                  </form>
        </div>
     </div>
  </>
}

export default Register
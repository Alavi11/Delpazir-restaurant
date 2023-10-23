import React , {useState,useEffect} from 'react'
import "./EditMyInf.css"
import axios from 'axios'
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import {useGlobalcontext} from "../../Context"


const EditMyInf = () => {

    const {member} = useGlobalcontext()


    const [firstname,setFirstname] = useState();
    const [lastname,setLastname] = useState();
    const [phone,setPhone] = useState();
    const [pass,setPass] = useState();
    const [role,setRole] = useState();
    const [reapetpass,setReapetpass] = useState();
    const [showpassword,setShowpassword] = useState(false);
    const [showReppassword,setShowReppassword] = useState(false);


    console.log(member);


    const edit = async (e) =>{
        e.preventDefault();
        let data = {
          firstname,
          lastname,
          role,
          phone,
          pass
        }
        if(!data.firstname){
            data.firstname = member[0].FirstName
        }
        if(!data.lastname){
            data.lastname = member[0].LastName
        }
        if(!data.role){
            data.role = member[0].AccessLevel
        }
        if(!data.phone){
            data.phone = member[0].PhonNumber
        }
        if(!data.pass){
            data.pass = member[0].Password
        }
        await axios.post("http://localhost:3001/edituser",data)
        .then((res)=>{
          console.log(res);
          alert("با موفقیت ویرایش شد" )
      })
        .catch((err)=>{
          console.log(err);
        })
      }




  return <>
        <div className='editmyinf'>
                            <div className='members'>
                                   <p>نام : {member[0].FirstName}</p>
                                   <p>نام خانوادگی : {member[0].LastName}</p>
                                   <p> موبایل : {member[0].PhonNumber}</p>
                            </div>
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
                    <button onClick={edit}>اعمال</button>
                  </form>

        </div>
  </>
}

export default EditMyInf
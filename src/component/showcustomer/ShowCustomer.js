import React, { useEffect, useState } from 'react'
import "./ShowCustomer.css"
import axios from 'axios'
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";


const ShowCustomer = () => {


    const [showpassword,setShowpassword] = useState(false);
    const [showReppassword,setShowReppassword] = useState(false);
    const [phonuser,setPhonuser] = useState();
    const [firstname,setFirstname] = useState();
    const [lastname,setLastname] = useState();
    const [phone,setPhone] = useState();
    const [pass,setPass] = useState();
    const [reapetpass,setReapetpass] = useState();
    const [role,setRole] = useState();
    const [members ,setMembers] = useState([])
    const [member ,setMember] = useState([])
    const [showedit ,setShowedit] = useState(true)
    const [user ,setUser] = useState()
    const [searchusers ,setSearchusers] = useState()


    useEffect(()=>{
        axios.get("http://localhost:3001/getmembers")
        .then(res=>{
            setMembers(res.data)
            setMember(res.data)
        }).catch((err)=>{
          console.log(err)
        })
    },[])


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
        if(!role){
            alert("نقش کاربر را مشخص کنید")
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
              role,
              phone,
              pass
            }
            await axios.post("http://localhost:3001/register", data)
            .then((res)=>{
              res.data[0].status ?  alert("با موفقیت ثبت نام شد" )  : alert(res.data[0].message)
           })
            .catch((err)=>{
              console.log(err);
            })
        }
        else{
          alert("رمز عبور منطبق نیست !!!")
        }
      }

      const deleteuser = async (phon) =>{
        await axios.post("http://localhost:3001/deleteuser", {phon : phon})
            .then((res)=>{
              console.log(res);
              alert("با موفقیت حذف شد" )
           })
            .catch((err)=>{
              console.log(err);
            })
      }
      const edituser = (phon) =>{
        setShowedit(false)
        setUser(members.filter(item=> item.PhonNumber == phon))
        setPhonuser(phon)
      }
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
              data.firstname = user[0].FirstName
          }
          if(!data.lastname){
              data.lastname = user[0].LastName
          }
          if(!data.role){
              data.role = user[0].AccessLevel
          }
          if(!data.phone){
              data.phone = user[0].PhonNumber
          }
          if(!data.pass){
              data.pass = user[0].Password
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

  let regex = new RegExp(searchusers , "gi")

  const searchuser = ()=>{
      let result = members.filter(item => item.LastName.match(regex))
      setMember(result)
  }

  return <>
        <div className='showcustomer'>
            <div className='memberlist'>
                <div style={{width:"80%",textAlign:"center"}}>
                <input placeholder='نام خانوادگی کاربر ...' className='searchuser' type='text' onChange={(e)=>{setSearchusers(e.target.value)}}></input>
                <button className='searchuserbtn' onClick={searchuser}>جستوجو</button>
                </div>
                {
                    member.map(item => {
                        return <>
                            <div className='members'>
                                   <p>نام : {item.FirstName}</p>
                                   <p>نام خانوادگی : {item.LastName}</p>
                                   <p> موبایل : {item.PhonNumber}</p>
                                   <p> عنوان : {item.AccessLevel}</p>
                                   <button onClick={()=>{edituser(item.PhonNumber)}}>ویرایش</button>
                                   <button onClick={()=>{deleteuser(item.PhonNumber)}}>حذف</button>
                            </div>
                        </>
                    })
                }
            </div>
            <div className='addmember'>
                      {   showedit ?
                          <p style={{marginTop:"5px"}}>اضافه کردن کاربر</p>
                          :
                          <p style={{marginTop:"5px"}}>ویرایش کاربر</p>
                      }
                    
                    {

                      showedit ?

                    <form>
                    <div className="inf-box">
                        <input onChange={(e)=>{setFirstname(e.target.value)}} type={"text"} placeholder="نام"></input>
                        <input onChange={(e)=>{setLastname(e.target.value)}} type={"text"} placeholder="نام خانوادگی"></input>
                        <input onChange={(e)=>{setPhone(e.target.value)}} type={"text"} placeholder="شماره موبایل خود را وارد کنید ..."></input>
                        <input onChange={(e)=>{setRole(e.target.value)}} type={"text"} placeholder="نقش کاربر" list="data"></input>
                        <datalist id="data">
                          <option value="Admin"/>
                          <option value="PostMan"/>
                        </datalist>
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
                    <button onClick={Register} type='submit'>افزودن</button>
                  </form>
                  : <form>
                    <div className="inf-box">
                        <input onChange={(e)=>{setFirstname(e.target.value)}} type={"text"} placeholder="نام"></input>
                        <input onChange={(e)=>{setLastname(e.target.value)}} type={"text"} placeholder="نام خانوادگی"></input>
                        <input onChange={(e)=>{setPhone(e.target.value)}} type={"text"} placeholder="شماره موبایل خود را وارد کنید ..."></input>
                        <input onChange={(e)=>{setRole(e.target.value)}} type={"text"} placeholder="نقش کاربر" list="data"></input>
                        <datalist id="data">
                          <option value="Admin"/>
                          <option value="PostMan"/>
                        </datalist>
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
                  }
            </div>
        </div>
  </>
}

export default ShowCustomer
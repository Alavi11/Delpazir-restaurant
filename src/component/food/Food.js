import React, { useEffect, useState } from 'react'
import "./Food.css"
import axios from "axios"
import Editfood from '../editfood/Editfood'
import Foodlistedit from '../../foodlistedit/Foodlistedit'
import {useGlobalcontext} from "../../Context"



const Food = () => {
    const {showeditfood} = useGlobalcontext()

    const [foodinf,setFoodinf] = useState({
        namefood :"",
        price:"",
        category:"",
        content:"",
        photo:""
    })

    const getfoodinf=(e)=>{
        setFoodinf((prev)=>({...prev,[e.target.name] : e.target.value }))
    }

    
    const addfoods = (e) =>{
        e.preventDefault();
        if(!foodinf.namefood){
            alert("مقادیر را وارد کنید")
            return
          }
          if(!foodinf.namefood){
            alert("مقادیر را وارد کنید")
            return
          }
          if(!foodinf.price){
            alert("مقادیر را وارد کنید")
            return
          }
          if(!foodinf.category){
            alert("مقادیر را وارد کنید")
            return
          }
          if(!foodinf.photo){
            alert("مقادیر را وارد کنید")
            return
          }
          if(!foodinf.content){
            alert("مقادیر را وارد کنید")
            return
          }
          else{
            axios.post("http://localhost:3001/addfood",foodinf)
            .then(res=>{
                console.log(res)
                if(res.data==="ok"){
                    alert("با موفقیت اضافه شد")
                }
                else{
                    alert("ناموفق")
                }
            }).catch(err=>{
                console.log(err);
            })
        }
        
    }



  return <>
        <div className="foodcomp">
          {
              showeditfood ?  <Editfood/> :<div className="addfood">
              <h2>اضافه کردن غذا</h2>
              <form className="addfoodform" onSubmit={addfoods}>
                  <input onChange={getfoodinf} name="namefood" type='text' placeholder='نام غذا'></input>
                  <input onChange={getfoodinf} name="price" type='number' placeholder='قیمت'></input>
                  <input onChange={getfoodinf} name="category" placeholder='دسته بندی' list="data"/>
                      <datalist id="data">
                          <option value="pizza"/>
                          <option value="kebab"/>
                          <option value="sandwich"/>
                          <option value="iranianfood"/>
                          <option value="breadyfood "/>
                          <option value="riceyfood "/>
                          <option value="coldsandwich"/>
                          <option value="warmsandwich"/>
                      </datalist>
                  <input onChange={getfoodinf} name="content" type='text' placeholder='محتوا'></input>
                  <input onChange={getfoodinf} name="photo" type='text' placeholder='لینک عکس'></input>
                  <button type='submit'>ثبت</button>
              </form>
          </div>
          }
            <div className="edditfood">
                  <Foodlistedit/>
            </div>
        </div>
  </>
}

export default Food
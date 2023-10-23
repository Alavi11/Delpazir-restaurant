import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Editfood.css"
import {useGlobalcontext} from "../../Context"


const Editfood = () => {
  const {item} = useGlobalcontext()
  const [id,setId]=useState(item.ID)

    useEffect(()=>{
      setId(item.ID)
    },[item])


    const [foodinf,setFoodinf] = useState({
        namefood :"",
        price:"",
        category:"",
        content:"",
        photo:"",
        id:""
   })

    const getfoodinf=(e)=>{
        setFoodinf((prev)=>({...prev,[e.target.name] : e.target.value }))
    }

    
    const editfoods = (e) =>{
        e.preventDefault();
        if(!foodinf.namefood){
            foodinf.namefood = item.Name
        }
        if(!foodinf.price){
            foodinf.price = item.Price
        }
        if(!foodinf.category){
            foodinf.category = item.Category
        }
        if(!foodinf.photo){
            foodinf.photo = item.Picture
        }
        if(!foodinf.content){
            foodinf.content = item.Contents
        }
        foodinf.id = id

        axios.post("http://localhost:3001/editfood",foodinf)
            .then(res=>{
                if(res.statusText==="OK"){
                    alert("با موفقیت ویرایش شد")
                }
                else{
                    alert("ناموفق")
                }
            }).catch(err=>{
                console.log(err);
            })
        
    }
    const deletefood = (e) =>{
        e.preventDefault();

        const foodId = {ID:id}
        
        axios.post("http://localhost:3001/deletefood",foodId)
            .then(res=>{
                console.log(res)
                if(res.statusText==="OK"){
                    alert("با موفقیت حذف شد")
                }
                else{
                    alert("ناموفق")
                }
            }).catch(err=>{
                console.log(err);
            })
    }

  return <>
            <div className="editfood">
                <h2>ویرایش غذا</h2>
                <form className="addfoodform" onSubmit={editfoods}>
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
                    <button type='submit'>اعمال</button>
                    <button onClick={deletefood}>حذف غذا</button>
                </form>
            </div>
  </>
}

export default Editfood
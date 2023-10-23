import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import "./Foodlist.css"
import axios from 'axios'


const Foodlist = () => {
  let {name} = useParams()

  const [food,setFood]=useState([])

  let regex = new RegExp(name, "gi")


  useEffect(()=>{
    axios.get("http://localhost:3001/getfood")
    .then(res=>{
        let result = res.data.filter(item => item.Category.match(name))
        setFood(result)
    }).catch((err)=>{
      console.log(err)
    })
  }
  ,[])


  const localfood =()=>{
    localStorage.setItem("foodlist",JSON.stringify(food))
  }


  return <>
        <div className="foodlist"> 
            {
              food.map((item)=>{
                return  <div className="food-details">
                            <img src={item.Picture}/>
                            <p>{item.Name}</p>
                            <p>قیمت : {item.Price} تومان</p>
                            <Link to={`/${name}/${item.ID}`} style={{width:"100%" , textAlign:"center",height:"30px"}}>
                            <button onClick={localfood}
                            >خرید</button></Link>
                        </div>
              })
            }
        </div>
  </>
}

export default Foodlist
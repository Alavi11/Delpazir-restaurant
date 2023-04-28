import React from 'react'
import {Link, useParams} from "react-router-dom"
import food from "../data/Food"
import "./Foodlist.css"

const Foodlist = () => {
  let {name} = useParams()


  return <>
        <div className="foodlist"> 
            {
              food.map((item)=>{
                return  <div className="food-details">
                            <img src={item.img}/>
                            <p>{item.name}</p>
                            <p>قیمت : {item.price} تومان</p>
                            <Link to={`/${name}/${item.id}`} style={{width:"100%" , textAlign:"center",height:"30px"}}><button>خرید</button></Link>
                        </div>
              })
            }
        </div>
  </>
}

export default Foodlist
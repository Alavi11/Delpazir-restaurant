import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Details.css"
import FoodList from "../data/Data"
import {useSelector,useDispatch} from "react-redux"

const Details = () => {

  // const cart = useSelector((store)=>store)
  const dispatch = useDispatch()

  const item = useParams();

  const food = FoodList.filter((element)=>{
    return  element.id === parseInt(item.id)
  })


return <>
          <div className="Detail">
                <div className="Detail-cart">
                  <img src={food[0].img}/>
                  <div className="Detail-cart-disc">
                    <h1 style={{marginBottom:"20px"}}>{food[0].name}</h1>
                    <h2 style={{marginBottom:"20px"}}>قیمت : {food[0].price} تومان</h2>
                    <p>ترکیبات : {food[0].compounds}</p>
                    <button onClick={()=>{dispatch({type:"ADD",payload:food[0]})}}>سفارش</button>
                  </div>
                </div>
          </div>
  </>
}

export default Details
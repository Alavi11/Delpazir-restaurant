import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./Details.css"
import axios from 'axios'


import FoodList from "../data/Data"

import {useSelector,useDispatch} from "react-redux"




const Details = () => {

  const cart = useSelector((store)=>store)

  const dispatch = useDispatch()

  const item = useParams();


  
  const result = JSON.parse(localStorage.getItem("foodlist")).filter(items => items.ID == item.id)
  let newresult = {...result[0],count:1}

return <>
          <div className="Detail">
                <div className="Detail-cart">
                  <img src={result[0].Picture}/>
                  <div className="Detail-cart-disc">
                    <h1 style={{marginBottom:"20px"}}>{result[0].Name}</h1>
                    <h2 style={{marginBottom:"20px"}}>قیمت : {result[0].Price} تومان</h2>
                    <p>ترکیبات : {result[0].Contents}</p>
                    <button onClick={()=>{dispatch({type:"ADD",payload:newresult})}}>سفارش</button>
                  </div>
                </div>
          </div>
  </>
}

export default Details
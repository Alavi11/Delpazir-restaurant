import React, { useState,useEffect } from 'react';
import "./Basket.css";
import {useSelector,useDispatch} from "react-redux";


const Basket = () => {

    const cart = useSelector((store)=>store);
    const dispatch = useDispatch();

    const [cartshop,setCartshop]=useState([]);

    useEffect(()=>{
        setCartshop(cart)
    },[cart])
    
    let totalprice = 0 ;

    for(let i = 0 ; i < cart.length ; i++){
        totalprice += parseInt(cart[i].price);
    }

  return <>

        <div className="basket-page">
            <div className="basket-page-left">
                <div className="cart-info-for-shopping">
                        <h2>قیمت کل : {totalprice}</h2>
                        <button>خرید</button>
                </div>
            </div>
            <div className="basket-page-right">
                {
                        cartshop.map(item=>{
                                return <>
                                        <div className="Detail basket">
                                            <div className="Detail-cart basket-cart">
                                                <img src={item.img}/>
                                                <div className="Detail-cart-disc">
                                                    <h1 style={{marginBottom:"20px"}}>{item.name}</h1>
                                                    <h2 style={{marginBottom:"20px"}}>قیمت : {item.price} تومان</h2>
                                                    <p>ترکیبات : {item.compounds}</p>
                                                    <button onClick={()=>{dispatch({type:"REMOVE",  payload:item})}}>حذف</button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                </>
                        })
                }
            </div>
        </div>

  </>
}

export default Basket
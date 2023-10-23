import React, { useState,useEffect } from 'react';
import "./Basket.css";
import {useSelector,useDispatch} from "react-redux";
import axios from "axios"

const Basket = () => {

    const cart = useSelector((store)=>store);
    const dispatch = useDispatch();
    const [test , setTest] = useState(0)

    const [windowWidth , setWindowWidth] = useState(window.innerWidth)


    useEffect(()=>{

    },[cart])
    useEffect(()=>{

    },[cart.p])

    useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });
    
    let totalprice = 0 ;

    for(let i = 0 ; i < cart.length ; i++){
        totalprice += parseInt(cart[i].Price)*cart[i].count;
    }

    const increase=(id)=>{
        let product = cart.filter((item)=> item.ID == id)
        product[0].count += 1
        setTest(test+1)
    }
    const dicrease=(id)=>{
        let product = cart.filter((item)=> item.ID == id)
        if(product[0].count == 1){
            dispatch({type:"REMOVE",  payload:product[0]})
        }
        else{
            product[0].count -= 1
            setTest(test-1)
        }
        
    }

    let heightres = cart.length
    
    

    const sabtsefaresh = async () =>{

        let currentdate = new Date();
        let datetime = + currentdate.getDay() + "/" + currentdate.getMonth() 
        + "/" + currentdate.getFullYear()

        let data = {
            time: datetime,
            phon:localStorage.getItem("phone"),
            pay:Math.random()*10000,
            status:"درحال بررسی",
            totalprice,
            cart

        }
        console.log(cart,totalprice);
        await  axios.post("http://localhost:3001/sendorders",data)
                .then(res=>{
                    if (res.data === "ok"){
                        alert("سفارش شما ثبت شد")
                    }
                }).catch((err)=>{
                console.log(err)
                })
    }


  return <>

        <div className="basket-page">
            <div className="basket-page-left">
                <div className="cart-info-for-shopping">
                        <h2>قیمت کل : {totalprice}</h2>
                        <button onClick={sabtsefaresh}>خرید</button>
                </div>
            </div>
            <div className="basket-page-right"  style={windowWidth <= 650 ? {height:`${heightres * 600}px`} : {}}>
                {
                        cart.map(item=>{
                                return <>
                                        <div className="Detail basket">
                                            <div className="Detail-cart basket-cart">
                                                <img src={item.Picture}/>
                                                <div className="Detail-cart-disc">
                                                    <h1 style={{marginBottom:"20px"}}>{item.Name}</h1>
                                                    <h2 style={{marginBottom:"20px"}}>قیمت : {item.Price} تومان</h2>
                                                    <p>ترکیبات : {item.Contents}</p>
                                                    <p style={{marginTop:"10px"}}>تعداد :{item.count}</p>
                                                    <button className='btntest'  style={{display:"inline"}} onClick={()=>dicrease(item.ID)}>حذف</button>
                                                    <button className='btntest' style={{left:"10px",display:"inline"}} onClick={()=>increase(item.ID)}>افزودن</button>
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
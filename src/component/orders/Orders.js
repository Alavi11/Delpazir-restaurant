import React, { useEffect, useState } from 'react'
import "./Orders.css"
import axios from "axios"
import OrderItems from './OrderItems'


const Orders = () => {

    const [myorders,setMyorders] = useState([])
    const [sameorder,setSameorder] = useState([])
    

    const factor = (myorders) =>{
        const samefood = {}

        for (let i = 0; i < myorders.length; i++){
            let food = {
                name : myorders[i].Name,
                picture : myorders[i].Picture,
                price : myorders[i].Price,
                content : myorders[i].Contents,
                count : myorders[i].Count,
                numberoforder : myorders[i].OrderId,
                pay : myorders[i].PaymentCode,
                totalprice : myorders[i].TotalPrice,
                status : myorders[i].Status,
            }
            
            if(myorders[i].OrderId in samefood){
                samefood[`${myorders[i].OrderId}`].push(food)
            }
            else{
                samefood[`${myorders[i].OrderId}`] = [food]
            }
        }
        setSameorder(samefood)
    }
    
    useEffect(()=>{
        axios.get("http://localhost:3001/getorders")
        .then(res=>{
            setMyorders(res.data.filter(item => item.PhoneNumber == localStorage.getItem("phone")))
            factor(res.data.filter(item => item.PhoneNumber == localStorage.getItem("phone")))
        }).catch((err)=>{
            console.log(err)
        })

    },[])

  return <>
        <div className='orders'>
                    {
                        Object.values(sameorder).map(item => {
                            return <OrderItems item={item}/>
                        })
                    }
        </div>
  </>
}

export default Orders
import React, { useEffect, useState } from 'react'
import "./Slider.css"

const list = [1,1,1,1,1,1,1]

const Slider = () => {

    const [pic,Setpic] = useState(1)

    useEffect(()=>{
        const timeOut = setTimeout(()=>
            Setpic((prevIndex)=>
                prevIndex % 7 === 0 ? 1 : prevIndex + 1
            ),4000)
        return ()=>{
            clearTimeout(timeOut)
        }
    },[pic])



    return <>
            <div className="slider">
                <img src={`img/slider/${pic}.jpeg`}/>
                <div className="bottom">
                    {
                        list.map((item,index)=>{
                            return <>
                                <div onClick={()=>Setpic(index+1)} className={index+1 === pic ? "active-button active":"active-button"} key={index+1}></div>
                            </>
                        })
                    }
                </div>
            </div>
    </>
}

export default Slider
import React, { useEffect,useState } from 'react'
import "./Foodlistedit.css"
import {useGlobalcontext} from "../Context"
import axios from "axios";


const Foodlistedit = () => {

    const [editfood , setEditfood] = useState([]);

    const {name,show} = useGlobalcontext()

    let regex = new RegExp(name, "gi")

    useEffect(()=>{
        axios.get("http://localhost:3001/getfood")
        .then(res=>{
            let result = res.data.filter(item => item.Name.match(regex))
            setEditfood(result)
        }).catch((err)=>{
          console.log(err)
        })
    },[name])

    const handleeditfood =(item)=>{
        show(item)
    }

  return <>
        <div className='foodlistedit'>
            {
                editfood.map(item=>{
                        return <>
                            <div className='editfoods'>
                                    <div className='editfoods-photo'>
                                        <img src={item.Picture}/>
                                    </div>
                                    <div className='editfoods-det'>
                                            <p>دسته بندی : {item.Category}</p>
                                            <p>قیمت : {item.Price}</p>
                                            <p>محتویات : {item.Contents}</p>
                                            <p>نام غذا : {item.Name}</p>
                                            <button onClick={()=>handleeditfood(item)}>ویرایش</button>
                                    </div>
                            </div>
                        </>
                })
            }
                
        </div>
  </>
}

export default Foodlistedit
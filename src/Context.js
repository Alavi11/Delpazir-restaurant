import React, { useContext, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();


const AppProvider = ({children})=>{

    const [name , setName] = useState()
    const [showeditfood , setShoweditfood] = useState(false)
    const [item , setItem] = useState()
    const [member ,setMember] = useState([])

    const geteditfood =(name)=>{
        setName(name)
        setShoweditfood(false)
    }
    const show = (item) =>{
        setShoweditfood(true)
        setItem(item)
    }
    const edit = () =>{

    }
    axios.get("http://localhost:3001/getmembers")
        .then(res=>{
            setMember(res.data.filter(item => item.PhonNumber == localStorage.getItem("phone")))
        }).catch((err)=>{
          console.log(err)
    })
    


    return <AppContext.Provider value = {{item,geteditfood,name,showeditfood,show,edit,member}} >{children}</AppContext.Provider>
}


export const useGlobalcontext = () =>{
    return useContext(AppContext)
}



export {AppContext,AppProvider};
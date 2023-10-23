import React, { useState } from 'react'
import "./Search.css"
import { FaSearch } from "react-icons/fa";
import {useGlobalcontext} from "../../Context"

const Search = () => {

  
  const {geteditfood} = useGlobalcontext()
  const [namefood , setNamefood] = useState()
  
  return <>
        <div className="search">
            <div className="search-box">
                <FaSearch className = 'react-icons' />
                <input onChange={(e)=>{setNamefood(e.target.value)}} type={"text"} placeholder={"جستجوی غذا ..."}></input>
            </div>
            <button onClick={()=>{geteditfood(namefood)}}>جستجوکن</button>
        </div>
  
  
  </>
}

export default Search
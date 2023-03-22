import React from 'react'
import "./Search.css"
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return <>
        <div className="search">
            <div className="search-box">
                <FaSearch className = 'react-icons' />
                <input type={"text"} placeholder={"جستجوی غذا ..."}></input>
            </div>
            <button>جستجوکن</button>
        </div>
  
  
  </>
}

export default Search
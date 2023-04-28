import React from 'react'
import FoodList from "../data/Data"
import {Link, useParams} from "react-router-dom"



const Foodlist = () => {
  let {name} = useParams()


  return <>
        {
            FoodList.map((item)=>{
                return <>
                        <Link to={`/${name}/peperony`}><p>asdada</p></Link>
                </>
            })
        }
  </>
}

export default Foodlist
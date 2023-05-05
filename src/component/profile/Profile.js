import React, { useState } from 'react'
import "./Profile.css"
import {Link} from "react-router-dom"
import Search from "../search/Search"

const Profile = () => {

  const [admin,setAdmin] = useState(true);
  const [delivery,setDelivery] = useState(false);
  const [showmenu,setShowmenu]=useState(false);
  const [showsearchbar,setShowsearchbar]=useState(false);

  return <>
        <div className="dashboard">
            
            <div className={showmenu ? "dashboard-list show" : "dashboard-list"}>
                  <button onClick={()=>{setShowmenu(!showmenu)}}>{showmenu ? "بستن" : "منو"}</button>
                  <ul>
                          {
                            admin ? <li>مشتریان</li>: <></>
                          }
                          {
                            admin || delivery ? <li>سفارشات مشتریان</li> : <></>
                          }
                          {
                            admin ? <li>گزارشات فروش</li>: <></>
                          }
                          <li>سفارشات من</li>
                          {
                            admin ? <li>ویرایش غذا</li>: <></>
                          }
                          <Link to={"/"}><li>خانه</li></Link>
                  </ul>  
            </div>
            <div className="dashboard-body">
                    {
                      showsearchbar ? <Search/> : <></>
                    }
            </div>
        </div>
        
  
  </>
}

export default Profile
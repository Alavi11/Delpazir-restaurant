import React, { useState , useEffect} from 'react'
import "./Profile.css"
import {Link} from "react-router-dom"
import Search from "../search/Search"
import {useNavigate} from "react-router-dom"
import Food from '../food/Food'
import ShowCustomer from '../showcustomer/ShowCustomer'
import Orders from '../orders/Orders'
import PostmanOrder from '../postmanorder/PostmanOrder'
import EditMyInf from '../editmyinf/EditMyInf'
import Sells from '../sells/Sells'



const Profile = () => {

  let navigate = useNavigate()

  useEffect(()=>{
    const login = localStorage.getItem("phone");
    if(login){
      
    }
    else{
      navigate("/")
    }
  },[])

  useEffect(()=>{
    const login = localStorage.getItem("access");
    if(login === "Admin"){
      setAdmin(true)
    }
    else if(login === "PostMan"){
      setPostman(true)
    }
  },[])

  const [admin,setAdmin] = useState(false);
  const [postman,setPostman] = useState(false);
  const [showmenu,setShowmenu]=useState(false);
  const [showsearchbar,setShowsearchbar] = useState(false);
  const [food,setFood] = useState(false);
  const [customer,setCustomer] = useState(false);
  const [orders,setOrders] = useState(false);
  const [postmanorders,setPostmanorders] = useState(false);
  const [editmyinf,setEditmyinf] = useState(false);
  const [sells,setSells] = useState(false);


  const ShowFood = () =>{
    setShowsearchbar(true)
    setFood(true)
    setCustomer(false)
    setOrders(false)
    setPostmanorders(false)
    setEditmyinf(false)
    setSells(false)
  }

  const Showcustomer =() =>{
    setShowsearchbar(false)
    setFood(false)
    setCustomer(true)
    setOrders(false)
    setPostmanorders(false)
    setEditmyinf(false)
    setSells(false)
  }

  const ShowOrders = () =>{
    setShowsearchbar(false)
    setFood(false)
    setCustomer(false)
    setOrders(true)
    setPostmanorders(false)
    setEditmyinf(false)
    setSells(false)
  }
  const ShowPostmanOrders = () =>{
    setPostmanorders(true)
    setShowsearchbar(false)
    setFood(false)
    setCustomer(false)
    setOrders(false)
    setEditmyinf(false)
    setSells(false)
  }
  const editmyinformation = () =>{
    setPostmanorders(false)
    setShowsearchbar(false)
    setFood(false)
    setCustomer(false)
    setOrders(false)
    setEditmyinf(true)
    setSells(false)
  }
  const showsells = () =>{
    setPostmanorders(false)
    setShowsearchbar(false)
    setFood(false)
    setCustomer(false)
    setOrders(false)
    setEditmyinf(false)
    setSells(true)
  }

  return <>
        <div className="dashboard">
            <div className={showmenu ? "dashboard-list show" : "dashboard-list"}>
                  <button onClick={()=>{setShowmenu(!showmenu)}}>{showmenu ? "بستن" : "منو"}</button>
                  <ul>
                          <li onClick={editmyinformation}>ویرایش اطلاعات شخصی</li>
                          {
                            admin ? <li onClick={Showcustomer}>مشتریان</li>: <li></li>
                          }
                          {
                            admin || postman ? <li onClick={ShowPostmanOrders}>سفارشات مشتریان</li> : <li></li>
                          }
                          {
                            admin ? <li onClick={showsells}> گزارشات فروش</li>: <li></li>
                          }
                          {
                            admin ? <li onClick={ShowFood}>ویرایش غذا</li>: <li></li>
                          }
                          <li onClick={ShowOrders}>سفارشات من</li>
                          <Link to={"/"}><li>خانه</li></Link>
                  </ul>  
            </div>
            <div className="dashboard-body">
                    {
                      showsearchbar ? <Search/> : <></>
                    }
                    {
                      food ? <Food/> : <></>
                    }
                    {
                      customer ? <ShowCustomer/> : <></>
                    }
                    {
                      orders ? <Orders/> : <></>
                    }
                    {
                      postmanorders ? <PostmanOrder/> : <></>
                    }
                    {
                      editmyinf ? <EditMyInf/> : <></>
                    }
                    {
                      sells ? <Sells/> : <></>
                    }
            </div>
        </div>
        
  
  </>
}

export default Profile
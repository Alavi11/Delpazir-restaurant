import React, {useState} from 'react'
import axios from 'axios'

const OrderItems = ({item}) => {

    const [show,setShow] = useState(false)
    const [showeditorder,setShoweditorder] = useState(false)
    const [inf,setInf] = useState()

    const handeledit = (id)=>{
        const data = {
            orderID:id,
            status:inf
        }
            axios.post("http://localhost:3001/editorderstatus",data)
            .then(res=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err)
            })
    }

    return <>
            {
                showeditorder ? <div className='editorderstatus'>
                    <input onChange={(e)=>{setInf(e.target.value)}} name="category" placeholder='وضعیت' list="data"/>
                        <datalist id="data">
                            <option value="درحال پخت"/>
                            <option value="تحویل پیک"/>
                        </datalist>
                    <button onClick={()=>handeledit(item[0].numberoforder)} style={{width:"70px",cursor:"pointer"}}>ثبت</button>
                </div> : <div style={{display:"none"}}></div>
            }
            <div className={show ? 'show orderscart':'orderscart'}>
                <div>
                    <h4>شماره سفارش : {item[0].numberoforder}</h4>
                    {
                        item[0].phone ? <h4 style={{marginTop:"10px"}}>شماره موبایل مشتری : {item[0].phone}</h4> : ""
                    }
                    
                    <h5 style={{marginTop:"10px"}}>کد پرداخت : {item[0].pay}</h5>
                    <h5 style={{marginTop:"10px"}}> مبلغ کل : {item[0].totalprice}</h5>
                                            
                </div>
                <div className='jast' style={{display:"flex",justifyContent:"space-between"}}>
                    <h5 style={{marginTop:"10px"}}>  وضعیت سفارش : {item[0].status}</h5>
                    <div className='ferst' style={{display:"flex",justifyContent:"space-between"}}>
                    {
                        show ? <button onClick={()=>{setShow(!show)}}>کمتر</button> :<button onClick={()=>{setShow(!show)}}>بیشتر</button>
                    }
                    {
                        localStorage.getItem("access")=="Admin" && item[0].phone  ? <button onClick={()=>{setShoweditorder(!showeditorder)}}>ویرایش</button> : <></>
                    }
                    </div>
                    
                </div>
                {
                    item.map(items =>{
                        return  <div className='orderitems'>
                            <img src={items.picture}/>
                            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"15px 0"}}>
                                <p>نام غذا : {items.name}</p>
                                <p>قیمت واحد : {items.price}</p>
                                <p>محتویات :‌ {items.content}</p>
                                <p>تعداد :‌ {items.count}</p>
                            </div>
                    </div>
                    })
                }
                
            </div>

  
  </>
}

export default OrderItems;

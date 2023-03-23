import React from 'react'
import "./Categorys.css"

const category = [
    {
        img : "img/category/pizza.jpg",
        sub:"پیتزا"
    },
    {
        img : "img/category/kebab.jpg",
        sub:"کباب"
    },
    {
        img : "img/category/sanwich.jpg",
        sub:"ساندویچ"
    },
    {
        img : "img/category/iranianfood.jpg",
        sub:"غذای ایرانی"
    }
]


const Categorys = () => {
  return <>
    <div className="category">
            <h1>دسته های محبوب</h1>
            <div className="cat-box">
                {
                    category.map((item)=>{
                        return <>
                            <div className="food">
                                <img src={item.img}/>
                                <h3>{item.sub}</h3>
                            </div>
                        </>
                    })
                }
            </div>
    </div>
  </>
}

export default Categorys
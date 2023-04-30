import React from 'react'
import "./Categorys.css"
import {Link} from "react-router-dom"

const category = [
    {
        img : "img/category/pizza.jpg",
        sub:"پیتزا",
        cat:"pizaa"
    },
    {
        img : "img/category/kebab.jpg",
        sub:"کباب",
        cat:"kebab"
    },
    {
        img : "img/category/sanwich.jpg",
        sub:"ساندویچ",
        cat:"sandwich"
    },
    {
        img : "img/category/iranianfood.jpg",
        sub:"غذای ایرانی",
        cat:"iranianfood"
    }
]


const Categorys = () => {
  return <>
    <div className="category">
            <h1>دسته بندی ها</h1>
            <Link to={`/${item.cat}`} className="food">
            <div className="cat-box">
                {
                    category.map((item)=>{
                        return <>
                            <Link to={`/${item.cat}`} className="food">
                                    <img src={item.img}/>
                                    <h3>{item.sub}</h3>
                            </Link>

                  
                                <div>
                                    <img src={item.img}/>
                                    <h3>{item.sub}</h3>
                                </div>
                        </>
                    })
                }
            </div>
            </Link>
    </div>
  </>
}

export default Categorys

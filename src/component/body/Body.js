import React from 'react'
import Categorys from '../categorys/Categorys'
import Discribtion from '../discribtion/Discribtion'
import Footer from '../footer/Footer'
import Info from '../infografy/Info'
import "./Body.css"

const Body = () => {
  return <>
        <Categorys/>
        <Discribtion/>
        <Info/>
        <Footer/>
  </>
}

export default Body
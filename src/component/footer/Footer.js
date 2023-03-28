import React from 'react'
import "./Footer.css"
import { AiFillInstagram ,AiFillTwitterSquare ,AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return <>
        <div className="footer">
                <div className="about-us">
                      <div className="footer-menu">
                          <ul>
                            <li>درباره</li>
                            <li>تماس با ما</li>
                            <li>قوانین</li>
                            <li>سوالات متداول</li>
                          </ul>
                      </div>
                </div>
                <div className="sub">
                          <ul className="links">
                            <li><AiFillInstagram/></li>
                            <li><AiFillTwitterSquare/></li>
                            <li><AiOutlineLinkedin/></li>
                          </ul>
                </div>
        </div>
  
  </>
}

export default Footer
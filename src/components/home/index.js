import video from "../../background-video.mp4"
import { useEffect } from 'react';
import {FaArrowRight} from "react-icons/fa"
import Images from "../Images"
import Ycard from "../Ycard"
import Commants from "../Commands"
import Industries from "../industries"
import imageBgPic from "../../assets/background.png"
import Animations from "../Animations"

import "./index.css"

import React, { useState } from 'react';

let array = ["Engagement","Conversions","Lifetime Value","Marketing","Core Business","Financial"]

function Home() {
  const [isHoveredBtn401, setIsHovered401] = useState(false);
  const [displayText, setDisplayText] = useState('Engagement');
 

  useEffect(() => {
    const intervalId = setInterval(() => {
       const randomNumber = Math.ceil(Math.random()*6)
       const text = array.slice(randomNumber,randomNumber+1)
       console.log(randomNumber)
       setDisplayText(text)
       console.log(displayText)
    }, 3000);

    if (displayText.length === 0){
      setDisplayText("Engagement")
    }

    return () => clearInterval(intervalId);
  }, [displayText]); 


  const handleMouseEnter401 = () => {
    setIsHovered401(true);
    console.log(isHoveredBtn401)
  };

  const handleMouseLeave401 = () => {
    setIsHovered401(false);
    console.log(isHoveredBtn401)
  };

  return (
<div className="main-outer">
    <section className="video-container">
        <video src={video} type="video/mp4" autoPlay loop muted className="vd"/>
        <div className="text-center d-flex d-md-none">
            <h1 className="text-heading">Quantum Journey Of Exponential Growth</h1>
            <h4 className="text-heading">Fueled By Innovation And Powered By Yexponent </h4>
            <p className="alternate-text">{displayText}</p>
        </div>
        <div className="text-center d-none d-md-flex">
            <h1 className="text-heading">Quantum Journey Of Exponential Growth</h1>
            <h4 className="text-heading1">Fueled By Innovation And Powered By Yexponent </h4>
        </div>
    </section>
    <div className="w3-container w3-center w3-animate-bottom">
    <div className="clients-container">
        <ul className="d-flex DM-sans justify-content-between reban-sub">
            <li className="none2">
                <h2 className="head">04</h2>
                <p className="para2">Locations</p>
            </li>
            <li className="none3">
                <h2 className="head">20<span className="plus">+</span></h2>
                <p className="para">Clients</p>
            </li>
            <li className="none">
                <h2 className="head">02</h2>
                    <div className="sub-outer">
                        <div >
                            <p className="heading1">Years</p>
                            <p className="heading1">Avg Client Tenure</p>
                        </div>
                    </div>
                </li>
                <li className="none">
                    <h2 className="head">50<span className="plus">+</span></h2>
                    <p className="para">Employees</p>
                </li>
            </ul>
        </div>
        </div>
        <Images />
        <div className="container-fluid">
            <div className="row part-heading28">
              <div className="text-part1 col-12 col-lg-5 mr-0">
                <h1 className="learn ml-5">What is Lorem Ipsum?</h1>
                <div className="why ml-5">Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy texto f the printing and type setting industry.</div>
                <div
                  className={`hover-box ml-5 ${
                    isHoveredBtn401 ? 'hovered' : 'outer-circle'
                  }`}
                  onMouseEnter={handleMouseEnter401}
                  onMouseLeave={handleMouseLeave401}
                >
                  Explore
                  <div  className={`hover-box ${
                    isHoveredBtn401 ? 'inner-circle2' : 'inner-circle'
                  }`}  >
                    <FaArrowRight />
                  </div>
                </div>
                </div>
                <div className="d-none d-lg-flex col-lg-7 ml-0">
          <img src={imageBgPic} alt="" className="image-bg-pic"/>
        </div>
        </div>
      </div>
       <Animations />
        <Industries />
        <Commants />
        <Ycard />
</div>
)
  }

export default Home;
// import Slider from 'react-slick'
import {FaArrowRight} from "react-icons/fa"
import React, { useState } from 'react';
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./index.css"

const settings = {
  dots: false,
  slidesToScroll: 1,
  slidesToShow: 4,
}

function Industries() {
  const [isHoveredCard1, setIsHoveredCard1] = useState(false);
  const [isHoveredCard2, setIsHoveredCard2] = useState(false);
  const [isHoveredCard3, setIsHoveredCard3] = useState(false);
  const [isHoveredCard4, setIsHoveredCard4] = useState(false);
  const [isHoveredButton01, setIsHoveredBtn01] = useState(false);
  const [isHoveredButton02, setIsHoveredBtn02] = useState(false);
  const [isHoveredButton03, setIsHoveredBtn03] = useState(false);
  const [isHoveredButton04, setIsHoveredBtn04] = useState(false);
  const [isHoveredButton05, setIsHoveredBtn05] = useState(false);
  const [isHoveredButton1, setIsHoveredBtn1] = useState(false);
  const [isHoveredButton2, setIsHoveredBtn2] = useState(false);
  const [isHoveredButton3, setIsHoveredBtn3] = useState(false);
  const [isHoveredButton4, setIsHoveredBtn4] = useState(false);

  const handleMouseEnter21 = () => {
    setIsHoveredCard1(true);
  };

  const handleMouseLeave21  = () => {
    setIsHoveredCard1(false);
  };

  const handleMouseEnter22 = () => {
    setIsHoveredCard2(true);
  };

  const handleMouseLeave22  = () => {
    setIsHoveredCard2(false);
  };


  const handleMouseEnter23 = () => {
    setIsHoveredCard3(true);
  };

  const handleMouseLeave23  = () => {
    setIsHoveredCard3(false);
  };


  const handleMouseEnter24 = () => {
    setIsHoveredCard4(true);
  };

  const handleMouseLeave24  = () => {
    setIsHoveredCard4(false);
  };


  const handleMouseEnter01 = () => {
    setIsHoveredBtn01(true);
  };

  const handleMouseLeave01  = () => {
    setIsHoveredBtn01(false);
  };

  const handleMouseEnter02 = () => {
    setIsHoveredBtn02(true);
  };

  const handleMouseLeave02  = () => {
    setIsHoveredBtn02(false);
  };

  const handleMouseEnter03 = () => {
    setIsHoveredBtn03(true);
  };

  const handleMouseLeave03  = () => {
    setIsHoveredBtn03(false);
  };

  const handleMouseEnter04 = () => {
    setIsHoveredBtn04(true);
  };

  const handleMouseLeave04  = () => {
    setIsHoveredBtn04(false);
  };

  
  const handleMouseEnter05 = () => {
    setIsHoveredBtn05(true);
  };

  const handleMouseLeave05  = () => {
    setIsHoveredBtn05(false);
  };

  const handleMouseEnter11 = () => {
    setIsHoveredBtn1(true);
  };

  const handleMouseLeave11  = () => {
    setIsHoveredBtn1(false);
  };

  const handleMouseEnter12 = () => {
    setIsHoveredBtn2(true);
  };

  const handleMouseLeave12  = () => {
    setIsHoveredBtn2(false);
  };

  const handleMouseEnter13 = () => {
    setIsHoveredBtn3(true);
  };

  const handleMouseLeave13  = () => {
    setIsHoveredBtn3(false);
  };

  const handleMouseEnter14 = () => {
    setIsHoveredBtn4(true);
  };

  const handleMouseLeave14  = () => {
    setIsHoveredBtn4(false);
  };

 return(<div className="industries-container">
     <h1 className="industries-heading">Industries We Cater To</h1>
     <div className="row22">
        <button type="button" className={`hover-box ${isHoveredButton01 ? 'trans2' : 'trans1'}`} 
             onMouseEnter={handleMouseEnter01}
             onMouseLeave={handleMouseLeave01} >Education</button>
        <button type="button" className={`hover-box ${isHoveredButton02 ? 'trans2' : 'trans1'}`} 
             onMouseEnter={handleMouseEnter02}
             onMouseLeave={handleMouseLeave02} >Health</button>
        <button type="button" className={`hover-box ${isHoveredButton03 ? 'trans2' : 'trans1'}`} 
             onMouseEnter={handleMouseEnter03}
             onMouseLeave={handleMouseLeave03} >Retail</button>
        <button type="button" className={`hover-box ${isHoveredButton04 ? 'trans2' : 'trans1'}`} 
             onMouseEnter={handleMouseEnter04}
             onMouseLeave={handleMouseLeave04} >Oil&gas</button>
        <button type="button" className={`hover-box ${isHoveredButton05 ? 'trans2' : 'trans1'}`} 
             onMouseEnter={handleMouseEnter05}
             onMouseLeave={handleMouseLeave05} >Govenment</button>
     </div>
     <div className="card-line2">
     <Slider {...settings}>
         <div className={`hover-box ${isHoveredCard1 ? 'img-con2' : 'img-con'}`} 
             onMouseEnter={handleMouseEnter21}
             onMouseLeave={handleMouseLeave21}>
            <h1 className="edu">Education</h1>
            <p className="edu-para">Saudi Arabia’s National Water Company consolidates and transforms comprehensively</p>
            <div
                  className={`hover-box ${
                    isHoveredButton1 ? 'hovered' : 'outer-circle'
                  }`}
                  onMouseEnter={handleMouseEnter11}
                  onMouseLeave={handleMouseLeave11}
                >
                  Explore
                  <div  className={`hover-box ${
                    isHoveredButton1
                    ? 'inner-circle2' : 'inner-circle'
                  }`}  >
                    <FaArrowRight />
                  </div>
                </div>
        </div>
        <div className={`hover-box ${isHoveredCard2 ? 'img-con2' : 'img-con'}`} 
             onMouseEnter={handleMouseEnter22}
             onMouseLeave={handleMouseLeave22}>
            <h1 className="edu">Education</h1>
            <p className="edu-para">Saudi Arabia’s National Water Company consolidates and transforms comprehensively</p>
            <div
                  className={`hover-box ${
                    isHoveredButton2 ? 'hovered' : 'outer-circle'
                  }`}
                  onMouseEnter={handleMouseEnter12}
                  onMouseLeave={handleMouseLeave12}
                >
                  Explore
                  <div  className={`hover-box ${
                    isHoveredButton2 ? 'inner-circle2' : 'inner-circle'
                  }`}  >
                    <FaArrowRight />
                  </div>
                </div>
        </div>
        <div className={`hover-box ${isHoveredCard3 ? 'img-con2' : 'img-con'}`} 
             onMouseEnter={handleMouseEnter23}
             onMouseLeave={handleMouseLeave23}>
            <h1 className="edu">Education</h1>
            <p className="edu-para">Saudi Arabia’s National Water Company consolidates and transforms comprehensively</p>
            <div
                  className={`hover-box ${
                    isHoveredButton3 ? 'hovered' : 'outer-circle'
                  }`}
                  onMouseEnter={handleMouseEnter13}
                  onMouseLeave={handleMouseLeave13}
                >
                  Explore
                  <div  className={`hover-box ${
                    isHoveredButton3 ? 'inner-circle2' : 'inner-circle'
                  }`}  >
                    <FaArrowRight />
                  </div>
                </div>
        </div>
        <div className={`hover-box ${isHoveredCard4 ? 'img-con2' : 'img-con'}`} 
             onMouseEnter={handleMouseEnter24}
             onMouseLeave={handleMouseLeave24}>
            <h1 className="edu">Education</h1>
            <p className="edu-para">Saudi Arabia’s National Water Company consolidates and transforms comprehensively</p>
            <div
                  className={`hover-box ${
                    isHoveredButton4 ? 'hovered' : 'outer-circle'
                  }`}
                  onMouseEnter={handleMouseEnter14}
                  onMouseLeave={handleMouseLeave14}
                >
                  Explore
                  <div  className={`hover-box ${
                    isHoveredButton4 ? 'inner-circle2' : 'inner-circle'
                  }`}  >
                    <FaArrowRight />
            </div>
          </div>
          
       </div>
      
       </Slider>
    </div>
</div>)
}

export default Industries
import img from "../../assets/static-data-apis/block-03-image-with-content/media-files/left.jpg"
import {FaArrowRight} from "react-icons/fa"
import "./index.css"
import React, { useState } from 'react';

function Images() {
  const [isHovered41, setIsHovered41] = useState(false);
  const [isHovered42, setIsHovered42] = useState(false);
  const [isHovered43, setIsHovered43] = useState(false);
  const [isHovered44, setIsHovered44] = useState(false);
  // const [isHovered445, setIsHovered445] = useState(false);

  const handleMouseEnter41 = () => {
    setIsHovered41(true);
  };

  const handleMouseLeave41 = () => {
    setIsHovered41(false);
  };

  // const handleMouseEnter445 = () => {
  //   setIsHovered445(true);
  // };

  // const handleMouseLeave445 = () => {
  //   setIsHovered445(false);
  // };

  const handleMouseEnter42 = () => {
    setIsHovered42(true);
  };

  const handleMouseLeave42 = () => {
    setIsHovered42(false);
  };

  const handleMouseEnter43 = () => {
    setIsHovered43(true);
  };

  const handleMouseLeave43 = () => {
    setIsHovered43(false);
  };

  const handleMouseEnter44 = () => {
    setIsHovered44(true);
  };

  const handleMouseLeave44 = () => {
    setIsHovered44(false);
  };


  return (
   <div className="image-container">
    <div className="image-row">
        <div className="container-fluid">
          <div className="row">
           <img src={img} alt="img" className="height d-flex col-12 col-lg-6"/>
        <div className="text56 col-12 col-lg-6">
            <h1 className="img-text">Technology’s generational moment with generative AI: A CIO and CTO guide</h1>
            <p className="img-para">CIOs and CTOs can take nine actions to reimagine business and technology with generative AI.</p>
            <div className="row901">
            <div className="row22">
                <p className="btn-trans">Harness the power </p>
                <div  >
                    {/* <FaArrowRight className={isHovered445 ? "rgt-arr2": "rgt-arr"} onMouseEnter={handleMouseEnter445} onMouseLeave={handleMouseLeave445}/> */}
                    {/* <br /> */}
                    <FaArrowRight className={isHovered41 ? "right-arrow2" : 'right-arrow'} onMouseEnter={handleMouseEnter41} onMouseLeave={handleMouseLeave41} />
                </div>
            </div>
            <div className="row22 mt-0">
                <p className="btn-trans">Harness the power </p>
                <div >
                <FaArrowRight className={isHovered42 ? "right-arrow2" : 'right-arrow'} onMouseEnter={handleMouseEnter42} onMouseLeave={handleMouseLeave42}/>
                    </div>
                </div>
                </div>
                </div>
    </div>
          </div>
        </div>
        <div className="image-row">
        <div className="container-fluid">
          <div className="row">
           <img src={img} alt="img" className="height d-flex d-lg-none col-12 w-50"/>
        <div className="text56 col-12 col-lg-6">
            <h1 className="img-text">Technology’s generational moment with generative AI: A CIO and CTO guide</h1>
            <p className="img-para">CIOs and CTOs can take nine actions to reimagine business and technology with generative AI.</p>
            <div className="row901">
            <div className="row22">
                <p className="btn-trans">Harness the power </p>
                <div  >
                    <FaArrowRight className={isHovered43 ? "right-arrow2" : 'right-arrow'} onMouseEnter={handleMouseEnter43} onMouseLeave={handleMouseLeave43}/>
                </div>
            </div>
            <div className="row22 mt-0">
                <p className="btn-trans">Harness the power </p>
                <div >
                <FaArrowRight className={isHovered44 ? "right-arrow2" : 'right-arrow'} onMouseEnter={handleMouseEnter44} onMouseLeave={handleMouseLeave44}/>
                    </div>
                </div>
                </div>
                </div>
        <img src={img} alt="img" className="d-none d-lg-flex w-50"/>
    </div>
    </div>
    </div>
    </div>
  
  );
}

export default Images;



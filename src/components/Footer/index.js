import {AiOutlineGlobal} from "react-icons/ai"
import {FaFacebook} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {GrLinkedinOption} from "react-icons/gr"
import {AiFillYoutube} from "react-icons/ai"
import "./index.css"

import React, { useState } from 'react';

const Footer = () => {
  const [isHoveredOver1, setIsHoveredOver1] = useState(false);
  const [isHoveredOver2, setIsHoveredOver2] = useState(false);
  const [isHoveredOver3, setIsHoveredOver3] = useState(false);
  const [isHoveredOver4, setIsHoveredOver4] = useState(false);
  const [isHoveredOver15, setIsHoveredOver15] = useState(false);
  const [isHoveredIcon1, setIsHoveredIcon1] = useState(false);
  const [isHoveredIcon2, setIsHoveredIcon2] = useState(false);
  const [isHoveredIcon3, setIsHoveredIcon3] = useState(false);
  const [isHoveredIcon4, setIsHoveredIcon4] = useState(false);

  const handleMouseEnterOver1 = () => {
    setIsHoveredOver1(true);
  };

  const handleMouseLeaveOver1 = () => {
    setIsHoveredOver1(false);
  };

  const handleMouseEnterOver2 = () => {
    setIsHoveredOver2(true);
  };

  const handleMouseLeaveOver2 = () => {
    setIsHoveredOver2(false);
  };

  const handleMouseEnterOver3 = () => {
    setIsHoveredOver3(true);
  };

  const handleMouseLeaveOver3 = () => {
    setIsHoveredOver3(false);
  };

  const handleMouseEnterOver4 = () => {
    setIsHoveredOver4(true);
  };

  const handleMouseLeaveOver4 = () => {
    setIsHoveredOver4(false);
  };

  const handleMouseEnterOver15 = () => {
    setIsHoveredOver15(true);
  };

  const handleMouseLeaveOver15 = () => {
    setIsHoveredOver15(false);
  };

  const handleMouseEnterIcon1 = () => {
    setIsHoveredIcon1(true);
  };

  const handleMouseLeaveIcon1 = () => {
    setIsHoveredIcon1(false);
  };

  const handleMouseEnterIcon2 = () => {
    setIsHoveredIcon2(true);
  };

  const handleMouseLeaveIcon2 = () => {
    setIsHoveredIcon2(false);
  };

  const handleMouseEnterIcon3 = () => {
    setIsHoveredIcon3(true);
  };

  const handleMouseLeaveIcon3 = () => {
    setIsHoveredIcon3(false);
  };

  const handleMouseEnterIcon4 = () => {
    setIsHoveredIcon4(true);
  };

  const handleMouseLeaveIcon4 = () => {
    setIsHoveredIcon4(false);
  };

  return (
    <div className="footer-client">
    <div className="col">
        <div className="footer-container">
            <h1 className="heading21">Industries</h1>
            <ul className={`hover-div ${isHoveredOver1 ? 'scroll21' : 'scroll20'}`}
      onMouseEnter={handleMouseEnterOver1}
      onMouseLeave={handleMouseLeaveOver1}>
                <li className="list">Automotive</li>
                <li className="list">Construction</li>
                <li className="list">and Engineering</li>
                <li className="list">Education</li>
                <li className="list">Financial</li>
                <li className="list">Services</li>
                <li className="list">Communications</li>
                <li className="list">Consumer</li>
                <li className="list">Packaged Goods</li>
                <li className="list">Energy and</li>
                <li className="list">Water</li>
                <li className="list">Food and</li>
                <li className="list">Beverage</li>
            </ul>
        </div>
        <div className="footer-container">
            <h1 className="heading21">Services</h1>
            <ul  className={`hover-div ${isHoveredOver2 ? 'scroll21' : 'scroll20'}`}
      onMouseEnter={handleMouseEnterOver2}
      onMouseLeave={handleMouseLeaveOver2}>
                <li className="list">Overview</li>
                <li className="list">Audit</li>
                <li className="list">Assurance</li>
                <li className="list">Strategy,Analytics &</li>
                <li className="list">M&A</li>
                <li className="list">Enterprise,</li>
                <li className="list">Technology</li>
                <li className="list">Performance</li>
                <li className="list">Human Capital</li>
                <li className="list">Core Business</li>
                <li className="list">Operations</li>
                <li className="list">Customer</li>
                <li className="list">Marketing</li>
            </ul>
        </div>
        <div className="footer-container">
            <h1 className="heading21">Products</h1>
            <ul  className={`hover-div ${isHoveredOver3 ? 'scroll21' : 'scroll20'}`}
      onMouseEnter={handleMouseEnterOver3}
      onMouseLeave={handleMouseLeaveOver3}>
                <li className="list">cloud infrastructure</li>
                <li className="list">overview</li>
                <li className="list">analytics and BI</li>
                <li className="list">Cloud regions</li>
                <li className="list">compute</li>
                <li className="list">Ai and Machine</li>
                <li className="list">Leaarning</li>
                <li className="list">Big Date</li>
                <li className="list">cloud Regicompliance</li>
                <li className="list">compute containers</li>
                <li className="list">and Functions</li>
                <li className="list">Cost Management and</li>
                <li className="list">Governance</li>
            </ul>
        </div>
        <div className="footer-container">
            <h1 className="heading21">Why Yexponent</h1>
            <ul  className={`hover-div ${isHoveredOver4 ? 'scroll21' : 'scroll20'}`}
      onMouseEnter={handleMouseEnterOver4}
      onMouseLeave={handleMouseLeaveOver4}>
                <li className="list">What is yexponent</li>
                <li className="list">one of the largest</li>
                <li className="list">global netwerks</li>
                <li className="list">how Yexponent</li>
                <li className="list">continues to innovate</li>
                <li className="list">yexponent is a trusted</li>
                <li className="list">partner to millions</li>
                <li className="list">case studies</li>
                <li className="list">Explore our Trust hub</li>
                <li className="list">Webinars</li>
                <li className="list">industry analysts on</li>
                <li className="list">yexponent</li>
                <li className="list">solutions & product</li>
            </ul>
        </div>
        <div className="footer-container">
            <h1 className="heading21">Resources</h1>
            <ul  className={`hover-div ${isHoveredOver15 ?'scroll21' : 'scroll20'}`}
      onMouseEnter={handleMouseEnterOver15}
      onMouseLeave={handleMouseLeaveOver15}>
                <li className="list">Support</li>
                <li className="list">Renew Support</li>
                <li className="list">Oracle Support Rewards</li>
                <li className="list">Critical Patch Updates</li>
                <li className="list">Community</li>
                <li className="list">Critical Patch Upadtes</li>
                <li className="list">Cloud Console Login</li>
                <li className="list">My Oracle Support</li>
                <li className="list">Consumer success Services</li>
                <li className="list">Run and Oparate Services</li>
                <li className="list">Implementation and migration</li>
                <li className="list">Services</li>
                <li className="list">Training and Certification</li>
            </ul>
        </div>
    </div>
    <div className="logos mt-3">
    <div className="container-fluid">
      <div className="row card-row">
        <ul className="row15">
            <li className="list2"><AiOutlineGlobal className="logo"/>country/Region</li>
            <li className="list3">Careers</li>
            <li className="list3">Developers</li>
            <li className="list3">Investors</li>
            <li className="list3">Partners</li>
            <li className="list3">Researches</li>
            <li className="list3">studentsandEducations</li>
        </ul>
            <div className="logo-container" >
                <FaFacebook className={`hover-div ${isHoveredIcon1 ? 'logo2' : 'logo'}`}
      onMouseEnter={handleMouseEnterIcon1}
      onMouseLeave={handleMouseLeaveIcon1}/>
                <BsTwitter className={`hover-div ${isHoveredIcon2 ? 'logo2' : 'logo'}`}
      onMouseEnter={handleMouseEnterIcon2}
      onMouseLeave={handleMouseLeaveIcon2}/>
                <GrLinkedinOption className={`hover-div ${isHoveredIcon3 ? 'logo2' : 'logo'}`}
      onMouseEnter={handleMouseEnterIcon3}
      onMouseLeave={handleMouseLeaveIcon3}/>
                <AiFillYoutube className={`hover-div ${isHoveredIcon4 ? 'logo3' : 'logo'}`}
      onMouseEnter={handleMouseEnterIcon4}
      onMouseLeave={handleMouseLeaveIcon4}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
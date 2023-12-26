import React, { useState } from 'react';
import {Link} from "react-router-dom"
import {BiChevronRight} from "react-icons/bi"
import {BiChevronLeft} from "react-icons/bi"
import {IoMdRadioButtonOff} from "react-icons/io"
import {IoMdRadioButtonOn} from "react-icons/io"
import {MdKeyboardArrowDown} from "react-icons/md"
import {MdKeyboardArrowUp} from "react-icons/md"
import "./index.css"

const Login = () => {
  const [isOpen001, setIsOpen001] = useState(false);
  const [isOpen002, setIsOpen002] = useState(false);
  const [isOpen003, setIsOpen003] = useState(false);
  const [isOpen004, setIsOpen004] = useState(false);
  const [toShowMore, setToShowMore] = useState(false);
  const [isOpen005, setIsOpen005] = useState(false);
  const [isOpen006, setIsOpen006] = useState(false);
  
  
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
      // Event handler for input changes
      // const handleInputChange = (e) => {
      //   const { name, value } = e.target;
      //   setFormData({ ...formData, [name]: value });
      // };
    
      // Event handler for form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, like sending it to a server
        console.log(formData);
        setFormData({formData})
      };

      const handleMouseEnter001 = () => {
        setIsOpen001(true);
        
      };
    
      const handleMouseLeave001 = () => {
        setIsOpen001(false);
      };

      const handleMouseEnter002 = () => {
        setIsOpen002(true);
        
      };
    
      const handleMouseLeave002 = () => {
        setIsOpen002(false);
      };

      const handleMouseEnter003 = () => {
        setIsOpen003(true);
        
      };
    
      const handleMouseLeave003 = () => {
        setIsOpen003(false);
      };

      const handleMouseEnter004 = () => {
        setIsOpen004(true);
        
      };
    
      const handleMouseLeave004 = () => {
        setIsOpen004(false);
      };

      const handleMouseEnter005 = () => {
        setIsOpen005(true);
        
      };
    
      const handleMouseLeave005 = () => {
        setIsOpen005(false);
      };


      const handleMouseEnter006 = () => {
        setIsOpen006(true);
        
      };
    
      const handleMouseLeave006 = () => {
        setIsOpen006(false);
      };


      const onClickToShowMore = () => {
        setToShowMore(!toShowMore)
      }
    
    return( 
    <div className='book-a-container2'>
    <div className='book-a-container text-left'>
        <div className='login-container34'>
            <div className="col-12">
            <h1 className='login-heading'>What descripes your current function ?</h1>
            <p className='login-paragraph mb-0'>choose "Show more" for more options</p>
            <form onSubmit={handleSubmit} className='mt-0'>
            {/* <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className='form-control-text-input'
        /> */}
      <br />
      <Link to="/loginbussines" className="dec"><button type="button" className={isOpen001 ? "form-control-text-input2":'form-control-text-input'} onMouseEnter={handleMouseEnter001} onMouseLeave={handleMouseLeave001} >{isOpen001 ? <IoMdRadioButtonOn />:<IoMdRadioButtonOff />}<p className='product-mana'>PRODUCT Management</p></button></Link>
      <Link to="/loginmarking" className="dec"><button type="button" className={isOpen002 ? "form-control-text-input2":'form-control-text-input'} onMouseEnter={handleMouseEnter002} onMouseLeave={handleMouseLeave002}>{isOpen002 ? <IoMdRadioButtonOn />:<IoMdRadioButtonOff />}<p className='product-mana'>MARKETING</p></button></Link>
        <button type="button" className={isOpen003 ? "form-control-text-input2":'form-control-text-input'} onMouseEnter={handleMouseEnter003} onMouseLeave={handleMouseLeave003}>{isOpen003 ? <IoMdRadioButtonOn />:<IoMdRadioButtonOff />}<p className='product-mana'>FOUNDERS/CEO</p></button>
        <button type="button" className={isOpen004 ? "form-control-text-input2":'form-control-text-input'} onMouseEnter={handleMouseEnter004} onMouseLeave={handleMouseLeave004}>{isOpen004 ? <IoMdRadioButtonOn />:<IoMdRadioButtonOff />}<p className='product-mana'>FOUNDERS OFFICE/CHIF OF STAFF FOUNDERS</p></button>
        {toShowMore && <> <button type="button" className={isOpen005 ? "form-control-text-input2":'form-control-text-input'} onMouseEnter={handleMouseEnter005} onMouseLeave={handleMouseLeave005}>{isOpen005 ? <IoMdRadioButtonOn />:<IoMdRadioButtonOff />}<p className='product-mana'>FOUNDERS/CEO</p></button>
        <button type="button" className={isOpen006 ? "form-control-text-input2":'form-control-text-input'} onMouseEnter={handleMouseEnter006} onMouseLeave={handleMouseLeave006}>{isOpen006 ? <IoMdRadioButtonOn />:<IoMdRadioButtonOff />}<p className='product-mana'>FOUNDERS OFFICE/CHIF OF STAFF</p></button></>}
        
        <p className='show' onClick = {onClickToShowMore}>{toShowMore ? <><BiChevronLeft /> Back</> :<>show more <BiChevronRight /></>}</p>
        <div className='row'>
        <Link to="/loginbussines" className="dec"><button type="submit" className='login-button2'>Next</button></Link>
       <p className='show pl-2'>press enter</p>
      </div>
    </form>
    </div>
            </div>
            </div>
            <div className='end-container'>
              <Link to="/login" className="dec">
              <MdKeyboardArrowUp className='color34'/></Link>
              <Link to="/loginbussines" className="dec">
              <MdKeyboardArrowDown className='color34'/></Link>
            </div>
            </div>
    )
}

export default Login;



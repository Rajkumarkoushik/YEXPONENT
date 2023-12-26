import React, { useState } from 'react';
import {Link} from "react-router-dom"
import {IoMdRadioButtonOff} from "react-icons/io"
import {IoMdRadioButtonOn} from "react-icons/io"
import {MdKeyboardArrowDown} from "react-icons/md"
import {MdKeyboardArrowUp} from "react-icons/md"
import "./index.css"

const LoginBussines = () => {
  const [isOpen001, setIsOpen001] = useState(false);
  const [isOpen002, setIsOpen002] = useState(false);
  
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


    
    return( 
    <div className='book-a-container2'>
    <div className='book-a-container text-left'>
        <div className='login-container34'>
            <div className="col-12">
            <h1 className='login-heading mb-0'>What descripes your current rule?*</h1>
            <form onSubmit={handleSubmit} className='mt-0'>
            {/* <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className='form-control-text-input'
        /> */}
      <br />
      <Link to="/loginbussines" className="dec"><button type="button" className={isOpen001 ? "form-control-text-input2":'form-control-text-input'} onMouseEnter={handleMouseEnter001} onMouseLeave={handleMouseLeave001} >{isOpen001 ? <IoMdRadioButtonOn />:<IoMdRadioButtonOff />}<p className='product-mana'>APM,PM1</p></button></Link>
      <Link to="/loginmarking" className="dec"><button type="button" className={isOpen002 ? "form-control-text-input2":'form-control-text-input'} onMouseEnter={handleMouseEnter002} onMouseLeave={handleMouseLeave002}>{isOpen002 ? <IoMdRadioButtonOn />:<IoMdRadioButtonOff />}<p className='product-mana'>PM2,SPM,PRODUCT LEAD</p></button></Link>
        <div className='row'>
        <Link to="/loginmarking" className="dec"><button type="submit" className='login-button2'>Next</button></Link>
       <p className='show pl-2'>press enter</p>
      </div>
    </form>
    </div>
            </div>
            </div>
            <div className='end-container'>
            <Link to="/login" className="dec">
              <MdKeyboardArrowUp className='color34'/></Link>
              <Link to="/loginmarking" className="dec">
              <MdKeyboardArrowDown className='color34'/></Link>
            </div>
            </div>
    )
}

export default LoginBussines;



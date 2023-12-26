import React, { useState } from 'react';
import "./index.css"

const FormData = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!formData.username || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    // Process the form data (e.g., send it to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className=''>
    <div className='book-a-container text-left'>
        <div className='login-container34'>
            <div className="col-12">
    <form onSubmit={handleSubmit} >
    <div className='book-a-container98'>
      <div className='col87'>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder='ENTER YOUR NAME'
          className='form-control-text-input-phone mb-0'
          required
        />
        <hr className='hr-line02 mt-0'/>
        </div>
        <div className='col87'>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='ENTER YOUR GMAIL'
          className='form-control-text-input-phone mb-0'
          required
        />
        <hr className='hr-line02 mt-0'/>
        </div>
    <div className='col87'>
        <input
          type="email"
          name="email"
          value={formData.phone}
          onChange={handleChange}
          placeholder='ENTER YOUR PHONE NUMBER'
          className='form-control-text-input-phone mb-0'
          required
        />
        <hr className='hr-line02 mt-0'/>
     </div>

      <button type="submit" className='login-button mt-3'>Submit</button>
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default FormData;

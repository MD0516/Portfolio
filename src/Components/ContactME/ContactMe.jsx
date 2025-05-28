import React, { use } from 'react'
import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import sent from './sent.json'

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        msg: ''
    });

    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add('popup-open');
            setTimeout(() =>setShow(true), 10)
        } else {
            document.body.classList.remove('popup-open');
        }
        return () => {
            document.body.classList.remove('popup-open');
        }
    }, [showPopup]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbz13H8i2xoJOg6pDp5WZJE5YfKGxe_6kepMmzKI24mhWjslZqLloX5k70FI_giKoHGw4A/exec'

        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('phoneNumber', formData.phoneNumber);
        form.append('msg', formData.msg);
        
        try{
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: form,
            });
            if (response.ok){
                setShowPopup(true);
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    msg: ''
                })
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again later.');
        }
    }
    

  return (
    <div className={`contact-me my-5 py-5 d-flex flex-column align-items-center justify-contents-center gap-5`} onClick={() => setShowPopup(false)}>
        <div>
            <a className='text-decoration-none btn' href="https://wa.me/919941161100?text=Hi%20Murali%2C%20I%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20your%20work.%20Can%20we%20talk%3F">
                <h3 className='popup-font fw-bolder text-black'>Contact Me on whatsapp <i className='bi bi-whatsapp'></i></h3>
            </a>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className='contact-form container gap-5 '>
                <div className='row gap-5 row-1 ' >
                    <div className=' col-md gap-5-4'>  
                        <label htmlFor="name" className='fs-2 display-1 my-4 popup-font fw-bolder'><h1>Name</h1></label>                      
                        <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />                        
                    </div>
                    <div className=' col-md gap-5'>
                        <label htmlFor="email" className='fs-2 display-1 my-4 popup-font fw-bolder'> <h1>E-Mail</h1></label>
                        <input type="email" name="email" id="email" placeholder='E-Mail' value={formData.email} onChange={handleChange} required/>                        
                    </div>
                </div>
                <div className='row gap-5 row-1'>
                    <div className='col-md gap-5'>

                        <label htmlFor="phoneNumber" className='fs-2 display-1 my-4 popup-font fw-bolder'><h1>Phone Number</h1></label>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder='Phone Number' value={formData.phoneNumber} onChange={handleChange} required/>
                    </div>
                    <div className='col-md gap-5'>
                        <label htmlFor="msg" className='fs-2 display-1 my-4 popup-font fw-bolder'><h1>Message</h1></label>
                        <textarea type="text" name="msg" id="msg" placeholder='Message' value={formData.msg} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center '>
                    <button type="submit" className='btn btn-submit btn-lg popup-font fw-bold p-3 fs-3'>
                        Send Message <i className='bi bi-arrow-right-square'></i>
                    </button>
                </div>
            </div>
        </form>
        {
            showPopup && (
                <div className={`static-bg ${show ? 'show' : ''}`} onClick={() => setShowPopup(false)}>
                    <div className={`custom-center ${show ? 'show' : ''}`} >
                        <div className='glass-effect d-flex flex-column justify-content-center align-items-center p-5 popup-font'>
                            <div>
                                <Lottie animationData={sent} loop={false} className='lottie-animation ' style={{width:'100px', height:'100px'}} />
                            </div>
                            <br />
                            <div>
                                <h2 className='text-center text-black'>Message Sent Successfully!</h2>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <button className='btn btn-close btn-outline-danger p-3 ' onClick={() => setShowPopup(false)}>
                                </button>
                            </div>                    
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ContactMe
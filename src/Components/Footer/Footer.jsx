import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <button className='btn btn-dark position-fixed bottom-0 end-0 m-3' style={{zIndex: 1000}} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <i className='bi bi-arrow-up-circle'></i>
        </button>
        <div className='bg-black d-flex flex-column flex-md-row justify-content-around align-items-center lh-base text-center ' style={{height: 'fit-content', minHeight: '200px'}}>
            
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 p-3 popup-font footer-links'>
                <Link to="/home" className='text-decoration-none text-white fs-3 custom-hover'><h2>HOME</h2></Link>
                <Link to="/projects" className='text-decoration-none text-white fs-3 custom-hover'><h2>PROJECTS</h2></Link>
                <Link to="/about" className='text-decoration-none text-white fs-3 custom-hover'><h2>ABOUT ME</h2></Link>
                <Link to="/contact-me" className='text-decoration-none text-white fs-3 custom-hover'><h2>CONTACT</h2></Link>
            </div>
            <div className='gap-3 p-3 '>                
                <p className='fs-3 text-white popup-font custom-hover'><a className='text-decoration-none text-white ' href="mailto:msmurali2005@gmail.com">msmurali2005@gmail.com</a></p>
                <p className='fs-3 text-white popup-font custom-hover'><a className='text-decoration-none text-white ' href="tel:+919941161100">9941161100</a></p>
                <div className='d-flex justify-content-center align-items-center gap-3'>
                    <a href="https://wa.me/919941161100?text=Hi%20Murali%2C%20I%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20your%20work.%20Can%20we%20talk%3F" className='custom-hover' target='_blank'><i className='bi bi-whatsapp fs-3 text-white'></i></a>
                    <a href="https://www.instagram.com/hatetosocializ.e/" className='custom-hover' target='_blank' ><i className='bi bi-instagram fs-3 text-white ' ></i></a>
                    <a href="https://www.linkedin.com/in/murali-dharan-30163a248/" className='custom-hover' target='_blank'><i className='bi bi-linkedin fs-3 text-white'></i></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <button className='btn btn-dark position-fixed bottom-0 end-0 m-3' style={{zIndex: 1000}} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <i className='bi bi-arrow-up-circle'></i>
        </button>
        <div className='bg-black d-flex flex-column flex-md-row justify-content-around align-items-center lh-base text-center ' style={{height: '50vh'}}>
            
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 p-3 custom-letter-spacing'>
                <h2><Link to="/" className='text-decoration-none text-white fs-3'>HOME</Link></h2>
                <h2><Link to="/projects" className='text-decoration-none text-white fs-3'>PROJECTS</Link></h2>
                <h2><Link to="/about" className='text-decoration-none text-white fs-3'>ABOUT ME</Link></h2>
                <h2><Link to="/contact-me" className='text-decoration-none text-white fs-3'>CONTACT</Link></h2>
            </div>
            <div className='gap-3 p-3'>
                
                <p className='fs-3 text-white custom-font-roboto '><a className='text-decoration-none text-white' href="mailto:msmurali2005@gmail.com">msmurali2005@gmail.com</a></p>
                <p className='fs-3 text-white custom-font-roboto'><a className='text-decoration-none text-white' href="tel:+919941161100">9941161100</a></p>
            </div>
        </div>
    </>
  )
}

export default Footer
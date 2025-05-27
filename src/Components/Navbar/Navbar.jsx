import React from 'react'
import menu from './Menu.svg'
import close from './close.svg'
import {useState , useEffect, useRef} from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('navbar-hide_sticky'); 
      } else if (currentScrollPos !== 0) {
        setIsSticky('navbar_show  navbar-hide_sticky'); 
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, [prevScrollPos]);
  
  return (
    <div className={`bg-black d-flex flex-row w-100 justify-content-between ${isSticky ? isSticky : ''}`}>
        <Link to="/" className='text-white fs-1 text-decoration-none px-5 custom-letter-spacing' > PF </Link>
        <nav className='navbar navbar-dark p-3'>
            <button className='navbar-toggler' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop " aria-controls="offcanvasTop" >
                <img src={menu} />
            </button>

            <div className='offcanvas offcanvas-top bg-white offcanvas-custom-height' tabIndex={-1} id = "offcanvasTop" aria-labelledby='offcanvasTopLabel'>
              <div className='offcanvas-header px-5'><h3 className=' custom-letter-spacing'>M E N U</h3>
                <button className='btn-close px-5' data-bs-dismiss='offcanvas' aria-label='close'> <img src={close} /> </button>
              </div>
              <div className="offcanvas-body">
                
                <div className='d-flex flex-row align-items-center justify-content-center'> 
                  <div className='d-flex flex-row '>
                   
                    <ul className='list-unstyled text-decoration-none'>
                      <li><Link to="/home" className='text-decoration-none text-black'><h2 className='display-2'>Home</h2></Link></li>
                      <li><Link to="/projects"  className='text-decoration-none text-black'><h2 className='display-2'>Projects</h2></Link></li>
                      <li><Link to="/about" className='text-decoration-none text-black'><h2 className='display-2'>About</h2></Link></li>
                      <li><Link to="/contact-me" className='text-decoration-none text-black'><h2 className='display-2'>Contact Me</h2></Link></li>
                    </ul>
                  </div>                  
                </div>
              </div>
          </div>  
        </nav>
        
    </div>
  )
}

export default Navbar
import React from 'react'
import menu from './Menu.svg'
import close from './close.svg'
import {useState , useEffect, useRef} from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  const [isSticky, setIsSticky] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const offCanvasRef = useRef(null);

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

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;

      if (innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const closeCanvas = () => {
    if (offCanvasRef.current) {
      const bsOffCanvas = bootstrap.Offcanvas.getInstance(offCanvasRef.current);
      if (bsOffCanvas) bsOffCanvas.hide();
    }
  }

  return (
    <div className={`bg-black d-flex flex-row w-100 justify-content-between align-items-center ${isSticky ? isSticky : ''}`} style={{height: "fit-content"}}>
        <Link to="/" className='text-white text-decoration-none p-3 popup-font fw-bolder' ><h2> PF </h2></Link>
        <div> 
          { !isMobile &&
            <nav className='desktop-nav mx-4'>
                <Link to="/home" className='text-decoration-none text-white custom-hover'><h2 className=' popup-font fw-bolder'>Home</h2></Link>
                <Link to="/projects"  className='text-decoration-none text-white custom-hover'><h2 className=' popup-font fw-bolder'>Projects</h2></Link>
                <Link to="/about" className='text-decoration-none text-white custom-hover'><h2 className=' popup-font fw-bolder'>About</h2></Link>
                <Link to="/contact-me" className='text-decoration-none text-white custom-hover'><h2 className=' popup-font fw-bolder'>Contact</h2></Link>
            </nav>
          }  
        </div>
      { isMobile && 
          <nav className='navbar navbar-dark p-3 mobile-nav'  >
              <button className='navbar-toggler ' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" >
                  <img src={menu} />
              </button>

              <div ref={offCanvasRef} className='offcanvas offcanvas-top bg-white offcanvas-custom-height' tabIndex={-1} id = "offcanvasTop" aria-labelledby='offcanvasTopLabel'>

                <div className='offcanvas-header px-5'>
                  <h3 className=' custom-letter-spacing'>M E N U</h3>
                  <button className='btn-close px-5' data-bs-dismiss='offcanvas' aria-label='close'> </button>
                </div>

                <div className="offcanvas-body">                  
                  <div className='d-flex flex-row align-items-center justify-content-center'> 
                    <div className='d-flex flex-column '>                    
                        <Link to="/projects"  className='text-decoration-none text-black' onClick={closeCanvas}><h2 className='display-2 popup-font fw-bolder'>Projects</h2></Link>
                        <Link to="/home" className='text-decoration-none text-black' onClick={closeCanvas}><h2 className='display-2 popup-font fw-bolder'>Home</h2></Link>
                        <Link to="/about" className='text-decoration-none text-black' onClick={closeCanvas}><h2 className='display-2 popup-font fw-bolder'>About</h2></Link>
                        <Link to="/contact-me" className='text-decoration-none text-black' onClick={closeCanvas}><h2 className='display-2 popup-font fw-bolder'>Contact</h2></Link>
                    </div>                  
                  </div>
                </div>
            </div>  
          </nav>
      }  
    </div>
  )
}

export default Navbar
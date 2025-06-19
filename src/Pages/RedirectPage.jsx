import React, { useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RedirectPage = () => {
    const [xDir, setXDir] = useState(window.innerWidth > 768 ? 200 : 13);
  
    useEffect(() => {
      const handleResize = () => {
        const isDesktopNow = window.innerWidth > 768;
        setXDir(isDesktopNow ? 200 : 13);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div className='d-flex justify-content-center align-items-center w-100 container-fluid' style={{ height: '100vh'}}>
        <motion.div initial={{ opacity: 0, scale: 0}} animate={{ opacity: 1, scale: 1}} exit={{ opacity: 0, scale: 0}} transition={{ duration: .8, ease: 'easeInOut'}} className='d-flex flex-column justify-content-center align-items-center gap-2 p-4 fw-bold message '>
            <motion.p initial={{ opacity: 0, x: -xDir}} animate={{ opacity: 1, x: 0}} exit={{ opacity: 0, x: -xDir}} transition={{ duration: 1.2, ease: 'easeInOut'}} >This portfolio is no longer active</motion.p>
            <motion.p initial={{ opacity: 0, x: xDir}} animate={{ opacity: 1, x: 0}} exit={{ opacity: 0, x: xDir}} transition={{ duration: 1.2, ease: 'easeInOut'}} >Please visit my updated portfolio at the following link:</motion.p>    
            <motion.a initial={{ opacity: 0, x: -xDir}} animate={{ opacity: 1, x: 0}} exit={{ opacity: 0, x: -xDir}} transition={{ duration: 1.2, ease: 'easeInOut'}} href="https://murali-portfolio-amber.vercel.app/" className='text-decoration-none'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m19 12l12 12l-12 12"/></svg>
                New Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 36L19 24l12-12"/></svg>
            </motion.a>
            <motion.p initial={{ opacity: 0, x: xDir}} animate={{ opacity: 1, x: 0}} exit={{ opacity: 0, x: xDir}} transition={{ duration: 1.2, ease: 'easeInOut'}} >Thank you for your time and consideration</motion.p>
        </motion.div>
    </div>
  )
}

export default RedirectPage
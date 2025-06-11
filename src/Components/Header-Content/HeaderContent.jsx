import React from 'react'
import TypingText from './TypingText';

function HeaderContent({name, desc}) {
  return (
    <div className='bg-black d-flex flex-column justify-content-center align-items-center lh-base' style={{height: '60vh'}}>
          <h1 className='text-white fw-bolder  text-center display-1 custom-letter-spacing'> 
              {name}
          </h1>
          <div className='text-white text-center display-6 popup-font fw-bolder'>
              <TypingText text={desc} speed={80} />
          </div>
          <div>
            <a href="/Resume.pdf" download={"Resume.pdf"} className='text-decoration-none' >
              <button className="btn btn-white text-white fs-5 button-align-center custom-font custom-hover glow-on-hover" >              
                <span> Download Resume </span><i className="bi bi-download "></i>
              </button>
            </a>
          </div>
      </div>
  )
}

export default HeaderContent;
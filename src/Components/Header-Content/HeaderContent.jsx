import React from 'react'

function HeaderContent({name, desc}) {
  return (
    <div className='bg-black d-flex flex-column justify-content-center align-items-center lh-base' style={{height: '60vh'}}>
          <h1 className='text-white fw-bolder  text-center display-1 custom-letter-spacing'> 
              {name}
          </h1>
          <p className='text-white text-center display-6 custom-letter-spacing'>
              {desc}
          </p>
          <div>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-white text-white fs-5  custom-font" >              
                <span> Download Resume </span><i className="bi bi-download "></i>
              </button>
            </a>
          </div>
      </div>
  )
}

export default HeaderContent;
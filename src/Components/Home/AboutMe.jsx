import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className="bg-white container m-5 p-3 w-100 w-md-50 rounded-3 shadow-lg">
          <h3 className="display-5 text-center popup-font fw-bolder">ABOUT ME</h3>
          <div className="container">
            <div className="row">
              <p className="fs-4 fw-lighter lh-base col-12 col-md-9 custom-font">
                I'm a passionate front-end developer with a strong foundation in
                HTML, CSS, and JavaScript. I’ve built real-world websites for
                businesses like Infinity Techno Engineering and Arkfa Company.
                Currently, I’m expanding my skills by practicing back-end
                development to become a full-stack developer. I enjoy turning
                design ideas into functional, responsive web interfaces. I’m a
                quick learner, dedicated to improving my craft through
                continuous learning and hands-on projects.
              </p>
              <div className='col-md-3 align-items-center d-flex justify-content-center'>
                <Link to={'/about'} className="btn fs-3 d-flex justify-content-center align-items-center popup-font fw-bold">
                  Know More <i className="bi bi-arrow-right-square ms-3"></i>                 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
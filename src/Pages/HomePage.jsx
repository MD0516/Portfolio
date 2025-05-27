import React from 'react'
import HeaderContent from '../Components/Header-Content/HeaderContent'
import AboutMe from '../Components/Home/AboutMe'
import Skills from '../Components/Home/Skills'
import {Projects} from '../Components/Home/Projects'
import { Link } from 'react-router-dom'

function HomePage () {
  return (
    <div>
        <HeaderContent name="Murali Dharan" desc="Front-End Developer" />

        <AboutMe />
        <Skills />

        <Projects />

        <div className="d-flex flex-column justify-content-center align-items-center ">
            <div className="bg-white m-5 p-3 container w-100 w-md-50 w-lg-50 rounded-3 shadow-lg d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
            <Link to={"/projects"} className="text-decoration-none text-black">
              <button className="custom-btn fs-3 custom-letter-spacing">
                  All Projects <i className="bi bi-arrow-right-square"></i>{" "}
              </button>
            </Link>
            <Link to={"/contact-me"} className="text-decoration-none text-black">
              <button className="custom-btn fs-3 custom-letter-spacing">              
                  Contact Me <i className="bi bi-arrow-right-square"></i>
              </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default HomePage;
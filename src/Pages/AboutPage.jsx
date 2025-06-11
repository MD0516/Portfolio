import React from 'react'
import HeaderContent from '../Components/Header-Content/HeaderContent'
import AboutMe from '../Components/AboutMe/AboutMe'

const AboutPage = () => {
  return (
    <div>
        <HeaderContent 
            name="About Me"
            desc={`Learn more about my \n background, skills, and interests`}
        />
        <AboutMe />
    </div>
  )
}

export default AboutPage
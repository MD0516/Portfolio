import React from 'react'
import HeaderContent from '../Components/Header-Content/HeaderContent'
import Projects from '../Components/Projects/Projects'

const ProjectPage = () => {
  return (
    <div>
        <HeaderContent name={"Projects"} desc={"A Showcase of What I Build and Believe In"}/>
        <Projects />
    </div>
  )
}

export default ProjectPage
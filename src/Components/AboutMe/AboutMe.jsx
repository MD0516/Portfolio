import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className="bg-white m-5 p-3 container w-100 w-md-50 rounded-3 shadow-lg">
            <h3 className="display-4 fs-1 m-4 popup-font fw-bolder">MY BACKGROUND</h3>
            <div className="container">
                <div className="row">
                    <p className='fs-4 fw-lighter p-3 lh-lg custom-font'>
                        I am a passionate and self-motivated web developer with a strong foundation in both commerce and technology. I hold a Bachelor’s degree in Commerce with Computer Applications (B.Com CA) from Hindustan College of Arts and Science, Kelambakkam, where I developed an early interest in blending business processes with digital solutions. To further deepen my technical capabilities, I successfully completed a Full Stack Development course at FITA Academy, which provided me with practical, hands-on training in building modern web applications. <br /><br />

                        My core strengths lie in front-end development, with proficiency in HTML5, CSS3, JavaScript, and React.js, enabling me to create visually appealing, responsive, and interactive user interfaces. I’ve applied these skills in real-world scenarios by building websites for clients such as Infinity Techno Engineering and Arkfa Company, gaining valuable experience in meeting client requirements, collaborating with teams, and delivering functional, production-ready websites. <br /><br />

                        In addition to my front-end expertise, I am also familiar with a range of development tools and technologies that support efficient workflows and robust development practices. These include Node.js for server-side scripting, Git and GitHub for version control, Visual Studio Code as my primary code editor, Vercel for deploying web applications, Figma for UI/UX design collaboration, and npm for managing project dependencies. <br /><br />

                        I am currently focused on expanding my back-end development skills, aiming to become a well-rounded Full Stack Developer capable of managing the complete lifecycle of a web application — from design and development to deployment and maintenance. With a strong commitment to continuous learning and improvement, I thrive in environments that challenge me to grow and innovate. 
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-white m-5 p-3 container w-100 w-md-50 rounded-3 shadow-lg">
            <h3 className="display-4 fs-1 m-4 popup-font fw-bolder">MY HOBBIES</h3>
            <div className="container">
                <div className="row">
                    <p className='fs-4 fw-lighter p-3 lh-lg custom-font'>
                        Beyond coding, I enjoy unwinding through a variety of hobbies that keep me refreshed and motivated. I’m an avid fan of watching series and movies, which not only entertain me but also fuel my creativity and storytelling instincts—skills I often translate into my web projects.  <br /> 
                        My favorite pastime is playing cricket, a sport I’m truly passionate about. It keeps me active, sharpens my focus, and teaches me the value of teamwork and strategy.<br /><br />

                        I also enjoy listening to music, which helps me stay relaxed and energized while coding or brainstorming new ideas. Additionally, I spend time on YouTube, exploring tech content, development tutorials, and creative videos that inspire me to keep learning and improving.<br />

                        These hobbies not only provide a balance to my professional life but also contribute to my overall growth as a developer and individual, allowing me to bring fresh perspectives and ideas to my work.
                    </p>
                </div>
            </div>
        </div>
            <Link to={"/contact-me"} className="text-decoration-none text-black custom-hover my-5">
              <button className="custom-btn fs-3 popup-font fw-bold ">              
                  Contact Me <i className="bi bi-arrow-right-square"></i>
              </button>
            </Link>
    </div>
  )
}

export default AboutMe
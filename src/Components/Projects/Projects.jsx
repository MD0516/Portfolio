import React from 'react'

const Projects = () => {

    const projects = [
    {
        logo: "/src/Components/Home/Icons/ite.svg",
        title: "Infinity Techno Engineering",
        desc: "A business website designed for an industrial service provider specializing in automation systems, hydraulic and pneumatic actuator maintenance, and electrical and mechanical repairs. Built with responsive design and clear service segmentation for user-friendly navigation.",
        link: "https://md0516.github.io/infinity-techno-engineering/",
    },
    {
        logo: "/src/Components/Home/Icons/arkfa-logo.png",
        title: "ARKFA",
        desc: "A responsive and modern web portfolio built with Next.js and deployed on Vercel. Showcases clean UI design and optimized performance, serving as a demonstration of front-end development skills.",
        link: "https://arkfawebsite.vercel.app/",
    },
    ];

  return (
    <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className="bg-white container m-5 p-3 w-100 w-md-75 rounded-3 shadow-lg">
            <h3 className="display-3 text-center">PROJECTS</h3>
            <div className='row gap-5 align-items-center justify-content-center m-md-5 p-md-3'>
                {
                    projects.map((item, i) => (
                        <div key={i} className='col-md-5 rounded-3 shadow-lg mb-4'>
                            <div className='d-flex flex-row align-items-center gap-3 p-3'>
                                <img src={item.logo} alt="img" style={{ width: "100px" }} />
                                <h3 className='title'>{item.title}</h3>
                            </div>
                            <div>
                                <p className='fs-5 fw-lighter lh-base custom-font p-3'>{item.desc}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className='btn fs-5 custom-font p-3'>Click Here <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Projects
import React from 'react'
import ite from "./Icons/ite.svg";
import arkfa from "./Icons/arkfa-logo.png";

export const Projects = () => {
const projects = [
  {
    logo: ite,
    title: "Infinity Techno Engineering",
    desc: "A business website designed for an industrial service provider specializing in automation systems, hydraulic and pneumatic actuator maintenance, and electrical and mechanical repairs. Built with responsive design and clear service segmentation for user-friendly navigation.",
    link: "https://md0516.github.io/infinity-techno-engineering/",
  },
  {
    logo: arkfa,
    title: "ARKFA",
    desc: "A responsive and modern web portfolio built with Next.js and deployed on Vercel. Showcases clean UI design and optimized performance, serving as a demonstration of front-end development skills.",
    link: "https://arkfawebsite.vercel.app/",
  },
];

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="bg-white m-5 p-3 container w-100 w-md-50 rounded-3 shadow-lg">
          <h3 className="display-3 text-center">PROJECTS</h3>
          <div className="container m-md-5 p-md-3  ">
            <div className="row gap-5 align-items-center justify-content-center">
              {projects.map((item, i) => (
                <div key={i} className="col-md-9 rounded-3 shadow-lg">
                  <div className="d-flex flex-row align-items-center gap-3 p-3">
                    <img src={item.logo} alt="img" style={{ width: "100px" }} />
                    <h3 className="title">{item.title}</h3>
                  </div>
                  <div>
                    <p className="fs-5 fw-lighter lh-base custom-font p-3">
                      {item.desc}
                    </p>
                    <a
                      href={item.link}
                      target="blank"
                      rel="noopener noreferrer"
                      className="btn fs-5 custom-font p-3"
                    >
                      Click Here <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

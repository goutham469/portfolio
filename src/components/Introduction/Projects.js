import React from 'react'
// projects
import blog from './projects/blog.png'
import eventManagement from './projects/eventManagement.png'
import socialMedia from './projects/socialMedia.png'
import weather from './projects/weather.png'
import doughtFlow from './projects/doughtFlow.png'
import urlshortener from './projects/urlshortener.png'

const data = [
    {
        name: "Blog",
        url: "https://4149.netlify.app/",
        Image: blog,
        github: "https://github.com/goutham469/certificationProject/tree/master",
        technologies: ["Reactjs", "Node.js", "CSS", 'OAuth'],
        description: "A responsive blog platform built using React for the frontend and Node.js for the backend. OAuth integration allows users to sign in securely."
    },
    {
        name: "Social Media",
        url: "https://feedbook.netlify.app/",
        Image: socialMedia,
        github: "https://github.com/goutham469/fieldProject",
        technologies: ["Reactjs", "Node.js", "MongoDB", "Socket.io"],
        description: "A real-time social media platform where users can post, comment, and chat. Powered by React, Node.js, and MongoDB, with Socket.io for live updates."
    },
    {
        name: "Weather App",
        url: "https://sunshower.netlify.app/",
        Image: weather,
        github: "https://github.com/goutham469/weatherApp/tree/master",
        technologies: ["Reactjs", "Node.js", "APIs", "CSS"],
        description: "A weather forecasting app that fetches real-time data from weather APIs. Built using React and Node.js, with a clean and responsive UI."
    },
    {
        name: "Dought Flow",
        url: "https://doughtflow.netlify.app/",
        Image: doughtFlow,
        github: "https://github.com/goutham469/doughtflow",
        technologies: ["Reactjs", "Node.js", "MongoDB", "Express"],
        description: "A collaborative platform to manage and track projects using Kanban boards. Built with the MERN stack, it focuses on efficient project management and team collaboration."
    },
    {
        name: "URL shortener",
        url: "https://sambandamlink.netlify.app/",
        Image: urlshortener,
        github: "https://github.com/goutham469/url-shortener",
        technologies: ["System design","Reactjs", "Node.js", "MongoDB", "Express"],
        description: "ShortURL is a tool to shorten a long link and create a short URL easy to share on sites, chat and emails. Track short URL traffic and manage your links."
    },
    {
        name: "Event Management",
        url: "https://event-management-ivory.vercel.app/",
        Image: eventManagement,
        github: "https://github.com/goutham469/eventManagement",
        technologies: ["Reactjs", "Node.js", "MongoDB", "Express"],
        description: "A complete event management solution where users can create, manage, and join events. Built using the MERN stack, with a focus on scalability and performance."
    },
];

function Projects() {
  return (
    <div style={{marginTop:"20px",padding:"10px"}}>
            <p style={{textAlign:"left",fontSize:"20px",paddingLeft:"10vw",color:"green",marginTop:"40px"}}><b>My Work</b></p>
            <div className='projects-bar'>
                {
                    data.map((project,idx) => <div className='projectDiv' onClick={(event)=>{event.preventDefault();window.open(project.url , "_blank")}}>
                                                <img className='projectImage' src={project.Image}/>
                                                <h4 className='project-title'>{project.name}</h4>
                                                <div className='project-content'>
                                                    <p style={{fontSize:"14px"}}>{project.description}</p>

                                                    <br/>
                                                    <div style={{display:"flex",flexWrap:"wrap"}}>
                                                        {
                                                            project.technologies.map(item => <label className='technology-item'>{item}</label>)
                                                        }
                                                    </div>
                                                    <a href={`${project.github}`}  style={{color:"white",fontWeight:"500"}}>github</a>
                                                    <br/>
                                                    <a href={`${project.url}`}  style={{color:"white",fontWeight:"500"}}>view site</a>
                                                </div>
                                            </div>)
                }
            </div>
        </div>
  )
}



export default Projects
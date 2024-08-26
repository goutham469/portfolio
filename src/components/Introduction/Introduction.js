import React from 'react'
import './Introduction.css'

import downloadIcon from './download.png'
import githubIcon from './github.png'
import linkedInIcon from './linkedin.png'
import InstagramIcon from './instagram.png'
import webdevelopment from './webdevelopment.png'
import appdevelopment from './appdevelopment.png'
import ml from './ml.png'
import api from './api.png'

import me from '../Resume/profile.png'

// projects
import blog from './projects/blog.png'
import eventManagement from './projects/eventManagement.png'
import socialMedia from './projects/socialMedia.png'
import weather from './projects/weather.png'



function Introduction() {

    function loadResume(event)
    {
        event.preventDefault();
        window.location.href = "https://drive.usercontent.google.com/u/0/uc?id=164OSgDJDkkTqR5538SRoX7uFm1lggON2&export=download"
    }
  return (
    <div> 
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
            <div>
                <p className='text1'>-Full stack Web Developer</p>
                <p className='text2'>Hello I'm</p>
                <p className='text2'>Goutham Reddy</p>
                <p>I am excel at making dynamic web applications.</p>
                <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginTop:"20px"}}>
                    <div className='downloadIcon' onClick={(event)=>{loadResume(event)}}>
                        <label className='downloadIcon1'>download CV</label>
                        <img className='downloadIcon2' src={downloadIcon}/>
                    </div>
                    <div onClick={()=>window.location.href="https://github.com/goutham469"}>
                        <img className='gitHubIcon' src={githubIcon}/>
                    </div>
                    <div onClick={()=>window.location.href="https://www.linkedin.com/in/gouthamreddy2005"} >
                        <img className='gitHubIcon' src={linkedInIcon}/>
                    </div>  
                    <div onClick={()=>window.location.href="https://www.instagram.com/go.utham8129?igsh=MTFpM3Q5eHhoMHpjMQ=="}>
                        <img className='gitHubIcon' src={InstagramIcon}/>
                    </div>
                </div>
            </div>

            <div>
                <img className='IntroductionImage' src='https://4149.netlify.app/static/media/profileImage.da877cc76e1c99e78ff3.jpg'/>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <div>
                    <label className='text3'>12</label>
                </div>
                <div className='text4'>
                    <label>Projects</label>
                    <br/>
                    <label>completed.</label>
                </div>
            </div>

            <div style={{display:"flex",justifyContent:"space-around"}}>
                <div>
                    <label className='text3'>3</label>
                </div>
                <div className='text4'>
                    <label>Years of</label>
                    <br/>
                    <label>experience.</label>
                </div>
            </div>

            <div style={{display:"flex",justifyContent:"space-around"}}>
                <div>
                    <label className='text3'>125</label>
                </div>
                <div className='text4'>
                    <label>git</label>
                    <br/>
                    <label>commits.</label>
                </div>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
            <div>
               <img className='IntroductionImage-2' src={me}/>
            </div>

            <div style={{backgroundColor:"#212020",borderRadius:"20px",padding:"7px",paddingLeft:"2vw"}}>

                <div>
                    <p style={{textAlign:"left",fontSize:"20px"}}>About me</p>
                    <p style={{textAlign:"left"}}>
                        Hello! I am a 3rd-year IT undergraduate with a passion for web development<br/>
                        and a knack for problem-solving. My expertise lies in the MERN stack,<br/>
                        enabling me to build robust and dynamic web applications.
                    </p>
                </div>
                <br/>
                <br/>

                <div>
                    <p style={{textAlign:"left",fontSize:"20px"}}>Education</p>
                    <div style={{textAlign:"left"}}>
                        <table>
                            <tr>
                                <td>
                                    <b>B-Tech   </b>
                                </td>
                                <td>
                                    <label style={{color:"green"}}>VNR VJIET (2022-2026)</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b> Intermediate </b>
                                </td>
                                <td>
                                    <label style={{color:"green"}}>Sri Chaitanya (2020-2022)</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>SSC </b>
                                </td>
                                <td>
                                    <label style={{color:"green"}}>ZPHS Madhapuram</label>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div style={{marginTop:"30px",padding:"10px"}}>
            <p style={{textAlign:"left",marginLeft:"10vw",fontSize:"20px",color:"green"}}><b>My Services</b></p>
            <div style={{display:"flex",justifyContent:"space-around",margin:"20px",flexWrap:"wrap"}}>
                <div className='technologyDiv'>
                    <img className='technologyIcon' src={webdevelopment}/>
                    <p>Web <br/>development</p>
                </div>
                <div className='technologyDiv'>
                    <img className='technologyIcon' src={appdevelopment}/>
                    <p>Mobile App<br/> development</p>
                </div>
                <div className='technologyDiv'>
                    <img className='technologyIcon' src={ml}/>
                    <p>Machine Learning<br/> Solutions</p>
                </div>
                <div className='technologyDiv'>
                    <img className='technologyIcon' src={api}/>
                    <p>API Services</p>
                </div>
            </div>
        </div>
        <div style={{marginTop:"20px"}}>
            <p style={{textAlign:"left",fontSize:"20px",paddingLeft:"10vw",color:"green",marginTop:"40px"}}><b>My Work</b></p>
            <div style={{display:"flex",justifyContent:"space-around",margin:"20px",flexWrap:"wrap"}}>
                <div className='projectDiv' onClick={(event)=>{event.preventDefault();window.location.href='https://4149.netlify.app/'}}>
                    <img className='projectImage' src={blog}/>
                    <h4>Blog</h4>
                </div>
                <div className='projectDiv' onClick={(event)=>{event.preventDefault();window.location.href='https://event-management-ivory.vercel.app/'}}>
                    <img className='projectImage' src={eventManagement}/>
                    <h4>event Management</h4>
                </div>
                <div className='projectDiv' onClick={(event)=>{event.preventDefault();window.location.href='https://vnrvjiet.netlify.app/'}}>
                    <img className='projectImage' src={socialMedia}/>
                    <h4>social media</h4>
                </div>
                <div className='projectDiv' onClick={(event)=>{event.preventDefault();window.location.href='https://sunshower.netlify.app/'}}>
                    <img className='projectImage' src={weather}/>
                    <h4>weather App</h4>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Introduction
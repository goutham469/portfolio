import React, { useEffect, useState } from 'react'
import './Introduction.css'

import downloadIcon from './download.png'
import githubIcon from './github.png'
import linkedInIcon from './linkedin.png'
import InstagramIcon from './instagram.png'
import webdevelopment from './webdevelopment.png'
import appdevelopment from './appdevelopment.png'
import ml from './ml.png'
import api from './api.png'
import googleSEO from './googleSEO.png'

import me from '../Resume/profile.png'

import { useNavigate } from 'react-router-dom'
import Projects from './Projects'



function Introduction() {

    let [name,setName] = useState('')
    const navigate = useNavigate()
 
    let content = "I  am Goutham Reddy. ";
    let speed = 300;

     useEffect(()=>{
        let index = 0;

        function typeEffect() {
            if (index < content.length) {
                setName(prevName => prevName + content.charAt(index));
                index++;
                setTimeout(typeEffect, speed);
            } else {
                setTimeout(() => {
                    setName('I');
                    index = 0;
                    typeEffect(); // Start typing again
                }, speed);
            }
        }
        typeEffect();

     },[])

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
                <p className='text2'>Hi </p>
                <p className='text21'>{name}</p>
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
        <div>
            <p style={{textAlign:"left",marginLeft:"10vw",fontSize:"20px",color:"green"}}><b>About me</b></p>

            <div style={{backgroundColor:"#212020",borderRadius:"20px",padding:"7px",paddingLeft:"2vw",width:"fit-content",margin:"20px",marginLeft:"7vw"}}>

                <div>
                    <p style={{textAlign:"left",marginLeft:"10px"}}>
                        Hello! I am a 3rd-year IT undergraduate with a passion for web development<br/>
                        and a knack for problem-solving. My expertise lies in the MERN stack,<br/>
                        enabling me to build robust and dynamic web applications.
                    </p>
                </div>
                <br/>
                <br/>

                <div>
                    <p style={{textAlign:"left",fontSize:"20px",fontWeight:"500",marginLeft:"10px"}}>Education</p>
                    <div style={{textAlign:"left"}}>
                        <table style={{margin:"10px"}}>
                            <tr>
                                <td>
                                    <b>B-Tech   </b>
                                </td>
                                <td>
                                    <label style={{color:"white"}}>VNR VJIET (2022-2026)</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b> Intermediate </b>
                                </td>
                                <td>
                                    <label style={{color:"white"}}>Sri Chaitanya (2020-2022)</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>SSC </b>
                                </td>
                                <td>
                                    <label style={{color:"white"}}>ZPHS Madhapuram</label>
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
                <div className='technologyDiv' onClick={()=>navigate('/services')}>
                    <img className='technologyIcon' src={api}/>
                    <p>API Services</p>
                </div>
                <div className='technologyDiv'>
                    <img className='technologyIcon' src={webdevelopment}/>
                    <p>Web <br/>development</p>
                </div>
                <div className='technologyDiv'>
                    <img className='technologyIcon' style={{borderRadius:"20px"}} src={googleSEO}/>
                    <p>Google search engine <br/>Optimization</p>
                </div>
                <div className='technologyDiv'>
                    <img className='technologyIcon' src={appdevelopment}/>
                    <p>Mobile App<br/> development</p>
                </div>
                <div className='technologyDiv'>
                    <img className='technologyIcon' src={ml}/>
                    <p>Machine Learning<br/> Solutions</p>
                </div>
            </div>
        </div>

        <Projects/>
        
    </div>
  )
}

export default Introduction
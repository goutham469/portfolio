import React, { useEffect, useState } from 'react'
import Profile from './profile.png'

import './Resume.css'
// images
// web
import htmlImage from './assets/html.png'
import cssImage from './assets/css.png'
import bootstrap from './assets/bootstrap.png'
import jsImage from './assets/js.png'
import nodeJs from './assets/node.png'
import reactImage from './assets/react.png'
// database
import mongoDB from './assets/mongo.png'
import mysql from './assets/mysql.png'
// ml
import tf from './assets/tensorflow.png'
// devOps
import aws from './assets/aws.png'
import gcp from './assets/gcp.png'
import gitHub from './assets/github.png'


import Header from '../Header/Header'

function Resume() {
    const [width,setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidth(window.innerWidth)
        })
 
    },[])

  return (
    <div>
        <Header/>
        <center>
            <h3>Resume</h3>
        </center>
        <div className='resumeWindow'>
            
            {
                width > 700 ?
                <div className='profileDiv'>
                    <img className='profileImage' src={Profile}/>
                    <div className='profileName'>
                        <b style={{color:"#ff0000"}}><b>Goutham Reddy Uppunuri</b></b>
                        <p style={{fontSize:"16px",textAlign:"right",color:"black"}}><strong>-Full stack web developer</strong> <br/><strong>- Android App Developer</strong><br/><strong>-ML Reasearcher</strong></p>
                    </div>
                </div>
                :
                <div> 
                    <img className='profileImage-mobile' src={Profile}/><br/>
                    <div className='profileName-mobile'>
                        <b style={{color:"#ff0000"}}><b>Goutham Reddy Uppunuri</b></b>
                        <br/>
                        <div style={{textAlign:"left",marginLeft:"40px"}}>
                            <b>-Full stack web developer (MERN)</b>
                            <br/>
                            <b>- Android App Developer</b>
                            <br/>
                            <b>-ML Reasearcher</b>
                        </div>
                    </div>
                </div>
            }
            <br/>
            <p className='line'></p>

            <div style={{marginLeft:"5vw",marginTop:"50px"}}>
                <h2 style={{textAlign:"left",color:"green",margin:"10px"}}>Profile</h2>
                <p style={{textAlign:"left"}}>
                    A skilled MERN stack developer with a strong foundation in MongoDB, Express.js, React, and
                    <br/>
                    Node.js. Experienced in building scalable, full-stack web applications with a focus on responsive
                    <br/>
                    design and seamless user experience. Proficient in RESTful API development and integration, with 
                    <br/>
                    hands-on experience in managing cloud deployments. Adept at collaborating in agile environments
                    <br/>
                    and delivering robust code that meets client requirements. Passionate about continuous learning
                    <br/>
                    and staying updated with the latest technologies in web development.
                </p>
            </div>
            <p className='line'></p>

            <div style={{marginLeft:"5vw"}} >
                <h2 style={{textAlign:"left",color:"green",margin:"10px"}}>Education</h2>
                <div>
                    <table>
                        <thead>
                            <th>Standard</th>
                            <th>School/College</th>
                            <th>Percentage</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SSC</td>
                                <td>ZPHS Madhapuram</td>
                                <td>10.0 GPA</td>
                            </tr>
                            <tr>
                                <td>Inter</td>
                                <td>Sri Chaitanya</td>
                                <td>969/1000</td>
                            </tr>
                            <tr>
                                <td>Graduation(IT)</td>
                                <td>VNR VJIET</td>
                                <td>9.1(upto 2-2)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br/>

            <p className='line'></p>

           <div style={{display:"flex",marginLeft:"5vw"}}>
            
            <div  style={{textAlign:"left"}}>
                    <h2 style={{textAlign:"left",color:"green",margin:"10px"}}>Tech stack</h2>

                    <h3  style={{textAlign:"center",color:"red",margin:"10px"}}>Web Technologies</h3>
                    <div className='SkillsSubDiv'>
                        <img className='SkillsImage' src={htmlImage}/>
                        <img className='SkillsImage' src={cssImage}/>
                        <img className='SkillsImage' src={bootstrap}/>
                        <img className='SkillsImage' src={jsImage}/>
                        <img className='SkillsImage' src={reactImage}/>
                        <img className='SkillsImage' src={nodeJs}/>
                    </div>

                    <h3  style={{textAlign:"center",color:"red",margin:"10px"}}>Data Base</h3>
                    <div className='SkillsSubDiv'>
                        <img className='SkillsImage' src={mongoDB}/>
                        <img className='SkillsImage' src={mysql}/>
                    </div> 

                    <h3  style={{textAlign:"center",color:"red",margin:"10px"}}>DevOps</h3>
                    <div className='SkillsSubDiv'>
                        <img className='SkillsImage' src={aws}/>
                        <img className='SkillsImage' src={gcp}/>
                        <img className='SkillsImage' src={gitHub}/>
                    </div> 

                    <h3  style={{textAlign:"center",color:"red",margin:"10px"}}>ML</h3>
                    <div className='SkillsSubDiv'>
                        <img className='SkillsImage' src={tf}/> 
                    </div>

                </div>
           </div>
            

        </div>
    </div>
  )
}

export default Resume
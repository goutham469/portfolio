import React, { useState } from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

// media assets
import emailIcon from './email.png'
import instagram from './instagram.png'
import linkedIn from './linkedin.png'
import github from './github.png'
import k from './k.png'
import devIcon from '../assets/devIcon.png'


function Footer() {
 
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [body,setBody] = useState()

    const naviagte = useNavigate()

    async function submitEmail(event)
    {
        event.preventDefault();
        console.log(event.target);
        if(!name)
        {
            alert("nume is null")
        }
        else if(!email)
        {
            alert("email is null")
        }
        else if(!body)
        {
            alert("body is null")
        }
        else
        {
            // fetch gooole sheets API to add data
            // the google sheets contails "Name" , "Email" , "Message"
            setBody('')
            setEmail('')
            setName('')
        }
    }
  return (
    <div style={{paddingBottom:"30px"}}>
        <p style={{textAlign:"left",fontSize:"24px",paddingLeft:"10vw",color:"green"}}><b>Contact Me</b></p>
        <div style={{display:"flex",justifyContent:"space-around",margin:"20px",flexWrap:"wrap"}}>
            <div>
                <p style={{textAlign:"left",paddingLeft:"10vw",fontSize:"18px",margin:"10px"}}>Socila media profiles</p>

                <div style={{textAlign:"left",marginBottom:"10px"}}>
                    <img width="24px" src={emailIcon}/>
                    <a className='contactDetailsLinks' href='mailto:uppinurigouthamreddy@gmail.com'>uppinurigouthamreddy@gmail.com</a>
                </div>

                <div style={{textAlign:"left",marginBottom:"10px"}}>
                    <img src={instagram}/>
                    <a className='contactDetailsLinks' href='https://www.instagram.com/go.utham8129?igsh=MTFpM3Q5eHhoMHpjMQ=='>Instagram</a>
                </div>

                <div style={{textAlign:"left",marginBottom:"10px"}}>
                    <img src={linkedIn}/>
                    <a className='contactDetailsLinks' href='https://www.linkedin.com/in/gouthamreddy2005'>LinkedIn</a>
                </div>

                <div style={{textAlign:"left",marginBottom:"10px"}}>
                    <img src={github}/>
                    <a className='contactDetailsLinks' href='https://github.com/goutham469'>git hub</a>
                </div>

                <div style={{textAlign:"left",marginBottom:"10px"}}>
                    <img width="22px" src={k}/>
                    <a style={{marginLeft:"10px"}} className='contactDetailsLinks' href='https://www.kaggle.com/gouthamreddy456'>kaggle</a>
                </div>

                <div style={{textAlign:"left",marginBottom:"10px"}}>
                    <img width="22px" src={devIcon}/>
                    <label onClick={(event)=>{naviagte('./dev')}} style={{marginLeft:"10px"}} className='contactDetailsLinks' >dev</label>
                </div>


            </div>
            <div style={{textAlign:"left"}}>
                <input value={name} onChange={(event)=>{setName(event.target.value)}} className='sendMailInput' placeholder='Your Name'/>
                <br/>
                <input value={email} onChange={(event)=>setEmail(event.target.value)} className='sendMailInput' placeholder='Your email'/>
                <br/>
                <textarea value={body} onChange={(event)=>{setBody(event.target.value)}} className='sendMailTextArea' placeholder='Your message'/>
                <br/>
                <center>
                    <button className='EmailSendButton' onClick={(event)=>{submitEmail(event)}}>Submit</button>
                </center>
            </div>
        </div>
    </div>
  )
}

export default Footer
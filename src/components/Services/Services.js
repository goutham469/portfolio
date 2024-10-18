import React, { useEffect, useState } from 'react'
import './Services.css'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import ImageSearch from './imageSearch.png'

function Services() {
  const [credits , setCredits] = useState({})

  async function onSuccess(credential)
  {
    let response = jwtDecode(credential.credential)

    let data = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/users/login`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email:response.email , img : response.img})
    })
    
    if(data.status == 200)
    {
      localStorage.setItem('email' , response.email)
      alert("login success !")
    }
    else
    {
      alert("login failed !")
    }

  }
  
  async function getData()
  {
    try
    {
      let response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/users/credentials`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email:localStorage.getItem("email")})
      })
      console.log(response)

      response = await response.json()
      console.log(response)
  
      setCredits(response)
    }
    catch(err)
    {
      alert("some error occured !")
      console.log(err)
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('email'))
    {
      getData()
    }
  },[])

  return (
    <div style={{height:"100vh",width:"100vw",margin:"0px",overflowY:"scroll"}}>
      <h2>API Service's</h2>
      <div className='service-plans'>
        <h3 style={{color:"gold"}}>Your Account Details :-</h3>
        {
          localStorage.getItem('email')?
          <div>
            <b>registered email = "{localStorage.getItem('email')}"</b>
            <br/>
            <br/>
            <b style={{margin:"10px"}}>Your API key : <b style={{backgroundColor:"white",color:"black",borderRadius:"5px",padding:"5px"}}>{credits.APIKey}</b></b>
            <br/>
            <br/>
            <p>Credits remaining : <b>{credits.credits}</b></p>
          </div>
          :
          <div>
            <b>Login/signup to continue</b>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
              <GoogleLogin onSuccess={onSuccess}/>
            </GoogleOAuthProvider>
          </div>
        }
      </div>
      <div className='service-plans'>
        <ol>
          <li>You will not be charged.</li>
          <li>For every Hour , time-span, You can use atmost 100 requests of any kind.</li>
          <li>all kind of requests will come under same category.</li>
        </ol>
      </div>
      <div className='services-main'>
        <div className='service-tab'>
          <b>Image Search API</b>
          <br/><br/><br/>
          <p>This API will give the list of Images , based on a search query.</p>
          <img src={ImageSearch}/>
        </div>
        <div className='service-tab'>
          <b>Quotes API</b>
          <br/><br/><br/>
          <p>This API will generate random Quotes on various topics.</p>
        </div>
        <div className='service-tab'>
          <b>Plant disease prediction API.</b>
          <br/><br/><br/>
          <p>A REST that will take a plant left Image as input as classify it into a Disease . And will give the prevention measures.</p>
        </div>
      </div>

    </div>
  )
}

export default Services
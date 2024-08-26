import React from 'react'
import './Dev.css'
import { Outlet, useNavigate } from 'react-router-dom'

// icons
import dashboard from './Icons/dashboard.png'
import docs from './Icons/docs.png'
import notes from './Icons/notes.png'
import troubles from './Icons/troubles.png'

function Dev() {
    const naviagte = useNavigate();

  return (
    <div className='DevMode'>
        <h3>Development Mode</h3>
        <div style={{display:"flex"}}>
            <div className='dev-navbar'>  
                <div className='dev-button' onClick={()=>{naviagte('./')}}>
                    <img className='dev-navbar-icons' src={docs}/>
                    <label className='dev-navbar-text'>Docs</label>
                </div>
                <div className='dev-button' onClick={()=>{naviagte('./console')}}>
                    <img className='dev-navbar-icons' src={dashboard}/>
                    <label className='dev-navbar-text'>Console</label>
                </div>
                <div className='dev-button' onClick={()=>{naviagte('./notes')}}>
                    <img className='dev-navbar-icons' src={notes}/>
                    <label className='dev-navbar-text'>Notes</label>
                </div>
                <div className='dev-button' onClick={()=>{naviagte('./troubles')}}>
                    <img className='dev-navbar-icons' src={troubles}/>
                    <label className='dev-navbar-text'>Trouble<br/>shoots</label>
                </div>
            </div>
            <div className='dev-outlet'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dev
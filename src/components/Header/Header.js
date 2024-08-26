import React from 'react'
import './Header.css'

import g from './g.png'

function Header() {
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center",height:"100px"}}>
        <div style={{color:"white",fontSize:"20px"}}>
            <img className='HeaderIcon' src={g}/>
            <label style={{fontSize:"24px"}}>O</label>
            <label style={{fontSize:"23px"}}>u</label>
            <label style={{fontSize:"22px"}}>t</label>
            <label style={{fontSize:"21px"}}>h</label>
            <label style={{fontSize:"20px"}}>a</label>
            <label style={{fontSize:"19px"}}>m</label>
            <label style={{fontSize:"18px"}}> r</label>
            <label style={{fontSize:"17px"}}>e</label>
            <label style={{fontSize:"16px"}}>d</label>
            <label style={{fontSize:"15px"}}>d</label>
            <label style={{fontSize:"14px"}}>y</label>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
            <div>
                <label className='HeaderButton'   onClick={()=>{window.location.href=`${process.env.REACT_APP_CLIENT_BASE_URL}/`}}   >Home</label>
            </div>
            <div>
                <label className='HeaderButton' onClick={()=>{window.location.href=`${process.env.REACT_APP_CLIENT_BASE_URL}/resume`}}   >Resume</label>
            </div>
            <div>
                <label className='HeaderButton' onClick={()=>{window.location.href=`${process.env.REACT_APP_CLIENT_BASE_URL}/`}} >Services</label>
            </div>
            <div>
                <label className='HeaderButton' onClick={()=>{window.location.href=`${process.env.REACT_APP_CLIENT_BASE_URL}/`}} >Projects</label>
            </div>
        </div>
    </div>
  )
}

export default Header
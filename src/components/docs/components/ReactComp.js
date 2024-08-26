import React from 'react'
import { useState } from 'react';
import './All.css'

// assets
import down from './down.png'
import right from './right.png'

function ReactComp() {
    const [choosen,setChoosen] = useState(0);
  return (
    <div>
        { 
            choosen == 0 ?
            <div>
                <div className='open-button' onClick={()=>setChoosen(1)}>
                    <label >create react app</label>
                    <img width="20px" src={down}/>
                </div>
            </div>
            :
            choosen == 1 ?
            <div>
                <div className='close-button'>
                    <label onClick={()=>setChoosen(0)}>create react app</label>
                    <img width="20px" src={right}/>
                </div>
                <div>
                    <p>setps to create and run a react app</p>
                    <ol>
                        <li>create an empty folder.</li>
                        <li>open integrated terminal</li>
                        <li>type and run the command <b>npx create-react-app App_Name</b></li>
                        <li>Now the creation of React App started, wait untill <b>happy hacking!</b> is appeared.</li>
                        <li>now type <b>cd ./App_Name</b>, then <b>code .</b>.</li>
                        <li>Now the folder is opned in the <b>VS Code</b></li>
                        <li>goto src-&g;App.js</li>
                        <li>remove the header content, and enter your name as plain text</li>
                        <li>open integrated teminal and run <b>npm start</b></li>
                        <li>the app will begin to launch in your default browser. (or) Open chrome and type <b>http://localhost:3000</b></li>
                        <li>Here you can see Your Name.</li>
                    </ol>
                </div>
            </div>
            :
            <div></div>
        }
    </div>
  )
}

export default ReactComp
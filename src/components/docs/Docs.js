import React, { useState } from 'react'
import './Docs.css'

// components
import ReactComp from './components/ReactComp'

function Docs() {
    const [comp,setComp] = useState(1)
  return (
    <div className='docs'>
       <center><h2>Documentations</h2></center>
       <div className='docs-navbar'>
        <div className='docs-navbar-button'>
            React
        </div>
        <div className='docs-navbar-button'>
            Node
        </div>
        <div className='docs-navbar-button'>
            CP
        </div>
        <div className='docs-navbar-button'>
            HTML
        </div>
        <div className='docs-navbar-button'>
            CSS
        </div>
        <div className='docs-navbar-button'>
            Native
        </div>
        <div className='docs-navbar-button'>
            ML
        </div>
        <div className='docs-navbar-button'>
            Deep Learning
        </div>
        <div className='docs-navbar-button'>
            API's services
        </div>
        <div>

        </div>
       </div>
       <div className='docs-outlet'>
        {
            comp == 1?
            <ReactComp/>
            :
            <div></div>
        }
       </div>
    </div>
  )
}

export default Docs
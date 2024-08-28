import React from 'react'
import './Troubles.css'

function Troubles() {
  return (
    <div>
      <center><p>Troubles</p></center>
      <div className='troubles-main-div'>


        <div className='troubles-child-div'>
          <p style={{color:"yellow",fontSize:"20px",fontWeight:"500",textAlign:"center"}}>.env FILE</p>
          <ol>
            <li>
              <p className='troubles-heading'>16-bit encoding problem</p>
              <ul>
                <li>Some times the ".env" file is not able to recognize, by the React/Node Applications.</li>
                <li>This may be due to the <b>encoding is 16-bit</b></li>
                <li>In this case delete the ".env" file , and create a new file in file Explorer as <b>file.txt</b></li>
                <li>come to <b>VS Code</b> and rename the file to <b>.env</b></li>
              </ul>
            </li>

            <li>
              <p className='troubles-heading'>Restarting the development Server</p>
              <ul>
                <li>If still the issue persists, close the terminal .</li>
                <li>Restart the development server, by running the command <b>npm start</b></li>
                <li>every time you add new env variable you have to do this .</li>
              </ul>
            </li>
          </ol>
        </div>


        <div className='troubles-child-div'>
          <p style={{color:"yellow",fontSize:"20px",fontWeight:"500",textAlign:"center"}}>adding Image to HTML, React from "drive"</p>

          <b><b>In HTML</b></b>
          <ol>
            <li>
              below is the raw link of an image from drive 
            </li>
            <li>
              <label>https://lh3.googleusercontent.com/d/<b>0B6wwyazyzml-OGQ3VUo0Z2thdmc=w1000</b>?authuser=1/view</label>
            </li>
            <li>
              the bold text is the <b>id</b> attribute.
            </li>
            <li>
              we only need that to use an image any where, below is the implementation.
            </li>
            <li>
              <iframe src='https://drive.google.com/uc?export=view&id=1Vlmw56NRwc6ySN0V7KV-7VRclfWpCrEr' />
              <p>code = &lt;iframe src="https://drive.google.com/uc?export=view&id=1Vlmw56NRwc6ySN0V7KV-7VRclfWpCrEr" /&gt;</p>
              <br/>


              <iframe src="https://drive.google.com/file/d/1_FLE3UZ5T-rgnj6_JhKC8crvo620zyEQ/preview" type="video" allowFullScreen />
              <p>code = &lt;iframe src="https://drive.google.com/file/d/1_FLE3UZ5T-rgnj6_JhKC8crvo620zyEQ/preview" type="video" /&gt;</p>
              <br/>

            </li>
            <li>above content is not appeared , as this is built using <b>React.js</b> , not with <b>HTML</b></li>
          </ol>

          <br/>
          <center><hr style={{width:"80%"}}/></center>
          <br/><br/>

          <b><b>In React.js</b></b>
          <ol>
            <li>
              below is the raw link of an image from drive 
            </li>
            <li>
              <label>https://lh3.googleusercontent.com/d/<b>0B6wwyazyzml-OGQ3VUo0Z2thdmc=w1000</b>?authuser=1/view</label>
            </li>
            <li>
              the bold text is the <b>id</b> attribute.
            </li>
            <li>
              we only need that to use an image any where, below is the implementation.
            </li>
            <li>  
              <img src="https://drive.google.com/thumbnail?id=1Vlmw56NRwc6ySN0V7KV-7VRclfWpCrEr"/>
              <p>code = &lt;img src="https://drive.google.com/thumbnail?id=1Vlmw56NRwc6ySN0V7KV-7VRclfWpCrEr"/&gt;</p>
              <br/>

              <iframe src="https://drive.google.com/file/d/1_FLE3UZ5T-rgnj6_JhKC8crvo620zyEQ/preview" type="video"  allowFullScreen encrypted-media ></iframe>
              <p>code = &lt;iframe src="https://drive.google.com/file/d/1_FLE3UZ5T-rgnj6_JhKC8crvo620zyEQ/preview" type="video" /&gt;</p>
              <br/>

            </li>
          </ol>

           
        </div>

        


      </div>      
    </div>
  )
}

export default Troubles
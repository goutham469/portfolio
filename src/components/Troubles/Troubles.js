import React from 'react'
import './Troubles.css'

function Troubles() {
  const styleSheet = {
    code : {backgroundColor:"black",borderRadius:"10px",padding:"10px",overflowX:"scroll"}
  }
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
              <pre style={styleSheet.code}>
                <code>{`<iframe src="https://drive.google.com/uc?export=view&id=1Vlmw56NRwc6ySN0V7KV-7VRclfWpCrEr"/>`}</code>
              </pre>
              <br/>


              <iframe src="https://drive.google.com/file/d/1_FLE3UZ5T-rgnj6_JhKC8crvo620zyEQ/preview" type="video" allowFullScreen />
              <pre style={styleSheet.code}>
                <code>{`<iframe src="https://drive.google.com/file/d/1_FLE3UZ5T-rgnj6_JhKC8crvo620zyEQ/preview" type="video" />`}</code>
              </pre>
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
              <pre style={styleSheet.code}>
                <code>{`<img src="https://drive.google.com/thumbnail?id=1Vlmw56NRwc6ySN0V7KV-7VRclfWpCrEr" />`}</code>
              </pre>
              <br/>

              <iframe src="https://drive.google.com/file/d/1_FLE3UZ5T-rgnj6_JhKC8crvo620zyEQ/preview" type="video"  allowFullScreen encrypted-media ></iframe>
              <pre style={styleSheet.code}>
                <code>{`<iframe src="https://drive.google.com/file/d/1_FLE3UZ5T-rgnj6_JhKC8crvo620zyEQ/preview" type="video" />`}</code>
              </pre>
              <br/>

            </li>
          </ol>

           
        </div>



        <div className="troubles-child-div">
          <p style={{ color: "yellow", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>
            React props
          </p>

          <div>
            <ol>
              <li>Props are used to send data to the child component from the parent.</li>
              <li>Below is the child component code:</li>
              <li>
                <span>
                  <pre style={styleSheet.code}>
                    <code>{`function Child({ user_name })`}</code>
                    <br />
                    <code>{`{`}</code>
                    <br/>
                    <code>{`  return <div>Hi {user_name}</div>;`}</code>
                    <br />
                    <code>{`}`}</code>
                  </pre>
                </span>
              </li>
              <li>And this is the Parent component:</li>
              <li>
                <span>
                  <pre style={styleSheet.code}>
                    <code>{`function Parent() `}</code>
                    <br />
                    <code>{`{`}</code>
                    <br/>
                    <code>{`  const users = ['goutham', 'ramu', 'reddy'];`}</code>
                    <br />
                    <code>{`  return (`}</code>
                    <br />
                    <code>{`      <div>`}</code>
                    <br />
                    <code>{`      {`}</code>
                    <br/>
                    <code>{`        users.map(user => <Child user_name={user} />)`}</code>
                    <br/>
                    <code>{`      }`}</code>
                    <br/>
                    <code>{`      </div>`}</code>
                    <br/>
                    <code>{`    );`}</code>
                    <br />
                    <code>{`}`}</code>
                  </pre>
                </span>
              </li>
            </ol>
          </div>
        </div>

        <div className='troubles-child-div'>
          <p style={{ color: "yellow", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>
            React Child data transfer to Parent
          </p>
          <pre style={styleSheet.code}>
            <code>{`<Parent>`}</code>
            <br/>
            <code>{`  <Child />`}</code>
            <br/>
            <code>{`</Parent/>`}</code>
          </pre>
          <br/>
          <b>Parent Comonent</b>
          
          <pre style={styleSheet.code}>
            <code>
              {`import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {dataFromChild}</p>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;`}
            </code>
          </pre>

          <br/>
          <br/>
          <b>Child Component</b>
          <pre style={styleSheet.code}>
            <code>
              {`import React from 'react';

const ChildComponent = ({ sendDataToParent }) => {
  const sendData = () => {
    const data = 'Hello from Child';
    sendDataToParent(data);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;`}
            </code>
          </pre>
        </div>
        

        <div className='troubles-child-div'>
          <p style={{ color: "yellow", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>
            Scroll bar changes in HTML and React
          </p>
          <pre style={styleSheet.code}>
            <code>
              {`/* Target the scrollbar */
::-webkit-scrollbar {
  width: 8px;  /* Width for vertical scrollbars */
  height: 8px; /* Height for horizontal scrollbars */
}

/* Track (the background of the scrollbar) */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle (the draggable part of the scrollbar) */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}`}
            </code>
          </pre>
        </div>
      </div>      
    </div>
  )
}

export default Troubles
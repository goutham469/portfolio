import React, { useState } from 'react';

const CodeFormatter = () => {
  const [code, setCode] = useState('');
  const [copied,setCopied] = useState(false)

  const handleInputChange = (e) => {
    setCode(e.target.value);
    setCopied(false);
  };

  const formatCode = (inputCode) => {
    // Split the input into lines and map each line to a <code> tag with <br />
    return inputCode.split('\n').map((line, index) => (
      <span key={index}>
        <code>{line}</code>
        <br />
      </span>
    ));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
    }).catch(() => {
      alert("Failed to copy!");
    });
    setCopied(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Code Formatter</h1>

      <button 
        onClick={handleCopyToClipboard} 
        style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>
        {copied?"copied to clipboard":"copy code"}
    </button>
    <br/>
    <br/>

      <textarea
        value={code}
        onChange={handleInputChange}
        placeholder="Enter your code here..."
        style={{ width: '800px', height: '200px', fontFamily: 'monospace', fontSize: '16px',backgroundColor:"#000000",color:"white",padding:"20px" }}
      />

      <h2>Formatted Code:</h2>
      <pre style={{ backgroundColor: '#181818', borderRadius:"10px",padding:"20px",textAlign:"left",width:"800px",overflowX:"scroll"}}>
        {formatCode(code)}
      </pre>
      <br/>
      <br/>

      <div style={{textAlign:"left",backgroundColor:"#454545",borderRadius:"10px",padding:"10px"}}>
        <h4>wrap the above code inside </h4>
        <pre style={{backgroundColor:"black",borderRadius:"10px",padding:"10px",overflowX:"scroll"}}>
          <code>
            {`<pre style={{backgroundColor:"black",borderRadius:"10px",padding:"10px",overflowX:"scroll"}}>
  <code>
    // above code goes here
  </code>
</pre>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeFormatter;

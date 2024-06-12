import {useState} from 'react';
function App() {
  const [data,setData]=useState('');
  function getAnswer(){
    const query="Write a story about software engineering and software development."
    fetch('/api',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({'query':query})}).then(res=>res.json()).then(data=>{setData(data);console.log(data);})
  }
  return (
    <div style={{height:'100vh',display:'flex',flexDirection:'column'}}>
      <h1 style={{padding:'10px',marginBottom:'0'}}>Ask Your Queries Here</h1>
      <div style={{margin:'0',flexGrow:'1'}}>
        <div style={{width:'100%',height:'100%'}}>
          <article style={{margin:'0'}}>{data}</article>
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',backgroundColor:'#222',padding:'10px'}}>
        <textarea style={{margin:'0',flexGrow:'1',overflowY:'auto'}} placeholder="Enter Your Query Here"/>
        <button onClick={getAnswer} style={{margin:'0',flex:'1',marginLeft:'10px'}}>Get Answer</button>
      </div>
    </div>
  )
}

export default App
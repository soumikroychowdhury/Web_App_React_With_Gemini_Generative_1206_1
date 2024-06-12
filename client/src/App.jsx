import {useState,useRef} from 'react';
import DOMPurify from 'dompurify';
import {marked} from 'marked';
marked.use({gfm:true})
function App() {
  const [data,setData]=useState([]);
  const [query,setQuery]=useState('');
  const inputRef=useRef(null);
  function handleKeyDown(e){
    if(e.key==='Enter'&&!e.shiftKey){
      e.preventDefault();
      getAnswer();
      inputRef.current.blur();
    }
  }
  function getAnswer(){
    setData('');
    if(query!==''){
      fetch('/api',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({'query':query})}).then(res=>res.json()).then(data=>{const val=DOMPurify.sanitize(marked(data)); setData(val);inputRef.current.focus();setQuery('');console.log(data);}).catch(err=>console.log(err));
    }
  }
  return (
    <div style={{height:'100vh',display:'flex',flexDirection:'column'}}>
      <h1 style={{padding:'10px',marginBottom:'0',textAlign:'center',color:'lightblue'}}>Ask Your Queries Here</h1>
      <div style={{margin:'0',flexGrow:'1',overflow:'auto'}}>
        <div style={{width:'100%',height:'100%'}}>
          {data===''?(<div style={{textAlign:'center'}}>Let me find some answer to your query.</div>):<article style={{margin:'0'}} dangerouslySetInnerHTML={{__html:data}}/>}
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',backgroundColor:'#222',padding:'10px'}}>
        <textarea onChange={(e)=>setQuery(e.target.value)} style={{margin:'0',flexGrow:'1',overflowY:'auto'}} placeholder="Enter Your Query Here" onKeyDown={handleKeyDown} ref={inputRef} value={query}/>
        <button onClick={getAnswer} style={{margin:'0',flex:'1',marginLeft:'10px'}}>Get Answer</button>
      </div>
    </div>
  )
}

export default App
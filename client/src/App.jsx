function App() {
  return (
    <div style={{height:'100vh',display:'flex',flexDirection:'column'}}>
      <h1 style={{padding:'10px',marginBottom:'0'}}>Ask Your Queries Here</h1>
      <div style={{margin:'0',flexGrow:'1'}}>
        <div style={{width:'100%',height:'100%'}}>
          <article style={{margin:'0'}}/>
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',backgroundColor:'#222',padding:'10px'}}>
        <textarea style={{margin:'0',flexGrow:'1',overflowY:'auto'}} placeholder="Enter Your Query Here"/>
        <button style={{margin:'0',flex:'1',marginLeft:'10px'}}>Get Answer</button>
      </div>
    </div>
  )
}

export default App
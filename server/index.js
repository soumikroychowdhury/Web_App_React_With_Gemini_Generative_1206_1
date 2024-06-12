const { GoogleGenerativeAI } = require("@google/generative-ai");
const express=require('express');
const app=express();
let answer=null;
const bodyParser=require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
app.post('/api',(req,res)=>{
  let query=req.body.query;
  async function run() {
    const result = await model.generateContent(query);
    const response = await result.response;
    answer=response.text();
    res.json(answer);
  }
  run();
});
app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});
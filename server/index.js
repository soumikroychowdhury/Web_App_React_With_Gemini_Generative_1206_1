const { GoogleGenerativeAI } = require("@google/generative-ai");
const express=require('express');
const app=express();
let answer=null;
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
app.get('/api',(req,res)=>{
  async function run() {
    const prompt = "Write a story about software engineering and software development."
    const result = await model.generateContent(prompt);
    const response = await result.response;
    answer=response.text();
    res.json(answer);
  }
  run();
});
app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});
// async function run() {
//   const prompt = "Write a story about software engineering and software development."
//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }
// run();
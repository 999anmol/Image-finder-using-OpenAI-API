import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import {Configuration,OpenAIApi} from 'openai'
import './App.css'

function App() {
  //console.log(import.meta.env.VITE_Open_AI_Key);
  const [prompt,setPrompt] = useState("");
  const[result,setResult] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async() => {
    const res = await openai.createImage({
      prompt:prompt,
      n:1,
      size:"1024x1024",
    });
    setResult(res.data.data[0].url);
  };

  return(
    <div className="app-main">
      <h2>Generate An Image using Open AI</h2>
      <input 
       className="app-input"
       placeholder="Type to Generate.." 
       onChange={(e) => setPrompt(e.target.value)}/>
      <button onClick={generateImage}> Generate An Image</button>
      {result.length>0 ? <img className = "result-image" src ={result} alt="result" />:<></>}
    </div>
  );
 
}

export default App

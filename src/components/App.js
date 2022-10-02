
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 const[inputValue, setInputValue] = useState("");
  const[text , setText] = useState("")
  
  const changeInput=(e)=>{
   const input = e.target.value;
   setInputValue(input);
  }
  const buttonClick=()=>{
    const Value = [...text, inputValue]
    setText(Value)
    setInputValue("")
  }
 
 
  return (
    <div>
  <input id='input' value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}

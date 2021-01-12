import React, {useState} from 'react';
import {Message} from './Message.js';
import './App.css';

function App() {
  let [count,setCounter]=useState(0);
  let [isMorning, setMorning]=useState(true);
  return (
    <div className={`box ${isMorning ? 'colorChange':'box'}`}>
      <h1>Day time {isMorning ? 'Morning':'Night'}</h1>
      <Message Counter={count}/>
    <button onClick={()=>setCounter(++count)}>Count Value</button>
    <button onClick={()=>setMorning(!isMorning)} >Change Background</button>
    </div>
  );
}

export default App;

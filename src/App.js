import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>
   Hello SM UmerLatif <br/>
    Name= {name} Age= {age-10}<br/>
    <Hello firstname={name} ></Hello>
    </div>
}

export default App;

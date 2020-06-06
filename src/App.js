import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return <div>
    hello world from APP.js <br></br>
    Name= {props.name}<br></br>
    Age= {props.age-10}
    <div>div inside a div: a tree</div>
    </div>
}

export default App;

import React, { Component } from 'react'
import './App.css'
import { render } from 'react-dom';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';

let names = ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']

sendAlert = () => {
    let alertToSend = alert('devCodeCamp')
    return alertToSend;
}

function App() {
    return ( 
        <div className='App'>
            <h1>Test From App</h1>
            <DisplayName />
            <NamesList names = {names}/>
            <AlertUser sendAlert/>
        </div>
     );
}
 
export default App;
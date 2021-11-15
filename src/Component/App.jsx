import React, { Component } from 'react'
import './App.css'
import { render } from 'react-dom';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';

let names = ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']

function App() {
    return ( 
        <div className='App'>
            <h1>Test From App</h1>
            <DisplayName />
            <NamesList names = {names}/>
        </div>
     );
}
 
export default App;
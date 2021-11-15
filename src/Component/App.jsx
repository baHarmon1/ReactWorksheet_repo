import React, { Component } from 'react'
import './App.css'
import { render } from 'react-dom';
import DisplayName from './DisplayName/DisplayName';

function App() {
    return ( 
        <div className='App'>
            <h1>Test From App</h1>
            <DisplayName />
        </div>
     );
}
 
export default App;
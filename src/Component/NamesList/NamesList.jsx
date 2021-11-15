import React, { Component } from 'react';

const NamesList = (props) => {
    let renderedNames = props.names.map(name => {
        return <p>{name}</p>
    })
    return ( 
        <div className='namesList'>
            <ul>
                {renderedNames}
            </ul>
        </div>
     );
}
 
export default NamesList;
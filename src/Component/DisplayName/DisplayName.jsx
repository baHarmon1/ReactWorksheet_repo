import React, { Component } from 'react';

const DisplayName = ({firstName, lastName}) => {
    return ( 
        <div>
            <h1>{firstName}, {lastName}</h1>
        </div>
     );
}
 
export default DisplayName;
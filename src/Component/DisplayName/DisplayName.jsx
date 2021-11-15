import React, { Component } from 'react';


class DisplayName extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: 'Reggie',
            lastName: 'White'
         }
    }
    render() { 
        return ( 
            <h1>Test from Display Name, Test two: Hello {this.state.firstName}, {this.state.lastName}
            </h1>
         );
    }
}
 
export default DisplayName;
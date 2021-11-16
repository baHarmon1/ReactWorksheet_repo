import React from 'react'

const AlertUser = (props) => {
    return ( 
        <div>
            <button onClick = {props.sendAlert} >Alert</button>
        </div>
     );
    }
    export default AlertUser;
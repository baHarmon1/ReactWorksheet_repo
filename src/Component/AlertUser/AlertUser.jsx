import React from 'react'

sendAlert = (props) => {
    let alertToSend = alert('devCodeCamp')
    return alertToSend;
}
const AlertUser = (props) => {
    return ( 
        <div>
            <button onClick = {props.sendAlert()} ></button>
        </div>
     );
    }
    export default AlertUser;
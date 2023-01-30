import React from 'react';


const styles = {
    error:{
       color: "red",
        padding:"5px",
        border:"solid 1px red"
    },
    success:{
        color: "green",
        padding:"5px",
        border:"solid 1px green"
    }
    
}

export const notificationType = {
    error:"error",
    success : "sucess"
  }



const Notification = ({message,type}) => {
    console.log(type)
    return (<h1 style={type === notificationType.error ? styles.error: styles.success}>
                {message}
            </h1>)}

export default Notification;
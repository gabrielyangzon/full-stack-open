import React from 'react';

const Button = ({text,onClick}) =>  <button style={{marginRight:"5px"}} onClick={()=>onClick(text)}>{text}</button>

export default Button;
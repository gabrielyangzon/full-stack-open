import React from 'react';
import Title from './Title';

const Anecdote = ({title,text,vote}) => { 
        return(
            <div>
                <Title text={title}/>
                <p>{text}</p>
                <p>has {vote} votes </p>
            </div>
)}

export default Anecdote;
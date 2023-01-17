import React , { useState } from 'react'
import Anecdote from './components/Anecdote'
import Button from './components/Button'


const App = () => {
  const [anecdotes,setAnecDotes] = useState([
   { 
     text : 'If it hurts, do it more often.', 
     votes:0 
   },
   {
     text : 'Adding manpower to a late software project makes it later!',
     votes: 0
    },
    {
      text : 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      text : 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      text : 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      text:  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      text : 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0
    },  
    {
      text : 'The only way to go fast, is to go well.',
      votes: 0
    }, 
    
  ])
   
  const [selected, setSelected] = useState(0)
  const [highest , setHighest] = useState({text:"", votes: 0})

  function onClickHandler(type){
    if(type==="vote"){
     
      let newAnecArray = [...anecdotes]

      newAnecArray[selected].votes += 1

      setAnecDotes(newAnecArray)
      getHighest()
    }else{
      setSelected(randomIntFromInterval(0,anecdotes.length-1))
      
    }
  }

  function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  function getHighest(){

     let sortedAnec =[...anecdotes].sort((a,b) => b.votes - a.votes)

  
     setHighest(sortedAnec[0])

  }

  return (
    <div>
      
      <Anecdote 
        title="Anecdote of the day" 
        text={anecdotes[selected].text}
        vote={anecdotes[selected].votes} />
  
      <br />
      <Button 
        text="vote" 
        onClick={onClickHandler}/>
      <Button 
        text="next anecdote" 
        onClick={onClickHandler}/>

   
      <Anecdote 
        title="Anecdote with most votes" 
        text={highest.text}
        vote={highest.votes} />
    </div>
  )
}

export default App

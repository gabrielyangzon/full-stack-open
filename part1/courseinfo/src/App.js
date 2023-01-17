import React , {useState} from 'react'

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div> 
      <Header course={course} />
      <Content parts={parts}  />
      <Total parts={parts} />
    </div>
  )
}


const Header = (props) =>{

   return(
    <>
     <h1>{props.course}</h1>
    </>
   ) 

}


const Content = ({parts}) => {
     return(
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </>
   ) 
}

const Total = ({parts}) =>{
  return(
    <>
     <p>Number of exercises {parts.map(part => part.exercises).reduce((acc,curr) => acc + curr)}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

export default App

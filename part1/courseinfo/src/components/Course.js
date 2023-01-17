import React from 'react';


const Course = (props) => { 

    const {courseName , courseParts ,totalExercises } = props

    return (
    <> 
      <Header course={courseName} />
      <Content courses={courseParts} />
       <Total total={totalExercises}/> 
    </>) 

}


const Header = ({course}) =>{

   return(
    <>
     <h2>{course}</h2>
    </>
   ) 

}


const Content = ({courses}) => {
     return(
    <>
     {courses.map(course => <Part key={course.id} part={course.name} exercises={course.exercises}  />)}
   
    </>
   ) 
}

const Total = (props) =>{
  return(
    <>
     <h4>total of exercises {props.total}</h4>
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

export default Course;
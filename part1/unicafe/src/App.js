import React , { useState } from 'react'
import Button from './components/Button'
import Statisctics from './components/Statistics'
import Title from './components/Title'

function App() {
 

  const [feedBacks , setFeedBacks] = useState(
      {
        good : 0,
        neutral: 0,
        bad :0
      }
  )

  const addFeedBackHandler = (type) => {

  
    let newFeedBack = {
      ...feedBacks,
      [type]:feedBacks[type]+1
    }

    setFeedBacks(newFeedBack)
  }

  return (
    <>
      <Title text="give feedback"/>
      <Button text="good" onClick={addFeedBackHandler}/>
      <Button text="neutral" onClick={addFeedBackHandler}/>
      <Button text="bad" onClick={addFeedBackHandler}/>
      <Statisctics feedBacks={feedBacks}/>
    </>
  )
}




export default App;

import React from "react"
import Statistic from "./Statistic"
import Title from "./Title"

const Statistics = ({feedBacks}) => {

   const {good , neutral ,bad } = feedBacks

   const totalFeedBack = good + neutral + bad

   if(totalFeedBack===0){
        return(
            <div>
               <Title text="No feedback given" />
           </div>)
   }



   let objects = {
     ...feedBacks,
     total: totalFeedBack,
     average: (good - bad) / totalFeedBack,
     positive : `${(good / totalFeedBack ) * 100} % `
   }
  
  

   const components = Object.keys(objects).map(key => <Statistic key={key} type={key} count={objects[key]} />)


    return (<>
         <Title text="statistics"/>
            <table>
            <tbody>
                {components}
            </tbody>
        </table>
    </>)
}

export default Statistics
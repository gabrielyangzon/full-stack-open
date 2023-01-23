import React from 'react';

const Results = ({data , onClickShow}) => { 

    let component = 
          
             data.length > 10 ?
             <p>Too many matches, specify another filter</p>
             
              :data.length === 1 ?
                <Result countryData={data[0]}/>
                :data.map(cy => {
                return (<div key={cy.name.official}>
                        <p> {cy.name.common} - {cy.name.official} 
                         <button onClick={()=> onClickShow(cy.name.official)}>Show</button></p>
                        </div>)
                })

    return(
        <div>
           {component}
        </div>) 
}


const Result = ({countryData}) => {

    let { name , capital , area , languages , flags ,weatherData } = countryData
    
    return (<>
        <h1>{name.common} - {name.official}</h1>
        
        <p>capital: {capital[0]}</p>
        <p>area: {area}</p>

        <h4>Languages:</h4>
        <ul>
        {Object.keys(languages).map(key => <li key={key}>{languages[key]}</li>)}
        </ul>
        

        <img width="100" height="100" src={flags.png} alt="" />

        <Weather 
            capital={capital[0]} 
            weatherData={weatherData}/>
    </>)
}


const Weather = ({capital , weatherData}) => {

    const{ main, weather , wind } = weatherData

    return (<>
        <h3>Weather in {capital}</h3>
        <p>Temperature: {main.temp}  celcius</p>
        <p>{weather[0].description}</p>
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt=""/>
        <p>Wind: {wind.speed} m/s</p>
    </>)
}
export default Results;
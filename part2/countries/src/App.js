import React, { useEffect, useState } from "react";
import axios from 'axios'
import Search from "./components/Search";
import Results from "./components/Results";
import service from "./service/service";

function App() {

  const[searchField, setSearchField] = useState("")
  const[countryArray , setCountryArray] = useState([])
  const[filteredCountries, setFilteredCountries] = useState([])

  useEffect(()=> {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(result => result.status === 200 ? setCountryArray(result.data) : setCountryArray([]))
      .catch(error => console.log(error))
  },[])


  useEffect(()=>{
     let countries = countryArray.filter(c => 
      c.name.official.toLowerCase().includes(searchField.toLowerCase()))  
     
     if(searchField!==""){
      if(countries.length === 1){
        
       service.getWeather(countries[0].latlng[0],  countries[0].latlng[1])
          .then(data =>  {
            countries[0].weatherData = data 
            setFilteredCountries(countries)
          })
  
      }else{
          setFilteredCountries(countries)
      }
       
     }else{
       setFilteredCountries([])
     }
     
  
  },[searchField])

  function onChangeSearchInputHandler(e) {
      setSearchField(e.target.value)
  }


   function onClickShowHandler(name){     
      setSearchField(name)
   }

   function clear(){
    setSearchField("")
   }

  return (
    <div className="App">
        <Search  
          label="Find countries" 
          value={searchField}
          onChange={onChangeSearchInputHandler}
          onClear={clear}/>

         {filteredCountries.length === 0 ? <p>Please type country name</p>
         : <Results 
          data={filteredCountries}
          onClickShow={onClickShowHandler}/> }
        
    </div>
  );
}

export default App;

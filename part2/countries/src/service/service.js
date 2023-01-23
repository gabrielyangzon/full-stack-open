import axios from "axios"


function getWeather(latitude,longitude){

   
    return axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_NOT_SECRET_CODE}&units=metric`)
        .then(response => response.data)
        .catch(err => console.log(err))
}


export default {
    getWeather : getWeather
}
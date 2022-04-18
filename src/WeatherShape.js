import React, {useState} from "react"
import "./WeatherShape.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function WeatherShape (props) {
    
    const [weatherData, setWeatherData]= useState ({ready: false})
    const [city, setCity] = useState (props.mainCity)

function displayWeather (response){
setWeatherData ({
    temperature: Math.round(response.data.main.temp),
    wind: response.data.wind.speed,
    city: response.data.name,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity, 
    icon: response.data.weather[0].icon,
    date : new Date (response.data.dt * 1000)
})


}

function search(){
    const apiKey = "0163abee892c1733e53a43b6a0e7908a"
   
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then (displayWeather)
}

function handleSubmit (event){
    event.preventDefault();
    search();

}

function cityChange (event) {

    setCity(event.target.value)
}

if (weatherData.ready){

return (
    <div className="weatherApp">

    <form className = "searchForm" onSubmit={handleSubmit}>
    <div className ="row">
    <div className= "col-6">
    <input type="search" placeholder="Enter a city" className="enter-city" onChange={cityChange}/>
    </div>
    <div className = "col-6">
    <input type="submit" value="Search" className ="search-button"/>
    </div>
    </div>
    </form>
    <WeatherInfo info= {weatherData}/>

</div> 


);}
else {
search();

return "Waiting for data"}
}
import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo (props){

    return (
        <div className = "WeatherInfo "> 
    <div className="current-weather">
    <div className = "row" >
    <div className="col-6">
        <div className="iconWeather">
        <WeatherIcon code= {props.data.icon} /></div>
    <ul className="weatherDate">
    <li className="weather-description">
        {props.data.description}
    </li>
    <li className="date-time">
    <DisplayDate date= {props.data.date}/>
    </li>
    </ul>
    </div>
<div className= "col-6">
<h1 className="city"> {props.data.city}</h1>
<WeatherTemperature celsius = {props.data.temperature}/>
<ul className="humid-wind">
    <li>Humidity: {props.data.humidity}%</li>
    <li>Wind: {props.data.wind}km/h</li>
</ul>
</div>
</div>
</div>
        </div>
    )
}
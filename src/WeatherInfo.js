import React from "react";
import DisplayDate from "./DisplayDate";

export default function WeatherInfo (props){

    return (
        <div className = "WeatherInfo ">
    <div className="current-weather">
    <div className = "row" >
    <div className="col-6">
    <img src ={props.info.icon} alt = {props.info.icon} className="icon"/>
    <ul className="weatherDate">
    <li className="weather-description">
        {props.info.description}
    </li>
    <li className="date-time">
    <DisplayDate date= {props.info.date}/>
    </li>
    </ul>
    </div>
<div className= "col-6">
<h1 className="city"> {props.info.city}</h1>
<h2 className="temmperature">{props.info.temperature}
<span className= "units">°C|F </span>
</h2>
<ul className="humid-wind">
    <li>Humidity: {props.info.humidity}%</li>
    <li>Wind: {props.info.wind}km/h</li>
</ul>
</div>
</div>
</div>
        </div>
    )
}
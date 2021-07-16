import React from 'react';
import '../styles.css';
import { Card } from 'semantic-ui-react'


export default function weather({weatherData}) {

  return (
    <div>
      <h1>THE WEATHER WHERE YOU ARE</h1>
       <h1>{weatherData.name} <i>({weatherData.sys.country})</i></h1>
       <h2>Today's weather is {weatherData.weather[0].main}</h2>
       <h3>It is {Math.round(weatherData.main.temp)} °C but feels like {Math.round(weatherData.main.feels_like)}°C</h3>
       <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather icon"></img>
    </div>
)}


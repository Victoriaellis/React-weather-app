import React from 'react';
import '../styles.css';
import { Card } from 'semantic-ui-react'


export default function weather({weatherData}) {

  return (
    <div>
      <h1>THE WEATHER WHERE YOU ARE</h1>
       <h1>{weatherData.name} <i>({weatherData.sys.country})</i></h1>
       <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather icon"></img>
       <h2>Outlook: {weatherData.weather[0].main} - {weatherData.weather[0].description}</h2>
       <h3>It is {Math.round(weatherData.main.temp)} °C</h3>
       <p><i>feels like {Math.round(weatherData.main.feels_like)}°C</i></p>
    </div>
)}


import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getWeatherByGeoLocation } from './apiUrls';

function App() {
  const [weather, setWeather] = useState<any>({})

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        getWeatherByGeoLocation(pos.coords.latitude, pos.coords.longitude)          
          .then(response=>setWeather(response.data))
      })
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;

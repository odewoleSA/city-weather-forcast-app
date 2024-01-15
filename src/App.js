import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import weather_bg from './components/Assets/weather_bg.jpg';
import CityWeather from './components/CityWeather';

const API_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCity] = useState("");
  const [cityInfo,setInfo] = useState([]);

  const searchCity = async (cityname) => {
    if(cityname != ""){
      
      const response = await fetch(`${API_URL}${cityname}&APPID=6557810176c36fac5f0db536711a6c52`);
      const data = await response.json();

      setInfo(data);

      // let index = 0;

      // let data_list = data.list[index].dt_txt.slice(0, 10);

      // console.log(data);
      // console.log(data_list);
      // setCity(data.city.name);
    }else{
      setInfo("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
  };

  return (
    <div className='city-weather' style={{backgroundImage: 'url(' + weather_bg +')',backgroundRepeat:'repeat',opacity: '0.8',height: '450px',marginBottom:'20px'}}>
      <div className="city-header">Weather Forcast</div>
      <div className="city-add">
        <input type="text" placeholder='Enter a City...' className='city-input' 
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="city-add-btn" onClick={() => searchCity(searchTerm)}>Search</div>
      </div>
      {/* <div className="weather-list">
        { cities == "" ? <h2>No city found</h2> : <h4>{cities}</h4> }
      </div> */}
      <CityWeather cityInfo={cityInfo} />
    </div>
  );
};

export default App;

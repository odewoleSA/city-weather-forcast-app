import React from 'react';
import './CityWeather.css';
import d_Icon from './Assets/sun.jpg';

function CityWeather(props) {
    console.log(props);
    const index = 0;
    let cityarr = "";
    let cityname = <h4>No city found</h4>;

    let cityCountry = "";
    let temp = "";
    let wdesc = "";

    let humd = "";
    let wdeg = "";
    let wspeed = "";

    let checkImg = "";
    let check = props.cityInfo.city ? 1 : 0;

    if( check > 0){
        cityarr = props.cityInfo.city;
        cityname = props.cityInfo.city.name;
        cityCountry = props.cityInfo.city.country;
        checkImg = <img src={d_Icon } className='icon-show' />;

        temp = props.cityInfo.list[index].main.temp;
        wdesc = props.cityInfo.list[index].weather[index].description;

        humd = props.cityInfo.list[index].main.humidity;
        wdeg = props.cityInfo.list[index].wind.deg;
        wspeed = props.cityInfo.list[index].wind.speed;

        console.log(cityarr);
    };

    const tempValue = cityarr != "" ? Math.round(temp - 273.15) : 0;

    const cityExiststyle = {
        visibility: cityarr != "" ? 'visible' : 'hidden',
        opacity: cityarr != "" ? '1' : '0'
    };
    
  return (
    
    <div className='weather-container'>
        <div className="weather-info">
            <span>Today</span>
        </div>
        <div className="sub-main">
            <div className="left-side">
                {checkImg}
            </div>
            <div className="right-side" style={cityExiststyle}>
                <h2>{cityname}: {cityCountry}</h2>
                <p className='temp-value'> Temperature: {tempValue} °C </p>
                <p className='temp-value'>{wdesc}</p>
            </div>
        </div>
        <div className="weather-list" style={cityExiststyle}>
            <div className="weather-list-item">
                <ul className='list-item'>
                    <li className='list-item-value'>Humidity: {humd} | Deg: {humd} | Wind Speed: {wspeed} </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CityWeather;

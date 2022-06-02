import axios from 'axios';
import { useEffect } from 'react';
import { useWeather } from '../context/WeatherContext';
function DaysCard() {
  const { days, weather, setWeather, city } = useWeather();
  useEffect(() => {
    const api_key = '779c271986d91ab4f86362ce5d62e73c';
    const getData = async () => {
      const res = axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${api_key}`,
      );
      console.log((await res).data.daily)
      setWeather((await res).data.daily);
    };
    getData();
  }, [city, setWeather]);
  return (
    <div className="days">
      {weather.map((item, i) => {
        return ( 
            <div className="day" key={i}> 
                <div className="day-title">
                  {days[
                    new Date(item.dt * 1000).getDay()
                  ]}
                </div>
                <img
                  className="day-img"
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].description.toUpperCase()}
                  title={item.weather[0].description.toUpperCase()}
                /> 
                <div className="day-deg"> 
                    <span className="tmp-high">
                    {Math.round(item.temp['max'] - 273.15)}
                    &deg;
                    </span> 
                    <span>
                    {Math.round(item.temp['min'] - 273.15)}
                    &deg;
                    </span> 
                </div>
            </div> 
        );
      })}
    </div>
  );
}

export default DaysCard;
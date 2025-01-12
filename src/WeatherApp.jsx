import SearchBox from "./Search";
import InfoBox from "./Info";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "delhi",
        feelsLike: 24.98,
        temp: 25.05,
        temp_min: 25.05,
        temp_max: 25.05,
        humidity: 47.04,
    });

    let updateInfo=  (newInfo) =>{
        setWeatherInfo(newInfo)
    };

    return (

        <div><h3>Weather app from Mohin</h3>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}
// SearchBox.js
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import React, { useState } from 'react';



export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  const [error , setError]= useState(false);

  const API_URL = " https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "42fbc175e0a8f2a1519a085602b136e5";

  let weatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let data = await response.json();

            try{
              let results = {
                city:city,
                temp: data.main.temp,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description
              }
          
              console.log(results);
              return results;
            } catch (err){
              throw err;
            }

    


  };

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit =  async (event) => {
   try{
    event.preventDefault();
    console.log(city);
    setCity("");
  let newInfo =   await weatherInfo();
  updateInfo(newInfo);
   } catch(err){
    setError(true);
   }
  }
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="city name" variant="outlined" required value={city}
          onChange={handleChange} />
        <br /><br />
        <Button variant="contained" color="primary" type="submit" >Search</Button>
      </form>
      {error && <p style={{
        color: 'red',
      }}>No such Place Exists!!!</p>}
    </div>
  );
}

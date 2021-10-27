import React, { useState } from "react";

const api= {
  key: "8d974cee563091b9e3d5e8e081b7f766",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query, setQuery] = useState('');
  const [ weather, setWeather]= useState({});

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=4{query}&uniits=metric&APIID=${api.key}`)
        .then(res =>res.json)
        .then(result =>  {
          setWeather(result);
          setQuery('');
        })
    }
  }
  const dateBuilder = (d) => {
    let months = [
      "January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
    ];
    let days = [
      "Monady", "Tuesday", "Wednesday", "Thruesday",
      "Friday", "Satuerday", "Sunday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
      <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search...."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}
export default App;

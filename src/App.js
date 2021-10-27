import React, { useState } from "react";

const api= {
  key: "8d974cee563091b9e3d5e8e081b7f766",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query, setQuery] = useState('');
  const [ weather, setWeather]= useState({});

  
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
        <input type="text" className="search-bar" placeholder="Search...."></input>
      </div>
      <div className="location-box">
        <div className="location">Madrid, ES</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className= "temp">15c</div>
        <div className="weather">Sunny</div>
      </div>
      </main>
    </div>
  );
}

export default App;

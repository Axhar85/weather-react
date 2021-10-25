import React from "react";

const api= {
  key: "8d974cee563091b9e3d5e8e081b7f766",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  return (
    <div className="app">
      <main>
      <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search...."></input>
      </div>
      </main>
    </div>
  );
}

export default App;

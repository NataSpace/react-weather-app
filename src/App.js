import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <h1>Weather App</h1> */}
        <Weather defaultCity="Neustadt an der Donau"/>
        <footer>
          This project was coded <a href="/">Nataliia Piddubna</a> and is
          open-sourced{" "}
          <a
            href="https://github.com/NataSpace/react-weather-app.git"
            target="_blank"
          >
            on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}



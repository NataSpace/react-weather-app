import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Neustadt an der Donau" />
        <footer>
          This project was coded <a href="/">Nataliia Piddubna</a> and is
          open-sourced{" "}
          <a
            href="https://github.com/NataSpace/react-weather-app.git">
            on GitHub
          </a>{" "}
          and hosted{" "}
          {/* <a href="">
            on Netlify
          </a> */}
        </footer>
      </div>
    </div>
  );
}

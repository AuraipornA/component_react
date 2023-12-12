import React, {createRef, useEffect} from "react";
import ReactDOM from "react-dom/client";
import {DayLight} from "./components/DayLight.jsx";
import {MapView} from "./components/MapView.jsx";
import "@arcgis/core/assets/esri/themes/dark/main.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 <DayLight/>
 {/* <MapView/> */}
  </React.StrictMode>
);


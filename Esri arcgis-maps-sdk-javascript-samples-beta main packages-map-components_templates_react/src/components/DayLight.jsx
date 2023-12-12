import React, { useEffect, useRef } from "react";

import {
  ArcgisScene,
  ArcgisDaylight,
  ArcgisElevationProfile,
  ArcgisBasemapGallery,
  ArcgisDirectlineMeasurement3d,
  ArcgisAreaMeasurement3d,
  ArcgisLineOfSight,
  ArcgisWeather,
  ArcgisFullscreen,
  ArcgisFeature,
} from "@arcgis/map-components-react";
export function DayLight() {
  const mapRef = useRef();
  const daylightRef = useRef();
  const elevationProfileRef = useRef();
  const popupRef = useRef();

  const templateForPopup = {
    title:"Scene layer"
  };
  useEffect(() => {
    // mapRef.current.view.environment.lighting = {
    //   type: "sun",
    //    date: new Date("January 1, 2022 12:00:00 UTC")
    // };

    elevationProfileRef.current.view = mapRef.current.view;
  }, []);

  // assign elementRef to the ref of our component
  return (
    <ArcgisScene
      ref={mapRef}
      onViewReady={() => {
        mapRef.current.qualityProfile = "high";
        daylightRef.current.view = mapRef.current.view;
        console.log(mapRef.current.view.map.layers.items[0]);

        // console.log(mapRef.current.view);
      }}
      item-id="85b8e35118074517bdcc07fede694f85"
    >
      <ArcgisDaylight
        ref={daylightRef}
        position="top-right"
        play-speed-multiplier="2"
        expandable
      ></ArcgisDaylight>
      <ArcgisElevationProfile
        ref={elevationProfileRef}
        position="top-right"
        expandable
      ></ArcgisElevationProfile>
      <ArcgisBasemapGallery
        position="top-right"
        expandable
      ></ArcgisBasemapGallery>
      <ArcgisAreaMeasurement3d
        position="top-right"
        expandable
      ></ArcgisAreaMeasurement3d>
      <ArcgisDirectlineMeasurement3d
        position="top-right"
        expandable
      ></ArcgisDirectlineMeasurement3d>
      <ArcgisLineOfSight position="top-right" expandable></ArcgisLineOfSight>
      <ArcgisWeather position="top-right" expandable></ArcgisWeather>
      <ArcgisFullscreen position="top-right" ></ArcgisFullscreen>
      {/* I am working on creating a custom PopupTemplate and set the PopupTemplate on the layer*/}
      <ArcgisFeature ref={popupRef} position="top-right" ></ArcgisFeature>
    </ArcgisScene>
  );
}

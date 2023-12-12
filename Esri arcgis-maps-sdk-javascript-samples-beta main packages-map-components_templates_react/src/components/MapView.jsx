import React, { useEffect, useRef } from "react";

import {  ArcgisMap, ArcgisPrint } from "@arcgis/map-components-react";
export function MapView() {
  const mapViewRef = useRef();
  const printRef = useRef();

  useEffect(() => {

  } ,[]);

  // assign elementRef to the ref of our component
  return (
    <ArcgisMap ref={mapViewRef}
    onViewReady={() =>{
        console.log(mapViewRef.current.view);
        printRef.current.templateOptions = {
            title: "My Print",
            author: "Sam",
            copyright: "My Company",
            legendEnabled: true
        };

    }}
    item-id="d6d830a7184f4971b8a2f42cd774d9a7">
     <ArcgisPrint ref={printRef} position="top-right" expandable></ArcgisPrint> 
     
     </ArcgisMap>

  );
}



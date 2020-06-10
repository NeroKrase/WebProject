import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

const Map = () =>{
    return (
        <GoogleMap defaultZoom={18} defaultCenter={{lat: 50.365449, lng: 30.455004}}>
            <Marker key={41} position={{lat: 50.365449, lng: 30.455004}}/>
        </GoogleMap>
        )
}


export default withScriptjs(withGoogleMap(Map))
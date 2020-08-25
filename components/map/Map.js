import React, {useState, useEffect} from "react";
import {useMutation} from '@apollo/react-hooks'
import ReactMapGL, {GeolocateControl} from "react-map-gl";
import {TRACK} from '../../graphQL/tracking/track';


const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 10
};

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 1650,
    height: 500,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 18
  })

  const [createTrack] = useMutation(TRACK, {
    onCompleted: data => {
      console.log(data)
    },
    onError: error => {
      console.log(error)
    }
  })

  const setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let newViewport = {
          width: 1650,
          height: 500,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 18
      }
      setViewport({
          ...viewport,
          ...newViewport
      })
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setUserLocation()
      createTrack({variables: {
        device: "device 1",
        lat: viewport.latitude,
        lon: viewport.longitude
      }})
    }, 10000);
    return () => clearInterval(interval);
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken='pk.eyJ1IjoianVsaWVuaGlyd2EiLCJhIjoiY2tlMmpsZTBxMDl5ZjJ0cGRyNG0zeXQzciJ9.NN6PdI3a9JdkfUC5ulpUlg'
      {...viewport}
      onViewportChange={newViewport => setViewport(newViewport)}
    >
      <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
    </ReactMapGL>
  )
}

export default Map;

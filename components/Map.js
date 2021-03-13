import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const center = {
  lat: -3.745,
  lng: -38.523
};

function Map({mapSize}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCvHeZW72nlhAAvRvUsXQJJazXXWW-SXLI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={mapSize}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
		</>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
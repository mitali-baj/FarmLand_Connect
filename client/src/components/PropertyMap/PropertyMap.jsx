import React, { useContext, useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from "google-maps-react";
import useProperties from "../../hooks/useProperties";

const PropertyMap = ({ coordinates }) => {
  //console.log("Coordinates:",coordinates);
  const [path, setPath] = useState([]);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const onInfoWindowClose = () => {
    setShowInfoWindow(false);
  };

  useEffect(() => {
    if (coordinates && coordinates.length === 4) {
      setPath([]);
      const newPath = [
        { lat: coordinates[0]?.Lat, lng: coordinates[0]?.Lng },
        { lat: coordinates[1]?.Lat, lng: coordinates[1]?.Lng },
        { lat: coordinates[2]?.Lat, lng: coordinates[2]?.Lng },
        { lat: coordinates[3]?.Lat, lng: coordinates[3]?.Lng },
        { lat: coordinates[0]?.Lat, lng: coordinates[0]?.Lng },
      ];

      setPath(newPath);
    }
  }, [coordinates]);

  return (
    <Map
      google={google}
      zoom={20}
      initialCenter={{
        lat: coordinates[0]?.Lat || 0,
        lng: coordinates[0]?.Lng || 0
      }}
      center={{
        lat: coordinates[0]?.Lat || 0,
        lng: coordinates[0]?.Lng || 0
      }}
      style={{
        height: "100vh",
        width: "80%",
        marginTop: "20px",
        zIndex: 0,
      }}
    >
      {coordinates && coordinates.length > 0 && (
        <Polyline
          path={path}
          strokeColor="#FF0000"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      )}
      <InfoWindow onClose={onInfoWindowClose}></InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCoSvxq7je1-9KFLPtPnDJwWamrAhE9fPo"
})(PropertyMap);
import React, { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from "google-maps-react";
import {
  TextInput,
  Box,
  Textarea,
  Group,
  Button,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";



const GMap = ({ 
  addressData,  
  prevStep,
  nextStep,
  propertyDetails,
  setPropertyDetails, }) => {
    const form = useForm({});

  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [latLngs, setLatLngs] = useState([]);
  const [arrLatLngs, setArrLatLngs] = useState([]); //arrLatLngs stores 4 lat lng value pairs

  const [path, setPath] = useState([]);

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, arrLatLngs }));
      nextStep();
    }
  };
  // function setNewPath () {
  //    const newPath = [
  //      { lat: arrLatLngs[0].Lat, lng: arrLatLngs[0].Lng },
  //      { lat: arrLatLngs[1].Lat, lng: arrLatLngs[1].Lng },
  //      { lat: arrLatLngs[2].Lat, lng: arrLatLngs[2].Lng },
  //      { lat: arrLatLngs[3].Lat, lng: arrLatLngs[3].Lng },
  //      { lat: arrLatLngs[0].Lat, lng: arrLatLngs[0].Lng },
  //    ];
 
  //    setPath(newPath);
  // };

  const onMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    setLatLngs((prevLatLngs) => {
      const newLatLngs = [...prevLatLngs, { Lat: lat, Lng: lng }];
      if (newLatLngs.length == 4) {
        setArrLatLngs(newLatLngs);  
       // setNewPath();
        
      }
      return newLatLngs.length > 4 ? newLatLngs.slice(1) : newLatLngs;
      
    });
    setShowInfoWindow(true);
    
  };
console.log(arrLatLngs);
  const onInfoWindowClose = () => {
    setShowInfoWindow(false);
  };

  const [lat1, setLat] = useState(0);

  const [lng1, setLng] = useState(0);

  // const drawBoundary = () => {
    

  useEffect(() => {
    if (arrLatLngs.length === 4) {
      setPath([]); 
      const newPath = [
        { lat: arrLatLngs[0].Lat, lng: arrLatLngs[0].Lng },
        { lat: arrLatLngs[1].Lat, lng: arrLatLngs[1].Lng },
        { lat: arrLatLngs[2].Lat, lng: arrLatLngs[2].Lng },
        { lat: arrLatLngs[3].Lat, lng: arrLatLngs[3].Lng },
        { lat: arrLatLngs[0].Lat, lng: arrLatLngs[0].Lng },
      ];
  
      setPath(newPath);
     }
  }, [arrLatLngs]);



//};


  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const cleanedAddressData = addressData.replace(/[^a-zA-Z0-9.]/g, "").replace(/ /g, "%");
        console.log(cleanedAddressData);
        const address = cleanedAddressData; // Replace with your form values
        const apiKey = "AIzaSyCoSvxq7je1-9KFLPtPnDJwWamrAhE9fPo"; // Replace with your Google Maps API key
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch location");
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const lat2 = data.results[0].geometry.location.lat;
          const lng2 = data.results[0].geometry.location.lng;

          setLat(lat2);
          setLng(lng2);
          console.log(lat2);
        } else {
          throw new Error("No results found for the given address");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation();

  }, [lat1, lng1]);

  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  
  return (
    <div>
    <form
        onSubmit={(e) => {
          //e.preventDefault();
          handleSubmit();
        }}
      >
      <div>Select 4 points on the map to draw boundary for your land!</div>
      <div style={{ position: "relative", width: "120%", height: "100vh", overflow: "hidden", marginTop: "20px" }}>
    <Map
      google={google}
      zoom={20}
      initialCenter={{
        lat: lat1,
        lng: lng1
      }}
      center={{
        lat: lat1,
        lng: lng1
      }}
      style={{
        height: "100vh",
        width: "80%",
        marginTop: "20px",
        zIndex: 0,
      }}
      onClick={onMapClick}
          
    >
    
    {path.length > 0 && (
      <Polyline
                path={path}
                strokeColor="#FF0000"
                strokeOpacity={0.8}
                strokeWeight={2} />
    )}
      <InfoWindow onClose={onInfoWindowClose}></InfoWindow>

      {latLngs.map((latLng, index) => (
        <Marker
          key={index}
          onClick={onMapClick}
          name={`Marker ${index + 1}`}
          position={{ lat: latLng.Lat, lng: latLng.Lng }}
          icon= {image}
          shape= {shape}
        />
      ))}
    

    {/* <Button onClick={() => {
  setArrLatLngs([]);
  setPath([]);
}}>
  Capture coordinates again!
</Button>

<Button onClick={
  drawBoundary
  }>
  Draw Boundary
</Button> */}
</Map>


</div>

<div>
<Group position="center" mt={"xl"}>
  <Button variant="default" onClick={prevStep}>
    Back
  </Button>
  <Button type="submit">Next</Button>
  </Group>
  </div>
</form>

</div>


);
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCoSvxq7je1-9KFLPtPnDJwWamrAhE9fPo",
})(GMap);
import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import GeoCoderMarker from '../GeoCoderMarker/GeoCoderMarker'
const Map = ({address, village, tehsil, district, state, country}) => {
// const Map = ({address, state, country}) => {

  //const address1 = `${address} ${village} ${tehsil} ${district} ${state} ${country}`;
  return (
    <MapContainer
    center={[53.35, 18.8]}
    zoom={3}
    scrollWheelZoom={false}
    style={{
        height: "40vh",
        width: "100%",
        marginTop: "20px",
        zIndex: 0,
       
    }}
    >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        
        {/* <GeoCoderMarker address={`${address} ${state} ${country}`} /> */}
        {/* <TileLayer url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}' maxZoom={20} subdomains={['mt0', 'mt1', 'mt2', 'mt3']} />
        <GeoCoderMarker address2={address1} /> */}
        {/* <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}/{p}/{q}/{r}.png'/> */}
        <GeoCoderMarker address={`${address} ${village} ${tehsil} ${district} ${state} ${country}`} />
    </MapContainer>
  )
}

export default Map
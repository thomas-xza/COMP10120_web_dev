import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoid2l6YXJkLXQiLCJhIjoiY2xwaDk1cGg5MDU5MzJtczV6OG43dHp1diJ9.zRlYb9J86pLnzQKKoCcPqQ'


export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    
    useEffect(() => {
	if (map.current) return; // initialize map only once
	map.current = new mapboxgl.Map({
	    container: mapContainer.current,
	    style: 'mapbox://styles/mapbox/streets-v12',
	    center: [lng, lat],
	    zoom: zoom
	});
	
	map.current.on('move', () => {
	    setLng(map.current.getCenter().lng.toFixed(4));
	    setLat(map.current.getCenter().lat.toFixed(4));
	    setZoom(map.current.getZoom().toFixed(2));
	});

	console.log(lng, lat);
    });
    
    return (
	    <div>
	    <button className="proof-of-concept button" onClick={() => console.log(lng, lat)}>Log longitude/latitude to console</button>
	    <div className="sidebar">
	    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
	</div>
	    <div ref={mapContainer} className="map-container" />
	    </div>
    );
}

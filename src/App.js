import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoid2l6YXJkLXQiLCJhIjoiY2xwaDk1cGg5MDU5MzJtczV6OG43dHp1diJ9.zRlYb9J86pLnzQKKoCcPqQ'


export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-2.235);
    const [lat, setLat] = useState(53.46235);
    const [zoom, setZoom] = useState(13);
    const [size, setSize] = useState([0, 0]);

    //  https://docs.mapbox.com/api/maps/styles/


    function useWindowSize() {
	useLayoutEffect(() => {
	    function updateSize() {
		setSize([window.innerWidth, window.innerHeight]);
	    }
	    window.addEventListener('resize', updateSize);
	    updateSize();
	    return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
    }

    
    function map_clicked(e) {

	alert("You clicked:\n" + lng + "\n" + lat);

    }
    
    function handleResize() {

	map.current.resize();

	console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);

    }
    
    useEffect(() => {
	if (map.current) return; // initialize map only once
	map.current = new mapboxgl.Map({
	    container: mapContainer.current,
	    // style: 'mapbox://styles/mapbox/streets-v12'
	    style: 'mapbox://styles/mapbox/navigation-night-v1',
	    center: [lng, lat],
	    zoom: zoom
	});
	
	map.current.on('mousemove', (e) => {

	    console.log(JSON.stringify(e.point));
	    const co_ords = e.lngLat.wrap();

	    console.log(co_ords, co_ords["lng"], co_ords["lat"]);
	    setLng(co_ords.lng);
	    setLat(co_ords.lat);
	    
	    setZoom(map.current.getZoom().toFixed(2))
	    
	});

	window.addEventListener('resize', handleResize)

  });
    
    return (
	    <div>
	    <div className="sidebar">
	    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
	</div>
	    <div ref={mapContainer} className="map-container" onClick={map_clicked}/>
	    </div>
    );
}

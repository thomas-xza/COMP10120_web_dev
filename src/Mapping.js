
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoid2l6YXJkLXQiLCJhIjoiY2xwaDk1cGg5MDU5MzJtczV6OG43dHp1diJ9.zRlYb9J86pLnzQKKoCcPqQ'

import Data_io from './Data_io.js';


export default function Mapping( { client_side_data, fallback_data } ) {

    const [form_data, set_form_data] = useState({ state: 0,
						  id: Math.floor(Math.random() * 10000000) + 1,
						  window_x: 0,
						  window_y: 0,
						  coordinate_x: 0,
						  coordinate_y: 0,
						  issue_type: "",
						  description: "" });
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    
    const [lng, setLng] = useState(-2.235);
    const [lat, setLat] = useState(53.46235);
    const [zoom, setZoom] = useState(13);
    const [size, setSize] = useState([0, 0]);

    const [form_state, set_form_state] = useState(0);

    const map_clicked = (e) => {

	set_form_data({ ...form_data,
			state: 1,
			coordinate_x: lng,
			coordinate_y: lat });

	console.log(form_data);

    };
   
    //  https://docs.mapbox.com/api/maps/styles/
    
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

	    // console.log(JSON.stringify(e.point));
	    const co_ords = e.lngLat.wrap();

	    setLng(co_ords.lng);
	    setLat(co_ords.lat);
	    
	    setZoom(map.current.getZoom().toFixed(2))
	    
	});

  });
    
    return (
	
	    <div>
	    <div className="sidebar">
	    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
	</div>
	    <div ref={mapContainer} className="map-container" onClick={map_clicked}/>

	    <Data_io form_data={form_data} set_form_data={set_form_data}/>
	
	    </div>

    );
}


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

    const [markers_loaded, set_markers_loaded] = useState(false);

    const [reading_state, set_reading_state] = useState(false);

    
    const mapContainer = useRef(null);
    const map = useRef(null);
    
    const [lng, setLng] = useState(-2.235);
    const [lat, setLat] = useState(53.46235);
    const [zoom, setZoom] = useState(13);
    const [size, setSize] = useState([0, 0]);

    const [form_state, set_form_state] = useState(0);

    const map_clicked = (e) => {

	// if (form_data.state === 0) {

	    set_form_data({ ...form_data,
			    state: 1,
			    coordinate_x: lng,
			    coordinate_y: lat });
	    
	    console.log(form_data);

	// }
	    
    };

    const load_markers = () => {

	const markerHeight = 50;
	const markerRadius = 10;
	const linearOffset = 25;
	const popupOffsets = {
	    'top': [0, 0],
	    'top-left': [0, 0],
	    'top-right': [0, 0],
	    'bottom': [0, -markerHeight],
	    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
	    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
	    'left': [markerRadius, (markerHeight - markerRadius) * -1],
	    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
	};

	const marker_1 = new mapboxgl.Marker()
    	      .setLngLat([-2.235, 53.46235])
    	      .addTo(map.current)
	      .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"));

	// const popup_1 = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
	//       .setLngLat([-2.235, 53.46235])
	//       .setHTML("<h1>Hello World!</h1>")
	//       .setMaxWidth("300px");

	const marker_2 = new mapboxgl.Marker()
    	      .setLngLat([-2.245, 53.46235])
	      .addTo(map.current)
	
	marker_2.getElement().addEventListener('click', () => {
            alert("Alternate click event (not part of Mapbox code) but don't know if useful")
	    set_form_data({ ...form_data,
			    state: 3 })
	    console.log(form_data)
	});

	const marker_3 = new mapboxgl.Marker()
    	      .setLngLat([-2.235, 53.46335])
	      .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
    	      .addTo(map.current);

	const marker_4 = new mapboxgl.Marker()
    	      .setLngLat([-2.235, 53.46435])
	      .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
    	      .addTo(map.current);

	set_markers_loaded(true)

    }

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

	if (markers_loaded === false) {

	    load_markers()

	}
	
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

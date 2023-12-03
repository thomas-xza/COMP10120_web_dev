import React, { useEffect, useState } from 'react';


import Form from './Form.js';

export default function Data_io( {form_data, set_form_data} ) {

    // const marker = new mapboxgl.Marker({
    // 	color: '#FFF',
    // 	draggable: false
    // }).setLngLat([-2.235, 53.46235]).addTo(map.current)
    

    switch(form_data["state"]) {

    case 1:
    
    return (
	
	    <div className="form form_new">

	    <Form form_data={form_data} set_form_data={set_form_data}/>

	
	</div>

    );

    case 2:

	return ( <div>
		 </div>
	       );

    };
    
}

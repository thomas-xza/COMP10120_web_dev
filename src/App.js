import React from 'react';
import { useState } from 'react';

// import { fallback_data } from './fallback_data.json';

import Mapping from './Mapping.js';

export default function App() {

    // const [fallback_data, set_databack_data] = useState(fallback_data);

    const [fallback_data, set_fallback_data] = useState({});

    const [client_side_data, set_client_side_data] = useState(true);

    const [page_flow, set_page_flow] = useState(0);

    localStorage.clear();

    const local_storage_data_points = localStorage.getItem("data_points")

    if (local_storage_data_points === null) {

	localStorage.setItem("data_points", "");

    }

    switch (page_flow) {

    case 0:

	return(
	    <Mapping
	    client_side_data={client_side_data}
	    fallback_data={fallback_data}
		/>	    
	)

    };
    
}


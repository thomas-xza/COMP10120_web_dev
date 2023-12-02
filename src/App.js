import React from 'react';
import { useState } from 'react';

// import { fallback_data } from './fallback_data.json';

import Mapping from './Mapping.js';

export default function App() {

    // const [fallback_data_obj, set_databack_data_obj] = useState(fallback_data);

    const [fallback_data_obj, set_databack_data_obj] = useState({});

    const [page_flow, set_page_flow] = useState(0);

    const [form_data, set_form_data] = useState({ "coordinate_x": "",
    						  "coordinate_y": "",
    						  "issue_type": "",
						  "description": "" });


    switch (page_flow) {

    case 0:

	return(
	    <Mapping
		fallback_data_obj={fallback_data_obj}
		form_data={form_data}
		set_form_data={set_form_data}
		/>	    
	)

    };
    
}


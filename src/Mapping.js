import React from 'react';
import { useState, useEffect } from 'react';

// import { validate_postcode, validate_phone } from './validators.js';

export default function Form({ fallback_data_obj, form_data, set_form_data }) {

    const handle_clear = () => {

	set_form_data(({ "coordinate_x": "",
                         "coordinate_y": "",
                         "issue_type": "",
                         "description": "" });
		      
    };

    const handle_checkbox_toggle = (target) => {

	const issue_type_selection = target

	set_form_data({ ...form_data,
			"issue_type": issue_type_selection })

    }


    useEffect(() => {

	console.log(form_data);

    },[form_data]);
    
    return (

   );
}


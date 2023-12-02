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

	set_form_data({ name: extract_name(),
			phone: extract_phone(),
			phone_valid: validate_phone(extract_phone()),
			postcode: extract_postcode(),
			postcode_valid: validate_postcode(extract_postcode()),
			paste: "",
			tdt: extract_tdt(),
			returnee: extract_returnee(),
		        address: extract_address(),
			dob: extract_dob(),
			phone_alt: extract_phone_alt() });

    };

    const handle_confirm = (e) => {

	if ( form_data.phone_valid === 1
	     && form_data.postcode_valid === 1 ) {

	    set_page_flow(20);

	}
	
    };

    useEffect(() => {

	console.log(form_data);

    },[form_data]);
    
    return (

	    <div className="form">
	    
            <div className="topbar">
	    <button onClick={() => {set_page_flow(5)}}>To clinic editor</button >
	    </div>
		    
	    <h1>Client data entry</h1>

	    <label><em>Optional</em> paste a row from spreadsheet:</label><br/>

	    <input value={form_data.paste} onChange={handle_paste}>
	    </input>
	    <br/>
	    
	    <label>Name:</label><br/>

	    <input value={form_data.name} onChange={handle_name}>
	    </input><br/>

	    <label>Postcode:</label><br/>
	    
	    <input value={form_data.postcode} onChange={handle_postcode}>
	    </input>
	    {form_data.postcode_valid === 0 && <em>(awaiting valid input)</em>}
	    <br/>

	    <label>Phone:</label><br/>

	    <input value={form_data.phone} onChange={handle_phone}>
	    </input>
	    {form_data.phone_valid === 0 && <em>(awaiting valid input)</em>}
	    <br/>

            <div className="jsx">

            <label key="checkbox_label_tdt">
            <input type="checkbox"
        key="checkbox_box_tdt"
        checked={form_data.tdt}
        onChange={() => handle_checkbox_toggle("tdt")} />
            Referral from TDT
        </label>

        </div>

            <div className="jsx">

            <label key="checkbox_label_returnee">
            <input type="checkbox"
        key="checkbox_box_returnee"
        checked={form_data.returnee}
        onChange={() => handle_checkbox_toggle("returnee")} />
            Returnee
        </label>

        </div>

	    <div className="jsx">
	    
	    <button onClick={handle_test}>Load test data</button >
	    <button onClick={handle_clear}>Clear form</button >
	    <br/><br/>
		    
	    {
		form_data.postcode_valid === 1 &&
		    form_data.phone_valid === 1 ?
		    
		    <div>
		    <button onClick={handle_confirm}>Find appointment</button ><br/><br/>
		    <strong>Privacy notice:</strong> The postcode will be sent to Mapbox API to be turned into global co-ordinates. No other data will be automatically transferred anywhere.<br/><br/><br/>
		    </div>

		:
		<div className="loading">Awaiting your inputs</div>
		
	    }

	</div>
	
	</div>
   );
}


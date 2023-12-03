import React, { useEffect, useState } from 'react';


export default function Form( {form_data, set_form_data} ) {

    const handle_close = (e) => {

	set_form_data({ ...form_data,
		        state: 0,
			coordinate_x: 0,
			coordinate_y: 0 })

	console.log(form_data)

    };

    const handle_type = (e) => {

	set_form_data({ ...form_data,
		        issue_type: e.target.value })

	console.log(form_data)

    };

    const handle_desc = (e) => {

	set_form_data({ ...form_data,
		        description: e.target.value })

	console.log(form_data)

    };

    return (
	
	    <div className="form form_new">

	    <button onClick={handle_close}>Close form</button>

	    <label>Issue type</label>

	    <input value={form_data.description} onChange={handle_type}></input>
	    
	    
	    <label>Description of issue</label>

	    <input value={form_data.description} onChange={handle_desc}></input>


	
	
	</div>
	    
    );

    
}

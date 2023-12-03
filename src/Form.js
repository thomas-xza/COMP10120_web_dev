import React, { useEffect, useState } from 'react';


export default function Form( {form_data, set_form_data} ) {

    const handle_close = (e) => {

	set_form_data({ ...form_data,
			state: 0,
			id: Math.floor(Math.random() * 10000000) + 1,
			window_x: 0,
			window_y: 0,
			coordinate_x: 0,
			coordinate_y: 0
		      });

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

    const handle_confirm = (e) => {

	set_form_data({ ...form_data,
		        state: 2 })

	const data_points = localStorage.getItem("data_points")

	localStorage.setItem("data_points", [ ...data_points,
					      form_data
					    ])

	console.log( { ...localStorage } )

	//  Form data should fire off somewhere now, then switch state back to 0
	//    Temporary hack is just to store in localStorage...?

	console.log(form_data)

    };

    return (
	
	    <div className="form form_new">

	    <button onClick={handle_close}>Close form</button>
	    <br/>

	    <label>Issue type</label>

	    <input value={form_data.issue_type} onChange={handle_type}></input>
	    
	    
	    <label>Description of issue</label>

	    <input value={form_data.description} onChange={handle_desc}></input>

	<br/>

            <button onClick={handle_confirm}>Submit issue</button>
	    
	
	</div>
	    
    );

    
}

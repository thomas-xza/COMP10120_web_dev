import React, { useEffect, useState } from 'react';


export default function Form( {form_data, set_form_data} ) {

    const handle_close = () => {

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

    const add_obj_to_local_storage = (obj) => {

	

    }

    const handle_confirm = (e) => {

	set_form_data({ ...form_data,
		        state: 2 })

	// const data_points = localStorage.getItem("data_points")

	// console.log("data_points", data_points)


	const local_storage_data_arr = JSON.parse(localStorage.getItem("data_points") || '[]')

	const local_storage_data_arr_new = [ ...local_storage_data_arr,
					     form_data ]

	console.log(local_storage_data_arr_new)
	
	localStorage.setItem("data_points", JSON.stringify(local_storage_data_arr_new))

	alert("Your form entry has been saved (to your own browser - no backend yet!)")

	console.log( { ...localStorage } )	

	handle_close()

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

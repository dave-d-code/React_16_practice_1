import React from 'react';

const person = (props) => {
	return (
			<div>
			<p> Problem Description: {props.name} </p>
			<p> f*cks given {props.amount} </p>
			<p>{props.children}</p>
			</div>
		   );
};

export default person;
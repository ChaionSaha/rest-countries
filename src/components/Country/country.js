import React from "react";

const Country = (props) => {
	const { name, capital, population } = props.country;
	return (
		<div>
			<div
				className="country"
				style={{ backgroundImage: `url(${props.country.flags.png})` }}
			>
				<h3>{name.common}</h3>
				<p>Capital: {capital}</p>
				<p>Population: {population}</p>
			</div>
		</div>
	);
};

export default Country;

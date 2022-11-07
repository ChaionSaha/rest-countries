import React from "react";
import { useState, useEffect } from "react";
import Country from "./Country";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);

	return (
		<div>
			<h1>Visiting every country in the world!!!</h1>
			<h4>Country Count: {countries.length}</h4>
			<div className="countries">
				{countries.map((country) => {
					return (
						<Country country={country} key={country.cca3}></Country>
					);
				})}
			</div>
		</div>
	);
};

export default Countries;

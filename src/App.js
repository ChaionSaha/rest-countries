//import logo from "./logo.svg";
import "./app.css";
import { useEffect, useState } from "react";

function App() {
	return (
		<div className="App">
			<RestCountries></RestCountries>
		</div>
	);
}

function RestCountries() {
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
					console.log(country);
					return (
						<Country
							name={country.name.common}
							capital={country.capital}
							img={country.flags.png}
							population={country.population}
						></Country>
					);
				})}
			</div>
		</div>
	);
}

function Country(props) {
	return (
		<div
			className="country"
			style={{ backgroundImage: `url(${props.img})` }}
		>
			<h3>{props.name}</h3>
			<p>
				Capital: <h4>{props.capital}</h4>
			</p>
			<p>
				Population: <h4>{props.population}</h4>
			</p>
		</div>
	);
}

export default App;

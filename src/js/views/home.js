import React from "react";

import "../../styles/home.css";
import { Characters } from "./ViewCard/CardPeople";
import { Vehicles } from "./ViewCard/CardVehicles";
import { Species } from "./ViewCard/CardSpecies";
import { Starships } from "./ViewCard/CardStarships";
import { Planets } from "./ViewCard/CardPlanets";

export const Home = () => {

	return (
		<div className="text-center mt-5">
			<div className="d-flex flex-wrap justify-content-center">
				<h2>Personajes</h2>
				<Characters />
				<h2>Vehiculos</h2>
				<Vehicles />
				<h2>Especies</h2>
				<Species />
				<h2>Naves Espaciales</h2>
				<Starships />
				<h2>Planetas</h2>
				<Planets />
			</div>
		</div>
	);
};

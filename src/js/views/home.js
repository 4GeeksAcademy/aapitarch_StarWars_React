import React from "react";
import { Characters } from "./ViewCard/CardPeople";

import "../../styles/home.css";
import { Vehicles } from "./ViewCard/CardVehicles";
import { Species } from "./ViewCard/CardSpecies";
import { Starships } from "./ViewCard/CardStarships";
import { Planets } from "./ViewCard/CardPlanets";

export const Home = () => {

	return (
		<div className="text-center mt-5">
			<div className="d-flex flex-wrap justify-content-center">
				<Characters />
				<Vehicles />
				<Species />
				<Starships />
				<Planets />
			</div>
		</div>
	);
};

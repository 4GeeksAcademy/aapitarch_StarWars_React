import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { DetailCharacter } from "./views/ViewDetail/DetailPeople";
import { DetailPlanets } from "./views/ViewDetail/DetailPlanets";
import { DetailSpecies } from "./views/ViewDetail/DetailSpecies";
import { DetailStarship } from "./views/ViewDetail/DetailStarships";
import { DetailVehicles } from "./views/ViewDetail/DetailVehicles";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div className="d-flex">
						<div className="content-area">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/character/:uid" element={<DetailCharacter />} />
								<Route path="/planet/:uid" element={<DetailPlanets />} />
								<Route path="/specie/:uid" element={<DetailSpecies />} />
								<Route path="/starship/:uid" element={<DetailStarship />} />
								<Route path="/vehicle/:uid" element={<DetailVehicles />} />
								<Route path="*" element={<h1>Not found!</h1>} />
							</Routes>
						</div>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

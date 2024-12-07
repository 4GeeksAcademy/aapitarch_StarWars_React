import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Personajes</h1>
		  <div className="d-flex flex-wrap justify-content-center">
			{
			  store.people.map((person) => (
				<Card 
					key={person.uid} 
					title={person.name} 
					image={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
				/>
			  ))
			}
		  </div>
		  {
			store.nextPage && (
				<button
					className="btn btn-primary mt-4"
					onClick={actions.loadPeople}>
						Cargar mas
					</button>
			)
		  }
		</div>
	  );
};

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			species: [],
			starShips: [],
			vehicles: [],
			nextPage: null
		},
		actions: {
			loadPeople: async () => {
				const store = getStore();
				const url = store.nextPage || 'https://www.swapi.tech/api/people/';

				try {
					const resp = await fetch(url);
					const data = await resp.json();

					setStore({
						people: [...store.people, ...data.results], //agregar personajes al array existente
						nextPage: data.next
					});
				} catch (err) {
					console.error(err);
				}
				/*
				fetch('https://www.swapi.tech/api/people/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ people: response })
					})
						*/
			},

			loadPlanets: () => {
				fetch('https://www.swapi.tech/api/planets/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ planets: response })
					})
			},

			loadSpecies: () => {
				fetch('https://www.swapi.tech/api/species/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ species: response })
					})
			},

			loadStarships: () => {
				fetch('https://www.swapi.tech/api/starships/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ starShips: response })
					})
			},

			loadVehicles: () => {
				fetch('https://www.swapi.tech/api/vehicles/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ vehicles: response })
					})
			}
		}
	};
};

export default getState;

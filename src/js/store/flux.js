const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			species: [],
			starShips: [],
			vehicles: [],
			getCategory: null,
			favorites: []
		},
		actions: {
			setCategory: (category) => {
				setStore({ getCategory: category })
			},

			addFavorite: (id) => {
				const favorites = getStore().favorites;
				const newFavorite = [...favorites, id];
				setStore({ favorites: newFavorite })
			},

			removeFavorite: (id) => {
				const favorites = getStore().favorites;
				const lastFavorite = favorites.filter(item => item !== id);
				setStore({ favorites: lastFavorite })
			},

			loadPeople: () => {
				const store = getStore();

				if(store.people.length === 0) {
					fetch('https://www.swapi.tech/api/people/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ people: response })
					})
				}
				
				/*
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
				
				fetch('https://www.swapi.tech/api/people/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ people: response })
					})
						*/
			},

			loadPlanets: () => {
				const store = getStore();

				if(store.planets.length === 0) {
					fetch('https://www.swapi.tech/api/planets/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ planets: response })
				})
				}
			},

			loadSpecies: () => {
				const store = getStore();

				if(store.species.length === 0) {
					fetch('https://www.swapi.tech/api/species/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ species: response })
				})
				}
			},

			loadStarships: () => {
				const store = getStore();

				if(store.starShips.length === 0) {
					fetch('https://www.swapi.tech/api/starships/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ starShips: response })
				})
				}
			},

			loadVehicles: async () => {
				const store = getStore();

				if(store.vehicles.length === 0) {
					fetch('https://www.swapi.tech/api/vehicles/')
					.then(resp => resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore({ vehicles: response })
				})
				}
			}
		}
	};
};

export default getState;

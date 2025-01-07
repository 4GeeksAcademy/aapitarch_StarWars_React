import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

export const DetailPlanets = () => {

    const params = useParams()
    const [planet, setPlanet] = useState()

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${params.uid}`)
            .then(res => res.json())
            .then(data => setPlanet(data.result))
            .catch(err => console.error(err))
    }, [])

    if (!planet) return null; //mientras no tengo character no pinto nada
    console.log(planet)
    return (
        <div className="jumbotron-container">
            <div className="jumbotron">
            <h1 className="planet-name">{planet.properties.name} </h1>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="jumbotron-img" />
                <div className="jumbotron-details">
                    
                    <div className="planet-characteristics">
                        <p><b>Climate: </b>{planet.properties.climate}</p>
                        <p><b>Diameter: </b>{planet.properties.diameter}</p>
                        <p><b>Gravity: </b>{planet.properties.gravity}</p>
                        <p><b>Orbital period: </b>{planet.properties.orbital_period}</p>
                        <p><b>Population: </b>{planet.properties.population}</p>
                        <p><b>Rotation period: </b>{planet.properties.rotation_period}</p>
                        <p><b>Surface water: </b>{planet.properties.surface_water}</p>
                        <p><b>Terrain: </b>{planet.properties.terrain}</p>
                    </div>
                    <Link to={`/`}>
                        <button className="back-button">Atras</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
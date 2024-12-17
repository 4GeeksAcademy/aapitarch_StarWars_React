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
        <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center">

            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="card-img-top" alt="" />
                <h1>{planet.properties.name} </h1>
                <h5><b>climate</b>{ planet.properties.climate }</h5>
                <h5><b>diameter</b>{ planet.properties.diameter }</h5>
                <h5><b>gravity</b>{ planet.properties.gravity }</h5>
                <h5><b>orbital_period</b>{ planet.properties.orbital_period }</h5>
                <h5><b>population</b>{ planet.properties.population }</h5>
                <h5><b>rotation_period</b>{ planet.properties.rotation_period }</h5>
                <h5><b>surface_water</b>{ planet.properties.surface_water }</h5>
                <h5><b>terrain</b>{ planet.properties.terrain }</h5>
                <Link to={`/`}>
                    <button className="btn btn-dark border border-warning">Atras</button>
                </Link>

            </div>
        </div>
    );
}
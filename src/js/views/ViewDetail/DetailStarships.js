import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

export const DetailStarship = () => {

    const params = useParams()
    const [starShip, setStarship] = useState()

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.uid}`)
            .then(res => res.json())
            .then(data => setStarship(data.result))
            .catch(err => console.error(err))
    }, [])

    if (!starShip) return null; //mientras no tengo character no pinto nada
    console.log(starShip)
    return (
        <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                <img src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`} className="card-img-top" alt="" />               
                <h1>{starShip.properties.name} </h1>
                <h5><b>MGLT</b>{ starShip.properties.MGLT }</h5>
                <h5><b>cargo_capacity</b>{ starShip.properties.cargo_capacity }</h5>
                <h5><b>consumables</b>{ starShip.properties.consumables }</h5>
                <h5><b>cost_in_credits</b>{ starShip.properties.cost_in_credits }</h5>
                <h5><b>crew</b>{ starShip.properties.crew }</h5>
                <h5><b>hyperdrive_rating</b>{ starShip.properties.hyperdrive_rating }</h5>
                <h5><b>length</b>{ starShip.properties.length }</h5>
                <h5><b>manufacturer</b>{ starShip.properties.manufacturer }</h5>
                <h5><b>max_atmosphering_speed</b>{ starShip.properties.max_atmosphering_speed }</h5>
                <h5><b>model</b>{ starShip.properties.model }</h5>
                <h5><b>passengers</b>{ starShip.properties.passengers }</h5>
                <Link to={`/`}>
                    <button className="btn btn-dark border border-warning">Atras</button>
                </Link>
            </div>
        </div>
    );
}
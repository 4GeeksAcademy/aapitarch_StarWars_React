import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

export const DetailVehicles = () => {

    const params = useParams()
    const [vehicle, setVehicles] = useState()

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`)
            .then(res => res.json())
            .then(data => setVehicles(data.result))
            .catch(err => console.error(err))
    }, [])

    if (!vehicle) return null; //mientras no tengo character no pinto nada
    console.log(vehicle)
    return (
        <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} className="card-img-top" alt="" />               
                <h1>{vehicle.properties.name} </h1>
                <h5><b>cargo_capacity</b>{ vehicle.properties.cargo_capacity }</h5>
                <h5><b>consumables</b>{ vehicle.properties.consumables }</h5>
                <h5><b>cost_in_credits</b>{ vehicle.properties.cost_in_credits }</h5>
                <h5><b>crew</b>{ vehicle.properties.crew }</h5>
                <h5><b>length</b>{ vehicle.properties.length }</h5>
                <h5><b>manufacturer</b>{ vehicle.properties.manufacturer }</h5>
                <h5><b>max_atmosphering_speed</b>{ vehicle.properties.max_atmosphering_speed }</h5>
                <h5><b>model</b>{ vehicle.properties.model }</h5>
                <h5><b>passengers</b>{ vehicle.properties.passengers }</h5>
                <h5><b>pilots</b>{ vehicle.properties.pilots }</h5>
                <Link to={`/`}>
                    <button className="btn btn-dark border border-warning">Atras</button>
                </Link>
            </div>
        </div>
    );
}
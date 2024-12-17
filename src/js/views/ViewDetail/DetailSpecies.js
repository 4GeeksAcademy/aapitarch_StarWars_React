import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

export const DetailSpecies = () => {

    const params = useParams()
    const [specie, setSpecie] = useState()

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/species/${params.uid}`)
            .then(res => res.json())
            .then(data => setSpecie(data.result))
            .catch(err => console.error(err))
    }, [])

    if (!specie) return null; //mientras no tengo character no pinto nada
    console.log(specie)
    return (
        <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                <img src={`https://starwars-visualguide.com/assets/img/species/${params.uid}.jpg`} className="card-img-top" alt="" />               
                <h1>{specie.properties.name} </h1>
                <h5><b>average_height</b>{ specie.properties.average_height }</h5>
                <h5><b>average_lifespan</b>{ specie.properties.average_lifespan }</h5>
                <h5><b>classification</b>{ specie.properties.classification }</h5>
                <h5><b>designation</b>{ specie.properties.designation }</h5>
                <h5><b>eye_colors</b>{ specie.properties.eye_colors }</h5>
                <h5><b>hair_colors</b>{ specie.properties.hair_colors }</h5>
                <h5><b>language</b>{ specie.properties.language }</h5>
                <Link to={`/`}>
                    <button className="btn btn-dark border border-warning">Atras</button>
                </Link>
            </div>
        </div>
    );
}
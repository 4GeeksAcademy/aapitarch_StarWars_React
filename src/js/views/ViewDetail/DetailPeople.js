import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../../store/appContext";
import { Link } from 'react-router-dom';

export const DetailCharacter = () => {

    const params = useParams()
    const [character, setCharacter] = useState()
    const { store, actions } = useContext(Context);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.uid}`)
            .then(res => res.json())
            .then(data => setCharacter(data.result))
            .catch(err => console.error(err))
    }, [])

    if (!character) return null; //mientras no tengo character no pinto nada
    console.log(character)
    return (
        <div className="jumbotron">
            <div className="d-flex flex-wrap justify-content-center">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="card-img-top" alt="" />
                <h1>{character.properties.name}</h1>
                <h5><b>birth_year</b>{character.properties.birth_year}</h5>
                <h5><b>eye_color</b>{character.properties.eye_color}</h5>
                <h5><b>gender</b>{character.properties.gender}</h5>
                <h5><b>hair_color</b>{character.properties.hair_color}</h5>
                <h5><b>height</b>{character.properties.height}</h5>
                <h5><b>mass</b>{character.properties.mass}</h5>
                <h5><b>skin_color</b>{character.properties.skin_color}</h5>
                <Link to={`/`}>
                    <button className="btn btn-dark border border-warning">Atras</button>
                </Link>
                {
                    store.favorites.includes(character.properties.name)
                        ? <i onClick={() => actions.removeFavorite(character.properties.name)} className="fa-solid fa-heart"></i>
                        : <i onClick={() => actions.addFavorite(character.properties.name)} className="fa-regular fa-heart"></i>
                }
            </div>
        </div>
    );
}
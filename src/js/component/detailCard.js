import React from 'react';


export const DetailCard = (props) => {

    return (
        <div className="p-4 shadow-4 rounded-3">
            <h2>{ props.title }</h2>
            <h2>{ props.title }</h2>
            <h2>{ props.orvital }</h2>
            <h2>{ props.title }</h2>
            <h2>{ props.title }</h2>
            <h2>{ props.averageLifespan }</h2>
            <h2>{ props.title }</h2>
            <h2>{ props.cost }</h2>
            {/*<img src={ props } />*/}

            <hr className="my-4" />

            <p>
                It uses utility classes for typography and spacing to space content out within the
                larger container.
            </p>
            <Link to={`/`}>
                      <button className="btn btn-dark border border-warning">Atras</button>
             </Link>
        </div>
    );
};

export default DetailCard;

/*
year, eyes, gender, hair, height, mass, 
    name, skin, mglt, cargo, consumables, cost, crew, length, manufactured,
    speed, model, passengers, pilots, averageHeight, averageLifespan, classification,
    destination, language, climate, diameter, gravity, orvital, population,
    rotation, surface, terrain, image
*/
import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

const Card = ({ title, image, link }) => {

  const { store, actions } = useContext(Context); // buscamos siempre las acciones para los cambios

  return (
    <div className="card m-4" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={link}>
          <button>Ir a detalles</button>
        </Link>
        {
          store.favorites.includes(title) 
            ? <i onClick={() => actions.removeFavorite(title)} className="fa-solid fa-heart"></i> 
            : <i onClick={() => actions.addFavorite(title)} className="fa-regular fa-heart"></i>
        }
      </div>
    </div>
  );
};

export default Card;

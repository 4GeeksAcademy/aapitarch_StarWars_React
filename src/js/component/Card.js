import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, image, link }) => {

  return (
    <div className="card m-4" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={link}>
          <button className="btn btn-dark border border-warning">Ir a detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

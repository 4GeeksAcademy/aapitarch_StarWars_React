import React from 'react';

const Card = ({ title, image, link }) => {
  return (
    <div className="card m-4" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Card;

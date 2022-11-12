import React from 'react';

const Service = ({service}) => {
    const {icon, description, name, id} = service;
    return (
        <div className="card bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
            <img src={icon} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions">
            </div>
        </div>
        </div>
    );
};

export default Service;
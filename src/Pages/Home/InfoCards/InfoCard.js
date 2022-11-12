import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, bgClass, icon, id} = card;
    return (
        <div className={`card card-side shadow-xl ${bgClass} text-white p-6`}>
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            </div>
        </div>
        </div>
    );
};

export default InfoCard;
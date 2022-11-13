import React from 'react';

const AppointmentOptions = ({option, setTreatment}) => {
    const {name, slots} = option;
    return (
        <div className="card w-[425px] bg-base-100 shadow-xl mx-auto text-center my-2">
            <div className="card-body">
            <h2 className="card-title text-primary mx-auto text-[20px]">{name}</h2>
            <p>{slots?.length > 0 ? slots[0] : "Try another day"}</p>
            <p>{slots?.length} spaces available</p>
            <div className="card-actions justify-end">
                <label onClick={setTreatment(option)} className="btn btn-primary bg-gradient-to-r from-primary to-secondary mx-auto text-white" htmlFor="booking-modal" >Book Appointment</label>
            </div>
            </div>
      </div>
    );
};

export default AppointmentOptions;
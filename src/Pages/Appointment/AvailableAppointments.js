import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from './BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState();
    const [treatment, setTreatment] = useState(null);


    //fetching data from the api/database
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>Available Appoinments on  {format( selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16'>
                {
                    appointmentOptions?.map(option => <AppointmentOptions
                    key={option?._id}
                    option={option}
                    setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
            {//if treatment is true then proceed to the next stage
            //plus we should keep the modal on a equal parent state
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    treatment={treatment} //sending the treatment again so that we can make its value null and remove the modal
                 ></BookingModal>
            }
           
        </section>
    );
};

export default AvailableAppointments;
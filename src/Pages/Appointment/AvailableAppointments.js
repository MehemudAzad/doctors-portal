import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from './BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const date = format(selectedDate, 'PP');
    const [treatment, setTreatment] = useState(null);

    const {data:appointmentOptions=[], isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    //fetching data from the api/database
    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    //     .catch(error=>console.log(error))
    // }, [])

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
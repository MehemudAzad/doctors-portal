import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({treatment, selectedDate, setTreatment}) => {
    const {name: treatmentName, slots} = treatment; //treatment is appointment option
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);


    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, index)=> console.log(value))

        //creating an object to store data
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot, 
            email,
            phone
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                "content-type": 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.acknowledged){
                setTreatment(null);
                toast.success('Booking confirmed');
            }
        })
        //setting the value null so that it doesn't stay open
        setTreatment(null);
    }

    return (
        <>
            {/* The button to open modal */}
               

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-3">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5'>
                        <input type="text" disabled value={date} className="input input-bordered w-full mt-6 block" />
                        <select name='slot'
                         className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option 
                                    value={slot}
                                    key={index}
                                    >{slot}</option>)
                            }
                            
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />                 
                        <input type="submit" placeholder="Type here" value='submit' className="input w-full btn btn-accent" />
                    </form>
                    
                </div>
                </div>
        </>
    );
};

export default BookingModal;
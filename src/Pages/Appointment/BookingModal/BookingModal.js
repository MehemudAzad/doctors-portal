import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, selectedDate}) => {
    const {name, slots} = treatment; //treatment is appointment option
    const date = format(selectedDate, 'PP');
    return (
        <>
            {/* The button to open modal */}
               

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-3">{name}</h3>
                    <form className='grid grid-cols-1 gap-5'>
                        <input type="text" disabled value={date} className="input input-bordered w-full mt-6 block" />
                        <select className="select select-bordered w-full">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />                 
                        <input type="submit" placeholder="Type here" value='submit' className="input w-full btn btn-accent" />
                    </form>
                    
                </div>
                </div>
        </>
    );
};

export default BookingModal;
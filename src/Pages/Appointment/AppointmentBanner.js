import React, { useState } from 'react';
import chair from '../../assets/images/bg.png';
import chair2 from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
   
    return (
        
            <header className='my-6'>
                 <section 
                    style={{ background: `url(${chair})`,
                            backgroundSize: 'cover'
                }}
                    >
                        <div className="hero lg:py-48 py-2 md:py-12 " >
                        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                            <img src={chair2} className="lg:w-1/2 rounded-lg shadow-2xl" alt='this is chair' />
                            <div className='mr-6'>
                            <DayPicker className='mr-40 block'
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            // footer={footer}
                            >
                            </DayPicker>
                                <p>You have selected date: {format(selectedDate, 'PP')}</p>
                            </div>
                        </div>
                        </div>
                </section>
            </header>

    );
};

export default AppointmentBanner;
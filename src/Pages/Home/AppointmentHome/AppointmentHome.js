import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';

const AppointmentHome = () => {
    return (
        <section className='text-white lg:my-60 md:my-40 my-16'
        style={{
            background: `url(${appointment})`
        }}>
            <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row p-0">
                <img src={doctor} className="rounded-lg -mt-32 lg:w-1/2 hidden lg:block" alt='this is doctor' />
                <div className='p-10'>
                    <h1 className='text-[20px] text-primary'>Appointment</h1>
                    <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white font-bold">Get Started</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default AppointmentHome;
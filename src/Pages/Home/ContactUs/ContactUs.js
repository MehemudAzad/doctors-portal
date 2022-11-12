import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className='mt-40 py-20'
        style={{background: `url(${appointment})`}}
        >
            <div className='text-center text-white'>
                <h3 className='text-primary text-[20px] font-bold'>Contact Us</h3>
                <h2 className='text-[36px]'>Stay connected with us</h2>
            </div>
            <form className='w-2/5 mx-auto text-center'>
            <input type="email" placeholder="Email Address" className="input input-bordered input-primary w-full mt-6 mb-3" />
            <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full  my-3" />
            <textarea className="textarea textarea-bordered block w-full my-3 h-40 " placeholder="Your message"></textarea>
            <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white font-bold mt-10">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
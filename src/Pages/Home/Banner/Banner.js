import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div>
            <div className="hero lg:py-32 py-2 md:py-12 bg-gradient-to-r from-white to-base-50" style={{ backgroundImage: `url(${chair})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
            </div>
         </div>
    );
}

export default Banner;
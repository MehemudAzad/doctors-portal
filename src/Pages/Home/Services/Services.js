import React from 'react';
import floride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: floride
        },
        {
            id: 2,
            name:"Cavity Filling",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: cavity
        },
        {
            id: 3,
            name:"Teeth Whitening",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: whitening
        },
    ]
    return (
        <div className='text-center mt-32'>
            <div>
                <h3 className='text-primary text-[20px] font-bold'>Our services</h3>
                <h2 className='text-[36px]'>Services we provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-8'>
                {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
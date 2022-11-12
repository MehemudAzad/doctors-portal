import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name:"Winston Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location:"california",
            image:people1
        },
        {
            _id: 2,
            name:"Karim Bell",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location:"california",
            image:people2
        },
        {
            _id: 3,
            name:"Winston Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location:"california",
            image:people3
        }
    ]

    return (
        <section>
        <div className='flex justify-between items-center'>
            <div>
                <h4  className='font-bold text-primary text-[20px]'>Testimonial</h4>
                <h2 className='text-[36px] font-extralight'>What Our Patients Says</h2>
            </div>
            <figure>
                <img className='w-[192px]' src={quote} alt="this is quote" />
            </figure>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
            {
                reviews.map(review =><Review
                key={review._id}
                review={review}
                ></Review>)
            }
        </div>
        </section>
    );
};

export default Testimonial;
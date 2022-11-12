import React from 'react';

const Review = ({review}) => {
    const {name, image, _id, review:userReview, location} = review;
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <p>{userReview}</p>
            <div className="card-actions justify-start flex justify items-center mt-5">
                <img className='ring ring-primary rounded-full p-1 w-[75px]' src={image} alt="this is people" />
                <div className=''>
                    <p className='text-[20px] font-semibold'>{name}</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Review;
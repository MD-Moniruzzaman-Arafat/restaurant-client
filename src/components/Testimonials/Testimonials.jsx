import SectionTitle from "../SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className="max-w-5xl mx-auto my-20">
            <SectionTitle smallTitle={"---What Our Clients Say---"} bigTitle={"TESTIMONIALS"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id} review={review}>
                        <div className="text-center px-40 py-14 space-y-5 bg-slate-100 rounded-md">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className="mx-auto w-80"
                            />
                            <p className="text-5xl flex justify-center"><FaQuoteLeft ></FaQuoteLeft></p>
                            <p>{review.details}</p>
                            <h1 className="text-[#CD9003]">{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonials;
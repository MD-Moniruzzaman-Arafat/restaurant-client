import React, { useEffect, useState } from 'react'
import SmallTitle from '../../reUseableComponents/SmallTitle'
import MainTitle from '../../reUseableComponents/MainTitle'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


export default function Testimonial() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <div className='my-20 max-w-6xl mx-auto'>
                <SmallTitle title="What Our Customers Say" />
                <MainTitle title="TESTIMONIALS" />
                <div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            reviews.map(review => (
                                <SwiperSlide key={review._id} className='text-center'>
                                    <div className='p-20'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                            className='mx-auto mb-5'

                                        />
                                        <p className='text-gray-600'>{review.details}</p>
                                        <h3 className='text-2xl text-[#CD9003]'>{review.name}</h3>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        {/* <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

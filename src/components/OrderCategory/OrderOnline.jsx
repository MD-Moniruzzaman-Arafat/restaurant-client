import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SmallTitle from '../../reUseableComponents/SmallTitle/SmallTitle';
import MainTitle from '../../reUseableComponents/SmallTitle/MainTitle';




export default function OrderOnline() {
    return (
        <>
            <div className='my-20'>
                <SmallTitle title='From 11:00am to 10:00pm' />
                <MainTitle title='ORDER ONLINE' />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            centeredSlides: true,
                            width: 320,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper md:max-w-5xl md:mx-auto my-10"
                >

                    <SwiperSlide className='relative'>
                        <img src={slide1} alt="Slide 1" className='w-[320px]' />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-end justify-center text-white text-2xl pb-4">
                            Salads
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img src={slide2} alt="Slide 2" className='w-[320px]' />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-end justify-center text-white text-2xl pb-4">
                            Soups
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img src={slide3} alt="Slide 3" className='w-[320px]' />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-end justify-center text-white text-2xl pb-4">
                            pizzas
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img src={slide4} alt="Slide 4" className='w-[320px]' />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-end justify-center text-white text-2xl pb-4">
                            desserts
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img src={slide5} alt="Slide 5" className='w-[320px]' />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-end justify-center text-white text-2xl pb-4">
                            Salads
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

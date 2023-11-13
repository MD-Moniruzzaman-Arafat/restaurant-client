import SectionTitle from "../SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';

const OrderOnline = () => {
    return (
        <div className="my-20 max-w-5xl mx-auto">
            <SectionTitle smallTitle={"---From 11:00am to 10:00pm---"} bigTitle={"ORDER ONLINE"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <img src={img1} alt="" className="brightness-50" />
                    <h1 className="text-center -mt-20 uppercase text-white relative   text-2xl">Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" className="brightness-50" />
                    <h1 className="text-center -mt-20 uppercase text-white relative   text-2xl">Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" className="brightness-50" />
                    <h1 className="text-center -mt-20 uppercase text-white relative   text-2xl">pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" className="brightness-50" />
                    <h1 className="text-center -mt-20 uppercase text-white relative   text-2xl">desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" className="brightness-50" />
                    <h1 className="text-center -mt-20  uppercase text-white relative  text-2xl">Salads</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderOnline;
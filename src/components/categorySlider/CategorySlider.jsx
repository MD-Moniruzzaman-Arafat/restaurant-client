import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

import "swiper/css";
import "swiper/css/pagination";

import "./categorySlider.css";

export default function CategorySlider() {
  return (
    <div className="my-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="-mt-10 text-2xl font-extrabold text-gray-800 bg-white">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="-mt-10 text-2xl font-extrabold text-gray-800 bg-white">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="-mt-10 text-2xl font-extrabold text-gray-800 bg-white">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="-mt-10 text-2xl font-extrabold text-gray-800 bg-white">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="-mt-10 text-2xl font-extrabold text-gray-800 bg-white">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

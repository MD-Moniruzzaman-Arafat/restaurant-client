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
          <p className="absolute bottom-10 font-extrabold text-gray-900 bg-slate-500 px-[175px]">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="absolute bottom-10 font-extrabold text-gray-900 bg-slate-500 px-[177px]">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="absolute bottom-10 font-extrabold text-gray-900 bg-slate-500 px-[178px]">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="absolute bottom-10 font-extrabold text-gray-900 bg-slate-500 px-[167px]">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="absolute bottom-10 font-extrabold text-gray-900 bg-slate-500 px-[175px]">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import React from 'react'
import "./Corusel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import lola from "../../assets/komp1.jpg"
import a from "../../assets/kompp12.jpg"
import b from "../../assets/kompq.jpg"
import m from "../../assets/main_page_banner (1).jpg"
import d from "../../assets/main_page_banner (2).jpg"
import f from "../../assets/main_page_banner (8).jpg"
function Corusel() {
  return (
    <div className='carusel'>
         <Swiper pagination={true} loop={true}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         modules={[Pagination,Autoplay]} className="corusel__inner">
        <SwiperSlide>
        <img className="carousel__desktop" src={lola} alt="" />
        <img className="carousel__mobile" src={a} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={b} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={m} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={d} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={f} alt="" />
        </SwiperSlide>
    
      </Swiper>
    </div>
  )
}

export default Corusel
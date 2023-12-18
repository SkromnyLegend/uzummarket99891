import React from 'react'
import "./Corusel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
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
        <img className="carousel__desktop" src="https://images.uzum.uz/clk2p8lenntcj8a9j80g/main_page_banner.jpg" alt="" />
        <img className="carousel__mobile" src="https://images.uzum.uz/clk2qc56sfhsc0umi9d0/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/clbmj8fn7c6qm23janag/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cle4qgfn7c6qm23jp4ng/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/clga9odennt1kt4djeeg/main_page_banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.uzum.uz/cl88ertennt861ipbp7g/main_page_banner.jpg" alt="" />
        </SwiperSlide>
    
      </Swiper>
    </div>
  )
}

export default Corusel
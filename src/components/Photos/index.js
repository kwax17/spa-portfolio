import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


function Photos() {
    return (
        <section className="resume-section" id="photos">
            <div className="resume-section-content">
                <h2 className="mb-5">Photos</h2>
                <div className="mb-0 photos" col-5>
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={2}
                        navigation
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide><img src={require(`../../assets/img/photo/1.JPG`)} alt="1" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/2.jpg`)} alt="2" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/3.jpg`)} alt="3" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/4.jpg`)} alt="4" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/5.JPG`)} alt="5" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/6.JPG`)} alt="6" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/7.JPG`)} alt="7" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/8.JPG`)} alt="8" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/9.JPG`)} alt="9" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/10.JPG`)} alt="10" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/11.JPG`)} alt="11" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/12.JPG`)} alt="12" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/13.jpg`)} alt="13" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/14.jpg`)} alt="14" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/15.jpg`)} alt="15" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/16.jpg`)} alt="16" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/17.jpg`)} alt="17" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/18.jpg`)} alt="18" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/19.jpg`)} alt="19" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/20.jpg`)} alt="20" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/21.JPG`)} alt="21" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/22.jpg`)} alt="22" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/23.JPG`)} alt="23" /></SwiperSlide>
                        <SwiperSlide><img src={require(`../../assets/img/photo/24.JPG`)} alt="24" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Photos;




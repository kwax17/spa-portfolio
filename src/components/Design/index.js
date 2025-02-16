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


function Design() {
    return (
        <section className="resume-section" id="design">
            <div className="resume-section-content">
                <h2 className="mb-5">Digital Art</h2>
                <div className="mb-0 photos" col-5>
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        scrollbar={{ draggable: true }}
                    >
                        {/* <SwiperSlide><img src={require(`../../assets/graph-design/1.png`)} alt="1" /></SwiperSlide> */}
                        <SwiperSlide><img src={'https://live.staticflickr.com/65535/53782764115_4d1711b2b2_z.jpg'} alt="Sleep When I'm Dead" /></SwiperSlide>
                        <SwiperSlide><img src={'https://live.staticflickr.com/65535/53782556038_cc3d157f3e_z.jpg'} alt="Unfortunate Beach Day" /></SwiperSlide>
                        <SwiperSlide><img src={'https://live.staticflickr.com/65535/53781405192_9c2c024172_z.jpg'} alt="Potheads" /></SwiperSlide>
                        <SwiperSlide><img src={'https://live.staticflickr.com/65535/53782556043_6aba5d13ff_z.jpg'} alt="Fish Out of Water" /></SwiperSlide>
                        <SwiperSlide><img src={'https://live.staticflickr.com/65535/53782764120_1d9e057b84_z.jpg'} alt="Stuck on Me" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}


export default Design;




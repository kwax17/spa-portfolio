import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// // import Swiper core and required modules
// import { Navigation, Scrollbar, A11y } from 'swiper';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';


// function Graphic() {
//     return (
//         <section className="resume-section" id="graphics">
//             <div className="resume-section-content">
//                 <h2 className="mb-5">Digital Art</h2>
//                 <div className="mb-0 photos" col-5>
//                     <Swiper
//                         modules={[Navigation, Scrollbar, A11y]}
//                         spaceBetween={20}
//                         slidesPerView={2}
//                         navigation
//                         scrollbar={{ draggable: true }}
//                     >
//                         {/* <SwiperSlide><img src={require(`../../assets/graph-design/1.png`)} alt="1" /></SwiperSlide> */}
//                         <SwiperSlide><img src={require(`../../assets/graph-design/2.png`)} alt="2" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/graph-design/3.png`)} alt="3" /></SwiperSlide>
//                         {/* <SwiperSlide><img src={require(`../../assets/graph-design/4.png`)} alt="4" /></SwiperSlide> */}
//                         <SwiperSlide><img src={require(`../../assets/graph-design/5.png`)} alt="5" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/graph-design/6.png`)} alt="6" /></SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div>
//         </section>
//     );
// }

import { Gallery } from "react-grid-gallery";

const images = [
   {
      src: "https://live.staticflickr.com/65535/53782764115_4d1711b2b2_z.jpg",
      alt: "Sleep When I'm Dead",
   },
   {
      src: "https://live.staticflickr.com/65535/53782556038_cc3d157f3e_z.jpg",
      alt: "Unfortunate Beach Day",
   },
   {
      src: "https://live.staticflickr.com/65535/53781405192_9c2c024172_z.jpg",
      alt: "Potheads",
   },
];

function Art() {
    return (
        <section className="resume-section" id="art">
            <div className="resume-section-content">
                <h2 className="mb-5">Art</h2>
                <div className="mb-0 photos" col-5>
                <Gallery images={images} />
                </div>
            </div>
        </section>
    );
}



export default Art;




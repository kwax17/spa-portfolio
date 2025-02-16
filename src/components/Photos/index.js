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

import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "https://live.staticflickr.com/65535/53782764115_4d1711b2b2_z.jpg", width: 800, height: 600},
  { src: "https://live.staticflickr.com/65535/53782556038_cc3d157f3e_z.jpg"}
];

export default function Photos() {
  return <PhotoAlbum layout="masonry" photos={photos} />;
}

// function Photos() {
//     return (
//         <section className="resume-section" id="photos">
//             <div className="resume-section-content">
//                 <h2 className="mb-5">Photos</h2>
//                 <div className="mb-0 photos" col-5>
//                     <Swiper
//                         modules={[Navigation, Scrollbar, A11y]}
//                         spaceBetween={20}
//                         slidesPerView={2}
//                         navigation
//                         scrollbar={{ draggable: true }}
//                     >
//                         <SwiperSlide><img src={require(`../../assets/img/photo/1.webp`)} alt="1" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/2.webp`)} alt="2" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/3.webp`)} alt="3" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/4.webp`)} alt="4" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/5.webp`)} alt="5" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/7.webp`)} alt="7" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/8.webp`)} alt="8" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/9.webp`)} alt="9" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/10.webp`)} alt="10" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/11.webp`)} alt="11" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/12.webp`)} alt="12" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/13.webp`)} alt="13" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/14.webp`)} alt="14" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/15.webp`)} alt="15" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/16.webp`)} alt="16" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/17.webp`)} alt="17" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/18.webp`)} alt="18" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/19.webp`)} alt="19" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/20.webp`)} alt="20" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/21.webp`)} alt="21" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/22.webp`)} alt="22" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/23.webp`)} alt="23" /></SwiperSlide>
//                         <SwiperSlide><img src={require(`../../assets/img/photo/24.webp`)} alt="24" /></SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Photos;


// import React from 'react';
// import PhotoAlbum from 'react-photo-album';

// const photos = [
//   { src: require('../../assets/img/photo/1.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/2.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/3.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/4.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/5.webp'), width: 80, height: 60 },
// //   { src: require('../../assets/img/photo/6.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/7.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/8.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/9.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/10.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/11.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/12.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/13.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/14.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/15.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/16.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/17.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/18.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/19.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/20.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/21.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/22.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/23.webp'), width: 80, height: 60 },
//   { src: require('../../assets/img/photo/24.webp'), width: 80, height: 60 },
// ];

// function Photos() {
//   return (
//     <section className="resume-section" id="photos">
//     <div className="resume-section-content">
//         <h2 className="mb-5">Photography</h2>
//         <div className="mb-0 photos" col-5>
//         <PhotoAlbum layout="row" photos={photos}/>
//         </div>
//     </div>
// </section>
//   )
// }
// export default Photos;
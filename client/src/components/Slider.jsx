import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';

const SwiperSlider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        className="rounded-lg"
      >
        <SwiperSlide>
          <img src={slider1} alt="Slide 1" className="w-full h-64 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="Slide 2" className="w-full h-64 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="Slide 3" className="w-full h-64 object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

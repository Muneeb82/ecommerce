import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const brandLogos = [
  {
    id: 1,
    href: '/collections/fresh-fruits',
    src: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-br-1.png?v=1709888805',
    width: 154,
    height: 56,
  },
  {
    id: 2,
    href: '/collections/fresh-fruits',
    src: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-br-2.png?v=1709888805',
    width: 133,
    height: 73,
  },
  {
    id: 3,
    href: '/collections/fresh-fruits',
    src: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-br-3.png?v=1709888805',
    width: 201,
    height: 68,
  },
  {
    id: 4,
    href: '/collections/fresh-fruits',
    src: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-br-4.png?v=1709888805',
    width: 132,
    height: 36,
  },
  {
    id: 5,
    href: '/collections/fresh-fruits',
    src: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-br-5.png?v=1709888805',
    width: 137,
    height: 44,
  },
  {
    id: 6,
    href: '/collections/fresh-fruits',
    src: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-br-6.png?v=1709888805',
    width: 183,
    height: 40,
  },
];

const BrandLogoSwiper = () => {
  return (
    <section className="our-brand-logo py-20">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            540: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            750: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            991: {
              slidesPerView: 6,
            },
          }}
        >
          {brandLogos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <a href={logo.href}>
                <img
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={`Brand ${logo.id}`}
                  className="mx-auto"
                  loading="lazy"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandLogoSwiper;

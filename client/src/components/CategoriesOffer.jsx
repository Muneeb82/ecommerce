import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import categoryBg from '../assets/cat-offer-bg.png';
import titleIcon from '../assets/title-icon3.png';

const CategoryOffer = () => {
  useEffect(() => {
    new Swiper('#cat2-slider', {
      loop: true, // Infinite scroll
      slidesPerView: 5, // Show only 5 at a time
      spaceBetween: 30,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      speed: 1000,
      breakpoints: {
        0: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      },
    });
  }, []);

  const categories = [
    {
      title: 'Dals and pulses',
      description: 'Get over 20$ in saving',
      label: 'Min 24% off',
      link: '/collections/breakfast-and-cereals',
      image: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-cat1.jpg?v=1709975486&width=500',
    },
    {
      title: 'Healthy drinks',
      description: 'Now plus gift set with deal',
      label: 'Min 20% off',
      link: '/collections/breakfast-and-cereals',
      image: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-cat2.jpg?v=1709975486&width=500',
    },
    {
      title: 'Dry fruits',
      description: 'Get over 15$ in saving',
      label: 'Min 28% off',
      link: '/collections/breakfast-and-cereals',
      image: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-cat3.jpg?v=1709975486&width=500',
    },
    {
      title: 'Fresh fruits',
      description: 'Best price ever place order',
      label: 'Min 25% off',
      link: '/collections/breakfast-and-cereals',
      image: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-cat4.jpg?v=1709975486&width=500',
    },
    {
      title: 'Herbs and spices',
      description: 'Get over 25$ in saving',
      label: 'Min 32% off',
      link: '/collections/breakfast-and-cereals',
      image: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-cat5.jpg?v=1709975486&width=500',
    },
    {
      title: 'Organic veggies',
      description: 'Freshly picked daily',
      label: 'Min 30% off',
      link: '/collections/breakfast-and-cereals',
      image: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-cat6.jpg?v=1709975486&width=500',
    },
  ];

  return (
    <section
      className="block pt-20 pb-20 bg-[#f1f1f1] bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${categoryBg})` }}
    >
      <div className="px-[150px] mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center gap-14">
            <h2 className="text-2xl font-bold mb-2">Featured categories</h2>
            <p className="text-gray-600 flex items-center gap-2">
              <img src={titleIcon} width={35} height={38} alt="Icon" />
              Eating healthy starts at the grocery store.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="arrow-prev cursor-pointer w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-800 hover:text-white">
              <ArrowLeftIcon className="w-5 h-5" />
            </span>
            <span className="arrow-next cursor-pointer w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-800 hover:text-white">
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </div>
        </div>

        <div id="cat2-slider" className="swiper">
          <div className="swiper-wrapper">
            {categories.map((cat, index) => (
              <div key={index} className="swiper-slide">
                <a
                  href={cat.link}
                  className="block group bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
                >
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    <span
                      className="absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded"
                      style={{ backgroundColor: '#ff4729', color: '#ffffff' }}
                    >
                      {cat.label}
                    </span>
                  </div>
                  <div className="p-4">
                    <h6 className="text-lg font-semibold mb-1">{cat.title}</h6>
                    <p className="text-sm text-gray-600">{cat.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryOffer;

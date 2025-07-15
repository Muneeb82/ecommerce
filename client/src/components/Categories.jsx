import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

const CategorySlider = () => {
  useEffect(() => {
    new Swiper('#cat2-slider', {
      loop: false,
      slidesPerView: 8,
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
        0: { slidesPerView: 1, spaceBetween: 12 },
        320: { slidesPerView: 2, spaceBetween: 12 },
        410: { slidesPerView: 2, spaceBetween: 12 },
        540: { slidesPerView: 3, spaceBetween: 12 },
        640: { slidesPerView: 4, spaceBetween: 12 },
        768: { slidesPerView: 4, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 30 },
        1199: { slidesPerView: 6, spaceBetween: 30 },
        1499: { slidesPerView: 8, spaceBetween: 30 },
      },
    });
  }, []);

  const categories = [
    {
      title: 'Vegetable and Fruits',
      img: 'https://cdn.shopify.com/s/files/1/0680/4150/7113/files/grocery-cat1.png',
      href: '/collections/vegitable-and-fruits',
    },
    {
      title: 'Milk and Dairy Products',
      img: 'https://cdn.shopify.com/s/files/1/0680/4150/7113/files/grocery-cat2.png',
      href: '/collections/milk-and-dairy-products',
    },
    {
      title: 'Breakfast and Cereals',
      img: 'https://cdn.shopify.com/s/files/1/0680/4150/7113/files/grocery-cat3.png',
      href: '/collections/breakfast-and-cereals',
    },
    {
      title: 'Vegetable and Fruits',
      img: 'https://cdn.shopify.com/s/files/1/0680/4150/7113/files/grocery-cat1.png',
      href: '/collections/vegitable-and-fruits',
    },
    {
      title: 'Milk and Dairy Products',
      img: 'https://cdn.shopify.com/s/files/1/0680/4150/7113/files/grocery-cat2.png',
      href: '/collections/milk-and-dairy-products',
    },
    {
      title: 'Breakfast and Cereals',
      img: 'https://cdn.shopify.com/s/files/1/0680/4150/7113/files/grocery-cat3.png',
      href: '/collections/breakfast-and-cereals',
    },
    {
      title: 'Vegetable and Fruits',
      img: 'https://cdn.shopify.com/s/files/1/0680/4150/7113/files/grocery-cat1.png',
      href: '/collections/vegitable-and-fruits',
    },
    {
      title: 'Milk and Dairy Products',
      img: 'https://cdn.shopify.com/s/files/1/0680/4150/7113/files/grocery-cat2.png',
      href: '/collections/milk-and-dairy-products',
    },
    {
      title: 'Breakfast and Cereals',
      img: 'https://cdn.shopify.com/s/files/1/0680/4150/7113/files/grocery-cat3.png',
      href: '/collections/breakfast-and-cereals',
    },
    
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Featured categories</h2>
            <p className="text-gray-600 flex items-center gap-2">
              <img src="https://cdn.shopify.com/s/files/1/0680/4150/7113/files/grocery-title-icon1.png" width={35} height={38} alt="Icon" />
              Eating healthy starts at the grocery store.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="arrow-prev cursor-pointer w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-800 hover:text-white">
              <i className="feather-arrow-left"></i>
            </span>
            <span className="arrow-next cursor-pointer w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-800 hover:text-white">
              <i className="feather-arrow-right"></i>
            </span>
          </div>
        </div>

        <div className="swiper" id="cat2-slider">
          <div className="swiper-wrapper">
            {categories.map((cat, index) => (
              <div className="swiper-slide" key={index}>
                <a href={cat.href} className="block text-center p-6 bg-gray-100 rounded-lg hover:bg-gray-300">
                  <div className="w-[115px] h-[115px] mx-auto rounded-full bg-white flex items-center justify-center">
                    <img src={cat.img} alt={cat.title} className="w-auto h-auto" />
                  </div>
                  <div className="mt-4">
                    <span className="font-semibold text-lg text-gray-900">{cat.title}</span>
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

export default CategorySlider;

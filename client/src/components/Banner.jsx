import React from 'react';

const banners = [
  {
    id: 'banner1',
    link: '/collections/bread',
    img: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-banner1.jpg?v=1709961989&width=1920',
    offer: 'GET 29% OFF',
    title: 'Seafood calamari',
    btnColor: '#fbdf58',
  },
  {
    id: 'banner2',
    link: '/collections/animal-biscuits-and-products',
    img: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-banner2.jpg?v=1709961989&width=1920',
    offer: 'GET 39% OFF',
    title: 'Freshly baked bread toast',
    btnColor: '#fbdf58',
  },
  {
    id: 'banner3',
    link: '/collections/animal-biscuits-and-products',
    img: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-banner3.jpg?v=1709961988&width=1920',
    offer: 'Get 49% off',
    title: 'Fruits and vegetables',
    btnColor: '#fbdf58',
  },
];

const BannerGrid = () => {
  return (
    <section className="pt-20 pb-0 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center -m-4">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-lg group">
                <a href={banner.link}>
                  <img
                    src={banner.img}
                    alt={banner.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </a>
                <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white max-w-[40%] space-y-3">
                  <span className="block text-sm border-b border-white uppercase">
                    {banner.offer}
                  </span>
                  <h6 className="text-2xl font-light">{banner.title}</h6>
                  <a
                    href={banner.link}
                    className="inline-block px-5 py-2 mt-2 font-semibold rounded text-[#383128]"
                    style={{
                      backgroundColor: banner.btnColor,
                      borderColor: banner.btnColor,
                    }}
                  >
                    Shop now <i className="feather-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerGrid;

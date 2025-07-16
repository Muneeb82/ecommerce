import React from 'react';

const BannerGridSection = () => {
  const banners = [
    {
      href: '/collections/animal-biscuits-and-products',
      img: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-banner7.jpg?v=1709879449',
      alt: 'Banner 1',
      className: 'banner-block-banner_nL8Xge',
    },
    {
      href: '/collections/animal-biscuits-and-products',
      img: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-banner6.jpg?v=1709879448',
      alt: 'Banner 2',
      className: 'banner-block-banner_HQTXa9',
    },
  ];

  return (
    <section className="pt-10 pb-0 bg-transparent">
      <div className="container-fluid px-4">
        <div className="row">
          <div className="col">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-6 -mt-6">
              {banners.map((banner, index) => (
                <li key={index} className="w-full sm:w-[calc(50%-1.5rem)] mt-6">
                  <div className={`relative transition-transform duration-300 ease-in-out hover:-translate-y-2 flex items-center`}>
                    <a
                      href={banner.href}
                      className="block w-full overflow-hidden rounded-[var(--sti-border-radius)]"
                    >
                      <img
                        src={banner.img}
                        alt={banner.alt}
                        width={1570}
                        height={771}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </a>

                    {/* Optional text overlay block */}
                    <div className="absolute left-6 top-6 max-w-[40%] hidden">
                      {/* Add text content if needed */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerGridSection;

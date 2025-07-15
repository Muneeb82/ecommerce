import React from 'react';

const services = [
  {
    title: 'Best quality',
    description: 'Not only fast for us quality is also number one',
    image: 'https://dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-service1.png?v=1709880169',
    link: '/pages/about-us-02'
  },
  {
    title: 'Easy to order',
    description: 'You only need a few steps in ordering food',
    image: 'https://dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-service2.png?v=1709880169',
    link: '/pages/terms-condition'
  },
  {
    title: 'Fastest delivery',
    description: 'Delivery that is always on time even faster',
    image: 'https://dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-service3.png?v=1709880169',
    link: '/pages/delivery-return'
  }
];

const ServiceSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start bg-white rounded-xl shadow-sm p-6"
            >
              <a href={service.link} className="shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-28 h-auto object-contain"
                />
              </a>
              <div className="ml-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm w-10 h-10 rounded-full bg-white shadow flex items-center justify-center font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {index !== services.length - 1 && (
                    <i className="bi bi-arrow-down-right text-xl rotate-[-45deg] ml-auto text-gray-700" />
                  )}
                </div>
                <h6 className="text-lg font-semibold mt-4">{service.title}</h6>
                <p className="text-gray-600 mt-2 text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
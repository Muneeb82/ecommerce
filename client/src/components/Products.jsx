<<<<<<< HEAD
import titleIcon from '../assets/title-icon2.png';

export default function Products() {
  return (
    <div className="relative overflow-hidden pt-20 pb-20">
        <div className="px-[150px]">
            <div className="flex flex-wrap">
                <div className="grow shrink-0 basis-0">
                    <div className="flex items-center justify-between text-start mb-10">
                        <div className="flex items-center">
                            <h2>Top selling products</h2>
                            <p className="max-w-full ml-[30px] size-[18px] leading-none font-light">
                                <span className="inline-block mr-[30px] max-w-[50px]">
                                    <img src={titleIcon} alt="title-icon" />
                                </span>
                                Fresh and fabulous from farm to table!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
=======
import React from 'react';
import titleIcon from '../assets/title-icon2.png';

const Products = () => {
  const products = [
    {
      id: '8398859174189',
      title: 'Fresh strawberry',
      url: '/products/fresh-strawberry',
      img1: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/marbo-product-07_872303be-0b8f-41c4-a2d7-2a90831dc2e0.jpg?v=1706520002&width=720',
      img2: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/marbo-product-07-a_bf2a7c16-40b9-4062-ae4f-a6321d2c8cbd.jpg?v=1706520002&width=720',
      discount: '52%',
      variants: [
        { id: '45305647661357', size: '1kg', price: 2100, comparePrice: 4400, available: true },
        { id: '45305647792429', size: '2kg', price: 2000, comparePrice: 3200, available: true },
      ],
      rating: 1.0,
      description: 'Product Specifications Care for fiber: 30% more recycled polyester...',
    },
    {
      id: '8398858486061',
      title: 'Fresh watermelon',
      url: '/products/fesh-watermelon',
      img1: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/marbo-product-05_5723c237-2af8-49db-93ca-b4b6892297b8.jpg?v=1706519946&width=720',
      img2: '//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/marbo-product-05-c_3ed3978e-fc97-4d06-8e97-3ad04020628a.jpg?v=1706519946&width=720',
      discount: null,
      variants: [
        { id: '46974707466541', size: '1kg', price: 3000, comparePrice: null, available: true },
        { id: '46974707499309', size: '2kg', price: 3000, comparePrice: null, available: true },
        { id: '46974707532077', size: '3kg', price: 3000, comparePrice: null, available: false },
      ],
      rating: 4.5,
      description: 'Product Specifications Care for fiber: 30% more recycled polyester...',
    },
  ];

  const addToCart = (productId, variantId, quantity) => {
    const url = '/cart/add.js';
    const requestBody = {
      items: [{ id: variantId, quantity }],
      sections: 'ajax-cart',
    };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        const result = new DOMParser()
          .parseFromString(data.sections['ajax-cart'], 'text/html')
          .querySelector('#ajaxcart').innerHTML;
        document.querySelector('#ajaxcart').innerHTML = result;
        document.querySelector('.mini-cart')?.classList.remove('is-empty');
        setTimeout(() => {
          document.querySelector('.mini-cart')?.classList.add('animate', 'active');
        }, 200);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="pt-20 pb-20 px-[150px]">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Top Selling Products</h2>
        <p className="flex items-center text-sm text-gray-600">
          <img src={titleIcon} alt="icon" className="w-6 mr-2" />
          Fresh and fabulous from farm to table!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition">
            <a href={product.url} className="relative block overflow-hidden">
              <img src={product.img1} alt={product.title} className="w-full object-cover" />
              <img
                src={product.img2}
                alt={product.title}
                className="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
            </a>
            <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>

            <select className="w-full mt-3 p-2 border rounded text-sm">
              {product.variants.map((v) => (
                <option key={v.id} disabled={v.available === false}>
                  {v.size} {v.available === false && ' - Sold out'}
                </option>
              ))}
            </select>

            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="font-bold text-blue-600">
                ${product.variants[0].price / 100}
              </span>
              {product.variants[0].comparePrice && (
                <span className="line-through text-gray-400">
                  ${product.variants[0].comparePrice / 100}
                </span>
              )}
              <span className="text-yellow-500">★ {product.rating}</span>
            </div>

            <button
              onClick={() => addToCart(product.id, product.variants[0].id, 1)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
>>>>>>> 57c1b335a25ddfbc0cb2a603c986587478281a32

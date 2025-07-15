import React from 'react';

const NewsletterSection = () => {
  return (
    <section
      className="py-16 sm:py-14 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-news-bg.jpg?v=1709880290')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <span className="text-lg font-light block mb-2">Subscribe our newsletter</span>
          <h2 className="text-3xl sm:text-2xl font-medium">Get 20% off discount coupon</h2>
        </div>

        <form
          method="post"
          action="/contact#contact_form"
          id="contact_form"
          className="mt-8 text-center"
        >
          <input type="hidden" name="form_type" value="customer" />
          <input type="hidden" name="utf8" value="✓" />
          <input type="hidden" name="contact[tags]" value="newsletter" />

          <div className="relative flex justify-center max-w-xl mx-auto">
            <input
              type="email"
              name="contact[email]"
              id="E-mail"
              placeholder="Enter your email"
              required
              className="w-full h-12 px-4 rounded-l-md border border-gray-300 focus:outline-none text-black"
            />
            <button
              type="submit"
              id="Subscribe"
              name="commit"
              className="h-12 px-6 text-sm font-semibold uppercase text-white bg-green-600 hover:bg-green-800 rounded-r-md flex items-center"
            >
              <i className="feather-bookmark mr-2"></i> Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;

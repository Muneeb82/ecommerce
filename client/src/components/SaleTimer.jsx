import React, { useEffect, useState } from 'react';

const SaleOfTheMonthBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const countDown = new Date('January 30, 2030 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      setTimeLeft({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second),
      });
    }, second);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-20 pb-0 bg-[#f1f1f1]">
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <div
          className="flex flex-wrap rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-deal-bg.jpg?v=1709984692')",
          }}
        >
          <div className="w-full lg:w-1/4" />
          <div className="w-full lg:w-3/4 flex items-center px-6 py-10">
            <div className="flex flex-col items-start gap-6">
              <h2 className="text-white text-3xl lg:text-4xl font-semibold">Sale of the month</h2>

              <ul className="flex items-center gap-6 flex-wrap">
                {[
                  { label: 'Day', value: timeLeft.days },
                  { label: 'Hrs', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Sec', value: timeLeft.seconds },
                ].map((item, index) => (
                  <li key={item.label} className="flex flex-col items-center relative pr-5 last:pr-0">
                    <span className="text-[#fbdf58] text-3xl font-bold">{item.value}</span>
                    <span className="text-white text-sm uppercase">{item.label}</span>
                    {index < 3 && (
                      <span className="absolute right-1 text-white text-xl top-[6px]">:</span>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href="/collections/animal-biscuits-and-products"
                className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-[#fbdf58] text-[#383128] font-semibold rounded hover:bg-white hover:text-[#383128] transition"
              >
                Order now <i className="feather-shopping-bag" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleOfTheMonthBanner;

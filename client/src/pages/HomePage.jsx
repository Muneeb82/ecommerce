import SwiperSlider from "../components/Slider";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import sliderBg from '../assets/slider-bg.png'; 
import banner1 from '../assets/banner-1.jpg';
import CategorySlider from "../components/Categories";
import Products from "../components/Products";
import CategoryOffer from "../components/CategoriesOffer";
import BannerGrid from "../components/Banner";
import SaleOfTheMonthBanner from "../components/SaleTimer";
import BannerGridSection from "../components/BannerGrid";
import BrandLogoSwiper from "../components/BrandLogo";
import ServiceSection from "../components/Service";
import NewsletterSection from "../components/Newsletter";

export default function HomePage() {
  return (
    <>
    <div className="block">
      <div className="relative mt-[30px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${sliderBg})` }}>
        <div className="px-[30px]">
          <div className="flex flex-wrap">
            <div className="grow shrink-0 basis-0">
              <div className="flex flex-wrap">
                <div className="w-[calc(25%-30px)] ml-[30px] mt-[30px]">
                  <div className="relative flex items-center justify-center overflow-hidden rounded-[5px] h-full">
                    <a href="#" className="block h-full">
                      <img src={banner1} alt="banner-1" />
                    </a>
                    <div className="block absolute top-[10%] max-w-[66.66%] mx-auto text-center">
                      <h2 className="text-white size-[38px] leading-none font-medium">Bakery products</h2>
                      <a href="#" className="inline-block mt-5 text-[#383128] size-3.5 px-5 py-3 bg-[#fbdf58] uppercase font-semibold border border-solid border-[#fbdf58] rounded-[5px] leading-none text-center">Shop Now <ShoppingBagIcon className="ps-[5px] text-[#383128] size-3.5 text-center" /></a>
                    </div>
                  </div>
                </div>
                <div className="w-[calc(50%-30px)] ml-[30px] mt-[30px]">
                  <div className="relative flex items-center justify-center overflow-hidden rounded-[5px] h-full">
                   <SwiperSlider />
                  </div>
                </div>
                <div className="w-[calc(25%-30px)] ml-[30px] mt-[30px]">
                  <div className="relative flex items-center justify-center overflow-hidden rounded-[5px] h-full">
                    <a href="#" className="block h-full">
                      <img src={banner1} alt="banner-1" />
                    </a>
                    <div className="block absolute top-[10%] max-w-[66.66%] mx-auto text-center">
                      <h2 className="text-white size-[38px] leading-none font-medium">Bakery products</h2>
                      <a href="#" className="inline-block mt-5 text-[#383128] size-3.5 px-5 py-3 bg-[#fbdf58] uppercase font-semibold border border-solid border-[#fbdf58] rounded-[5px] leading-none text-center">Shop Now <ShoppingBagIcon className="ps-[5px] text-[#383128] size-3.5 text-center" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Categories */}
    <div className="block">
      <CategorySlider />
    </div>

    {/* Products */}
    <div className="block">
      <Products />
    </div>

    {/* Categories Offer */}
    <div className="block">
      <CategoryOffer />
    </div>

    {/* Banner Grid */}
    <div className="block">
      <BannerGrid/>
    </div>

    {/* Sale Timer */}
    <div className="block">
      <SaleOfTheMonthBanner/>
    </div>

    {/* Banner Grid */}
    <div className="block">
      <BannerGridSection />
    </div>

    {/* Brand Logo */}
    <div className="block">
      <BrandLogoSwiper />
    </div>

    {/* Service */}
    <div className="block">
      <ServiceSection />
    </div>

    {/* Newsletter */}
    <div className="block">
      <NewsletterSection />
    </div>
    </>
  );
}
import React from "react";
import heroHeader from "../../shared/images/home-images/Hero Header.png";
import { Button } from "@shared/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import image1 from "../../shared/images/home-images/image1.png";
import image2 from "../../shared/images/home-images/image2.png";
import image3 from "../../shared/images/home-images/image3.png";
import image4 from "../../shared/images/home-images/image4.png";
import image5 from "../../shared/images/home-images/image5.png";
import "swiper/css";

const Home = () => {
  return (
    <>
      <main>
        <section className="max-w-[1440px] max-md:w-[90%] md:gap-[0px] gap-[10px] flex md:flex-row flex-col items-center justify-between m-auto">
          <article className="md:pl-[90px]">
            <h1 className="text-[#141416] text-[40px] md:text-start text-center md:text-[70px] font-bold">
              Discover And <br /> Create NFTs
            </h1>
            <p className="text-[14px] md:text-start text-center md:text-[18px] mt-[18px] mb-[45px] text-[#676767] font-normal">
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over
              Thousands Of NFTs And Get a{" "}
              <span className="text-[#141416] font-bold">$20 bonus.</span>
            </p>
            <article className="flex w-[60%] max-md:m-auto md:w-[65%] max-md:justify-between items-center gap-[23px]">
              <Button className="px-6 h-[57px] uppercase text-white font-semibold">
                Explore More
              </Button>
              <Button className="px-6 h-[57px] uppercase bg-white text-[black] border-[1px] border-black font-semibold">
                create NFT
              </Button>
            </article>
            <article className="md:flex hidden items-center mt-[80px] justify-between">
              <article>
                <h3 className="text-[#141416] text-[37px] font-semibold">
                  430K+
                </h3>
                <p className="text-[#848586] text-[12px] font-medium">
                  Art Works
                </p>
              </article>
              <article>
                <h3 className="text-[#141416] text-[37px] font-semibold">
                  159K+
                </h3>
                <p className="text-[#848586] text-[12px] font-medium">
                  Creators
                </p>
              </article>
              <article>
                <h3 className="text-[#141416] text-[37px] font-semibold">
                  87K+
                </h3>
                <p className="text-[#848586] text-[12px] font-medium">
                  Collections
                </p>
              </article>
            </article>
          </article>
          <img src={heroHeader} alt="Hero Header" />
        </section>

        <section className="max-w-[1440px] m-auto bg-[#F1F1F1] py-[60px]">
          <h3 className="text-[#C5C5C5] text-[45px] font-semibold text-center">Weekly - Top NFT</h3>
          <article className="px-4 py-8 max-w-screen-xl mx-auto">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              spaceBetween={16}
              breakpoints={{
                320: { slidesPerView: 1.1 },
                480: { slidesPerView: 1.5 },
                640: { slidesPerView: 2.2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="my-[50px]"
            >
              <SwiperSlide>
                <div className="bg-white rounded-2xl shadow-md border-[1px] overflow-hidden hover:scale-105 transition duration-300">
                  <div className="relative">
                    <img
                      src={image1}
                      alt="Sun-Glass"
                      className="w-full h-44 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      07h 09m 12s
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold">Sun–Glass</h3>
                    <div className="text-sm text-gray-500">Current bid</div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-medium">1.75</span>
                      <Button className="px-6 h-[47px] uppercase text-white font-semibold">
                        PLACE BID
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
                  <div className="relative">
                    <img
                      src={image2}
                      alt="Sun-Glass"
                      className="w-full h-44 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      07h 09m 12s
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold">Sun–Glass</h3>
                    <div className="text-sm text-gray-500">Current bid</div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-medium">1.75</span>
                      <Button className="px-6 h-[47px] uppercase text-white font-semibold">
                        PLACE BID
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
                  <div className="relative">
                    <img
                      src={image3}
                      alt="Sun-Glass"
                      className="w-full h-44 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      07h 09m 12s
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold">Sun–Glass</h3>
                    <div className="text-sm text-gray-500">Current bid</div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-medium">1.75</span>
                      <Button className="px-6 h-[47px] uppercase text-white font-semibold">
                        PLACE BID
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
                  <div className="relative">
                    <img
                      src={image4}
                      alt="NuEvey"
                      className="w-full h-44 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      19h 08m 12s
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold">NuEvey</h3>
                    <div className="text-sm text-gray-500">Current bid</div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-medium">1.25</span>
                      <Button className="px-6 h-[47px] uppercase text-white font-semibold">
                        PLACE BID
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
                  <article className="relative">
                    <img
                      src={image5}
                      alt="NuEvey"
                      className="w-full h-44 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      19h 08m 12s
                    </span>
                  </article>
                  <article className="p-3">
                    <h3 className="text-base font-semibold">NuEvey</h3>
                    <article className="text-sm text-gray-500">
                      Current bid
                    </article>
                    <article className="flex justify-between items-center mt-1">
                      <span className="font-medium">1.25</span>
                      <Button className="px-6 h-[47px] uppercase text-white font-semibold">
                        PLACE BID
                      </Button>
                    </article>
                  </article>
                </article>
              </SwiperSlide>
            </Swiper>
          </article>
        </section>

        <section className="max-w-[1200px] m-auto">
          <h3 className="text-[#141416] text-[45px] font-semibold text-center mt-[120px] mb-[90px]">Top Collection</h3>
        </section>
      </main>
    </>
  );
};

export default Home;

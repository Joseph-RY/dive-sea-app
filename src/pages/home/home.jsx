import React, { useState } from "react";
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
import img1 from "../../shared/images/home-images/Mask Group (5).png";
import img2 from "../../shared/images/home-images/Mask Group (6).png";
import img3 from "../../shared/images/home-images/image (74).png";
import img4 from "../../shared/images/home-images/Rectangle 3.png";
import img5 from "../../shared/images/home-images/Vector (5).png";
import img6 from "../../shared/images/home-images/Voice Id.png";
import img7 from "../../shared/images/home-images/Dollar.png";
import img8 from "../../shared/images/home-images/Illustration Left.png";
import img9 from "../../shared/images/home-images/icon (1).svg";
import img10 from "../../shared/images/home-images/Join Community.png";
import img11 from "../../shared/images/home-images/Group 427320345.png";
import Card from "@shared/ui/components/card";

const Home = () => {
  const [modal, setModal] = useState(false);
  function modalFun() {
    setModal(true);
  }
  function closeModal() {
    setModal(false)
  }
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
      <div className="">
        <div className="flex flex-col max-w-[1200px] mx-auto gap-[63px] justify-center items-center md:mt-[150px] mt-[100px]">
          <h1 className="md:text-[45px] text-[30px] font-bold">
            Explore Marketplace
          </h1>
          <div className="flex gap-[10px] md:gap-[33px]">
            <button className="bg-white border-2 border-black w-[50px] h-[40px] rounded-2xl">
              All
            </button>
            <div className=" flex gap-[10px] border-[2px] border-[#141416] items-center p-[9px_18px] rounded-[15px]">
              <img src={img5} alt="" />
              <p>Category</p>
            </div>
            <div className=" flex gap-[10px] border-[2px] border-[#141416] items-center p-[9px_18px] rounded-[15px]">
              <img src={img6} alt="" />
              <p>Collection</p>
            </div>
            <div className=" flex gap-[10px] border-[2px] border-[#141416] items-center p-[9px_18px] rounded-[15px]">
              <img src={img7} alt="" />
              <p>Price</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-10">
        <Card img={img1} name={"Sun-Glass"} />
        <Card img={img2} name={"Sun-Glass"} />
        <Card img={img3} name={"Sun-Glass"} />
        <Card img={img4} name={"Sun-Glass"} />
        <Card img={img3} name={"Sun-Glass"} />
        <Card img={img4} name={"Sun-Glass"} />
        <Card img={img1} name={"Sun-Glass"} />
        <Card img={img2} name={"Sun-Glass"} />
      </div>
      <div className="text-center md:text-start md:flex items-center justify-around">
        <div className="">
          <p className="text-[50px] text-gray-500">Just Unleash -</p>
          <p className="text-[50px]">Your Inner Collector</p>
          <br />
          <div className="ml-[60px] md:m-0">
            <div className="text-center md:text-start flex gap-[20px]">
              <img src={img9} alt="" />
              <p>Best Seller All Around World</p>
            </div>
            <div className="text-center md:text-start flex gap-[20px]">
              <img src={img9} alt="" />
              <p>Best Seller All Around World</p>
            </div>
            <div className="text-center md:text-start flex gap-[20px]">
              <img src={img9} alt="" />
              <p>Best Seller All Around World</p>
            </div>
            <div className="text-center md:text-start flex gap-[20px]">
              <img src={img9} alt="" />
              <p>Best Seller All Around World</p>
            </div>
            <div className="text-center md:text-start flex gap-[20px]">
              <img src={img9} alt="" />
              <p>Best Seller All Around World</p>
            </div>
            <div className="text-center md:text-start flex gap-[20px]">
              <img src={img9} alt="" />
              <p>Best Seller All Around World</p>
            </div>
            <div className="text-center md:text-start flex gap-[20px]">
              <img src={img9} alt="" />
              <p>Best Seller All Around World</p>
            </div>
          </div>
          <button
            onClick={() => modalFun()}
            className="w-[150px] h-[40px] bg-black border-0 text-white rounded-xl"
          >
            Explore more
          </button>
        </div>
        <img className="w-[80%] m-auto md:m-0 md:w-[50%]" src={img8} alt="" />
      </div>
      {modal && (
        <div className="">
          <div className="">
            <img className="w-[60%] m-auto" src={img10} alt="" />
          </div>
          <div className="text-center mt-[50px]">
            <p className="text-[40px]">Frequently Asked</p>
            <p className="text-[40px] text-gray-500">Questions</p>
          </div>
          <div className="w-[85%] flex m-auto justify-between border-b-1 h-[40px] border-gray-700 mt-[30px]">
            <p className="text-[20px]">What is an NFT?</p>
            <button className="w-[30px] h-[30px] rounded-[15px] bg-black text-white">
              +
            </button>
          </div>
          <div className="w-[85%] flex m-auto justify-between border-b-1 h-[40px] border-gray-700 mt-[30px]">
            <p className="text-[20px]">What can I use NFTs for?</p>
            <button className="w-[30px] h-[30px] rounded-[15px] bg-black text-white">
              +
            </button>
          </div>
          <div className="w-[85%] flex m-auto justify-between border-b-1 h-[40px] border-gray-700 mt-[30px]">
            <p className="text-[20px]">
              What is the difference between an NFT and cryptocurrency?
            </p>
            <button className="w-[30px] h-[30px] rounded-[15px] bg-black text-white">
              +
            </button>
          </div>
          <div className="w-[85%] flex m-auto justify-between border-b-1 h-[40px] border-gray-700 mt-[30px]">
            <p className="text-[20px]">How much is an NFT worth?</p>
            <button className="w-[30px] h-[30px] rounded-[15px] bg-black text-white">
              +
            </button>
          </div>
          <div className="w-[85%] flex m-auto justify-between border-b-1 h-[40px] border-gray-700 mt-[30px]">
            <p className="text-[20px]">
              How do I purchase an NFT on your platform ?
            </p>
            <button className="w-[30px] h-[30px] rounded-[15px] bg-black text-white">
              +
            </button>
          </div>
          <div className="w-[80%] m-auto text-white border-0 rounded-4xl h-[300px] bg-black mt-[100px]">
            <div className="flex items-center justify-around">
              <div className="">
                <p className="text-[40px]">Create and Sell NFTs</p>
                <p className="text-gray-500">World’s Largest NFT Place</p>
                <br />
                <button onClick={()=>closeModal()} className="w-[150px] h-[40px] bg-white border-0 text-black rounded-xl">
                  Explore More
                </button>
                <button className="w-[150px] h-[40px] bg-black border-1  rounded-xl">
                  Sell Artwork
                </button>
              </div>
              <img src={img11} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

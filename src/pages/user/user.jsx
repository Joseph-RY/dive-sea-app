import React, { useState } from "react";
import headerImg from "./img/e3254e71456764213d16027cff5d36d84120104d.jpg";
import userLogo from "./img/Pic.png";
import social from "./img/Socials (2).png";
import firstIcon from "./img/Iconly.png";
import secondIcon from "./img/Discovery.png";
import caseCart from "./img/dashicons_cart.png";
import share from "./img/Vector (1).png";
import btnBottom from "./img/Vector.png";
import ProductImg from "./img/Rectangle 3 (2).png";
import ProductImg1 from "./img/Rectangle 3 (3).png";
import ProductImg2 from "./img/image (52).png";
import checked from "./img/Group 134.png";
import smallbtn from "./img/mdi_ethereum.png";
import { Link, useParams } from "react-router";

const User = () => {
  const data = [
    {
      id: 1,
      name: "Sun-Glass",
      price: "$20k",
      about: "Current bid",
      img: ProductImg1,
      sale: 16.4,
    },
    {
      id: 2,
      name: "Sun-Glass",
      price: "$20k",
      about: "Current bid",
      img: ProductImg,
      sale: 16.4,
    },
    {
      id: 3,
      name: "Sun-Glass",
      price: "$20k",
      about: "Current bid",
      img: ProductImg1,
      sale: 16.4,
    },
    {
      id: 4,
      name: "Sun-Glass",
      price: "$20k",
      about: "Current bid",
      img: ProductImg2,
      sale: 16.4,
    },
    {
      id: 5,
      name: "Sun-Glass",
      price: "$20k",
      about: "Current bid",
      img: ProductImg,
      sale: 16.4,
    },
    {
      id: 6,
      name: "Sun-Glass",
      price: "$20k",
      about: "Current bid",
      img: ProductImg2,
      sale: 16.4,
    },
  ];
  const [forBtn, setBtn] = useState(false);
  const [forDiv, setDiv] = useState(true);

  let { id } = useParams();
  let product = data.find((e) => e.id == Number(id));
  console.log(product);

  return (
    <div className="md:px-[10%]">
      <header className="relative md:h-[350px] my-9 w-[100%]">
        <img
          className="h-[100%] md:w-[1600px] md:rounded-2xl"
          src={headerImg}
          alt=""
        />
        <img
          className="absolute md:bottom-[-90px] md:left-[70px] bottom-[-100px] left-5"
          src={userLogo}
          alt=""
        />
      </header>
      <section className="mt-30 flex justify-between md:flex-row flex-col md:gap-0 gap-8">
        {/* ///////////////// user side */}
        <div className="md:pl-20 pl-10 w-[95%] md:w-[35%]">
          <div className="flex items-start justify-between">
            <span className="text-4xl font-bold">
              Harry K. <br />
              <span className="text-[18px] font-medium text-[#93989A]">
                @Harryknft
              </span>
            </span>
            <button className="bg-black text-white py-3 text-[18px] px-8 rounded-2xl">
              Follow +
            </button>
          </div>
          <hr className="bg-gray-400 border-1 my-7" />
          <div className="flex justify-between">
            <span className="text-4xl font-bold">
              86 ETH <br />
              <span className="text-[18px] font-medium text-[#93989A]">
                Total Sales
              </span>
            </span>
            <span className="text-4xl font-bold">
              12K <br />
              <span className="text-[18px] font-medium text-[#93989A]">
                Followers
              </span>
            </span>
            <span className="text-4xl font-bold">
              587 <br />
              <span className="text-[18px] font-medium text-[#93989A]">
                Followings
              </span>
            </span>
          </div>
          <div className="my-20">
            <h2 className="text-[#C5C5C5] text-4xl font-bold">Bio</h2>
            <p className="text-[#949494] text-[20px]">
              the artist who transforms the intangible into priceless assets
              with their incredible NFT creations. From stunning visuals to
              mind-bending concepts,
            </p>
          </div>
          <hr className="bg-gray-400 border-1 my-8" />
          <img src={social} alt="" />
        </div>
        {/* ///////////////////// end user side */}
        <div className="md:w-[56%]">
          <div className="flex">
            {!forBtn && (
              <button
                onClick={() => {
                  setBtn(true);
                  setDiv(true);
                }}
                className="flex items-center gap-2 w-[50%] justify-center text-2xl font-bold py-3 border-b-3 border-black"
              >
                <img src={firstIcon} alt="" />
                Collection
              </button>
            )}
            {forBtn && (
              <button className="flex items-center gap-2 w-[50%] justify-center text-2xl font-bold py-3 text-[#D2D2D2]">
                <img src={firstIcon} alt="" />
                Collection
              </button>
            )}
            {forBtn && (
              <button
                onClick={() => setBtn(false)}
                className="flex items-center gap-2 w-[50%] justify-center text-2xl font-bold py-3 border-b-3 border-black"
              >
                <img src={secondIcon} alt="" />
                Activity
              </button>
            )}
            {!forBtn && (
              <button className="flex items-center gap-2 w-[50%] justify-center text-2xl text-[#D2D2D2]">
                <img src={secondIcon} alt="" />
                Activity
              </button>
            )}
          </div>
          <div className="flex flex-wrap md:flex-row flex-col items-center md:items-start gap-10 my-10">
            {forDiv &&
              data.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="md:w-[30%] w-[90%] bg-white md:h-[380px] rounded-2xl shadow-2xl"
                  >
                    <img
                      className="w-[85%] rounded-2xl m-auto my-5"
                      src={e.img}
                      alt=""
                    />
                    <h2 className="text-[20px] font-bold pl-5">{e.name}</h2>
                    <div className="px-5 flex justify-between items-center my-5">
                      <aside>
                        <p className="text-[#94A3B8]">{e.about}</p>
                        <h2 className="flex items-center">
                          <img src={smallbtn} alt="" /> {e.sale}
                        </h2>
                      </aside>
                      <Link to={`/user/${e.id}`}>
                        <button
                          onClick={() => {
                            setDiv(false);
                            setBtn(false);
                          }}
                          className="bg-black text-white px-3 py-2 rounded-2xl"
                        >
                          PLACE BID
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            {!forDiv && (
              <div className="w-[100%]">
                {/* ////////////// two btn */}
                <div className="flex justify-between">
                  <div className="w-[48%] flex items-center justify-center gap-5 bg-white rounded-2xl shadow-2xl h-[60px]">
                    <img src={caseCart} alt="" />
                    <h2 className="text-[20px]">Sales</h2>
                    <img src={btnBottom} alt="" />
                  </div>
                  <div className="w-[48%] flex items-center justify-center gap-5 bg-white rounded-2xl shadow-2xl">
                    <img src={share} alt="" />
                    <h2 className="text-[20px]">All Chains</h2>
                    <img src={btnBottom} alt="" />
                  </div>
                </div>
                {/* //////////////// end */}
                <div className="shadow-2xl rounded-2xl">
                  <div className="w-[100%] my-10">
                    {/* ///////// first sec Profil */}
                    <div className="flex justify-between p-5 items-center">
                      <div className="flex items-center gap-5">
                        <img className="rounded-2xl w-[30%]" src={product.img} alt="" />
                        <aside>
                          <h2 className="md:text-3xl font-bold">{product.name}</h2>
                          <p className="md:text-[17px] flex items-center md:gap-1">
                            {product.about} <img src={checked} alt="" />
                          </p>
                        </aside>
                      </div>
                      <div>
                        <p className="text-green-600 font-bold text-[16px]">Sale</p>
                        <h3 className="flex items-center gap-1 font-bold md:text-[19px]">
                          <img src={smallbtn} alt="" />
                          {product.sale}
                        </h3>
                        <p className="text-gray-400 md:font-bold text-[16px]">6 Minutes ago</p>
                      </div>
                    </div>
                  </div>
                  {/* //////////////// end prof */}
                  <hr className="bg-gray-400 border-1 my-1 w-[95%] m-auto" />
                  <div className="flex py-7 justify-between">
                    <div className="w-[20%] text-center">
                      <p className="text-[16px] text-[#828282]">USD Price</p>
                      <h3 className="md:text-2xl font-bold">{product.price}</h3>
                    </div>
                    <div className="w-[20%] text-center">
                      <p className="text-[16px] text-[#828282]">Quantity</p>
                      <h3 className="md:text-2xl font-bold">14K</h3>
                    </div>
                    <div className="w-[20%] text-center">
                      <p className="text-[16px] text-[#828282]">floor price</p>
                      <h3 className="md:text-2xl font-bold flex items-center justify-center"><img src={smallbtn} alt="" />16,4</h3>
                    </div>
                    <div className="w-[20%] text-center">
                      <p className="text-[16px] text-[#828282]">traded</p>
                      <h3 className="md:text-2xl font-bold flex items-center justify-center"><img src={smallbtn} alt="" />26,4</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;

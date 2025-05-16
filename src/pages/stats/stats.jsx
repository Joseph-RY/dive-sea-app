import { Button } from "@shared/ui/button";
import React from "react";
import list from "../../pages/stats/imagesStates/List.png";
import voice from "../../pages/stats/imagesStates/Voice Id.png";
import dollar from "../../pages/stats/imagesStates/Dollar.png";
import strelka from "../../pages/stats/imagesStates/Group.png";
import etherium from "../../pages/stats/imagesStates/mdi_ethereum.png";
import icon1 from "../../pages/stats/imagesStates/icon.png";
import icon2 from "../../pages/stats/imagesStates/icon (1).png";
import icon3 from "../../pages/stats/imagesStates/icon (2).png";
import icon4 from "../../pages/stats/imagesStates/icon (3).png";
import icon5 from "../../pages/stats/imagesStates/icon (4).png";

const Stats = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col max-w-[1200px] mx-auto gap-[63px] justify-center items-center md:mt-[150px] mt-[100px]">
        <h1 className="md:text-[45px] text-[30px] font-bold">
          Leaderboard NFTs
        </h1>
        <div className="flex gap-[10px] md:gap-[33px]">
          <div className=" flex gap-[10px] border-[2px] border-[#141416] items-center p-[9px_18px] rounded-[15px]">
            <img src={list} alt="" />
            <p>Category</p>
          </div>
          <div className=" flex gap-[10px] border-[2px] border-[#141416] items-center p-[9px_18px] rounded-[15px]">
            <img src={voice} alt="" />
            <p>Collection</p>
          </div>
          <div className=" flex gap-[10px] border-[2px] border-[#141416] items-center p-[9px_18px] rounded-[15px]">
            <img src={dollar} alt="" />
            <p>Price</p>
          </div>
        </div>
      </div>
      <table className="w-full max-w-[1200px] mx-auto text-sm md:text-base mt-[70px]">
        <thead className="text-[#141416] font-semibold">
          <tr className="text-left">
            <th className="py-3 px-4">
              <div className="flex items-center gap-2">
                <p>Collection</p>
                <img src={strelka} alt="" className="w-3 h-3" />
              </div>
            </th>
            <th className="py-3 px-4">
              <div className="flex items-center gap-2">
                <p>Volume</p>
                <img src={strelka} alt="" className="w-3 h-3" />
              </div>
            </th>
            <th className="py-3 px-4">
              <div className="flex items-center gap-2">
                <p>24 H</p>
                <img src={strelka} alt="" className="w-3 h-3" />
              </div>
            </th>
            <th className="py-3 px-4">
              <div className="flex items-center gap-2">
                <p>Floor Price</p>
                <img src={strelka} alt="" className="w-3 h-3" />
              </div>
            </th>
            <th className="py-3 px-4 hidden md:inline-block">
              <div className="flex items-center gap-2">
                <p>Owner</p>
                <img src={strelka} alt="" className="w-3 h-3" />
              </div>
            </th>
            <th className="py-3 px-4 hidden md:inline">Items</th>
          </tr>
        </thead>
        <tbody className="text-[#353945] font-medium">
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <img src={icon1} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="font-semibold text-[#141416]">Alex Ca.</h2>
                  <p className="text-[#777E91] text-sm">By Alex</p>
                </div>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p className="font-semibold">8,456</p>
              </div>
            </td>
            <td className="py-4 px-4 text-green-500 font-semibold">+27.78%</td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p>3.5</p>
              </div>
            </td>
            <td className="py-4 px-4 hidden md:inline-block">2,2K</td>
            <td className="py-4 px-4 hidden md:inline-grid">500</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <img src={icon2} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="font-semibold text-[#141416]">Dura Gx.</h2>
                  <p className="text-[#777E91] text-sm">By Dura</p>
                </div>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p className="font-semibold">4,486</p>
              </div>
            </td>
            <td className="py-4 px-4 text-green-500 font-semibold">+ 09.78%</td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p>2.4</p>
              </div>
            </td>
            <td className="py-4 px-4 hidden md:inline-block">2,2K</td>
            <td className="py-4 px-4 hidden md:inline-grid">900</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <img src={icon3} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="font-semibold text-[#141416]">Michal Yu.</h2>
                  <p className="text-[#777E91] text-sm">By Michal</p>
                </div>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p className="font-semibold">9,124</p>
              </div>
            </td>
            <td className="py-4 px-4 text-green-500 font-semibold">+ 11.78%</td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p>3.5</p>
              </div>
            </td>
            <td className="py-4 px-4 hidden md:inline-block">2,2K</td>
            <td className="py-4 px-4 hidden md:inline-grid">920</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <img src={icon4} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="font-semibold text-[#141416]">Differy Da.</h2>
                  <p className="text-[#777E91] text-sm">By Tom</p>
                </div>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p className="font-semibold">3,657</p>
              </div>
            </td>
            <td className="py-4 px-4 text-green-500 font-semibold">+ 22.78%</td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p>2.4</p>
              </div>
            </td>
            <td className="py-4 px-4 hidden md:inline-block">2,2K</td>
            <td className="py-4 px-4 hidden md:inline-grid">300</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <img src={icon5} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="font-semibold text-[#141416]">Union Ca.</h2>
                  <p className="text-[#777E91] text-sm">By Jerry</p>
                </div>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p className="font-semibold">By Jerry</p>
              </div>
            </td>
            <td className="py-4 px-4 text-green-500 font-semibold">+ 22.78%</td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p>2.4</p>
              </div>
            </td>
            <td className="py-4 px-4 hidden md:inline-block">2,2K</td>
            <td className="py-4 px-4 hidden md:inline-grid">800</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <img src={icon1} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="font-semibold text-[#141416]">Duckly Dk.</h2>
                  <p className="text-[#777E91] text-sm">By Duck</p>
                </div>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p className="font-semibold">8,456</p>
              </div>
            </td>
            <td className="py-4 px-4 text-green-500 font-semibold">+ 15.78%</td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p>3.5</p>
              </div>
            </td>
            <td className="py-4 px-4 hidden md:inline-block">2,2K</td>
            <td className="py-4 px-4 hidden md:inline-grid">500</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <img src={icon5} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="font-semibold text-[#141416]">Union Ca.</h2>
                  <p className="text-[#777E91] text-sm">By Jerry</p>
                </div>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p className="font-semibold">By Jerry</p>
              </div>
            </td>
            <td className="py-4 px-4 text-green-500 font-semibold">+ 22.78%</td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p>2.4</p>
              </div>
            </td>
            <td className="py-4 px-4 hidden md:inline-block">2,2K</td>
            <td className="py-4 px-4 hidden md:inline-grid">800</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <img src={icon1} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="font-semibold text-[#141416]">Duckly Dk.</h2>
                  <p className="text-[#777E91] text-sm">By Duck</p>
                </div>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p className="font-semibold">8,456</p>
              </div>
            </td>
            <td className="py-4 px-4 text-green-500 font-semibold">+ 15.78%</td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-1">
                <img src={etherium} alt="" className="w-4 h-4" />
                <p>3.5</p>
              </div>
            </td>
            <td className="py-4 px-4 hidden md:inline-block">2,2K</td>
            <td className="py-4 px-4 hidden md:inline-grid">500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stats;

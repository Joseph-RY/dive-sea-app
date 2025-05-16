import React from "react";
import { Button } from "@/shared/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@shared/ui/sheet";

import { Link } from "react-router";

import logo from "@shared/images/header-images/logo.png";

const Header = () => {
  return (
    <nav className="px-[10%] py-11 flex items-center justify-between">
      <div className="flex items-center gap-15">
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <h2 className="text-[22px] font-semibold">DiveSea</h2>
        </div>
        <ul className="hidden md:flex gap-12 uppercase text-[#606060]">
          <li>
            <Link to={"/discover"}>Discover</Link>
          </li>
          <li>
            <Link to={"/creators"}>Creators</Link>
          </li>
          <li>
            <Link to={"/sell"}>Sell</Link>
          </li>
          <li>
            <Link to={"/stats"}>Stats</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <input className="bg-[#EDEDED] px-5 py-4 rounded-[15px] placeholder-text-[#C2C3CB] placeholder-font-medium" type="text" placeholder="Search Art Work / Creator" />
        <Button className="px-6 h-[57px] uppercase text-white font-semibold">Connect Wallet</Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="md:hidden flex flex-col gap-[10px]">
            <hr className="w-9 rounded-xl border-[2px] border-[#141416]" />
            <hr className="w-9 rounded-xl border-[2px] border-[#141416]" />
            <hr className="w-9 rounded-xl border-[2px] border-[#141416]" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-6">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6 px-4">
            <ul className="flex flex-col gap-3 uppercase text-[#606060]">
              <li>
                <Link to="/discover">Discover</Link>
              </li>
              <li>
                <Link to="/creators">Creators</Link>
              </li>
              <li>
                <Link to="/sell">Sell</Link>
              </li>
              <li>
                <Link to="/stats">Stats</Link>
              </li>
            </ul>
            <input type="text" placeholder="Search Art Work / Creator" className="bg-[#EDEDED] px-4 py-3 rounded-[12px] placeholder:text-[#939496] placeholder:font-medium text-sm" />
            <Button className="uppercase text-white font-semibold h-[50px] w-full">Connect Wallet</Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Header;

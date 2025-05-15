import React from "react";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router";

import logo from "@shared/images/header-images/logo.png"

const Header = () => {
  return (
    <nav className="px-[10%] py-11 flex items-center justify-between">
      <div className="flex items-center gap-15">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <ul className="flex gap-12 uppercase text-[#606060]">
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
      <div className="flex items-center gap-8">
        <input className="bg-[#EDEDED] px-5 py-4 rounded-[15px] placeholder-text-[#C2C3CB] placeholder-font-medium" type="text" placeholder="Search Art Work / Creator" />
        <Button className="px-6 h-[57px] uppercase text-white font-semibold">Connect Wallet</Button>
      </div>
    </nav>
  );
};

export default Header;

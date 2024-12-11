"use client";

import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/globant-logo-dark.svg";
import DesktopNavigation from "./components/DesktopNavigation";
import LanguageSelector from "./components/LanguageSelector";
import MobileNavigation from "./components/MobileNavigation";

const GlobantLogo = () => (
  <Link
    href="/"
    className="flex-shrink-0 max-lg:ml-4"
    aria-label="Go to Globant homepage"
  >
    <Image src={logo} alt="Globant Logo" width={120} height={32} priority />
  </Link>
);

const Navbar: NextPage = ({}) => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white backdrop-blur-sm z-50  lg:px-16 lg:pr-16 xl:px-[8%] shadow-md">
      <nav className="w-7xl mx-auto pr-0 " aria-label="Main Navigation">
        <div className="flex  items-center justify-between h-[9vh]">
          <GlobantLogo />
          <DesktopNavigation />

          <div className="lg:hidden  w-[62%] flex justify-end space-x-0 px-4">
            {!isMobileNavigationOpen && (
              <LanguageSelector buttonMenuStyles={"lg:hidden"} />
            )}
            <MobileNavigation
              onShowNavigation={() =>
                setIsMobileNavigationOpen(!isMobileNavigationOpen)
              }
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

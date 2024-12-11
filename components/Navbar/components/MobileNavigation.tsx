import { navItems } from "@/lib/const";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

interface Props {
  onShowNavigation: () => void;
}

const MobileNavigation: NextPage<Props> = ({ onShowNavigation }) => {
  const [showNavigation, setShowNavigation] = useState(false);
  // State for each submenu (toggle the open/close state for each)
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index); // Toggle submenu
  };

  return (
    <>
      <button
        className="lg:hidden relative w-8 h-8 flex items-center justify-center"
        onClick={() => {
          onShowNavigation();
          setShowNavigation(!showNavigation);
        }}
        aria-label={showNavigation ? "Close menu" : "Open menu"}
      >
        <span className="sr-only">Menu</span>
        {/* Líneas del menú hamburguesa */}
        <div className="relative w-6 h-6 flex flex-col justify-around items-center">
          <span
            className={`block w-full h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
              showNavigation ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
              showNavigation ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
              showNavigation ? "-rotate-45 -translate-y-2 " : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Submenu Languages with hover animation */}
      {showNavigation ? (
        <div
          className="fixed m-0 top-full left-0 w-screen bg-white
      shadow-lg transition-all duration-500 ease-in-out overflow-auto
       transform origin-top opacity-100 group-hover:opacity-100 
       group-hover:max-h-96 h-[100vh] z-50 p-4 pt-6"
          style={{ fontFamily: "Heebo, sans-serif" }}
        >
          {navItems.map((item, index) => (
            <div key={item.label} className="relative pb-4">
              {/* Main menu item */}
              {item.dropdown ? (
                <>
                  <button
                    className="flex justify-between w-full text-[14px] font-bold text-gray-700 hover:text-gray-900 antialiased"
                    style={{ fontFamily: "Heebo, sans-serif" }}
                    onClick={() => toggleSubmenu(index)} // Toggle submenu on click
                  >
                    {item.label}
                    <span
                      className={`ml-2 transform transition-transform ${
                        openSubmenu === index ? "rotate-180" : ""
                      }`}
                    >
                      &#x25BC;
                    </span>
                  </button>
                  <hr className="my-2 border-gray-300" />
                </>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="block text-[14px] font-bold text-gray-700 hover:text-gray-900 antialiased"
                    style={{ fontFamily: "Heebo, sans-serif" }}
                  >
                    {item.label}
                  </Link>
                  <hr className="my-2 border-gray-300" />
                </>
              )}

              {/* Submenu (Acordeón) */}
              {item.dropdown && openSubmenu === index && (
                <div
                  className="left-0 mt-2 w-full text-[14px] bg-white shadow-lg rounded-md transition-all duration-300 ease-in-out overflow-hidden opacity-100"
                  style={{ fontFamily: "Heebo, sans-serif" }}
                >
                  {item.subItems?.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Contact Us Button */}
          <button
            className="bg-[#BFD732] w-full text-black px-6 py-2 rounded-full text-[14px] font-bold hover:bg-[#a8bd2d] transition-colors antialiased"
            aria-label="Contact Us"
            style={{ fontFamily: "Heebo, sans-serif" }}
            // onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MobileNavigation;

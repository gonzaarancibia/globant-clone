import { navItems } from "@/lib/const";
import { NextPage } from "next";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";

const DesktopNavigation: NextPage = () => {
  // State to manage expanded menu
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setExpandedMenu(label);
  };

  const handleMouseLeave = () => {
    setExpandedMenu(null);
  };

  const handleFocus = (menuLabel: string | null) => {
    setExpandedMenu(menuLabel);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setExpandedMenu(null); // Cierra el menú al presionar Escape
    }
  };

  return (
    <div className="hidden  lg:flex w-fit min-w-[800px] items-center justify-between space-x-4">
      <ul className="flex gap-2">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="relative group "
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            {item.dropdown ? (
              <button
                className="text-[14px] px-1.5 font-bold text-gray-700 hover:text-gray-900 antialiased relative"
                style={{ fontFamily: "Heebo, sans-serif" }}
                aria-haspopup="menu"
                aria-expanded={expandedMenu === item.label}
                onFocus={() => {
                  return item.label && handleFocus(item.label);
                }}
                onKeyDown={(event) => item.label && handleKeyDown(event)}
                aria-label={`Open submenu for ${item.label}`}
              >
                <span className="hover:underline hover:decoration-2 hover:decoration-black hover:underline-offset-[12px]">
                  {item.label}
                </span>
              </button>
            ) : (
              <Link
                href={item.href}
                className="text-[14px] font-bold text-gray-700 hover:text-gray-900 antialiased relative"
                style={{ fontFamily: "Heebo, sans-serif" }}
                onFocus={() => handleFocus(null)}
              >
                <span className="hover:underline hover:decoration-2 hover:decoration-black hover:underline-offset-[12px]">
                  {item.label}
                </span>
              </Link>
            )}

            {/* Submenu with hover animation */}
            {item.dropdown && (
              <section
                className={`fixed top-full left-0 w-screen lg:px-16 lg:pr-16 xl:px-[8%] bg-white shadow-lg transition-all duration-500 ease-in-out overflow-hidden transform origin-top z-50 ${
                  expandedMenu === item.label ? "max-h-96" : "max-h-0"
                }`}
                style={{ fontFamily: "Heebo, sans-serif" }}
                aria-label={`Submenu for ${item.label}`}
              >
                <div className="max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8  flex items-center justify-between">
                  <div className="w-[120px]"></div>
                  <div className="w-[62.5%] min-w-[800px]">
                    {item.description ? (
                      <>
                        <h3 className="p-2 pb-0 text-gray-700">
                          {item.description}
                        </h3>
                        <hr className="my-2 border-gray-300" />
                      </>
                    ) : (
                      <></>
                    )}
                    <ul className="grid grid-cols-3 gap-4">
                      {item.subItems?.map((subItem) => (
                        <li key={`item-${subItem.label}`}>
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block text-[14px] px-6 py-4 text-gray-700 hover:bg-gray-100 hover:font-bold hover:underline hover:decoration-2 hover:decoration-black hover:underline-offset-[12px]"
                            aria-label={subItem.label}
                            onFocus={() => {
                              console.log("Estoy en onFocus", item.label);

                              return item.label && handleFocus(item.label);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}
            {/*----FIN DE--- Submenu with hover animation */}
          </li>
        ))}
      </ul>

      <button
        className="bg-[#BFD732] text-black lg:px-8  lg:py-2.5  rounded-full text-[14px] font-bold hover:bg-[#a8bd2d] transition-colors antialiased"
        aria-label="Contact Us"
        style={{ fontFamily: "Heebo, sans-serif" }}
      >
        CONTACT US
      </button>

      <LanguageSelector />
    </div>
  );
};

export default DesktopNavigation;

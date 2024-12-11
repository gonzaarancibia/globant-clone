import { NextPage } from "next";
import Navbar from "../../components/Navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
  return (
    <>
      {/* Skip link - Accesibility */}
      <a
        href="#main"
        className="absolute top-[14vh] left-[40%] right-[40%] -translate-y-full
        px-4 py-2 bg-[#BFD732] text-black font-bold text-sm rounded-md 
        shadow-lg opacity-0 focus:outline-none focus:ring-2 focus:opacity-100  z-50 
        transition-transform duration-300"
      >
        Skip to main content
      </a>
      <Navbar />
      {children}
    </>
  );
};

export default RootLayout;

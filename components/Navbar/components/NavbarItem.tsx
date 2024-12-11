import { NextPage } from "next";

interface Props {
  label: string;
}
// Proximo a borrar
const NavbarItem: NextPage<Props> = ({ label }) => {
  return (
    <button
      className="text-[14px] px-1.5 font-bold text-gray-700 hover:text-gray-900 antialiased relative"
      style={{ fontFamily: "Heebo, sans-serif" }}
    >
      <span className="hover:underline hover:decoration-2 hover:decoration-black hover:underline-offset-[12px]">
        {label}
      </span>
    </button>
  );
};

export default NavbarItem;

import { useState } from "react";
import { Catalog } from "./Catalog";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };
  return (
    <div
      className={` ${
        darkMode ? `!bg-[#151d20]` : `!bg-[#fbfbfb]`
      } w-screen h-20 flex items-center justify-between`}
    >
      {/* logo */}
      <div className="font-bold text-2xl ml-10 p-2 border-8 border-solid border-amber-500 border-b-0">
        GOAL
      </div>

      {/* Middle */}
      <div className="flex items-center justify-center gap-4">
        <a
          href="#"
          className={`${
            darkMode ? "!text-gray-100" : "!text-gray-800"
          } text-xl font-bold`}
        >
          About
        </a>
        <select
          defaultValue="Catalog"
          className="select select-ghost font-bold select-md text-xl text-gray-500"
        >
          <option disabled={true}>Catalog </option>
          <option>Catalog</option>
        </select>

        <select
          defaultValue="places"
          className="select select-ghost font-bold select-md text-xl text-gray-500"
        >
          <option disabled={true}>Places </option>
          <option>Places</option>
        </select>

        <a href="#" className="!text-gray-500 text-xl font-bold">
          Blog
        </a>

        <a href="#" className="!text-gray-500 text-xl font-bold">
          Content
        </a>
      </div>

      {/* left */}

      <div className="flex items-center justify-center gap-4 mr-10">
        <CiSearch className="w-6 h-6 text-gray-500" />
        <a href="#" className="!text-gray-500 text-xl font-bold">
          Login
        </a>

        <div
          className={` ${
            darkMode
              ? `bg-[#fbfbfb] text-[#151d20]`
              : `bg-[#151d20] text-[#fbfbfb]`
          } flex flex-row items-center justify-between rounded-4xl gp-2 p-2 w-30`}
        >
          <IoMdMenu className="w-8 h-8" />
          <h1 className="!text-lg font-bold">Menu</h1>
        </div>
      </div>

      {/* switchTheme btn */}
      <button
        onClick={toggleDarkMode}
        className={`fixed bottom-4 right-4 p-4 rounded-full shadow-lg ${
          darkMode
            ? "bg-gray-800 hover:bg-gray-700"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white transition-colors z-50`}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default Navbar;

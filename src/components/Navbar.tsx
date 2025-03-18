import { RxHamburgerMenu } from "react-icons/rx";
import { TbBrandGmail } from "react-icons/tb";
import { InputDemo } from "./ui/InputDemo";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navbar: React.FC = () => {
  return (
    <div className="w-screen h-15 bg-gray-100 flex items-center">
      <RxHamburgerMenu className="w-10 h-10 ml-10" />
      <TbBrandGmail className="w-20 h-14 ml-4" />
      <h1 className="text-3xl font-bold">Gmail</h1>
      <InputDemo />
      <FaRegQuestionCircle className="w-10 h-10 ml-15 " />
      <CiSettings className="w-10 h-10 ml-8" />
      <CgProfile className="w-10 h-10 ml-8" />
    </div>
  );
};

export default Navbar;

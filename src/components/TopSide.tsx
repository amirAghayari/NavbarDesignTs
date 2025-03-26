import { useTheme } from "@/context/ThemeContext";
import { DeviconFacebook } from "./icons/facebook";
import { SkillIconsInstagram } from "./icons/instagram";
import { SkillIconsTwitter } from "./icons/twitter";
import { LogosYoutubeIcon } from "./icons/youtube";

export default function TopSide() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between ">
      {/* icons */}
      <div className="flex gap-2 ml-6">
        {/* twitter */}
        <SkillIconsTwitter className="w-4 h-4" />

        {/* facebook */}
        <DeviconFacebook className="w-4 h-4" />

        {/* instagram */}
        <SkillIconsInstagram className="w-4 h-4" />
        {/* youtube */}
        <LogosYoutubeIcon className="w-4 h-4" />
      </div>
      {/* logo */}
      <img
        src="./253df8dd13446b6c9aec55fc0b779844.png"
        alt="Logo"
        className="w-45"
      />

      {/* serach input */}
      <label
        className={`input input-sm rounded-3xl mt-2 mr-6 border-solid border-2  ${
          theme === "light"
            ? "input-primary text-primary y "
            : "input-secondary text-secondary !border-primary"
        } `}
      >
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="I'am looking for ..." />
      </label>
    </div>
  );
}

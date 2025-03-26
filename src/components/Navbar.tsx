import { useTheme } from "@/context/ThemeContext";
import TopSide from "./TopSide";
import NavigationMenu from "./BottomSide";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <div
      className={`w-screen h-23 ${
        theme === "dark" ? "bg-primary" : "bg-secondary"
      }`}
    >
      <TopSide />
      {/* bottom side */}
      <NavigationMenu />
      {/* switch theme btn */}
      <ThemeToggle />
    </div>
  );
}

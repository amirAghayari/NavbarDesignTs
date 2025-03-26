import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "@/context/ThemeContext";

export default function BottomSide() {
  const { theme } = useTheme();

  const menuClasses =
    theme === "light"
      ? "!bg-secondary !text-primary"
      : "!bg-primary !text-secondary";

  const contentClasses =
    theme === "dark"
      ? "!bg-secondary !text-secondary"
      : "!bg-primary !text-primary";

  return (
    <div className="flex items-center justify-center">
      <NavigationMenu className={menuClasses}>
        <NavigationMenuList className="flex gap-1 p-2">
          <NavigationMenuItem>
            <NavigationMenuLink className={`${menuClasses} px-4 py-2`}>
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={menuClasses}>
              Catalog
            </NavigationMenuTrigger>
            <NavigationMenuContent className={contentClasses}>
              <NavigationMenuLink className="p-2 block">
                Products
              </NavigationMenuLink>
              <NavigationMenuLink className="p-2 block">
                Categories
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={menuClasses}>
              Places
            </NavigationMenuTrigger>
            <NavigationMenuContent className={contentClasses}>
              <NavigationMenuLink className="p-2 block">
                Locations
              </NavigationMenuLink>
              <NavigationMenuLink className="p-2 block">
                Branches
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={`${menuClasses} px-4 py-2`}>
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={`${menuClasses} px-4 py-2`}>
              Contacts
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigation";

export default function Navbar({ classnameText = "" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 mb-12 bg-transparent relative">
      <Link to="/" className="flex items-center">
        <img
          src="/logo.svg"
          alt="Company Logo"
          className="w-36 md:w-44 h-auto object-contain"
        />
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-1">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link
                  to={item.link}
                  className={cn(
                    "text-base md:text-lg font-semibold px-4 py-2 rounded-md hover:bg-accent transition-colors",
                    classnameText
                  )}
                >
                  {item.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex gap-2 md:gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t md:hidden z-50">
          <nav className="flex flex-col p-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-sm font-medium py-3 px-4 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

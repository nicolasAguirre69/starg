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
import { ThemeToggle } from "../others/ThemeToggle";
import { cn } from "@/lib/utils";


interface Item {
  name: string;
  link: string;
}

const items: Item[] = [
  { name: "Inicio", link: "/" },
  { name: "Internet", link: "/plans" },
  { name: "Television", link: "/tele" },
  { name: "Sobre Nosotros", link: "/about" },
  { name: "Trabaja con Nosotros", link: "/TrabajaConNosotros" },
  { name: "Test de Velocidad", link: "/TestDeVelocidad" },
  { name: "Ubicanos", link: "/Ubicanos" },
];

export default function Navbar({classnameText = ""}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 mb-12 bg-transparent relative">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/logo.svg"
          alt="Company Logo"
          className="w-36 md:w-44 h-auto object-contain" 
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/180x60/3B82F6/FFFFFF?text=Logo";
          }}
        />

      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-1">
          {items.map((item, index) => (
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

      {/* Botones */}
      <div className="flex gap-2 md:gap-3">
        <Button variant="default" size="sm" className="hidden sm:flex">
          Contact Us
        </Button>
        <ThemeToggle />

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t md:hidden z-50">
          <nav className="flex flex-col p-4">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-sm font-medium py-3 px-4 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" size="sm" className="mt-3 sm:hidden">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

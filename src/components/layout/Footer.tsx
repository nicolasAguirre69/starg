import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { footerColumns } from "@/data/navigation";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09090b] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <img
              src="/logo.svg"
              alt="Star G Logo"
              className="w-full max-w-[220px] h-auto mb-2"
            />
            <p className="text-[#fafafa] text-lg font-semibold">STAR G</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h3 className="text-lg text-[#fafafa] font-semibold mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-[#71717b] hover:text-[#fafafa] transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-[#fafafa] mr-2 text-sm md:text-base">
              © {new Date().getFullYear()}. Todos los derechos reservados.
            </span>
          </div>
          <div className="text-[#fafafa] text-sm md:text-base">
            Desarrollado por:{" "}
            <a
              href="https://webmastercolombia.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              webmastercolombia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

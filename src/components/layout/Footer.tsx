import React from "react";
import { Separator } from "@/components/ui/separator";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  // Arreglo para la columna Company
  const companyLinks: FooterLink[] = [
    { name: "Blog", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  // Arreglo para la columna Legal
  const legalLinks: FooterLink[] = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const footerColumns: FooterColumn[] = [
    { title: "Company", links: companyLinks },
    { title: "Legal", links: legalLinks },
  ];

  return (
    <footer className=" bg-[#09090b] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-[#fafafa] mb-2">
              Nombre Empresa
            </h2>
            <p className="text-[#71717b]">eslogan</p>
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
                      <a
                        href={link.href}
                        className="text-[#71717b] hover:text-[#fafafa] transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-2 group">
          <div className="relative w-full flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <img
              src={`/logo.svg`}
              alt="logo"
              className="w-full object-contain grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
        <Separator />
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-[#fafafa] mr-2">
              © {new Date().getFullYear()}. Todos los derechos reservados. WEB
              MASTER
            </span>
          </div>
          <div className="text-[#fafafa]">@Adprotv.co</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

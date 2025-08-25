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
  const companyLinks: FooterLink[] = [
    { name: "Internet", href: "plans" },
    { name: "Television", href: "Tele" },
    { name: "Sobre Nosotros", href: "about" },
    { name: "Trabaja Con Nosotros", href: "TrabajaConNosotros" },
    { name: "Test de velocidad", href: "TestVelocidad" },
    { name: "Ubicanos", href: "Ubicanos" },
  ];

  const legalLinks: FooterLink[] = [
    { name: "Tamite PQR", href: "#" },
    { name: "Manual de usuario", href: "#" },
    { name: "Dignidad infantil", href: "#" },
    { name: "politica de privacidad", href: "#" },
    { name: "Terminos y condiciones", href: "#" },
    { name: "Seguridad", href: "#" },
    { name: "Regulacion TIC", href: "#" },
  ];

  const footerColumns: FooterColumn[] = [
    { title: "Nosotros", links: companyLinks },
    { title: "Legal", links: legalLinks },
  ];

  return (
    <footer className=" bg-[#09090b] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* LOGO */}
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <img
              src="logo.svg"
              alt="Star G Logo"
              className="w-full max-w-[220px] h-auto mb-2"
            />
            <p className="text-[#fafafa] text-lg font-semibold">STAR G</p>
          </div>

          {/* ENLACES */}
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

        <Separator />

        {/* COPYRIGHT */}
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

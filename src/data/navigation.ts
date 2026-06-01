import type { NavItem, FooterColumn } from "@/types";

export const navItems: NavItem[] = [
  { name: "Inicio", link: "/" },
  { name: "Internet", link: "/plans" },
  { name: "Television", link: "/tele" },
  { name: "Sobre Nosotros", link: "/about" },
  { name: "Trabaja con Nosotros", link: "/TrabajaConNosotros" },
  { name: "Test de Velocidad", link: "/TestVelocidad" },
  { name: "Ubicanos", link: "/Ubicanos" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Nosotros",
    links: [
      { name: "Internet", href: "/plans" },
      { name: "Television", href: "/tele" },
      { name: "Sobre Nosotros", href: "/about" },
      { name: "Trabaja Con Nosotros", href: "/TrabajaConNosotros" },
      { name: "Test de velocidad", href: "/TestVelocidad" },
      { name: "Ubicanos", href: "/Ubicanos" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Tramite PQR", href: "/TramitePQR" },
      { name: "Manual de usuario", href: "/ManualDeUsuario" },
      { name: "Dignidad infantil", href: "/DignidadInfantil" },
      { name: "Politica de privacidad", href: "/PoliticaDePrivacidad" },
      { name: "Terminos y condiciones", href: "/TerminosYCondiciones" },
      { name: "Seguridad", href: "/Seguridad" },
      { name: "Regulacion TIC", href: "/RegulacionTic" },
    ],
  },
];

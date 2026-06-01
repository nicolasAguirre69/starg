import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Footer from "@/components/layout/Footer";
import About from "@/pages/About";
import Tele from "@/pages/Tele";
import Contact from "@/pages/Contact";
import Plans from "@/pages/Plans";
import TrabajaConNosotros from "@/pages/TrabajaConNosotros";
import TestVelocidad from "@/pages/TestVelocidad";
import Ubicanos from "@/pages/Ubicanos";
import NotFound from "@/pages/NotFound";
import Seguridad from "@/pages/Seguridad";
import TramitePQR from "@/pages/TramitePQR";
import ManualDeUsuario from "@/pages/ManualDeUsuario";
import DignidadInfantil from "@/pages/DignidadInfantil";
import TerminosYCondiciones from "@/pages/TerminosYCondiciones";
import PoliticaDePrivacidad from "@/pages/PoliticaDePrivacidad";
import RegulacionTic from "@/pages/RegulacionTic";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import type { RouteConfig } from "@/types";

const routes: RouteConfig[] = [
  { path: "/", component: Home },
  { path: "/plans", component: Plans },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/Ubicanos", component: Ubicanos },
  { path: "/TestVelocidad", component: TestVelocidad },
  { path: "/TrabajaConNosotros", component: TrabajaConNosotros },
  { path: "/tele", component: Tele },
  { path: "/TramitePQR", component: TramitePQR },
  { path: "/ManualDeUsuario", component: ManualDeUsuario },
  { path: "/DignidadInfantil", component: DignidadInfantil },
  { path: "/PoliticaDePrivacidad", component: PoliticaDePrivacidad },
  { path: "/TerminosYCondiciones", component: TerminosYCondiciones },
  { path: "/RegulacionTic", component: RegulacionTic },
  { path: "/Seguridad", component: Seguridad },
  { path: "*", component: NotFound },
];

const knownPaths = new Set(routes.map((r) => r.path));

const App: React.FC = () => {
  const location = useLocation();
  const isNotFound = !knownPaths.has(location.pathname) && location.pathname !== "*";

  return (
    <div className="app">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>

      {!isNotFound && (
        <>
          <Footer />
          <WhatsAppButton position="bottom-right" size={60} />
        </>
      )}
    </div>
  );
};

export default App;

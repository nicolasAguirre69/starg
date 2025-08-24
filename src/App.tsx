import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Footer from "@/components/layout/Footer";
import About from "@/pages/About";
import Tele from "@/pages/Tele";
import Contact from "@/pages/Contact";
import Plans from "@/pages/Plans";
import NotFound from "@/pages/NotFound";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

// Definir la interfaz para las rutas
interface RouteConfig {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

// Arreglo de rutas
const routes: RouteConfig[] = [
  { path: "/", component: Home, exact: true },
  { path: "/Planes", component: Plans },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/Tele", component: Tele },
  { path: "*", component: NotFound },
];

// Componente principal de la aplicación con rutas
const App: React.FC = () => {
  const location = useLocation();

  // Verificar si estamos en la página NotFound
  const isNotFound =
    location.pathname !== "/" &&
    !routes.some((route) => route.path === location.pathname);

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
          <WhatsAppButton
            phoneNumber="1234567890"
            message="Hola, me gustaría obtener más información sobre sus productos"
            position="bottom-right"
            size={60}
          />
        </>
      )}
    </div>
  );
};

export default App;

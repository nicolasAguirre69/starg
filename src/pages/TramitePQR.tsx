import Navbar from "@/components/layout/Navbar";
import {  FileText, User, Phone, Info } from "lucide-react";

export default function TramitePQR() {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar  classnameText={"text-black"}/>
      </div>

      {/* Contenido principal */}
      <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700">
            Trámite PQR
          </h1>
          <h2 className="text-lg text-gray-600 mt-3">
            Cómo presentar una <span className="font-semibold">Petición, Queja o Reclamo</span> de forma correcta
          </h2>
        </div>

        {/* Pasos para PQR */}
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-200">
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
            <FileText className="w-6 h-6" /> Pasos para realizar un PQR
          </h3>
          <p className="text-gray-700">
            Envía un correo electrónico a{" "}
            <span className="font-semibold text-blue-600">pqr@adprotv.com</span>{" "}
            con la siguiente información:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="flex items-center gap-2"><User className="w-5 h-5 text-blue-500"/> Nombre completo</li>
            <li>Tipo de identificación (Cédula, Pasaporte, etc.)</li>
            <li>Número de identificación</li>
            <li className="flex items-center gap-2"><Phone className="w-5 h-5 text-green-500"/> Teléfono de contacto</li>
            <li>Tipo de solicitud (Petición, Queja, Reclamo o Recurso)</li>
            <li>Descripción detallada de la solicitud</li>
            <li>Evidencias (opcional: fotos, documentos o capturas de pantalla)</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
            <Info className="inline-block w-5 h-5 mr-2" />
            Asegúrate de que la información sea clara y completa para agilizar la respuesta a tu PQR.
          </div>
        </div>

        {/* Ejemplo de correo */}
        <div className="max-w-3xl mx-auto mt-10 bg-gray-900 text-gray-100 shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">
            📧 Ejemplo de correo PQR
          </h3>
          <pre className="whitespace-pre-wrap text-sm leading-relaxed">
            Para: <span className="text-blue-400">pqr@adprotv.com</span>{"\n"}
            Asunto: PQR – Queja por fallas en el servicio{"\n\n"}
            <b>Nombre completo:</b> Juan Pérez López{"\n"}
            <b>Tipo de identificación:</b> Cédula de ciudadanía{"\n"}
            <b>Número de identificación:</b> 1.234.567.890{"\n"}
            <b>Teléfono de contacto:</b> 300 123 4567{"\n"}
            <b>Tipo de solicitud:</b> Queja{"\n\n"}
            <b>Descripción:</b> Desde el pasado 10 de agosto, mi servicio de internet ha presentado interrupciones constantes, especialmente en horas de la noche. Esto ha afectado mi trabajo y mis clases virtuales.{"\n\n"}
            <b>Evidencias:</b> Adjunto capturas de pantalla del medidor de velocidad y fotografías del router con las luces apagadas.
          </pre>
        </div>
      </div>
    </>
  );
}

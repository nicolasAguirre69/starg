    export default function UserProtection() {
    return (
        <section className="flex flex-col items-center justify-center gap-10 px-6 md:px-12 lg:px-20 py-10 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Título y descripción */}
        <div className="max-w-4xl text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6 drop-shadow-none">
                PROTECCIÓN Y SEGURIDAD EN CADA PASO
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed">
                En <span className="font-bold text-yellow-400">Star G</span>, tu seguridad
                es nuestra prioridad. Implementamos las mejores prácticas y
                tecnologías para proteger tu información y garantizar una experiencia
                en línea segura y confiable.
            </p>
        </div>

        {/* Grid de secciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {/* Derechos */}
            <div className="bg-white rounded-2xl shadow-none hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
                src="img/DeberesYDerechos.jpg"
                alt="Derechos del usuario"
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Derechos del usuario
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    Conoce y ejerce tus derechos como usuario, respaldados por una
                    política clara y transparente.
                </p>
                <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-none hover:bg-blue-700 transition">
                    Más información
                </button>
            </div>
            </div>

            {/* Control parental */}
            <div className="bg-white rounded-2xl shadow-none hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
                src="img/familia.jpg"
                alt="Control parental"
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Control Parental
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    Herramientas que te permiten gestionar y supervisar el acceso a
                    contenido para proteger a tu familia.
                </p>
                <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-none hover:bg-blue-700 transition">
                    Más información
                </button>
            </div>
            </div>

            {/* Internet sano */}
            <div className="bg-white rounded-2xl shadow-none hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
                src="img/familia1.jpg"
                alt="Internet sano"
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Internet Sano
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    Promovemos un entorno digital seguro, responsable y libre de
                    riesgos para todos los usuarios.
                </p>
                <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-none hover:bg-blue-700 transition">
                    Más información
                </button>
            </div>
            </div>
        </div>
        </section>
    );
    }

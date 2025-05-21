// src/app/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col dark:bg-black dark:text-white">
      {/* Navbar */}
      <nav className="w-full px-8 py-6 flex justify-between items-center shadow-md fixed">
        <h1 className="text-2xl font-bold text-indigo-600">Synitia</h1>
        <div className="space-x-6">
          <a
            href="#features"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Funciones
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Acerca
          </a>
          <Button className="bg-indigo-600 text-white">Empezar</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto mt-16">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-6xl font-extrabold text-indigo-700 animate-fadeIn">
            Organiza tu día con IA
          </h2>
          <p className="text-lg text-gray-700">
            Synitia supervisa tu rutina diaria y te ofrece sugerencias
            inteligentes para maximizar tu productividad.
          </p>
          <Button className="bg-indigo-600 text-white px-10 py-3 rounded-2xl hover:scale-105 transform transition">
            Comienza ahora
          </Button>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/dashboard-preview.png"
              alt="Vista previa tablero Synitia"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-indigo-50 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {[
            {
              title: "Visualiza tu rutina",
              desc: "Ahora puedes optimizar tu productividad con IA.",
            },
            {
              title: "One for All",
              desc: "Todo tu flujo de trabajo en una sola herramienta.",
            },
            {
              title: "Metas basadas en misiones",
              desc: "Cumplir objetivos personales nunca ha sido tan divertido.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                {f.title}
              </h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-8 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-900">
          ¿Qué hace Synitia?
        </h3>
        <p className="text-gray-700">
          Nuestra IA analiza tus patrones de actividad, identifica áreas de
          mejora y te guía con recomendaciones prácticas para optimizar cada
          día.
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-indigo-600 text-white text-center px-8">
        <h4 className="text-3xl font-bold mb-4">
          Listo para impulsar tu productividad?
        </h4>
        <p className="mb-6">
          Únete a Synitia y transforma tu rutina con inteligencia artificial.
        </p>
        <Button className="bg-white text-indigo-600 px-12 py-3 rounded-full font-semibold hover:scale-105 transform transition">
          Prueba Synitia Gratis
        </Button>

        {/* Footer */}
        <footer className="py-6 text-center text-gray-50">
          &copy; {new Date().getFullYear()} Synitia. Todos los derechos
          reservados.
        </footer>
      </section>
    </main>
  );
}

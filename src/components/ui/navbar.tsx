"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="lg:w-full md:w-full w-full px-8 py-6 flex justify-between items-center shadow-md fixed bg-white z-50">
      <Link href="/">
        <h1 className="text-2xl font-bold text-indigo-600">Synitia</h1>
      </Link>
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
      </div>
    </nav>
  );
}

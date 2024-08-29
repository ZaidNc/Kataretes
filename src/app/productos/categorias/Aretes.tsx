import React from "react";
import Image from "next/image";

// Datos de los aretes
const aretes = [
  {
    id: 1,
    nombre: "Brillantes y Artesanales",
    imagen: "/1.jpg",
    descripcion:
      "Añade un toque de alegría con estos vibrantes aretes hechos a mano."
  },
  {
    id: 2,
    nombre: "Elegancia en Cada Detalle",
    imagen: "/2.jpg",
    descripcion:
      "Perfectos para ocasiones especiales, estos aretes irradian sofisticación."
  },
  {
    id: 3,
    nombre: "Estilo Contemporáneo",
    imagen: "/3.jpg",
    descripcion: "Diseño único y moderno para quienes buscan destacar."
  },
  // Agrega más aretes aquí
];

export default function AretesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Aretes Artesanales</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {aretes.map((arete) => (
          <div key={arete.id} className="bg-white rounded-lg shadow-md p-4">
            <Image
              src={arete.imagen}
              alt={arete.nombre}
              width={300}
              height={300}
              className="rounded-md"
            />
            <h2 className="mt-4 text-xl font-semibold">{arete.nombre}</h2>
            <p className="mt-2 text-gray-600">{arete.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import * as React from "react";
import { CheckIcon, RocketIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Kataretes Logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold">Kataretes</span>
          </div>
          <nav className="hidden space-x-4 md:flex">
            <a href="#inicio" className="text-sm font-medium hover:underline">
              Inicio
            </a>
            <a
              href="#productos"
              className="text-sm font-medium hover:underline"
            >
              Productos
            </a>
            <a href="#tienda" className="text-sm font-medium hover:underline">
              Nuestra Tienda
            </a>
          </nav>
          <a
            href="https://wa.me/c/573115433673"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-10 w-auto rounded-md bg-rose-300 text-gray-700 shadow-md transform transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-4 py-2"
          >
            <RocketIcon className="h-5 w-5" />
            Contáctanos
          </a>
        </div>
      </header>
      <main>
        <section id="inicio" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
              <div className="col-span-2 md:col-span-3">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Descubre Nuestra Colección Exclusiva de Aretes Artesanales
                </h1>
                <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
                  Explora nuestra selección de aretes hechos a mano con
                  mostacilla, combinando estilo y autenticidad. Cada pieza es
                  cuidadosamente elaborada, asegurando un diseño único y de alta
                  calidad. ¡Añade un toque de elegancia y color a tu look diario
                  con nuestros exclusivos aretes!
                </p>
              </div>
            </div>
            <div
              id="productos"
              className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8"
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-muted shadow-sm transition-transform transform hover:scale-105 hover:shadow-md flex flex-col overflow-hidden"
                >
                  <img
                    src="/OIP.jpg"
                    alt={`Product ${index + 1}`}
                    width={300}
                    height={300}
                    className="object-cover h-48 md:h-64"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-center">
                      Producto {index + 1}
                    </h3>
                  </div>
                </div>
              ))}
              <div className="col-span-2 md:col-span-5 flex justify-center mt-8">
                <a
                  href="https://wa.me/c/573115433673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-full rounded-md border-2 border-green-300 text-green-700 shadow-md transform transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-4 py-2"
                >
                  <RocketIcon className="h-5 w-5" />
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="tienda" className="bg-muted py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Acerca de Nuestra Tienda
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
                  Kataretes se dedica a ofrecer una colección de aretes de
                  mostacilla artesanales de la más alta calidad. Cada par de
                  aretes está meticulosamente elaborado, asegurando piezas
                  únicas que reflejan nuestra pasión por el detalle y el diseño.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  ¿Por qué Elegirnos?
                </h2>
                <ul className="mt-4 space-y-2 text-muted-foreground md:text-lg">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-5 w-5" />
                    Productos Cuidadosamente Seleccionados
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-5 w-5" />
                    Diseños Personalizados
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-5 w-5" />
                    Envío Rápido y Fiable
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-5 w-5" />
                    Opciones de Pago Seguras y Fáciles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-sm text-muted-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
          <p>&copy; 2024 Kataretes. Todos los derechos reservados.</p>
          <nav className="flex space-x-4">
            <a className="hover:underline">Política de Privacidad</a>
            <a className="hover:underline">Términos de Servicio</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

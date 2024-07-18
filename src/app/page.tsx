import * as React from "react";
import { CheckIcon, RocketIcon, StarIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <StarIcon className="h-6 w-6" />
            <span className="font-bold">Kataretes</span>
          </div>
          <nav className="hidden space-x-4 md:flex">
            <a className="text-sm font-medium hover:underline">Inicio</a>
            <a className="text-sm font-medium hover:underline">Productos</a>
            <a className="text-sm font-medium hover:underline">
              Nuestra Tienda
            </a>
          </nav>
          <a
            href="https://wa.me/c/573115433673"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-10 w-auto rounded-md bg-rose-300 text-gray-700 shadow-md transform transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-4 py-2"
          >
            <RocketIcon className="h-5 w-5 mr-2" />
            Contáctanos
          </a>
        </div>
      </header>
      <main>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
              <div className="col-span-2 md:col-span-3">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Descubre Nuestra Colección Exclusiva de Aretes Artesanales
                </h1>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Explora nuestra selección de aretes hechos a mano con
                  mostacilla, combinando estilo y autenticidad. Cada pieza es
                  cuidadosamente elaborada, asegurando un diseño único y de alta
                  calidad. ¡Añade un toque de elegancia y color a tu look diario
                  con nuestros exclusivos aretes!
                </p>
              </div>
              <div className="col-span-2 md:col-span-2 flex justify-end">
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
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-muted p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md"
                >
                  <img
                    src="/OIP.jpg"
                    alt={`Product ${index + 1}`}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">Product {index + 1}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Acerca de Nuestra Tienda
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Kataretes se dedica a ofrecer una colección de aretes de
                  mostacilla artesanales de la más alta calidad. Cada par de
                  aretes está meticulosamente, asegurando piezas únicas que
                  reflejan nuestra pasión por el detalle y el diseño.
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
          <p>&copy; 2024 Kataretes. All rights reserved.</p>
          <nav className="flex space-x-4">
            <a className="hover:underline">Privacy Policy</a>
            <a className="hover:underline">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

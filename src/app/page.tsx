import * as React from "react";
import { CheckIcon, RocketIcon } from "@radix-ui/react-icons";
import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";

const productos = [
  {
    id: 1,
    nombre: "Brillantes y Artesanales",
    imagen: "/1.jpg",
    descripcion:
      "Añade un toque de alegría con estos vibrantes aretes hechos a mano.",
  },
  {
    id: 2,
    nombre: "Elegancia en Cada Detalle",
    imagen: "/2.jpg",
    descripcion:
      "Perfectos para ocasiones especiales, estos aretes irradian sofisticación.",
  },
  {
    id: 3,
    nombre: "Estilo Contemporáneo",
    imagen: "/3.jpg",
    descripcion: "Diseño único y moderno para quienes buscan destacar.",
  },
  {
    id: 4,
    nombre: "Colores Vivos y Artesanía",
    imagen: "/4.jpg",
    descripcion:
      "Estos aretes llenos de vida son el complemento ideal para tu look casual.",
  },
  {
    id: 5,
    nombre: "Distinción y Elegancia",
    imagen: "/5.jpg",
    descripcion:
      "Aretes elegantes que aportan un toque de glamour a tu atuendo.",
  },
  {
    id: 6,
    nombre: "Diseño Vanguardista",
    imagen: "/6.jpg",
    descripcion: "Innovadores aretes modernos, perfectos para un estilo único.",
  },
  {
    id: 7,
    nombre: "Alegría y Color",
    imagen: "/7.jpg",
    descripcion: "Aretes artesanales coloridos que realzan cualquier look.",
  },
  {
    id: 8,
    nombre: "Collar de Perro Encantador",
    imagen: "/8.jpg",
    descripcion: "Collar artesanal con un adorable diseño de perro.",
  },
  {
    id: 9,
    nombre: "Goku en Estilo",
    imagen: "/9.jpg",
    descripcion: "Manilla con un diseño único de Goku para los fanáticos.",
  },
  {
    id: 10,
    nombre: "Collar de Gato",
    imagen: "/10.jpg",
    descripcion: "Collar artesanal con un encantador diseño de gato.",
  },
];

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <img
              src="/kataaretesm.jpg"
              alt="Kataretes Logo"
              className="h-8 w-auto"
            />
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
            href="https://www.instagram.com/kataretes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-10 w-auto rounded-md bg-rose-300 text-gray-700 shadow-md transform transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-4 py-2"
          >
            <IconBrandInstagram className="h-5 w-5" />
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
              {productos.map((producto) => (
                <div
                  key={producto.id}
                  className="rounded-lg bg-muted shadow-sm transition-transform transform hover:scale-105 hover:shadow-md flex flex-col overflow-hidden"
                >
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={300}
                    height={300}
                    className="object-cover h-48 md:h-64"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-center">
                      {producto.nombre}
                    </h3>
                    <p className="mt-2 text-center">{producto.descripcion}</p>
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
                  <IconBrandWhatsapp className="h-5 w-5" />
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
        <section id="testimonios" className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center">
              Lo que dicen nuestros clientes
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p>
                  "Los aretes son hermosos y de excelente calidad. Me encantan
                  los colores y el diseño único!"
                </p>
                <p className="mt-4 text-right">- Ana G.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p>
                  "Compré un par de aretes para regalar y fueron un éxito.
                  Definitivamente volveré a comprar."
                </p>
                <p className="mt-4 text-right">- Luis R.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p>
                  "Me encantan mis nuevos aretes. Son perfectos para cualquier
                  ocasión."
                </p>
                <p className="mt-4 text-right">- María P.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center">
              Preguntas Frecuentes
            </h2>
            <div className="mt-8 space-y-4">
              <details className="bg-white p-4 rounded-lg shadow-lg">
                <summary className="font-semibold">
                  ¿Cómo puedo hacer un pedido?
                </summary>
                <p className="mt-2">
                  Puedes hacer un pedido a través de nuestro Instagram o
                  contactándonos directamente a través de WhatsApp.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow-lg">
                <summary className="font-semibold">
                  ¿Cuáles son las opciones de pago?
                </summary>
                <p className="mt-2">
                  Aceptamos pagos a través de tarjeta de crédito, Nequi y
                  transferencias bancarias.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow-lg">
                <summary className="font-semibold">
                  ¿Ofrecen envíos internacionales?
                </summary>
                <p className="mt-2">No, hacemos envíos a Colombia.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 bg-muted text-center">
        <div className="container mx-auto">
          <p className="text-lg font-semibold">
            Síguenos en nuestras redes sociales
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/kataretes/"
              className="text-gray-700 hover:text-pink-600"
            >
              <IconBrandInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/c/573115433673"
              className="text-gray-700 hover:text-green-600"
            >
              <IconBrandWhatsapp className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

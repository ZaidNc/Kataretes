import Image from "next/image";

const productos = [
  { id: 1, nombre: "Producto 1", imagen: "/producto1.jpg", descripcion: "Descripción del Producto 1" },
  { id: 2, nombre: "Producto 2", imagen: "/producto2.jpg", descripcion: "Descripción del Producto 2" },
  // Añade más productos según corresponda
];

export default function CategoriaPage() {
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/kataaretesm.jpg"
              alt="Kataretes Logo"
              width={100}
              height={50}
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold">Kataretes</span>
          </a>
          <nav className="hidden space-x-4 md:flex">
            <a href="/" className="text-sm font-medium hover:underline">Inicio</a>
            <a href="/#productos" className="text-sm font-medium hover:underline">Productos</a>
            <a href="/#tienda" className="text-sm font-medium hover:underline">Nuestra Tienda</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-12">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-center mb-8">Nombre de la Categoría</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {productos.map((producto) => (
            <div key={producto.id} className="p-4">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                width={300}
                height={300}
                className="object-cover h-48 md:h-64"
              />
              <h3 className="text-lg font-medium text-center">
                {producto.nombre}
              </h3>
              <p className="text-center">{producto.descripcion}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-background border-t py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2023 Kataretes. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";
export const metadata = {
  title: "Tienda Oficial",
  description: "La pagina de mi tienda",
};

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>
        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/productos">Productos</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

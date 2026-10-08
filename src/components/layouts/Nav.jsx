import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        backgroundColor: "#1f1f2e",
        padding: "12px 20px",
        borderRadius: "8px",
      }}
    >
      <Link
        to="/"
        style={{ color: "#00f2fe", textDecoration: "none", fontWeight: "bold" }}
      >
        Inicio
      </Link>
      <Link to="/productos" style={{ color: "#fff", textDecoration: "none" }}>
        Productos
      </Link>
      <Link to="/carrito" style={{ color: "#fff", textDecoration: "none" }}>
        🛒 Carrito
      </Link>
    </nav>
  );
}

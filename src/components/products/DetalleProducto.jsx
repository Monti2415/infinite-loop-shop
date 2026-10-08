import { useCart } from "../../context/CartContext";

export default function DetalleProducto({ producto }) {
  const { agregarAlCarrito } = useCart();

  if (!producto) {
    return (
      <p style={{ color: "#a0a0b0", textAlign: "center" }}>
        Producto no encontrado.
      </p>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        backgroundColor: "#181824",
        padding: "30px",
        borderRadius: "12px",
        border: "1px solid #2a2a3e",
        marginTop: "20px",
      }}
    >
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{
          width: "100%",
          maxWidth: "350px",
          borderRadius: "8px",
          objectFit: "contain",
          backgroundColor: "#0f0f18",
        }}
      />
      <div style={{ flex: 1, minWidth: "280px" }}>
        <span
          style={{
            fontSize: "0.85rem",
            textTransform: "uppercase",
            color: "#00f2fe",
            fontWeight: "bold",
          }}
        >
          {producto.categoria}
        </span>
        <h2 style={{ fontSize: "2rem", margin: "10px 0", color: "#fff" }}>
          {producto.nombre}
        </h2>
        <p style={{ color: "#a0a0b0", fontSize: "1.1rem", lineHeight: "1.6" }}>
          {producto.descripcion}
        </p>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#4facfe",
            margin: "20px 0",
          }}
        >
          ${producto.precio.toLocaleString()}
        </p>
        <button
          onClick={() => {
            agregarAlCarrito(producto);
            alert("¡Producto agregado al carrito!");
          }}
          style={{
            backgroundColor: "#00f2fe",
            color: "#0f0f18",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🛒 Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

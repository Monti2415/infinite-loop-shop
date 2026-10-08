import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { carrito, vaciarCarrito, eliminarDelCarrito } = useCart();

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0,
  );

  if (!carrito || carrito.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
          backgroundColor: "#181824",
          borderRadius: "12px",
          border: "1px solid #2a2a3e",
        }}
      >
        <h2>🛒 Tu Carrito de Compras</h2>
        <p style={{ color: "#a0a0b0", margin: "20px 0" }}>
          Tu carrito en Infinite Loop Shop está vacío por ahora.
        </p>
        <Link
          to="/productos"
          style={{
            backgroundColor: "#00f2fe",
            color: "#0f0f18",
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Explorar Productos
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#181824",
        borderRadius: "12px",
        border: "1px solid #2a2a3e",
      }}
    >
      <h2>🛒 Tu Carrito</h2>
      <div style={{ marginTop: "20px" }}>
        {carrito.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #2a2a3e",
              padding: "15px 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                src={item.imagen}
                alt={item.nombre}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                  borderRadius: "6px",
                }}
              />
              <div>
                <h4 style={{ margin: 0, color: "#fff" }}>{item.nombre}</h4>
                <p
                  style={{
                    margin: "5px 0 0 0",
                    color: "#a0a0b0",
                    fontSize: "0.9rem",
                  }}
                >
                  Cantidad: {item.cantidad} x ${item.precio.toLocaleString()}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <p style={{ fontWeight: "bold", color: "#00f2fe", margin: 0 }}>
                ${(item.precio * item.cantidad).toLocaleString()}
              </p>
              <button
                onClick={() => eliminarDelCarrito(item.id)}
                style={{
                  backgroundColor: "transparent",
                  color: "#ff4d4d",
                  border: "1px solid #ff4d4d",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={vaciarCarrito}
          style={{
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Vaciar Carrito
        </button>
        <h3 style={{ margin: 0, color: "#fff" }}>
          Total: ${total.toLocaleString()}
        </h3>
      </div>
    </div>
  );
}

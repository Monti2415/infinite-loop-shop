export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f0f18",
        color: "#fff",
        padding: "25px",
        marginTop: "50px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h3>Infinite Loop Shop S.A.</h3>
        <p>© 2026 Infinite Loop Shop. Todos los derechos reservados.</p>
        <p>📍 Sucursal CABA: Av. Corrientes 1337, CABA, Argentina</p>
        <p>
          🔒 Políticas de Privacidad | Términos y Condiciones | Defensa del
          Consumidor
        </p>
      </div>

      <hr style={{ borderColor: "#4facfe", opacity: 0.3 }} />

      <div style={{ marginTop: "20px" }}>
        <h4>Nuestro Equipo de Desarrollo</h4>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              border: "1px solid #00f2fe",
              padding: "10px 15px",
              borderRadius: "8px",
              backgroundColor: "#181824",
            }}
          >
            <h5 style={{ margin: "0 0 5px 0" }}>Brian Montiveros</h5>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#a0a0b0" }}>
              Lead Developer & Founder
            </p>
          </div>
          <div
            style={{
              border: "1px solid #00f2fe",
              padding: "10px 15px",
              borderRadius: "8px",
              backgroundColor: "#181824",
            }}
          >
            <h5 style={{ margin: "0 0 5px 0" }}>S. M.</h5>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#a0a0b0" }}>
              UI/UX Designer
            </p>
          </div>
          <div
            style={{
              border: "1px solid #00f2fe",
              padding: "10px 15px",
              borderRadius: "8px",
              backgroundColor: "#181824",
            }}
          >
            <h5 style={{ margin: "0 0 5px 0" }}>F. O.</h5>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#a0a0b0" }}>
              Fullstack Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

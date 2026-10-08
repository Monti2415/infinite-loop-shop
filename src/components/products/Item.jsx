import { Link } from 'react-router-dom';

export default function Item({ producto }) {
  return (
    <div style={{
      border: '1px solid #2a2a3e',
      borderRadius: '12px',
      padding: '16px',
      backgroundColor: '#181824',
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
    }}>
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        style={{ width: '100%', height: '220px', objectFit: 'contain', borderRadius: '8px', backgroundColor: '#0f0f18' }} 
      />
      <div style={{ marginTop: '12px' }}>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#00f2fe', fontWeight: 'bold' }}>
          {producto.categoria}
        </span>
        <h3 style={{ fontSize: '1.1rem', margin: '6px 0', color: '#fff' }}>{producto.nombre}</h3>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#4facfe', margin: '8px 0' }}>
          \${producto.precio.toLocaleString()}
        </p>
      </div>
      <Link 
        to={`/producto/${producto.id}`}
        style={{
          display: 'block',
          textAlign: 'center',
          backgroundColor: '#00f2fe',
          color: '#0f0f18',
          padding: '10px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginTop: '10px'
        }}
      >
        Ver Detalle
      </Link>
    </div>
  );
}
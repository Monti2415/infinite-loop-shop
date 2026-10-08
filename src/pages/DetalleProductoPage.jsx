import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DetalleProducto from '../components/products/DetalleProducto';

export default function DetalleProductoPage() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/Datos/productos.json')
      .then(res => res.json())
      .then(data => {
        const encontrado = data.find(p => p.id === parseInt(id));
        setProducto(encontrado);
        setCargando(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div>
      <Link to="/productos" style={{ color: '#00f2fe', textDecoration: 'none' }}>
        ← Volver al catálogo
      </Link>
      {cargando ? (
        <p style={{ color: '#a0a0b0', textAlign: 'center', margin: '40px 0' }}>Cargando detalle...</p>
      ) : (
        <DetalleProducto producto={producto} />
      )}
    </div>
  );
}
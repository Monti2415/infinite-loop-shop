import { useState, useEffect } from 'react';
import ItemList from './Itemlist';

export default function ItemListContainer({ titulo }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/Datos/productos.json')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  return (
    <section style={{ padding: '20px 0' }}>
      <h2 style={{ color: '#00f2fe', borderBottom: '2px solid #2a2a3e', paddingBottom: '10px' }}>
        {titulo || 'Catálogo de Productos'}
      </h2>
      {cargando ? (
        <p style={{ color: '#a0a0b0', textAlign: 'center', margin: '40px 0' }}>Cargando catálogo de Infinite Loop...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </section>
  );
}
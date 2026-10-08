import Nav from './Nav';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#181824', color: '#00f2fe', padding: '20px 30px', borderBottom: '2px solid #4facfe' }}>
      <h1 style={{ margin: 0, fontSize: '1.8rem', letterSpacing: '1px' }}>🔄 Infinite Loop Shop</h1>
      <p style={{ margin: '5px 0 15px 0', color: '#a0a0b0', fontSize: '0.9rem' }}>
        Mangas, Gaming, Cómics & Coleccionables en un bucle sin fin
      </p>
      <Nav />
    </header>
  );
}
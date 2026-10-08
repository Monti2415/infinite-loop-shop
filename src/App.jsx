import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layouts/Layout';
import Home from './pages/Home';
import ProductosPage from './pages/ProductosPage';
import DetalleProductoPage from './pages/DetalleProductoPage';
import Carrito from './pages/Carrito';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/producto/:id" element={<DetalleProductoPage />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}
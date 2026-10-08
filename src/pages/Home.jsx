import Bienvenida from '../components/Bienvenida';
import ItemListContainer from '../components/products/ItemListContainer';

export default function Home() {
  return (
    <div>
      <Bienvenida />
      <ItemListContainer titulo="🔥 Productos Destacados" />
    </div>
  );
}
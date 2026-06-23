// src/pages/Home/Home.tsx
import { useLoaderData } from 'react-router';
import type { homeLoader } from './LoaderHome';
import ProductGrid from '../ProductGrid';
 export default function Home() {
  // Extraemos los datos que trajo el loader automáticamente
  const productos = useLoaderData() as Awaited<ReturnType<typeof homeLoader>>;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontFamily: 'sans-serif', color: '#111' }}>Catálogo de Productos</h1>
      
      {/* 🧩 Pasamos el JSON directo a nuestro nuevo componente */}
      <ProductGrid productos={productos} />
    </div>
  );
}
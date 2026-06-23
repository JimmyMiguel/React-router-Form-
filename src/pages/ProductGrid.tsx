// src/pages/Home/ProductGrid.tsx
import { Link } from "react-router"; // 👈 Usamos el import unificado de v7

// 1. Definimos las interfaces para que TypeScript esté feliz
interface Category {
  id: number;
  name: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}

interface ProductGridProps {
  productos: Product[];
}

export default function ProductGrid({ productos }: ProductGridProps) {
  // Caso de uso: No hay resultados en la búsqueda
  if (productos.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#666', fontFamily: 'sans-serif' }}>
        <h2>No se encontraron productos para tu búsqueda 🔍</h2>
        <p>Intenta con palabras más generales como "shoes", "clothes" o "electronics".</p>
      </div>
    );
  }

  // Caso de uso: Renderizar las tarjetas de productos clickeables
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '25px',
      fontFamily: 'sans-serif'
    }}>
      {productos.map(prod => (
        <Link 
          key={prod.id} 
          to={`/item/${prod.id}`} 
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
        >
          <div style={{
            border: '1px solid #eee',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            width: '100%'
          }}>
            <img 
              src={prod.images[0]?.replace(/[[]"]/g, "")}
              alt={prod.title} 
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <span style={{ fontSize: '11px', color: '#888', marginTop: '12px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              {prod.category.name}
            </span>
            <h3 style={{ fontSize: '16px', margin: '6px 0', color: '#333', fontWeight: '600' }}>{prod.title}</h3>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#0070f3', margin: '4px 0' }}>${prod.price}</p>
            <p style={{ fontSize: '13px', color: '#666', marginTop: '8px', lineHeight: '1.4' }}>{prod.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
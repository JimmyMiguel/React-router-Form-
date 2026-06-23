// src/pages/Product.tsx
import { useLoaderData, Link } from 'react-router';
import type { productLoader } from './LoaderProduct'; // 👈 Importamos el tipo del loader

export default function Product() {
  // TypeScript infiere automáticamente la estructura exacta del JSON devuelto por el loader
  const producto = useLoaderData() as Awaited<ReturnType<typeof productLoader>>;

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* ... El resto de tu código HTML y estilos se quedan exactamente igual ... */}
      <Link to="/">← Volver al catálogo</Link>
      <h1>{producto.title}</h1>
      <p>${producto.price}</p>
<img 
  src={producto.images[0]?.replace(/[[]"]/g, "")} 
  alt={producto.title} 
/>    </div>
  );
}
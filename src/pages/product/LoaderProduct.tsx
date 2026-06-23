// src/pages/LoaderProduct.ts
import type { LoaderFunctionArgs } from 'react-router';

export async function productLoader({ params }: LoaderFunctionArgs) {
  // params.id contiene el string/número que viene de la URL (ej. /item/4)
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`);
  
  if (!response.ok) {
    // Si la API responde con un error (ej. el id no existe), lanzamos un error 404
    throw new Response("Producto no encontrado", { status: 404 });
  }
  
  return await response.json();
}
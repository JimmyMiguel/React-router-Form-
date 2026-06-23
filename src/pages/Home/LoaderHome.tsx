// 1. En React Router v7 importamos directamente de 'react-router'
import type { LoaderFunctionArgs } from 'react-router';

export async function homeLoader({ request }: LoaderFunctionArgs) {
  // 2. Convertimos la URL de la petición en un objeto manejable de JavaScript
  const url = new URL(request.url);

  // 3. Extraemos el parámetro "title" que envió tu formulario
  const urlTitle = url.searchParams.get("title"); 

  if (urlTitle) {
    // Si el usuario buscó algo (ej. ?title=Camisa), filtramos en la API
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${urlTitle}`);
    return await response.json();
  } else {
    // Si NO buscó nada (entró a la web por primera vez), ¡traemos todo el catálogo!
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
    return await response.json();
  }
}
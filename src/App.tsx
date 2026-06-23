// src/App.tsx
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router';  

// Importamos las pages
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import { homeLoader } from './pages/Home/LoaderHome';
import { productLoader } from './pages/product/LoaderProduct';
import Product from './pages/product/Product';



 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
       <Route index  element={<Home />} loader={homeLoader} />
       <Route path="item/:id" element={<Product />} loader={productLoader} />
     </Route>
  )
);

 export default function App() {
  return <RouterProvider router={router} />;
}
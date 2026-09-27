import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Solutions from './pages/Solutions';
import Technology from './pages/Technology';
import Resources from './pages/Resources';
import ResourceDetail from './pages/ResourceDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/**
 * Main Application Routing
 * All primary routes are rendered synchronously with zero artificial loading delays.
 * Content is immediately interactive upon page load.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetail />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="technology" element={<Technology />} />
        <Route path="resources" element={<Resources />} />
        <Route path="resources/:slug" element={<ResourceDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

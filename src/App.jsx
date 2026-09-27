import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Technology = lazy(() => import('./pages/Technology'));
const Resources = lazy(() => import('./pages/Resources'));
const ResourceDetail = lazy(() => import('./pages/ResourceDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-violet-600 border-t-transparent" />
        <span className="text-xs font-bold uppercase tracking-wider text-ink/60">
          Loading diagnostic module...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<PageLoader />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="products/:slug"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProductDetail />
            </Suspense>
          }
        />
        <Route
          path="solutions"
          element={
            <Suspense fallback={<PageLoader />}>
              <Solutions />
            </Suspense>
          }
        />
        <Route
          path="technology"
          element={
            <Suspense fallback={<PageLoader />}>
              <Technology />
            </Suspense>
          }
        />
        <Route
          path="resources"
          element={
            <Suspense fallback={<PageLoader />}>
              <Resources />
            </Suspense>
          }
        />
        <Route
          path="resources/:slug"
          element={
            <Suspense fallback={<PageLoader />}>
              <ResourceDetail />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

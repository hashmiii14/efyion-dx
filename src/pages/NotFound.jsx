import { usePageMeta } from '../hooks/usePageMeta';
import Button from '../components/ui/Button';
import { CurveBackdrop } from '../components/sections/PageHero';

export default function NotFound() {
  usePageMeta({ title: 'Page not found' });
  return (
    <section className="relative isolate -mt-[72px] overflow-hidden bg-mist pt-[72px] lg:-mt-20 lg:pt-20">
      <CurveBackdrop />
      <div className="container-site flex min-h-[60vh] flex-col items-start justify-center py-24">
        <img src="/logo-mark.png" alt="" aria-hidden="true" className="h-16 w-auto" />
        <h1 className="mt-8 text-4xl sm:text-6xl" style={{ letterSpacing: '-0.035em' }}>This page doesn’t exist</h1>
        <p className="lead mt-5 max-w-xl">The link may be out of date, or the page may have moved. Head back home or browse our products.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/">Back to home</Button>
          <Button to="/products" variant="outline">Browse products</Button>
        </div>
      </div>
    </section>
  );
}

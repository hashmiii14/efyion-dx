import { useEffect } from 'react';
import { site } from '../content/site';

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Sets the document title, description, Open Graph and Twitter tags for a page. */
export function usePageMeta({ title, description = site.defaultDescription, image = '/og-image.jpg' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', site.url ? site.url + image : image);
    if (site.url) setMeta('property', 'og:url', site.url + window.location.pathname);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', site.url ? site.url + image : image);
  }, [title, description, image]);
}

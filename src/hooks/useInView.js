import { useEffect, useRef, useState } from 'react';

/** Returns [ref, inView]. Fires once, then disconnects. */
export function useInView({ threshold = 0.05, rootMargin = '50px 0px 50px 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    // Check if element is already within or near viewport on initial render
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight + 60 && rect.bottom > -60) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

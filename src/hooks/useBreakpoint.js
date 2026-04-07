import { useState, useEffect } from 'react';

const MOBILE_MAX = 768;
const TABLET_MAX = 1024;

export function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1728;
    if (w <= MOBILE_MAX) return 'mobile';
    if (w <= TABLET_MAX) return 'tablet';
    return 'desktop';
  });

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w <= MOBILE_MAX) setBp('mobile');
      else if (w <= TABLET_MAX) setBp('tablet');
      else setBp('desktop');
    }
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return bp;
}

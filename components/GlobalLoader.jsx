'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Optional: Custom styles (can be styled further via Tailwind or CSS)
NProgress.configure({ showSpinner: false });

const GlobalLoader = () => {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    NProgress.set(0.3);

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 500); // Simulate delay for smoother UX

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [pathname]);

  return null;
};

export default GlobalLoader;

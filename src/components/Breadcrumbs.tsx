'use client'

import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs() {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { label: 'Home', href: '/' }
  ]);

  useEffect(() => {
    const updateBreadcrumbs = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      
      let newBreadcrumbs = [{ label: 'Home', href: '/' }];

      if (hash === '#services') {
        newBreadcrumbs.push({ label: 'Services', href: '#services' });
      } else if (hash === '#portfolio') {
        newBreadcrumbs.push({ label: 'Portfolio', href: '#portfolio' });
      } else if (hash === '#about') {
        newBreadcrumbs.push({ label: 'About', href: '#about' });
      } else if (hash === '#contact') {
        newBreadcrumbs.push({ label: 'Contact', href: '#contact' });
      } else if (hash === '#faq') {
        newBreadcrumbs.push({ label: 'FAQ', href: '#faq' });
      }

      setBreadcrumbs(newBreadcrumbs);
    };

    updateBreadcrumbs();
    window.addEventListener('hashchange', updateBreadcrumbs);
    return () => window.removeEventListener('hashchange', updateBreadcrumbs);
  }, []);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight size={16} className="text-[#77788A] mx-2" />
            )}
            {item.href ? (
              <a
                href={item.href}
                className="text-[#77788A] hover:text-[#C5E139] transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-white font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

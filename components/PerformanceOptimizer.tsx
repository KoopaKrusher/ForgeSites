'use client'

import Script from 'next/script'

export default function PerformanceOptimizer() {
  return (
    <>
      {/* Preconnect to external domains for faster loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for likely user actions */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Web Vitals monitoring */}
      <Script
        id="web-vitals"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function sendToAnalytics(metric) {
              // Send to your analytics provider
              if (typeof gtag !== 'undefined') {
                gtag('event', metric.name, {
                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                  event_category: 'Web Vitals',
                  event_label: metric.id,
                  non_interaction: true,
                });
              }
              console.log('Web Vital:', metric);
            }
            
            function getCLS(onPerfEntry) {
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((entryList) => {
                  for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                      onPerfEntry(entry);
                    }
                  }
                });
                observer.observe({ entryTypes: ['layout-shift'] });
              }
            }
            
            function getFID(onPerfEntry) {
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((entryList) => {
                  for (const entry of entryList.getEntries()) {
                    onPerfEntry(entry);
                  }
                });
                observer.observe({ entryTypes: ['first-input'], buffered: true });
              }
            }
            
            function getLCP(onPerfEntry) {
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((entryList) => {
                  const entries = entryList.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  onPerfEntry(lastEntry);
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'], buffered: true });
              }
            }
            
            // Monitor Core Web Vitals
            getCLS((metric) => sendToAnalytics({ name: 'CLS', value: metric.value, id: metric.id || 'unknown' }));
            getFID((metric) => sendToAnalytics({ name: 'FID', value: metric.processingStart - metric.startTime, id: metric.id || 'unknown' }));
            getLCP((metric) => sendToAnalytics({ name: 'LCP', value: metric.startTime, id: metric.id || 'unknown' }));
          `
        }}
      />
      
      {/* Resource hints for better performance */}
      <Script
        id="performance-observer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Preload next likely resources
            function preloadResources() {
              const links = document.querySelectorAll('a[href^="/"]');
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = entry.target.href;
                    document.head.appendChild(link);
                    observer.unobserve(entry.target);
                  }
                });
              }, { rootMargin: '100px' });
              
              links.forEach(link => observer.observe(link));
            }
            
            // Run after initial load
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', preloadResources);
            } else {
              preloadResources();
            }
          `
        }}
      />
    </>
  )
}
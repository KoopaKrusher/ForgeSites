interface StructuredDataProps {
  type?: 'organization' | 'person' | 'website' | 'service'
  data?: any
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://forge-sites.com'
    
    switch (type) {
      case 'organization':
        const organizationData = {
          '@type': 'Organization',
          '@context': 'https://schema.org',
          name: 'ForgeSites',
          alternateName: 'Forge Sites',
          description: 'Modern web development services specializing in small business websites with cutting-edge technology and creative vision.',
          url: baseUrl,
          logo: `${baseUrl}/logo.webp`,
          image: `${baseUrl}/og-image.png`,
          founder: {
            '@type': 'Person',
            name: 'Braden Baney',
            jobTitle: 'Full-Stack Web Developer',
            knowsAbout: ['Web Development', 'React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX Design'],
          },
          foundingDate: '2020',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'hello@forge-sites.com',
          },
          sameAs: [
            'https://linkedin.com/in/bradenbaney',
            'https://github.com/bradenbaney',
            'https://twitter.com/bradenbaney',
          ],
          makesOffer: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Development',
                description: 'Custom website development using modern technologies',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'E-commerce Development',
                description: 'Online store development with payment processing',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Website Maintenance',
                description: 'Ongoing website maintenance and support services',
              },
            },
          ],
        }
        return organizationData

      case 'website':
        const websiteData = {
          '@type': 'WebSite',
          '@context': 'https://schema.org',
          name: 'ForgeSites - Modern Web Development',
          alternateName: 'Forge Sites',
          description: 'Professional web development services for small businesses. Modern, fast, and accessible websites built with cutting-edge technology.',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
          publisher: {
            '@type': 'Organization',
            name: 'ForgeSites',
            logo: `${baseUrl}/logo.webp`,
          },
          mainEntity: {
            '@type': 'Organization',
            name: 'ForgeSites',
          },
        }
        return websiteData

      case 'person':
        const personData = {
          '@type': 'Person',
          '@context': 'https://schema.org',
          name: 'Braden Baney',
          jobTitle: 'Full-Stack Web Developer & Founder',
          description: 'Experienced web developer specializing in modern React applications, e-commerce solutions, and performance optimization.',
          url: baseUrl,
          image: `${baseUrl}/braden-photo.jpg`,
          worksFor: {
            '@type': 'Organization',
            name: 'ForgeSites',
            url: baseUrl,
          },
          knowsAbout: [
            'React',
            'Next.js', 
            'TypeScript',
            'Node.js',
            'PostgreSQL',
            'Tailwind CSS',
            'Web Performance',
            'SEO',
            'UI/UX Design',
            'E-commerce Development',
          ],
          sameAs: [
            'https://linkedin.com/in/bradenbaney',
            'https://github.com/bradenbaney',
            'https://twitter.com/bradenbaney',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'professional',
            email: 'braden@forge-sites.com',
          },
        }
        return personData

      case 'service':
        const serviceData = {
          '@type': ['LocalBusiness', 'Service'],
          '@context': 'https://schema.org',
          name: 'ForgeSites Web Development Services',
          description: 'Professional web development services specializing in modern, performance-optimized websites for small businesses.',
          url: baseUrl,
          telephone: '+1-555-0123',
          email: 'hello@forge-sites.com',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '40.7128',
            longitude: '-74.0060',
          },
          openingHours: 'Mo-Fr 09:00-17:00',
          priceRange: '$$',
          acceptedPaymentMethod: ['CreditCard', 'PayPal', 'BankTransfer'],
          currenciesAccepted: 'USD',
          serviceType: 'Web Development',
          areaServed: {
            '@type': 'Country',
            name: 'United States',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Web Development Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Custom Website Development',
                  description: 'Fully custom websites built with modern technologies',
                },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'USD',
                  price: '2500',
                  description: 'Starting price for custom websites',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'E-commerce Development', 
                  description: 'Online store development with payment integration',
                },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'USD',
                  price: '4000',
                  description: 'Starting price for e-commerce sites',
                },
              },
            ],
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '47',
            bestRating: '5',
            worstRating: '1',
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'Sarah Johnson',
              },
              reviewBody: 'Braden delivered an exceptional website that exceeded our expectations. Our conversion rate increased by 40% within the first month.',
            },
          ],
        }
        return serviceData

      default:
        return null
    }
  }

  const structuredData = getStructuredData()
  
  if (!structuredData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
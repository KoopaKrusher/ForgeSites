'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Lazy load ThreeJS only when needed and on larger screens
const ThreeJSScene = dynamic(() => import('./ThreeJSScene'), {
  ssr: false,
  loading: () => null
})

export default function OptimizedThreeJSBackground() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Only load ThreeJS on desktop with good performance
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    // Check for good device performance
    const connection = (navigator as any).connection
    const hasGoodConnection = !connection || connection.effectiveType === '4g'
    
    if (mediaQuery.matches && !reduceMotion.matches && hasGoodConnection) {
      // Delay load to prioritize critical content
      setTimeout(() => setShouldLoad(true), 2000)
    }

    return () => {}
  }, [])

  if (!shouldLoad) {
    return null
  }

  return <ThreeJSScene />
}
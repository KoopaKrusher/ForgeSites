'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

interface Shape {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  type: 'cube' | 'triangle' | 'hexagon' | 'diamond'
  color: string
  animationDuration: number
  delay: number
}

const generateShapes = (): Shape[] => {
  const shapes: Shape[] = []
  const colors = [
    'rgba(255, 107, 44, 0.35)',  // molten - much bolder
    'rgba(255, 193, 7, 0.3)',   // gold - much bolder  
    'rgba(255, 107, 44, 0.25)', // molten medium
    'rgba(255, 193, 7, 0.2)',   // gold medium
    'rgba(255, 107, 44, 0.15)', // molten lighter
    'rgba(255, 193, 7, 0.12)',  // gold lighter
  ]
  
  const types: Shape['type'][] = ['cube', 'triangle', 'hexagon', 'diamond']
  
  // Generate more shapes for depth and visual appeal
  for (let i = 0; i < 15; i++) {
    shapes.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 15, // 15-55px - more variety
      rotation: Math.random() * 360,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      animationDuration: Math.random() * 20 + 15, // 15-35s
      delay: Math.random() * 10, // 0-10s delay
    })
  }
  
  return shapes
}

const ShapeComponent = ({ shape }: { shape: Shape }) => {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  const getShapeWireframe = () => {
    const { type, size } = shape
    const center = size / 2
    const r = size * 0.4
    
    switch (type) {
      case 'cube':
        const d = r * 0.6
        return {
          lines: [
            `M ${center - d} ${center - d} L ${center + d} ${center - d} L ${center + d} ${center + d} L ${center - d} ${center + d} Z`,
            `M ${center - d + r*0.3} ${center - d - r*0.3} L ${center + d + r*0.3} ${center - d - r*0.3} L ${center + d + r*0.3} ${center + d - r*0.3} L ${center - d + r*0.3} ${center + d - r*0.3} Z`,
            `M ${center - d} ${center - d} L ${center - d + r*0.3} ${center - d - r*0.3}`,
            `M ${center + d} ${center - d} L ${center + d + r*0.3} ${center - d - r*0.3}`,
            `M ${center + d} ${center + d} L ${center + d + r*0.3} ${center + d - r*0.3}`,
            `M ${center - d} ${center + d} L ${center - d + r*0.3} ${center + d - r*0.3}`
          ]
        }
      case 'triangle':
        return {
          lines: [
            `M ${center} ${center - r} L ${center + r*0.8} ${center + r*0.6} L ${center - r*0.8} ${center + r*0.6} Z`,
            `M ${center} ${center - r*0.3} L ${center + r*0.4} ${center + r*0.3} L ${center - r*0.4} ${center + r*0.3} Z`,
            `M ${center} ${center - r} L ${center} ${center - r*0.3}`,
            `M ${center + r*0.8} ${center + r*0.6} L ${center + r*0.4} ${center + r*0.3}`,
            `M ${center - r*0.8} ${center + r*0.6} L ${center - r*0.4} ${center + r*0.3}`
          ]
        }
      case 'hexagon':
        const hexPoints = []
        for (let i = 0; i < 6; i++) {
          const angle = (i * 2 * Math.PI) / 6
          hexPoints.push({
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle)
          })
        }
        const backHexPoints = hexPoints.map(p => ({
          x: p.x + r * 0.2,
          y: p.y - r * 0.2
        }))
        return {
          lines: [
            `M ${hexPoints[0].x} ${hexPoints[0].y} L ${hexPoints[1].x} ${hexPoints[1].y} L ${hexPoints[2].x} ${hexPoints[2].y} L ${hexPoints[3].x} ${hexPoints[3].y} L ${hexPoints[4].x} ${hexPoints[4].y} L ${hexPoints[5].x} ${hexPoints[5].y} Z`,
            `M ${backHexPoints[0].x} ${backHexPoints[0].y} L ${backHexPoints[1].x} ${backHexPoints[1].y} L ${backHexPoints[2].x} ${backHexPoints[2].y} L ${backHexPoints[3].x} ${backHexPoints[3].y} L ${backHexPoints[4].x} ${backHexPoints[4].y} L ${backHexPoints[5].x} ${backHexPoints[5].y} Z`,
            `M ${hexPoints[0].x} ${hexPoints[0].y} L ${backHexPoints[0].x} ${backHexPoints[0].y}`,
            `M ${hexPoints[2].x} ${hexPoints[2].y} L ${backHexPoints[2].x} ${backHexPoints[2].y}`,
            `M ${hexPoints[4].x} ${hexPoints[4].y} L ${backHexPoints[4].x} ${backHexPoints[4].y}`
          ]
        }
      case 'diamond':
        return {
          lines: [
            `M ${center} ${center - r} L ${center + r} ${center} L ${center} ${center + r} L ${center - r} ${center} Z`,
            `M ${center} ${center - r*0.4} L ${center + r*0.4} ${center} L ${center} ${center + r*0.4} L ${center - r*0.4} ${center} Z`,
            `M ${center} ${center - r} L ${center} ${center - r*0.4}`,
            `M ${center + r} ${center} L ${center + r*0.4} ${center}`,
            `M ${center} ${center + r} L ${center} ${center + r*0.4}`,
            `M ${center - r} ${center} L ${center - r*0.4} ${center}`
          ]
        }
      default:
        return { lines: [] }
    }
  }

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${shape.x}%`,
        top: `${shape.y}%`,
      }}
      initial={{ 
        rotate: shape.rotation,
        opacity: 0,
        scale: 0.5
      }}
      animate={prefersReducedMotion ? {
        opacity: 0.7,
        scale: 1
      } : {
        rotate: shape.rotation + 360,
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.6, 1, 0.6],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={prefersReducedMotion ? {
        duration: 0.5,
        delay: 0
      } : {
        duration: shape.animationDuration,
        delay: shape.delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
    >
      <svg 
        width={shape.size} 
        height={shape.size}
        className="drop-shadow-sm"
      >
        {getShapeWireframe().lines.map((line, index) => (
          <path
            key={index}
            d={line}
            fill="none"
            stroke={shape.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </motion.div>
  )
}

function LightweightGeometricBackgroundClient() {
  const [shapes, setShapes] = useState<Shape[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Generate shapes immediately
    setShapes(generateShapes())
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  if (!isMounted || !isVisible || shapes.length === 0) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {shapes.map((shape) => (
        <ShapeComponent key={shape.id} shape={shape} />
      ))}
    </div>
  )
}

// Export as dynamic import to prevent SSR issues
export default dynamic(() => Promise.resolve(LightweightGeometricBackgroundClient), {
  ssr: false
})
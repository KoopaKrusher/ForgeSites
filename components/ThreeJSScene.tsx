'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeJSScene() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 50

    // Renderer setup with performance optimizations
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: false, // Disable for better performance
      powerPreference: "high-performance"
    })
    rendererRef.current = renderer
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit pixel ratio
    mountRef.current.appendChild(renderer.domElement)

    // Create fewer, optimized shapes
    const shapes: THREE.Mesh[] = []
    const geometries = [
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.SphereGeometry(1.5, 6, 4), // Reduced segments
      new THREE.ConeGeometry(1, 2, 6), // Reduced segments
    ]

    const material = new THREE.MeshBasicMaterial({
      color: 0xff6b2c,
      wireframe: true,
      opacity: 0.3,
      transparent: true,
    })

    // Create fewer shapes (8 instead of 15)
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const shape = new THREE.Mesh(geometry, material)
      
      // Random positioning
      shape.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50
      )
      
      // Store initial position for animation
      shape.userData = {
        initialX: shape.position.x,
        initialY: shape.position.y,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01, // Reduced rotation speed
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        }
      }
      
      shapes.push(shape)
      scene.add(shape)
    }

    // Throttled mouse interaction
    const mouse = new THREE.Vector2()
    let mouseUpdatePending = false
    const handleMouseMove = (event: MouseEvent) => {
      if (mouseUpdatePending) return
      mouseUpdatePending = true
      requestAnimationFrame(() => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        mouseUpdatePending = false
      })
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Optimized animation loop (30fps instead of 60fps)
    let lastTime = 0
    const targetFPS = 30
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      animationIdRef.current = requestAnimationFrame(animate)

      if (currentTime - lastTime < frameInterval) return
      lastTime = currentTime

      shapes.forEach((shape, index) => {
        // Continuous rotation
        shape.rotation.x += shape.userData.rotationSpeed.x
        shape.rotation.y += shape.userData.rotationSpeed.y
        shape.rotation.z += shape.userData.rotationSpeed.z

        // Floating animation
        shape.position.y = shape.userData.initialY + Math.sin(currentTime * 0.001 + index) * 2

        // Reduced mouse interaction
        const mouseInfluence = 0.05 // Reduced from 0.1
        shape.position.x = shape.userData.initialX + mouse.x * mouseInfluence * (index + 1)
      })

      renderer.render(scene, camera)
    }
    animate(0)

    // Handle resize
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }, 150)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      // Dispose of geometries and materials
      shapes.forEach(shape => {
        if (shape.geometry) shape.geometry.dispose()
        if (shape.material && Array.isArray(shape.material)) {
          shape.material.forEach(mat => mat.dispose())
        } else if (shape.material) {
          (shape.material as THREE.Material).dispose()
        }
      })
      
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}
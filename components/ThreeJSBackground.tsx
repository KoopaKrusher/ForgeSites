'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeJSBackground() {
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

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    })
    rendererRef.current = renderer
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create floating geometric shapes
    const shapes: THREE.Mesh[] = []
    const geometries = [
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.SphereGeometry(1.5, 8, 6),
      new THREE.ConeGeometry(1, 2, 8),
      new THREE.OctahedronGeometry(1.5),
    ]

    const material = new THREE.MeshBasicMaterial({
      color: 0xff6b2c,
      wireframe: true,
      opacity: 0.3,
      transparent: true,
    })

    // Create multiple shapes
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const shape = new THREE.Mesh(geometry, material)
      
      // Random positioning
      shape.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50
      )
      
      // Random rotation
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      
      // Store initial position for animation
      shape.userData = {
        initialX: shape.position.x,
        initialY: shape.position.y,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        }
      }
      
      shapes.push(shape)
      scene.add(shape)
    }

    // Mouse interaction
    const mouse = new THREE.Vector2()
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      shapes.forEach((shape, index) => {
        // Continuous rotation
        shape.rotation.x += shape.userData.rotationSpeed.x
        shape.rotation.y += shape.userData.rotationSpeed.y
        shape.rotation.z += shape.userData.rotationSpeed.z

        // Floating animation
        shape.position.y = shape.userData.initialY + Math.sin(Date.now() * 0.001 + index) * 2

        // Mouse interaction - shapes react to mouse position
        const mouseInfluence = 0.1
        shape.position.x = shape.userData.initialX + mouse.x * mouseInfluence * (index + 1)
        shape.position.z = shape.position.z + mouse.y * mouseInfluence * 0.5
      })

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      
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
      style={{
        background: 'transparent',
      }}
    />
  )
}
"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Line } from '@react-three/drei'
import * as THREE from 'three'

function NeuralNode({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1)
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.3, 32, 32]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </Sphere>
  )
}

function NeuralConnections() {
  const layers = [
    { count: 3, z: -4, color: '#6366f1' },
    { count: 5, z: -2, color: '#a855f7' },
    { count: 5, z: 0, color: '#ec4899' },
    { count: 4, z: 2, color: '#f97316' },
    { count: 2, z: 4, color: '#10b981' },
  ]

  const connections = useMemo(() => {
    const lines: Array<{ start: [number, number, number]; end: [number, number, number] }> = []

    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayer = layers[i]
      const nextLayer = layers[i + 1]

      for (let j = 0; j < currentLayer.count; j++) {
        const currentY = (j - (currentLayer.count - 1) / 2) * 1.5

        for (let k = 0; k < nextLayer.count; k++) {
          const nextY = (k - (nextLayer.count - 1) / 2) * 1.5

          lines.push({
            start: [0, currentY, currentLayer.z],
            end: [0, nextY, nextLayer.z],
          })
        }
      }
    }

    return lines
  }, [])

  return (
    <>
      {/* Render all nodes */}
      {layers.map((layer, layerIndex) =>
        Array.from({ length: layer.count }).map((_, nodeIndex) => {
          const y = (nodeIndex - (layer.count - 1) / 2) * 1.5
          return (
            <NeuralNode
              key={`${layerIndex}-${nodeIndex}`}
              position={[0, y, layer.z]}
              color={layer.color}
            />
          )
        })
      )}

      {/* Render connections */}
      {connections.map((conn, i) => (
        <Line
          key={i}
          points={[conn.start, conn.end]}
          color="#888888"
          lineWidth={0.5}
          opacity={0.3}
        />
      ))}
    </>
  )
}

export function NeuralNetworkViz() {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden bg-black/50 border border-primary/20">
      <Canvas camera={{ position: [8, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

        <NeuralConnections />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />

        <gridHelper args={[20, 20, '#333333', '#1a1a1a']} position={[0, -5, 0]} />
      </Canvas>
    </div>
  )
}

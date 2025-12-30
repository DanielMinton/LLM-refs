"use client"

import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Html, Line } from '@react-three/drei'
import * as THREE from 'three'
import { llmModels } from '@/data/llm-models'

interface ModelPoint {
  model: typeof llmModels[0]
  position: [number, number, number]
  color: string
  size: number
}

function ModelOrb({ model, position, color, size, onClick }: ModelPoint & { onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      const scale = hovered ? size * 1.3 : size
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)

      // Gentle floating animation
      const time = state.clock.elapsedTime
      const offset = Math.sin(time * 0.5 + position[0]) * 0.1
      meshRef.current.position.y = position[1] + offset
    }
  })

  return (
    <group>
      <Sphere
        ref={meshRef}
        args={[1, 32, 32]}
        position={[position[0], position[1], position[2]]}
        onClick={(e) => {
          e.stopPropagation()
          onClick()
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'default'
        }}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.0 : 0.5}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>

      {/* Connection line to center */}
      <Line
        points={[[0, 0, 0], position]}
        color={color}
        lineWidth={0.5}
        opacity={0.2}
        transparent
      />

      {hovered && (
        <Html distanceFactor={15} position={[position[0], position[1] + 1, position[2]]}>
          <div className="bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg p-3 shadow-xl min-w-[180px] pointer-events-none">
            <div className="font-bold text-sm">{model.displayName}</div>
            <div className="text-xs text-muted-foreground mb-1">{model.provider}</div>
            <div className="text-xs space-y-1">
              <div className="flex justify-between">
                <span>Perf Avg:</span>
                <span className="text-primary font-mono">
                  {((model.benchmarks.mmlu || 0) + (model.benchmarks.humanEval || 0)) / 2}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>Cost:</span>
                <span className={`font-mono ${
                  model.inputCost < 1 ? 'text-green-500' :
                  model.inputCost < 5 ? 'text-yellow-500' : 'text-red-500'
                }`}>
                  ${model.inputCost.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}

function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]}>
      <meshStandardMaterial
        color="#6366f1"
        emissive="#6366f1"
        emissiveIntensity={0.5}
        wireframe
      />
    </Sphere>
  )
}

export function CostPerformanceGlobe() {
  const [selectedModel, setSelectedModel] = useState<typeof llmModels[0] | null>(null)

  const visualizationData = useMemo(() => {
    return llmModels
      .filter(m => m.benchmarks.mmlu && m.benchmarks.humanEval)
      .map(model => {
        const mmlu = model.benchmarks.mmlu || 0
        const humanEval = model.benchmarks.humanEval || 0
        const avgPerf = (mmlu + humanEval) / 2

        // Distance from center based on performance
        const radius = 3 + ((avgPerf - 70) / 30) * 8

        // Angle based on cost (distribute around sphere)
        const costAngle = Math.log10(model.inputCost + 0.1) * Math.PI / 2

        // Random-ish but stable positioning based on model id
        const hash = model.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
        const phi = (hash % 100) / 100 * Math.PI * 2
        const theta = ((hash % 50) / 50) * Math.PI

        // Convert spherical to cartesian
        const x = radius * Math.sin(theta) * Math.cos(phi)
        const y = radius * Math.sin(theta) * Math.sin(phi) + costAngle * 2
        const z = radius * Math.cos(theta)

        // Color based on cost tier
        let color: string
        if (model.inputCost < 1) color = '#10b981' // green - budget
        else if (model.inputCost < 3) color = '#84cc16' // lime
        else if (model.inputCost < 5) color = '#eab308' // yellow
        else if (model.inputCost < 10) color = '#f97316' // orange
        else if (model.inputCost < 15) color = '#ef4444' // red
        else color = '#a855f7' // purple

        // Size based on overall value (performance / cost)
        const value = avgPerf / (model.inputCost + 1)
        const size = 0.3 + (value / 30) * 0.4

        return {
          model,
          position: [x, y, z] as [number, number, number],
          color,
          size,
        }
      })
  }, [])

  return (
    <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] rounded-xl overflow-hidden bg-black/50 border border-primary/20 relative">
      <Canvas camera={{ position: [0, 0, 25], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <pointLight position={[0, 10, -10]} intensity={0.5} color="#10b981" />

        <CentralSphere />

        {visualizationData.map(({ model, position, color, size }) => (
          <ModelOrb
            key={model.id}
            model={model}
            position={position}
            color={color}
            size={size}
            onClick={() => setSelectedModel(model)}
          />
        ))}

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={15}
          maxDistance={40}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg p-3 shadow-xl text-xs">
        <div className="font-semibold mb-2">Cost Tiers</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>&lt;$1/M</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>$1-5/M</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span>$5-10/M</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>$10-15/M</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span>&gt;$15/M</span>
          </div>
        </div>
      </div>

      {selectedModel && (
        <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-2xl max-w-sm">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">{selectedModel.displayName}</h3>
              <p className="text-sm text-muted-foreground">{selectedModel.provider}</p>
            </div>
            <button
              onClick={() => setSelectedModel(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Performance:</span>
              <span className="font-mono text-primary">
                {(((selectedModel.benchmarks.mmlu || 0) + (selectedModel.benchmarks.humanEval || 0)) / 2).toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span>Cost/Value:</span>
              <span className="font-mono text-green-500">
                {(((selectedModel.benchmarks.mmlu || 0) + (selectedModel.benchmarks.humanEval || 0)) / 2 / (selectedModel.inputCost + 1)).toFixed(2)}
              </span>
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              {selectedModel.description}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

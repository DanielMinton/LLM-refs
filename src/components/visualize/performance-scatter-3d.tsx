"use client"

import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Text, Html } from '@react-three/drei'
import * as THREE from 'three'
import { llmModels } from '@/data/llm-models'

interface ModelSphereProps {
  model: typeof llmModels[0]
  position: [number, number, number]
  size: number
  color: string
  onClick: () => void
}

function ModelSphere({ model, position, size, color, onClick }: ModelSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current && hovered) {
      meshRef.current.scale.setScalar(size * 1.2)
    } else if (meshRef.current) {
      meshRef.current.scale.setScalar(size)
    }
  })

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[1, 32, 32]}
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
          emissiveIntensity={hovered ? 0.8 : 0.3}
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>

      {hovered && (
        <Html distanceFactor={15}>
          <div className="bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg p-3 shadow-xl min-w-[200px] pointer-events-none">
            <div className="font-bold text-sm">{model.displayName}</div>
            <div className="text-xs text-muted-foreground">{model.provider}</div>
            <div className="mt-2 text-xs space-y-1">
              <div>MMLU: {model.benchmarks.mmlu?.toFixed(1) || 'N/A'}%</div>
              <div>HumanEval: {model.benchmarks.humanEval?.toFixed(1) || 'N/A'}%</div>
              <div>Cost: ${model.inputCost.toFixed(2)}/M</div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}

function AxisLabels() {
  return (
    <>
      <Text position={[15, 0, 0]} fontSize={1.5} color="#888">
        MMLU →
      </Text>
      <Text position={[0, 15, 0]} fontSize={1.5} color="#888">
        HumanEval →
      </Text>
      <Text position={[0, 0, 15]} fontSize={1.5} color="#888">
        Cost →
      </Text>
    </>
  )
}

function GridPlanes() {
  return (
    <>
      <gridHelper args={[30, 30, '#333333', '#1a1a1a']} position={[0, -15, 0]} />
      <gridHelper args={[30, 30, '#333333', '#1a1a1a']} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -15]} />
      <gridHelper args={[30, 30, '#333333', '#1a1a1a']} rotation={[0, 0, Math.PI / 2]} position={[-15, 0, 0]} />
    </>
  )
}

export function PerformanceScatter3D() {
  const [selectedModel, setSelectedModel] = useState<typeof llmModels[0] | null>(null)

  const visualizationData = useMemo(() => {
    return llmModels
      .filter(m => m.benchmarks.mmlu && m.benchmarks.humanEval)
      .map(model => {
        const mmlu = model.benchmarks.mmlu || 0
        const humanEval = model.benchmarks.humanEval || 0
        const cost = Math.log10(model.inputCost + 0.1) * 5

        // Normalize to -10 to +10 range
        const x = ((mmlu - 70) / 25) * 10
        const y = ((humanEval - 60) / 40) * 10
        const z = cost

        // Calculate overall performance for size
        const avgPerf = (mmlu + humanEval) / 2
        const size = 0.3 + ((avgPerf - 70) / 25) * 0.5

        // Color based on cost tier
        let color: string
        if (model.inputCost < 1) color = '#10b981' // green - budget
        else if (model.inputCost < 5) color = '#f59e0b' // amber - mid
        else if (model.inputCost < 10) color = '#ef4444' // red - premium
        else color = '#8b5cf6' // purple - ultra premium

        return {
          model,
          position: [x, y, z] as [number, number, number],
          size,
          color,
        }
      })
  }, [])

  return (
    <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] rounded-xl overflow-hidden bg-black/50 border border-primary/20">
      <Canvas camera={{ position: [20, 15, 20], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[20, 20, 20]} intensity={1} />
        <pointLight position={[-20, -20, -20]} intensity={0.5} color="#a855f7" />

        {visualizationData.map(({ model, position, size, color }) => (
          <ModelSphere
            key={model.id}
            model={model}
            position={position}
            size={size}
            color={color}
            onClick={() => setSelectedModel(model)}
          />
        ))}

        <AxisLabels />
        <GridPlanes />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={10}
          maxDistance={50}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>

      {selectedModel && (
        <div className="absolute top-4 left-4 right-4 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-2xl max-w-md">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg">{selectedModel.displayName}</h3>
              <p className="text-sm text-muted-foreground">{selectedModel.provider}</p>
            </div>
            <button
              onClick={() => setSelectedModel(null)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>MMLU:</span>
              <span className="font-mono text-primary">{selectedModel.benchmarks.mmlu?.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span>HumanEval:</span>
              <span className="font-mono text-primary">{selectedModel.benchmarks.humanEval?.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span>Cost (Input):</span>
              <span className="font-mono text-green-500">${selectedModel.inputCost.toFixed(2)}/M</span>
            </div>
            <div className="flex justify-between">
              <span>Context:</span>
              <span className="font-mono">{(selectedModel.contextWindow / 1000).toFixed(0)}K</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

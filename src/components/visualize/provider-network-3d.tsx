"use client"

import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Text, Html, Line } from '@react-three/drei'
import * as THREE from 'three'
import { llmModels } from '@/data/llm-models'

interface ProviderNode {
  provider: string
  position: [number, number, number]
  modelCount: number
  avgPerformance: number
  models: typeof llmModels
  color: string
}

interface ModelOrbit {
  model: typeof llmModels[0]
  provider: string
  orbitRadius: number
  angle: number
}

function ProviderHub({ node, onClick }: { node: ProviderNode; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      const scale = hovered ? 1.2 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    }
  })

  const size = 0.5 + (node.modelCount / 15) * 1.5

  return (
    <group position={node.position}>
      <Sphere
        ref={meshRef}
        args={[size, 32, 32]}
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
          color={node.color}
          emissive={node.color}
          emissiveIntensity={hovered ? 1.0 : 0.6}
          roughness={0.3}
          metalness={0.7}
        />
      </Sphere>

      <Text
        position={[0, size + 1, 0]}
        fontSize={0.5}
        color="#fff"
        anchorX="center"
        anchorY="middle"
      >
        {node.provider}
      </Text>

      {hovered && (
        <Html distanceFactor={15} position={[0, size + 2, 0]}>
          <div className="bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg p-3 shadow-xl min-w-[180px] pointer-events-none">
            <div className="font-bold text-sm">{node.provider}</div>
            <div className="text-xs space-y-1 mt-2">
              <div className="flex justify-between">
                <span>Models:</span>
                <span className="font-mono text-primary">{node.modelCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Avg Perf:</span>
                <span className="font-mono text-primary">{node.avgPerformance.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}

function OrbitingModel({ orbit, providerPos, time }: { orbit: ModelOrbit; providerPos: [number, number, number]; time: number }) {
  const [hovered, setHovered] = useState(false)

  // Calculate orbital position
  const angle = orbit.angle + time * 0.3
  const x = providerPos[0] + Math.cos(angle) * orbit.orbitRadius
  const y = providerPos[1] + Math.sin(angle * 0.7) * (orbit.orbitRadius * 0.3)
  const z = providerPos[2] + Math.sin(angle) * orbit.orbitRadius

  const position: [number, number, number] = [x, y, z]

  // Color based on performance
  const avgPerf = ((orbit.model.benchmarks.mmlu || 0) + (orbit.model.benchmarks.humanEval || 0)) / 2
  let color: string
  if (avgPerf > 85) color = '#10b981'
  else if (avgPerf > 75) color = '#eab308'
  else color = '#ef4444'

  return (
    <group>
      <Sphere
        args={[0.2, 16, 16]}
        position={position}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
        />
      </Sphere>

      <Line
        points={[providerPos, position]}
        color={color}
        lineWidth={0.5}
        opacity={0.1}
        transparent
      />

      {hovered && (
        <Html distanceFactor={15} position={position}>
          <div className="bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg p-2 shadow-xl min-w-[150px] pointer-events-none text-xs">
            <div className="font-bold">{orbit.model.displayName}</div>
            <div className="text-muted-foreground">${orbit.model.inputCost.toFixed(2)}/M</div>
          </div>
        </Html>
      )}
    </group>
  )
}

function NetworkScene({ nodes, orbits, selectedProvider }: {
  nodes: ProviderNode[]
  orbits: ModelOrbit[]
  selectedProvider: string | null
}) {
  const [time, setTime] = useState(0)

  useFrame((state) => {
    setTime(state.clock.elapsedTime)
  })

  return (
    <>
      {nodes.map((node) => (
        <ProviderHub
          key={node.provider}
          node={node}
          onClick={() => {}}
        />
      ))}

      {orbits
        .filter(orbit => !selectedProvider || orbit.provider === selectedProvider)
        .map((orbit, i) => {
          const providerNode = nodes.find(n => n.provider === orbit.provider)
          if (!providerNode) return null

          return (
            <OrbitingModel
              key={`${orbit.model.id}-${i}`}
              orbit={orbit}
              providerPos={providerNode.position}
              time={time}
            />
          )
        })}
    </>
  )
}

export function ProviderNetwork3D() {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null)

  const { nodes, orbits } = useMemo(() => {
    // Group models by provider
    const providerGroups = llmModels.reduce((acc, model) => {
      if (!acc[model.provider]) acc[model.provider] = []
      acc[model.provider].push(model)
      return acc
    }, {} as Record<string, typeof llmModels>)

    // Create provider nodes
    const providers = Object.keys(providerGroups)
    const nodeData: ProviderNode[] = []
    const orbitData: ModelOrbit[] = []

    // Colors for major providers
    const providerColors: Record<string, string> = {
      'OpenAI': '#10b981',
      'Anthropic': '#f97316',
      'Google': '#3b82f6',
      'Meta': '#8b5cf6',
      'Mistral': '#eab308',
      'DeepSeek': '#14b8a6',
      'xAI': '#ef4444',
      'Alibaba': '#ec4899',
    }

    providers.forEach((provider, index) => {
      const models = providerGroups[provider]
      const modelCount = models.length

      // Calculate average performance
      const avgPerformance = models.reduce((sum, m) => {
        const mmlu = m.benchmarks.mmlu || 0
        const humanEval = m.benchmarks.humanEval || 0
        return sum + (mmlu + humanEval) / 2
      }, 0) / modelCount

      // Position providers in a spiral pattern
      const radius = 8 + index * 0.5
      const angle = (index / providers.length) * Math.PI * 2
      const height = Math.sin(index * 0.5) * 3

      const position: [number, number, number] = [
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      ]

      nodeData.push({
        provider,
        position,
        modelCount,
        avgPerformance,
        models,
        color: providerColors[provider] || '#6366f1'
      })

      // Create orbiting models
      models.forEach((model, modelIndex) => {
        const orbitRadius = 2 + (modelCount / 5)
        const angle = (modelIndex / modelCount) * Math.PI * 2

        orbitData.push({
          model,
          provider,
          orbitRadius,
          angle
        })
      })
    })

    return { nodes: nodeData, orbits: orbitData }
  }, [])

  return (
    <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] rounded-xl overflow-hidden bg-black/50 border border-primary/20 relative">
      <Canvas camera={{ position: [0, 15, 25], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[20, 20, 20]} intensity={1} />
        <pointLight position={[-20, 10, -20]} intensity={0.5} color="#a855f7" />
        <pointLight position={[0, -10, 20]} intensity={0.5} color="#10b981" />

        <NetworkScene nodes={nodes} orbits={orbits} selectedProvider={selectedProvider} />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={15}
          maxDistance={50}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>

      {/* Stats Panel */}
      <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-xl max-w-xs">
        <h3 className="font-bold mb-3 text-sm">Provider Ecosystem</h3>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>Total Providers:</span>
            <span className="font-mono text-primary">{nodes.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Models:</span>
            <span className="font-mono text-primary">{llmModels.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Avg Models/Provider:</span>
            <span className="font-mono text-primary">
              {(llmModels.length / nodes.length).toFixed(1)}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-border">
          <div className="font-semibold mb-2 text-xs">Top Providers</div>
          <div className="space-y-1 text-xs">
            {nodes
              .sort((a, b) => b.modelCount - a.modelCount)
              .slice(0, 5)
              .map((node) => (
                <div key={node.provider} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }}></div>
                    <span>{node.provider}</span>
                  </div>
                  <span className="text-muted-foreground">{node.modelCount}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

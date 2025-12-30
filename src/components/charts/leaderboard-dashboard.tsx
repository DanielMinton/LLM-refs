"use client"

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { llmModels } from '@/data/llm-models'

interface LeaderboardDashboardProps {
  sortBy: 'mmlu' | 'humanEval' | 'inputCost' | 'contextWindow'
  sortDirection: 'asc' | 'desc'
}

export function LeaderboardDashboard({ sortBy, sortDirection }: LeaderboardDashboardProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const sorted = [...llmModels]
      .filter(m => m.benchmarks.mmlu || m.benchmarks.humanEval)
      .sort((a, b) => {
        let aVal: number, bVal: number

        switch (sortBy) {
          case 'mmlu':
            aVal = a.benchmarks.mmlu || 0
            bVal = b.benchmarks.mmlu || 0
            break
          case 'humanEval':
            aVal = a.benchmarks.humanEval || 0
            bVal = b.benchmarks.humanEval || 0
            break
          case 'inputCost':
            aVal = a.inputCost
            bVal = b.inputCost
            break
          case 'contextWindow':
            aVal = a.contextWindow
            bVal = b.contextWindow
            break
          default:
            aVal = a.benchmarks.mmlu || 0
            bVal = b.benchmarks.mmlu || 0
        }

        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal
      })
      .slice(0, 20)

    const data = sorted.map((model, index) => ({
      rank: index + 1,
      name: model.displayName,
      provider: model.provider,
      mmlu: model.benchmarks.mmlu || 0,
      humanEval: model.benchmarks.humanEval || 0,
      cost: model.inputCost,
      context: model.contextWindow,
      value: sortBy === 'mmlu' ? (model.benchmarks.mmlu || 0) :
             sortBy === 'humanEval' ? (model.benchmarks.humanEval || 0) :
             sortBy === 'inputCost' ? model.inputCost :
             model.contextWindow
    }))

    const margin = { top: 20, right: 100, bottom: 40, left: 40 }
    const width = svgRef.current.clientWidth - margin.left - margin.right
    const barHeight = 32
    const height = data.length * barHeight

    // Clear existing
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // Scales
    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) || 100])
      .range([0, width - 200])

    const y = d3.scaleBand()
      .domain(data.map(d => d.rank.toString()))
      .range([0, height])
      .padding(0.15)

    // Color based on performance
    const colorScale = d3.scaleSequential()
      .domain([d3.min(data, d => d.value) || 0, d3.max(data, d => d.value) || 100])
      .interpolator(d3.interpolateRgb('#ef4444', '#10b981'))

    // Rank labels
    svg.selectAll('.rank')
      .data(data)
      .join('text')
      .attr('class', 'rank')
      .attr('x', -10)
      .attr('y', d => (y(d.rank.toString()) || 0) + y.bandwidth() / 2)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'currentColor')
      .attr('font-size', '14px')
      .attr('font-weight', 'bold')
      .attr('opacity', 0.5)
      .text(d => d.rank)

    // Bars
    svg.selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', d => y(d.rank.toString()) || 0)
      .attr('width', d => x(d.value))
      .attr('height', y.bandwidth())
      .attr('fill', d => colorScale(d.value))
      .attr('opacity', 0.8)
      .attr('rx', 4)

    // Model names
    svg.selectAll('.model-name')
      .data(data)
      .join('text')
      .attr('class', 'model-name')
      .attr('x', 5)
      .attr('y', d => (y(d.rank.toString()) || 0) + y.bandwidth() / 2)
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'currentColor')
      .attr('font-size', '12px')
      .attr('font-weight', '600')
      .text(d => d.name)

    // Values
    svg.selectAll('.value-text')
      .data(data)
      .join('text')
      .attr('class', 'value-text')
      .attr('x', width - 190)
      .attr('y', d => (y(d.rank.toString()) || 0) + y.bandwidth() / 2)
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'currentColor')
      .attr('font-size', '11px')
      .attr('font-weight', 'bold')
      .attr('font-family', 'monospace')
      .text(d => {
        if (sortBy === 'inputCost') return `$${d.value.toFixed(2)}`
        if (sortBy === 'contextWindow') return `${(d.value / 1000).toFixed(0)}K`
        return `${d.value.toFixed(1)}%`
      })

    // Provider badges (small)
    svg.selectAll('.provider')
      .data(data)
      .join('text')
      .attr('class', 'provider')
      .attr('x', width - 120)
      .attr('y', d => (y(d.rank.toString()) || 0) + y.bandwidth() / 2)
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'currentColor')
      .attr('opacity', 0.6)
      .attr('font-size', '10px')
      .text(d => d.provider)

  }, [sortBy, sortDirection])

  return (
    <div className="w-full overflow-x-auto">
      <svg ref={svgRef} className="w-full min-w-[600px]"></svg>
    </div>
  )
}

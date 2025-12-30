"use client"

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { llmModels } from '@/data/llm-models'

interface TopModelsBarProps {
  metric: 'mmlu' | 'humanEval' | 'math'
  limit?: number
}

export function TopModelsBar({ metric, limit = 15 }: TopModelsBarProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const data = llmModels
      .filter(m => m.benchmarks[metric])
      .sort((a, b) => (b.benchmarks[metric] || 0) - (a.benchmarks[metric] || 0))
      .slice(0, limit)
      .map(model => ({
        name: model.displayName,
        provider: model.provider,
        value: model.benchmarks[metric] || 0,
        cost: model.inputCost,
      }))

    const margin = { top: 20, right: 30, bottom: 40, left: 150 }
    const width = svgRef.current.clientWidth - margin.left - margin.right
    const height = data.length * 35

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
      .range([0, width])

    const y = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, height])
      .padding(0.2)

    const colorScale = d3.scaleSequential()
      .domain([0, 20])
      .interpolator(d3.interpolateRgb('#6366f1', '#ec4899'))

    // Bars
    svg.selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', 0)
      .attr('y', d => y(d.name) || 0)
      .attr('width', d => x(d.value))
      .attr('height', y.bandwidth())
      .attr('fill', d => colorScale(d.cost))
      .attr('opacity', 0.8)
      .attr('rx', 4)

    // Labels (model names)
    svg.selectAll('.label')
      .data(data)
      .join('text')
      .attr('class', 'label')
      .attr('x', -10)
      .attr('y', d => (y(d.name) || 0) + y.bandwidth() / 2)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'currentColor')
      .attr('font-size', '12px')
      .text(d => d.name)

    // Values
    svg.selectAll('.value')
      .data(data)
      .join('text')
      .attr('class', 'value')
      .attr('x', d => x(d.value) + 5)
      .attr('y', d => (y(d.name) || 0) + y.bandwidth() / 2)
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'currentColor')
      .attr('font-size', '11px')
      .attr('font-weight', 'bold')
      .text(d => `${d.value.toFixed(1)}%`)

    // X Axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .append('text')
      .attr('x', width / 2)
      .attr('y', 35)
      .attr('fill', 'currentColor')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .text(`${metric.toUpperCase()} Score (%)`)

  }, [metric, limit])

  return (
    <div className="w-full overflow-x-auto">
      <svg ref={svgRef} className="w-full"></svg>
    </div>
  )
}

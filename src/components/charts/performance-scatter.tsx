"use client"

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { llmModels } from '@/data/llm-models'

export function PerformanceScatter() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const data = llmModels
      .filter(m => m.benchmarks.mmlu && m.benchmarks.humanEval)
      .map(model => ({
        name: model.displayName,
        provider: model.provider,
        mmlu: model.benchmarks.mmlu || 0,
        humanEval: model.benchmarks.humanEval || 0,
        cost: model.inputCost,
      }))

    const margin = { top: 40, right: 120, bottom: 60, left: 60 }
    const width = svgRef.current.clientWidth - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom

    // Clear existing
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // Scales
    const x = d3.scaleLinear()
      .domain([65, d3.max(data, d => d.mmlu) || 95])
      .range([0, width])

    const y = d3.scaleLinear()
      .domain([60, d3.max(data, d => d.humanEval) || 100])
      .range([height, 0])

    const colorScale = d3.scaleSequential()
      .domain([0, 20])
      .interpolator(d3.interpolateRgb('#10b981', '#ef4444'))

    const sizeScale = d3.scaleSqrt()
      .domain([0, 20])
      .range([4, 12])

    // Grid
    svg.append('g')
      .attr('class', 'grid')
      .attr('opacity', 0.1)
      .call(d3.axisLeft(y).tickSize(-width).tickFormat(() => ''))

    svg.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${height})`)
      .attr('opacity', 0.1)
      .call(d3.axisBottom(x).tickSize(-height).tickFormat(() => ''))

    // Axes
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .append('text')
      .attr('x', width / 2)
      .attr('y', 40)
      .attr('fill', 'currentColor')
      .attr('text-anchor', 'middle')
      .text('MMLU Score (%)')

    svg.append('g')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -45)
      .attr('fill', 'currentColor')
      .attr('text-anchor', 'middle')
      .text('HumanEval Score (%)')

    // Tooltip
    const tooltip = d3.select('body').append('div')
      .attr('class', 'absolute hidden bg-background border border-primary/20 rounded-lg p-3 shadow-xl text-sm pointer-events-none z-50')

    // Circles
    svg.selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', d => x(d.mmlu))
      .attr('cy', d => y(d.humanEval))
      .attr('r', d => sizeScale(d.cost))
      .attr('fill', d => colorScale(d.cost))
      .attr('opacity', 0.7)
      .attr('stroke', 'currentColor')
      .attr('stroke-width', 1)
      .on('mouseover', (event, d) => {
        tooltip
          .classed('hidden', false)
          .html(`
            <div class="font-bold">${d.name}</div>
            <div class="text-muted-foreground text-xs mb-2">${d.provider}</div>
            <div class="space-y-1 text-xs">
              <div>MMLU: <span class="font-mono text-primary">${d.mmlu.toFixed(1)}%</span></div>
              <div>HumanEval: <span class="font-mono text-primary">${d.humanEval.toFixed(1)}%</span></div>
              <div>Cost: <span class="font-mono text-green-500">$${d.cost.toFixed(2)}/M</span></div>
            </div>
          `)
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY - 10}px`)
      })
      .on('mouseout', () => {
        tooltip.classed('hidden', true)
      })

    // Legend
    const legend = svg.append('g')
      .attr('transform', `translate(${width + 20}, 0)`)

    legend.append('text')
      .attr('y', -10)
      .attr('fill', 'currentColor')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .text('Cost/M')

    const legendData = [
      { label: '<$1', color: '#10b981' },
      { label: '$1-5', color: '#84cc16' },
      { label: '$5-10', color: '#f97316' },
      { label: '>$10', color: '#ef4444' },
    ]

    legendData.forEach((item, i) => {
      const g = legend.append('g')
        .attr('transform', `translate(0, ${i * 20 + 10})`)

      g.append('circle')
        .attr('r', 5)
        .attr('fill', item.color)
        .attr('opacity', 0.7)

      g.append('text')
        .attr('x', 15)
        .attr('y', 4)
        .attr('fill', 'currentColor')
        .attr('font-size', '11px')
        .text(item.label)
    })

    return () => {
      tooltip.remove()
    }
  }, [])

  return (
    <div className="w-full">
      <svg ref={svgRef} className="w-full"></svg>
    </div>
  )
}

"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowUpDown, Search, ArrowLeft } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { llmModels } from "@/data/llm-models"
import { Provider } from "@/types/models"

type SortField = "mmlu" | "humanEval" | "inputCost" | "contextWindow" | "name"
type SortDirection = "asc" | "desc"

export default function LLMLeaderboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [providerFilter, setProviderFilter] = useState<string>("all")
  const [sortField, setSortField] = useState<SortField>("mmlu")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")

  const providers = useMemo(() => {
    const uniqueProviders = Array.from(new Set(llmModels.map((m) => m.provider)))
    return uniqueProviders.sort()
  }, [])

  const filteredAndSortedModels = useMemo(() => {
    let filtered = llmModels

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (model) =>
          model.displayName.toLowerCase().includes(query) ||
          model.name.toLowerCase().includes(query) ||
          model.provider.toLowerCase().includes(query)
      )
    }

    if (providerFilter !== "all") {
      filtered = filtered.filter((model) => model.provider === providerFilter)
    }

    const sorted = [...filtered].sort((a, b) => {
      let aValue: number | string = 0
      let bValue: number | string = 0

      switch (sortField) {
        case "mmlu":
          aValue = a.benchmarks.mmlu || 0
          bValue = b.benchmarks.mmlu || 0
          break
        case "humanEval":
          aValue = a.benchmarks.humanEval || 0
          bValue = b.benchmarks.humanEval || 0
          break
        case "inputCost":
          aValue = a.inputCost
          bValue = b.inputCost
          break
        case "contextWindow":
          aValue = a.contextWindow
          bValue = b.contextWindow
          break
        case "name":
          aValue = a.displayName
          bValue = b.displayName
          break
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }

      return sortDirection === "asc"
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number)
    })

    return sorted
  }, [searchQuery, providerFilter, sortField, sortDirection])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const SortButton = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 hover:text-foreground transition-colors"
    >
      {children}
      <ArrowUpDown className="h-3 w-3" />
      {sortField === field && (
        <span className="text-xs">{sortDirection === "asc" ? "↑" : "↓"}</span>
      )}
    </button>
  )

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-12">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/leaderboards">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Leaderboards
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-2">
            Language Model Leaderboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Compare {llmModels.length} leading LLMs across performance, cost, and capabilities
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={providerFilter} onValueChange={setProviderFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="All Providers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Providers</SelectItem>
              {providers.map((provider) => (
                <SelectItem key={provider} value={provider}>
                  {provider}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Rank</th>
                    <th className="text-left p-4 font-semibold">
                      <SortButton field="name">Model</SortButton>
                    </th>
                    <th className="text-left p-4 font-semibold">Provider</th>
                    <th className="text-right p-4 font-semibold">
                      <SortButton field="mmlu">MMLU</SortButton>
                    </th>
                    <th className="text-right p-4 font-semibold">
                      <SortButton field="humanEval">HumanEval</SortButton>
                    </th>
                    <th className="text-right p-4 font-semibold">
                      <SortButton field="contextWindow">Context</SortButton>
                    </th>
                    <th className="text-right p-4 font-semibold">
                      <SortButton field="inputCost">Cost/1M</SortButton>
                    </th>
                    <th className="text-left p-4 font-semibold">Capabilities</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredAndSortedModels.map((model, index) => (
                    <tr key={model.id} className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-medium text-muted-foreground">{index + 1}</td>
                      <td className="p-4">
                        <div>
                          <div className="font-semibold">{model.displayName}</div>
                          <div className="text-sm text-muted-foreground font-mono">
                            {model.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline">{model.provider}</Badge>
                      </td>
                      <td className="p-4 text-right font-mono">
                        {model.benchmarks.mmlu ? (
                          <span className="text-primary font-semibold">
                            {model.benchmarks.mmlu.toFixed(1)}%
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="p-4 text-right font-mono">
                        {model.benchmarks.humanEval ? (
                          <span className="text-primary font-semibold">
                            {model.benchmarks.humanEval.toFixed(1)}%
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="p-4 text-right font-mono text-sm">
                        {(model.contextWindow / 1000).toFixed(0)}K
                      </td>
                      <td className="p-4 text-right font-mono">
                        <span className="text-green-600 dark:text-green-400">
                          ${model.inputCost.toFixed(2)}
                        </span>
                        <span className="text-muted-foreground text-xs"> / </span>
                        <span className="text-orange-600 dark:text-orange-400">
                          ${model.outputCost.toFixed(2)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {model.capabilities.slice(0, 3).map((cap) => (
                            <Badge key={cap} variant="secondary" className="text-xs">
                              {cap}
                            </Badge>
                          ))}
                          {model.capabilities.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{model.capabilities.length - 3}
                            </Badge>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Showing {filteredAndSortedModels.length} of {llmModels.length} models
        </div>
      </main>
      <Footer />
    </div>
  )
}

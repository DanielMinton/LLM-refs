"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { llmModels } from "@/data/llm-models"
import { LLMModel } from "@/types/models"
import { X } from "lucide-react"

export default function ComparePage() {
  const [selectedModels, setSelectedModels] = useState<LLMModel[]>([])

  const addModel = (modelId: string) => {
    const model = llmModels.find((m) => m.id === modelId)
    if (model && !selectedModels.find((m) => m.id === modelId)) {
      setSelectedModels([...selectedModels, model])
    }
  }

  const removeModel = (modelId: string) => {
    setSelectedModels(selectedModels.filter((m) => m.id !== modelId))
  }

  const availableModels = llmModels.filter(
    (m) => !selectedModels.find((sm) => sm.id === m.id)
  )

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Compare AI Models</h1>
          <p className="text-muted-foreground text-lg">
            Select up to 4 models to compare side-by-side
          </p>
        </div>

        <div className="mb-6">
          <Select onValueChange={addModel} disabled={selectedModels.length >= 4}>
            <SelectTrigger className="w-full md:w-[400px]">
              <SelectValue placeholder="Add a model to compare..." />
            </SelectTrigger>
            <SelectContent>
              {availableModels.map((model) => (
                <SelectItem key={model.id} value={model.id}>
                  {model.displayName} - {model.provider}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedModels.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground text-lg">
                Select models from the dropdown above to start comparing
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="overflow-x-auto">
            <div className="min-w-max">
              <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${selectedModels.length}, minmax(300px, 1fr))` }}>
                {selectedModels.map((model) => (
                  <Card key={model.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {model.displayName}
                          </CardTitle>
                          <Badge>{model.provider}</Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeModel(model.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-2">
                            Pricing (per 1M tokens)
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <div className="text-muted-foreground">Input</div>
                              <div className="font-mono text-green-600 dark:text-green-400">
                                ${model.inputCost.toFixed(2)}
                              </div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Output</div>
                              <div className="font-mono text-orange-600 dark:text-orange-400">
                                ${model.outputCost.toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-2">
                            Context Window
                          </div>
                          <div className="font-mono">
                            {(model.contextWindow / 1000).toFixed(0)}K tokens
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-2">
                            Benchmarks
                          </div>
                          <div className="space-y-2">
                            {model.benchmarks.mmlu && (
                              <div className="flex justify-between text-sm">
                                <span>MMLU</span>
                                <span className="font-mono font-semibold">
                                  {model.benchmarks.mmlu.toFixed(1)}%
                                </span>
                              </div>
                            )}
                            {model.benchmarks.humanEval && (
                              <div className="flex justify-between text-sm">
                                <span>HumanEval</span>
                                <span className="font-mono font-semibold">
                                  {model.benchmarks.humanEval.toFixed(1)}%
                                </span>
                              </div>
                            )}
                            {model.benchmarks.math && (
                              <div className="flex justify-between text-sm">
                                <span>MATH</span>
                                <span className="font-mono font-semibold">
                                  {model.benchmarks.math.toFixed(1)}%
                                </span>
                              </div>
                            )}
                            {model.benchmarks.gsm8k && (
                              <div className="flex justify-between text-sm">
                                <span>GSM8K</span>
                                <span className="font-mono font-semibold">
                                  {model.benchmarks.gsm8k.toFixed(1)}%
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-2">
                            Capabilities
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {model.capabilities.map((cap) => (
                              <Badge key={cap} variant="secondary" className="text-xs">
                                {cap}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-2">
                            Strengths
                          </div>
                          <ul className="text-sm space-y-1">
                            {model.strengths.map((strength, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-2">
                            Best For
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {model.useCases.join(", ")}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { llmModels } from "@/data/llm-models"
import { visionModels } from "@/data/vision-models"
import { audioModels } from "@/data/audio-models"
import { videoModels } from "@/data/video-models"

const allModels = [...llmModels, ...visionModels, ...audioModels, ...videoModels]

export default function ModelDetailPage({
  params,
}: {
  params: { modelId: string }
}) {
  const model = allModels.find((m) => m.id === params.modelId)

  if (!model) {
    notFound()
  }

  const isLLM = model.category === "llm"

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-12 max-w-4xl">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href={`/leaderboards/${model.category}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {model.category.toUpperCase()} Leaderboard
          </Link>
        </Button>

        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{model.displayName}</h1>
              <p className="text-muted-foreground font-mono text-lg">{model.name}</p>
            </div>
            <Badge className="text-lg px-4 py-2">{model.provider}</Badge>
          </div>

          <p className="text-lg text-muted-foreground mb-4">{model.description}</p>

          <div className="flex flex-wrap gap-2">
            {model.capabilities.map((cap) => (
              <Badge key={cap} variant="secondary">
                {cap}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              {isLLM && "inputCost" in model && (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Input (per 1M tokens)</span>
                    <span className="font-mono font-semibold text-green-600 dark:text-green-400">
                      ${model.inputCost.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Output (per 1M tokens)</span>
                    <span className="font-mono font-semibold text-orange-600 dark:text-orange-400">
                      ${model.outputCost.toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
              {model.category === "vision" && "costPerImage" in model && model.costPerImage && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Per Image</span>
                  <span className="font-mono font-semibold text-green-600 dark:text-green-400">
                    ${model.costPerImage.toFixed(2)}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {isLLM && "contextWindow" in model && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Context Window</span>
                    <span className="font-mono font-semibold">
                      {(model.contextWindow / 1000).toFixed(0)}K tokens
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Release Date</span>
                  <span className="font-semibold">
                    {new Date(model.releaseDate).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {isLLM && "benchmarks" in model && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Benchmark Scores</CardTitle>
              <CardDescription>Performance on standard AI benchmarks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {model.benchmarks.mmlu && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-semibold">MMLU</div>
                        <div className="text-sm text-muted-foreground">
                          Massive Multitask Language Understanding
                        </div>
                      </div>
                      <div className="text-2xl font-bold font-mono text-primary">
                        {model.benchmarks.mmlu.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                )}
                {model.benchmarks.humanEval && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-semibold">HumanEval</div>
                        <div className="text-sm text-muted-foreground">
                          Code generation benchmark
                        </div>
                      </div>
                      <div className="text-2xl font-bold font-mono text-primary">
                        {model.benchmarks.humanEval.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                )}
                {model.benchmarks.math && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-semibold">MATH</div>
                        <div className="text-sm text-muted-foreground">
                          Mathematics problems
                        </div>
                      </div>
                      <div className="text-2xl font-bold font-mono text-primary">
                        {model.benchmarks.math.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                )}
                {model.benchmarks.gsm8k && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-semibold">GSM8K</div>
                        <div className="text-sm text-muted-foreground">
                          Grade school math
                        </div>
                      </div>
                      <div className="text-2xl font-bold font-mono text-primary">
                        {model.benchmarks.gsm8k.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {model.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2 mt-0.5">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Use Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {model.useCases.map((useCase, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2 mt-0.5">→</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href="/compare">
              Compare with Others
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/leaderboards/${model.category}`}>
              View All {model.category.toUpperCase()} Models
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

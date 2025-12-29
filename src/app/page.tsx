import Link from "next/link"
import { ArrowRight, Sparkles, Zap, BookOpen, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              The Ultimate AI Model Reference
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Explore the Universe of{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                AI Models
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Compare performance, pricing, and capabilities across LLMs, vision models, audio generators, and more.
              Make informed decisions with real benchmark data.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/leaderboards">
                  View Leaderboards
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/compare">
                  Compare Models
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 text-left">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">AI Models</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Benchmarks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Providers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Daily</div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-24 bg-muted/50">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything You Need to Choose the Right Model
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive tools and data to make AI model selection effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <BarChart3 className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Multi-Dimensional Leaderboards</CardTitle>
                <CardDescription>
                  Compare models across LLMs, vision, audio, and video with real benchmark scores
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Performance vs Cost</CardTitle>
                <CardDescription>
                  Find the perfect balance between capability and pricing for your use case
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Educational Content</CardTitle>
                <CardDescription>
                  Learn when and why to use different models with real-world examples
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/learn">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="container py-24">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">Featured</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Top Language Models
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Leading LLMs ranked by performance across key benchmarks
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-semibold">Rank</th>
                        <th className="text-left p-4 font-semibold">Model</th>
                        <th className="text-left p-4 font-semibold">Provider</th>
                        <th className="text-right p-4 font-semibold">MMLU</th>
                        <th className="text-right p-4 font-semibold">HumanEval</th>
                        <th className="text-right p-4 font-semibold">Cost/1M</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-medium">1</td>
                        <td className="p-4">
                          <div className="font-semibold">GPT-4 Turbo</div>
                          <div className="text-sm text-muted-foreground">gpt-4-turbo</div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">OpenAI</Badge>
                        </td>
                        <td className="p-4 text-right font-mono">86.4%</td>
                        <td className="p-4 text-right font-mono">87.2%</td>
                        <td className="p-4 text-right font-mono text-green-600 dark:text-green-400">$10</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-medium">2</td>
                        <td className="p-4">
                          <div className="font-semibold">Claude Opus 4.5</div>
                          <div className="text-sm text-muted-foreground">claude-opus-4-5</div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">Anthropic</Badge>
                        </td>
                        <td className="p-4 text-right font-mono">88.7%</td>
                        <td className="p-4 text-right font-mono">92.0%</td>
                        <td className="p-4 text-right font-mono text-green-600 dark:text-green-400">$15</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-medium">3</td>
                        <td className="p-4">
                          <div className="font-semibold">Gemini 1.5 Pro</div>
                          <div className="text-sm text-muted-foreground">gemini-1.5-pro</div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">Google</Badge>
                        </td>
                        <td className="p-4 text-right font-mono">85.9%</td>
                        <td className="p-4 text-right font-mono">84.1%</td>
                        <td className="p-4 text-right font-mono text-green-600 dark:text-green-400">$7</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-medium">4</td>
                        <td className="p-4">
                          <div className="font-semibold">Claude Sonnet 4.5</div>
                          <div className="text-sm text-muted-foreground">claude-sonnet-4-5</div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">Anthropic</Badge>
                        </td>
                        <td className="p-4 text-right font-mono">88.3%</td>
                        <td className="p-4 text-right font-mono">93.7%</td>
                        <td className="p-4 text-right font-mono text-green-600 dark:text-green-400">$3</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-medium">5</td>
                        <td className="p-4">
                          <div className="font-semibold">DeepSeek R1</div>
                          <div className="text-sm text-muted-foreground">deepseek-r1</div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">DeepSeek</Badge>
                        </td>
                        <td className="p-4 text-right font-mono">79.8%</td>
                        <td className="p-4 text-right font-mono">96.3%</td>
                        <td className="p-4 text-right font-mono text-green-600 dark:text-green-400">$0.55</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/leaderboards/llm">
                  View Full LLM Leaderboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 mt-24">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Built by Daniel Minton</p>
          <p className="mt-2">Data updated daily from multiple sources</p>
        </div>
      </footer>
    </div>
  )
}

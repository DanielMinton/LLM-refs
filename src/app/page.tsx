import Link from "next/link"
import { ArrowRight, Sparkles, Zap, BookOpen, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { ProviderBadge } from "@/components/provider-logos"

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
              <Button size="lg" asChild className="group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                <Link href="/leaderboards">
                  View Leaderboards
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="group hover:shadow-xl hover:shadow-purple-600/30 hover:border-purple-600/50 transition-all duration-300 hover:scale-105">
                <Link href="/compare">
                  Compare Models
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 text-left">
              <div className="p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground">AI Models</div>
              </div>
              <div className="p-4 rounded-lg hover:bg-purple-600/5 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Benchmarks</div>
              </div>
              <div className="p-4 rounded-lg hover:bg-pink-600/5 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">25+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Providers</div>
              </div>
              <div className="p-4 rounded-lg hover:bg-red-600/5 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">Daily</div>
                <div className="text-xs md:text-sm text-muted-foreground">Updates</div>
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
            <Card className="border-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 group cursor-pointer">
              <CardHeader>
                <BarChart3 className="h-10 w-10 mb-2 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors duration-300">Multi-Dimensional Leaderboards</CardTitle>
                <CardDescription>
                  Compare models across LLMs, vision, audio, and video with real benchmark scores
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-600/20 transition-all duration-500 hover:scale-105 group cursor-pointer">
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-purple-600 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
                <CardTitle className="group-hover:text-purple-600 transition-colors duration-300">Performance vs Cost</CardTitle>
                <CardDescription>
                  Find the perfect balance between capability and pricing for your use case
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-500 hover:scale-105 group cursor-pointer">
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-blue-600 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">Educational Content</CardTitle>
                <CardDescription>
                  Learn when and why to use different models with real-world examples
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild className="group hover:shadow-xl hover:shadow-blue-600/30 hover:border-blue-600/50 transition-all duration-300 hover:scale-105">
              <Link href="/learn">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
                      <tr className="hover:bg-primary/5 hover:shadow-md transition-all duration-300 group cursor-pointer">
                        <td className="p-3 md:p-4 font-medium">1</td>
                        <td className="p-3 md:p-4">
                          <Link href="/models/gpt-4-turbo" className="hover:underline group-hover:text-primary transition-colors">
                            <div className="font-semibold">GPT-4 Turbo</div>
                            <div className="text-xs md:text-sm text-muted-foreground">gpt-4-turbo</div>
                          </Link>
                        </td>
                        <td className="p-3 md:p-4">
                          <ProviderBadge provider="OpenAI" />
                        </td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm">86.4%</td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm">87.2%</td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">$10</td>
                      </tr>
                      <tr className="hover:bg-orange-600/5 hover:shadow-md transition-all duration-300 group cursor-pointer">
                        <td className="p-3 md:p-4 font-medium">2</td>
                        <td className="p-3 md:p-4">
                          <Link href="/models/claude-opus-4-5" className="hover:underline group-hover:text-orange-600 transition-colors">
                            <div className="font-semibold">Claude Opus 4.5</div>
                            <div className="text-xs md:text-sm text-muted-foreground">claude-opus-4-5</div>
                          </Link>
                        </td>
                        <td className="p-3 md:p-4">
                          <ProviderBadge provider="Anthropic" />
                        </td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm">88.7%</td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm">92.0%</td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">$15</td>
                      </tr>
                      <tr className="hover:bg-blue-600/5 hover:shadow-md transition-all duration-300 group cursor-pointer">
                        <td className="p-3 md:p-4 font-medium">3</td>
                        <td className="p-3 md:p-4">
                          <Link href="/models/gemini-1.5-pro" className="hover:underline group-hover:text-blue-600 transition-colors">
                            <div className="font-semibold">Gemini 1.5 Pro</div>
                            <div className="text-xs md:text-sm text-muted-foreground">gemini-1.5-pro</div>
                          </Link>
                        </td>
                        <td className="p-3 md:p-4">
                          <ProviderBadge provider="Google" />
                        </td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm">85.9%</td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm">84.1%</td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">$7</td>
                      </tr>
                      <tr className="hover:bg-orange-600/5 hover:shadow-md transition-all duration-300 group cursor-pointer">
                        <td className="p-3 md:p-4 font-medium">4</td>
                        <td className="p-3 md:p-4">
                          <Link href="/models/claude-sonnet-4-5" className="hover:underline group-hover:text-orange-600 transition-colors">
                            <div className="font-semibold">Claude Sonnet 4.5</div>
                            <div className="text-xs md:text-sm text-muted-foreground">claude-sonnet-4-5</div>
                          </Link>
                        </td>
                        <td className="p-3 md:p-4">
                          <ProviderBadge provider="Anthropic" />
                        </td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm">88.3%</td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm">93.7%</td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">$3</td>
                      </tr>
                      <tr className="hover:bg-green-600/5 hover:shadow-md transition-all duration-300 group cursor-pointer">
                        <td className="p-3 md:p-4 font-medium">5</td>
                        <td className="p-3 md:p-4">
                          <Link href="/models/deepseek-r1" className="hover:underline group-hover:text-green-600 transition-colors">
                            <div className="font-semibold">DeepSeek R1</div>
                            <div className="text-xs md:text-sm text-muted-foreground">deepseek-r1</div>
                          </Link>
                        </td>
                        <td className="p-3 md:p-4">
                          <ProviderBadge provider="DeepSeek" />
                        </td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm">79.8%</td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm">96.3%</td>
                        <td className="p-3 md:p-4 text-right font-mono text-sm text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">$0.55</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="group hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <Link href="/leaderboards/llm">
                  View Full LLM Leaderboard
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

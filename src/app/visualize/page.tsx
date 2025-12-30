"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PerformanceScatter3D } from "@/components/visualize/performance-scatter-3d"
import { CostPerformanceGlobe } from "@/components/visualize/cost-performance-globe"
import { ProviderNetwork3D } from "@/components/visualize/provider-network-3d"
import { Sparkles, Globe, Network } from "lucide-react"

export default function VisualizePage() {
  const [activeTab, setActiveTab] = useState("scatter")

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <Badge variant="secondary" className="mb-2">
            <Sparkles className="h-3 w-3 mr-1" />
            Interactive 3D Data Visualization
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Explore Model Data in{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              3D Space
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Discover patterns, compare performance, and understand trade-offs through
            beautiful, interactive 3D visualizations.
          </p>
        </div>

        {/* Visualization Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6 md:space-y-8">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 gap-1">
            <TabsTrigger value="scatter" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 sm:py-3">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Performance</span>
            </TabsTrigger>
            <TabsTrigger value="globe" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 sm:py-3">
              <Globe className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Cost/Value</span>
            </TabsTrigger>
            <TabsTrigger value="network" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 sm:py-3">
              <Network className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Ecosystem</span>
            </TabsTrigger>
          </TabsList>

          {/* Performance Scatter Plot */}
          <TabsContent value="scatter" className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">3D Performance Space</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Models plotted by MMLU (knowledge), HumanEval (coding), and Cost.
                  Larger spheres = better overall performance. Rotate, zoom, and click to explore.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PerformanceScatter3D />
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">52</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Models Visualized</div>
                </CardContent>
              </Card>
              <Card className="border-purple-500/20">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-purple-500">3D</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Dimensions Compared</div>
                </CardContent>
              </Card>
              <Card className="border-pink-500/20">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-pink-500">5</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Benchmark Metrics</div>
                </CardContent>
              </Card>
              <Card className="border-orange-500/20">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-orange-500">Real-time</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Interactive Updates</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Cost-Performance Globe */}
          <TabsContent value="globe" className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Cost-Performance Universe</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Models arranged in 3D space by performance and cost. Green = best value, Red = premium.
                  Distance from center = higher performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CostPerformanceGlobe />
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
              <Card className="border-green-500/20">
                <CardContent className="pt-6">
                  <div className="text-xl sm:text-2xl font-bold text-green-500">Budget</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Best value models under $1/M tokens
                  </div>
                </CardContent>
              </Card>
              <Card className="border-yellow-500/20">
                <CardContent className="pt-6">
                  <div className="text-xl sm:text-2xl font-bold text-yellow-500">Balanced</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Mid-tier performance & pricing
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="text-xl sm:text-2xl font-bold text-red-500">Premium</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Top performance, higher cost
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Provider Network */}
          <TabsContent value="network" className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Provider Ecosystem</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  AI providers shown as central nodes with their models orbiting around them.
                  Size = number of models. Color = average model performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProviderNetwork3D />
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">27+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">AI Providers</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">OpenAI</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Most Models</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">Anthropic</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Highest Avg Score</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">DeepSeek</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Best Value</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Info Section */}
        <Card className="mt-8 md:mt-12 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 border-primary/20">
          <CardContent className="pt-6 pb-6">
            <div className="text-center space-y-3 md:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                How to Use These Visualizations
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 md:gap-6 text-left max-w-4xl mx-auto">
                <div className="space-y-2">
                  <div className="font-semibold text-primary text-sm sm:text-base">🖱️ Rotate</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Click and drag to rotate the 3D space in any direction
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-purple-500 text-sm sm:text-base">🔍 Zoom</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Scroll or pinch to zoom in/out and see details
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-pink-500 text-sm sm:text-base">👆 Click</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Click on spheres to see detailed model information
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

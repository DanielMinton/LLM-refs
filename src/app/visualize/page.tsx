"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PerformanceScatter } from "@/components/charts/performance-scatter"
import { TopModelsBar } from "@/components/charts/top-models-bar"
import { BarChart3, TrendingUp, Code } from "lucide-react"

export default function VisualizePage() {
  const [activeTab, setActiveTab] = useState("scatter")

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-8 md:py-12">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <Badge variant="secondary" className="mb-2">
            <BarChart3 className="h-3 w-3 mr-1" />
            Data Visualization
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Explore Model{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Performance
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive charts showing model performance, cost, and capabilities
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="scatter">
              <BarChart3 className="h-4 w-4 mr-2" />
              Scatter
            </TabsTrigger>
            <TabsTrigger value="mmlu">
              <TrendingUp className="h-4 w-4 mr-2" />
              MMLU
            </TabsTrigger>
            <TabsTrigger value="coding">
              <Code className="h-4 w-4 mr-2" />
              Coding
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scatter">
            <Card>
              <CardHeader>
                <CardTitle>Performance vs Cost</CardTitle>
                <CardDescription>
                  MMLU (knowledge) vs HumanEval (coding). Circle size = cost. Color: green (cheap) to red (expensive).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PerformanceScatter />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mmlu">
            <Card>
              <CardHeader>
                <CardTitle>Top 15 Models by MMLU</CardTitle>
                <CardDescription>
                  Massive Multitask Language Understanding - measures knowledge across 57 subjects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TopModelsBar metric="mmlu" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="coding">
            <Card>
              <CardHeader>
                <CardTitle>Top 15 Models by HumanEval</CardTitle>
                <CardDescription>
                  Coding performance on Python function generation tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TopModelsBar metric="humanEval" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}

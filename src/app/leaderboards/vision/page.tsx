"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowLeft, Filter } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { visionModels } from "@/data/vision-models"

export default function VisionLeaderboard() {
  const [typeFilter, setTypeFilter] = useState<string>("all")

  const filteredModels = useMemo(() => {
    if (typeFilter === "all") return visionModels
    return visionModels.filter((m) => m.type === typeFilter)
  }, [typeFilter])

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
            Vision Model Leaderboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Compare {visionModels.length} vision models for generation, understanding, and editing
          </p>
        </div>

        <div className="mb-6">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="generation">Generation</SelectItem>
              <SelectItem value="understanding">Understanding</SelectItem>
              <SelectItem value="editing">Editing</SelectItem>
              <SelectItem value="ocr">OCR</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6">
          {filteredModels.map((model, index) => (
            <Card key={model.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-muted-foreground">
                        #{index + 1}
                      </span>
                      <div>
                        <Link href={`/models/${model.id}`} className="hover:underline">
                          <h3 className="text-xl font-semibold">{model.displayName}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground font-mono">{model.name}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{model.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>{model.provider}</Badge>
                      <Badge variant="outline">{model.type}</Badge>
                      {model.capabilities.map((cap) => (
                        <Badge key={cap} variant="secondary">
                          {cap}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      {model.costPerImage && (
                        <div>
                          <div className="text-muted-foreground">Cost/Image</div>
                          <div className="font-semibold text-green-600 dark:text-green-400">
                            ${model.costPerImage.toFixed(2)}
                          </div>
                        </div>
                      )}
                      {model.costPer1MTokens && (
                        <div>
                          <div className="text-muted-foreground">Cost/1M Tokens</div>
                          <div className="font-semibold text-green-600 dark:text-green-400">
                            ${model.costPer1MTokens.toFixed(2)}
                          </div>
                        </div>
                      )}
                      {model.maxResolution && (
                        <div>
                          <div className="text-muted-foreground">Max Resolution</div>
                          <div className="font-semibold">{model.maxResolution}</div>
                        </div>
                      )}
                      <div>
                        <div className="text-muted-foreground">Released</div>
                        <div className="font-semibold">
                          {new Date(model.releaseDate).toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric',
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Showing {filteredModels.length} of {visionModels.length} models
        </div>
      </main>
      <Footer />
    </div>
  )
}

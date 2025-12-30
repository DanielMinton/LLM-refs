"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
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
import { audioModels } from "@/data/audio-models"

export default function AudioLeaderboard() {
  const [typeFilter, setTypeFilter] = useState<string>("all")

  const filteredModels = useMemo(() => {
    if (typeFilter === "all") return audioModels
    return audioModels.filter((m) => m.type === typeFilter)
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
            Audio Model Leaderboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Compare {audioModels.length} audio models for TTS, STT, and music generation
          </p>
        </div>

        <div className="mb-6">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="tts">Text-to-Speech</SelectItem>
              <SelectItem value="stt">Speech-to-Text</SelectItem>
              <SelectItem value="music">Music Generation</SelectItem>
              <SelectItem value="voice-cloning">Voice Cloning</SelectItem>
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
                      <Badge variant="outline">{model.type.toUpperCase()}</Badge>
                      {model.capabilities.map((cap) => (
                        <Badge key={cap} variant="secondary">
                          {cap}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      {model.costPer1MChars && (
                        <div>
                          <div className="text-muted-foreground">Cost/1M Chars</div>
                          <div className="font-semibold text-green-600 dark:text-green-400">
                            ${model.costPer1MChars.toFixed(2)}
                          </div>
                        </div>
                      )}
                      {model.costPerMinute && (
                        <div>
                          <div className="text-muted-foreground">Cost/Minute</div>
                          <div className="font-semibold text-green-600 dark:text-green-400">
                            ${model.costPerMinute.toFixed(3)}
                          </div>
                        </div>
                      )}
                      {model.supportedLanguages && (
                        <div>
                          <div className="text-muted-foreground">Languages</div>
                          <div className="font-semibold">{model.supportedLanguages}</div>
                        </div>
                      )}
                      {model.voiceOptions && (
                        <div>
                          <div className="text-muted-foreground">Voice Options</div>
                          <div className="font-semibold">{model.voiceOptions}+</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Showing {filteredModels.length} of {audioModels.length} models
        </div>
      </main>
      <Footer />
    </div>
  )
}

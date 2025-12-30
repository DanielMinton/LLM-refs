import Link from "next/link"
import { ArrowRight, Cpu, Eye, Mic, Video } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { llmModels } from "@/data/llm-models"
import { visionModels } from "@/data/vision-models"
import { audioModels } from "@/data/audio-models"
import { videoModels } from "@/data/video-models"

export default function LeaderboardsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">All Leaderboards</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Model Leaderboards
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare performance, pricing, and capabilities across different AI model categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Cpu className="h-10 w-10 text-primary" />
                <Badge>{llmModels.length} models</Badge>
              </div>
              <CardTitle>Language Models (LLMs)</CardTitle>
              <CardDescription>
                Compare reasoning, coding, and general-purpose text models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Top Model</span>
                  <span className="font-semibold">
                    {llmModels[0]?.displayName}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Benchmarks</span>
                  <span className="font-mono">MMLU, HumanEval, GPQA</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="/leaderboards/llm">
                  View LLM Leaderboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Eye className="h-10 w-10 text-primary" />
                <Badge>{visionModels.length} models</Badge>
              </div>
              <CardTitle>Vision Models</CardTitle>
              <CardDescription>
                Image generation, understanding, editing, and OCR models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Top Model</span>
                  <span className="font-semibold">
                    {visionModels[0]?.displayName}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Categories</span>
                  <span className="font-mono">Generation, Understanding</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="/leaderboards/vision">
                  View Vision Leaderboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Mic className="h-10 w-10 text-primary" />
                <Badge>{audioModels.length} models</Badge>
              </div>
              <CardTitle>Audio Models</CardTitle>
              <CardDescription>
                Text-to-speech, speech-to-text, and music generation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Top Model</span>
                  <span className="font-semibold">
                    {audioModels[0]?.displayName}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Categories</span>
                  <span className="font-mono">TTS, STT, Music</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="/leaderboards/audio">
                  View Audio Leaderboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Video className="h-10 w-10 text-primary" />
                <Badge>{videoModels.length} models</Badge>
              </div>
              <CardTitle>Video Models</CardTitle>
              <CardDescription>
                Video generation, editing, and understanding models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Top Model</span>
                  <span className="font-semibold">
                    {videoModels[0]?.displayName}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Categories</span>
                  <span className="font-mono">Generation, Editing</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="/leaderboards/video">
                  View Video Leaderboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to compare models side-by-side?
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link href="/compare">
              Open Comparison Tool
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

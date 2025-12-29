export type ModelCategory = "llm" | "vision" | "audio" | "video" | "embedding" | "code"

export type Provider =
  | "OpenAI"
  | "Anthropic"
  | "Google"
  | "Meta"
  | "Mistral"
  | "Cohere"
  | "DeepSeek"
  | "xAI"
  | "Amazon"
  | "Microsoft"
  | "Stability AI"
  | "Midjourney"
  | "ElevenLabs"
  | "Runway"
  | "OpenRouter"
  | "Alibaba"
  | "01.AI"
  | "Perplexity"
  | "Databricks"
  | "AI21 Labs"
  | "Inflection"
  | "Reka AI"
  | "NVIDIA"
  | "Writer"
  | "Black Forest Labs"
  | "Ideogram"
  | "PlayHT"
  | "Deepgram"
  | "Suno"
  | "Udio"
  | "Pika Labs"
  | "Kuaishou"
  | "Luma AI"
  | "Haiper"

export interface LLMModel {
  id: string
  name: string
  displayName: string
  provider: Provider
  category: "llm"
  releaseDate: string
  contextWindow: number

  // Pricing (per million tokens)
  inputCost: number
  outputCost: number

  // Benchmarks (percentage or score)
  benchmarks: {
    mmlu?: number
    humanEval?: number
    gpqa?: number
    math?: number
    gsm8k?: number
    hellaswag?: number
    arc?: number
    truthfulqa?: number
  }

  // Capabilities
  capabilities: string[]

  // Additional info
  description: string
  strengths: string[]
  weaknesses: string[]
  useCases: string[]
  maxOutputTokens?: number
  trainingCutoff?: string
}

export interface VisionModel {
  id: string
  name: string
  displayName: string
  provider: Provider
  category: "vision"
  releaseDate: string
  type: "generation" | "understanding" | "editing" | "ocr"

  // Pricing
  costPerImage?: number
  costPer1MTokens?: number

  // Specs
  maxResolution?: string
  supportedFormats?: string[]

  // Benchmarks
  benchmarks: {
    clip?: number
    imagenet?: number
    coco?: number
    vqa?: number
  }

  capabilities: string[]
  description: string
  strengths: string[]
  useCases: string[]
}

export interface AudioModel {
  id: string
  name: string
  displayName: string
  provider: Provider
  category: "audio"
  releaseDate: string
  type: "tts" | "stt" | "music" | "voice-cloning"

  // Pricing
  costPer1MChars?: number
  costPerMinute?: number
  costPerRequest?: number

  // Specs
  supportedLanguages?: number
  voiceOptions?: number
  maxDuration?: string

  capabilities: string[]
  description: string
  strengths: string[]
  useCases: string[]
}

export interface VideoModel {
  id: string
  name: string
  displayName: string
  provider: Provider
  category: "video"
  releaseDate: string
  type: "generation" | "editing" | "understanding"

  // Pricing
  costPerSecond?: number
  costPerVideo?: number

  // Specs
  maxDuration?: string
  maxResolution?: string
  fps?: number

  capabilities: string[]
  description: string
  strengths: string[]
  useCases: string[]
}

export type AIModel = LLMModel | VisionModel | AudioModel | VideoModel

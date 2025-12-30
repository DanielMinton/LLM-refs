import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Learn - AI Models Universe',
  description: 'Learn about AI models, their capabilities, and how to choose the right one for your needs.',
};

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Learn About AI Models
          </h1>
          <p className="text-xl text-muted-foreground">
            Your comprehensive guide to understanding AI models and their capabilities
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-card rounded-lg p-6 shadow-lg mb-8 border">
          <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
          <ul className="space-y-2">
            <li><a href="#understanding" className="text-primary hover:underline">Understanding AI Models</a></li>
            <li><a href="#types" className="text-primary hover:underline">Model Types and Their Uses</a></li>
            <li><a href="#metrics" className="text-primary hover:underline">Key Metrics Explained</a></li>
            <li><a href="#choosing" className="text-primary hover:underline">How to Choose the Right Model</a></li>
            <li><a href="#resources" className="text-primary hover:underline">Additional Resources</a></li>
          </ul>
        </div>

        {/* Understanding AI Models */}
        <section id="understanding" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding AI Models</h2>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-lg border">
              <h3 className="text-xl font-semibold mb-3">What is an AI Model?</h3>
              <p className="text-muted-foreground mb-4">
                An AI model is a program that has been trained on data to recognize patterns and make decisions.
                Think of it as a highly specialized tool that has learned from examples to perform specific tasks.
              </p>
              <p className="text-muted-foreground">
                Modern AI models use neural networks inspired by the human brain, with layers of interconnected
                nodes that process information and learn from experience.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg border">
              <h3 className="text-xl font-semibold mb-3">How Do They Work?</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">Training:</strong> Models learn from vast amounts of data, adjusting their internal parameters to recognize patterns.</p>
                <p><strong className="text-foreground">Inference:</strong> Once trained, models can process new inputs and generate predictions or outputs based on what they learned.</p>
                <p><strong className="text-foreground">Fine-tuning:</strong> Models can be further specialized for specific tasks with additional focused training.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Model Types */}
        <section id="types" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Model Types and Their Uses</h2>

          <div className="grid gap-6">
            <div className="bg-card rounded-lg p-6 shadow-lg border hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold">Language Models (LLMs)</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Specialized in understanding and generating human language. These models can write, summarize, translate, and answer questions.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong className="text-foreground">Best for:</strong> Text generation, chatbots, code writing, content creation, translation</p>
                <p><strong className="text-foreground">Examples:</strong> GPT-4, Claude, Gemini</p>
                <Link href="/leaderboards/llm" className="inline-block text-primary hover:underline mt-2">
                  View LLM Leaderboard →
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg border hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-semibold">Vision Models</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Process and understand images and visual content. They can classify, detect objects, generate images, and analyze visual data.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong className="text-foreground">Best for:</strong> Image classification, object detection, image generation, visual analysis</p>
                <p><strong className="text-foreground">Examples:</strong> DALL-E, Stable Diffusion, CLIP</p>
                <Link href="/leaderboards/vision" className="inline-block text-primary hover:underline mt-2">
                  View Vision Leaderboard →
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg border hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-xl font-semibold">Audio Models</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Work with sound and audio data. They can transcribe speech, generate music, synthesize voices, and analyze audio content.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong className="text-foreground">Best for:</strong> Speech recognition, text-to-speech, music generation, audio analysis</p>
                <p><strong className="text-foreground">Examples:</strong> Whisper, ElevenLabs, MusicGen</p>
                <Link href="/leaderboards/audio" className="inline-block text-primary hover:underline mt-2">
                  View Audio Leaderboard →
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg border hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-semibold">Video Models</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Process and generate video content. They can create videos from text, analyze video content, and perform video-to-video transformations.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong className="text-foreground">Best for:</strong> Video generation, video analysis, video editing, action recognition</p>
                <p><strong className="text-foreground">Examples:</strong> Sora, Runway Gen-2, Make-A-Video</p>
                <Link href="/leaderboards/video" className="inline-block text-primary hover:underline mt-2">
                  View Video Leaderboard →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section id="metrics" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Metrics Explained</h2>

          <div className="space-y-4">
            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">Parameters</h3>
              <p className="text-muted-foreground text-sm">
                The number of trainable values in the model. More parameters generally mean more capability but also higher computational costs.
                Measured in millions (M) or billions (B).
              </p>
            </div>

            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">Context Length</h3>
              <p className="text-muted-foreground text-sm">
                The maximum amount of text a model can process at once. Longer context allows the model to maintain coherence over longer conversations or documents.
                Measured in tokens (roughly 3-4 characters per token).
              </p>
            </div>

            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">Training Data Size</h3>
              <p className="text-muted-foreground text-sm">
                The amount of data used to train the model. More diverse and high-quality training data typically leads to better performance.
                Measured in tokens or gigabytes.
              </p>
            </div>

            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">Latency</h3>
              <p className="text-muted-foreground text-sm">
                The time it takes for a model to process input and generate output. Lower latency means faster responses,
                which is crucial for real-time applications.
              </p>
            </div>

            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">Accuracy/Performance Scores</h3>
              <p className="text-muted-foreground text-sm">
                Benchmarks that measure how well a model performs on specific tasks. Different benchmarks test different capabilities
                (reasoning, math, coding, etc.). Higher scores indicate better performance.
              </p>
            </div>
          </div>
        </section>

        {/* Choosing the Right Model */}
        <section id="choosing" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Choose the Right Model</h2>

          <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg p-6 shadow-lg border mb-6">
            <p className="text-muted-foreground mb-4">
              Selecting the right AI model depends on your specific use case, budget, and requirements.
              Consider these factors:
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">1. Define Your Task</h3>
              <p className="text-muted-foreground text-sm mb-2">What do you need the model to do?</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Text generation → Language Model</li>
                <li>Image creation → Vision Model (generative)</li>
                <li>Speech transcription → Audio Model</li>
                <li>Video creation → Video Model</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">2. Consider Performance Needs</h3>
              <p className="text-muted-foreground text-sm mb-2">Balance capability with practical constraints:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Complex tasks → Larger models with more parameters</li>
                <li>Real-time applications → Models with lower latency</li>
                <li>Long documents → Models with larger context windows</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">3. Budget and Resources</h3>
              <p className="text-muted-foreground text-sm mb-2">Consider costs and infrastructure:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>API pricing vs self-hosting costs</li>
                <li>Hardware requirements for running models</li>
                <li>Scaling needs for production use</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">4. Compare Models</h3>
              <p className="text-muted-foreground text-sm">
                Use our comparison tool to evaluate models side-by-side based on their specifications and capabilities.
              </p>
              <Link href="/compare" className="inline-block text-primary hover:underline mt-2 text-sm">
                Try the Comparison Tool →
              </Link>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>

          <div className="grid gap-4">
            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">Explore Leaderboards</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Browse our comprehensive leaderboards to find the best models for each category.
              </p>
              <Link href="/leaderboards" className="text-primary hover:underline text-sm">
                View All Leaderboards →
              </Link>
            </div>

            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">Model Details</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Click on any model in our leaderboards to see detailed specifications, capabilities, and use cases.
              </p>
              <Link href="/leaderboards/llm" className="text-primary hover:underline text-sm">
                Browse Models →
              </Link>
            </div>

            <div className="bg-card rounded-lg p-5 shadow-lg border">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground text-sm">
                The AI field evolves rapidly. Check back regularly for updates on new models and capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-lg p-8 shadow-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Explore?</h2>
          <p className="mb-6 text-white/90">
            Start comparing models and find the perfect one for your needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/leaderboards"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              View Leaderboards
            </Link>
            <Link
              href="/compare"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Compare Models
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

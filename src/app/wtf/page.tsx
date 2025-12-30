"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { NeuralNetworkViz } from '@/components/wtf/neural-network-viz'
import { Brain, Zap, DollarSign, Target, Gauge, Code, Sparkles } from 'lucide-react'

export default function WTFPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const sections = [
    {
      id: 'basics',
      icon: Brain,
      title: "WTF is AI Anyway?",
      subtitle: "It's basically spicy autocorrect",
      color: "from-blue-500 to-purple-600",
      explanation: "AI (specifically LLMs) are massive pattern-matching machines. They learned from billions of text examples and now predict what word comes next. That's it. That's the magic. It's autocomplete on steroids with a PhD in everything.",
      funFact: "Fun fact: GPT-4 has 1.76 TRILLION parameters. That's roughly the number of stars in 10 Milky Way galaxies. All to tell you how to make a sandwich."
    },
    {
      id: 'neural',
      icon: Sparkles,
      title: "Neural Networks",
      subtitle: "Lasagna of math",
      color: "from-purple-500 to-pink-600",
      explanation: "Imagine a lasagna where each layer transforms information. Input layer receives data, hidden layers do the magic math (matrix multiplication, baby!), output layer gives you an answer. Each 'neuron' is just a fancy math function that says 'how much do I care about this input?'",
      funFact: "The 'learning' part? Adjusting billions of tiny weights until the model stops being confidently wrong. It's like training a very enthusiastic but confused puppy."
    },
    {
      id: 'tokens',
      icon: Zap,
      title: "WTF are Tokens?",
      subtitle: "Words, but smaller and weird",
      color: "from-pink-500 to-red-600",
      explanation: "Tokens are how AI 'sees' text. A token can be a word, part of a word, or even punctuation. 'Hello' = 1 token. 'Hello, world!' = 4 tokens. Why? Because AI doesn't read like humans - it chunks text into bite-sized pieces. Context window = how many tokens the AI can remember at once.",
      funFact: "Claude can handle 200K tokens. That's like reading an entire novel and still remembering the first sentence. Try that after coffee."
    },
    {
      id: 'benchmarks',
      icon: Target,
      title: "WTF do the Benchmarks Mean?",
      subtitle: "Standardized tests for robots",
      color: "from-red-500 to-orange-600",
      explanation: "MMLU = Massive Multitask Language Understanding (57 subjects from math to philosophy). HumanEval = Can it code? GPQA = Graduate-level science questions. GSM8K = Grade school math (surprisingly hard for AI). These measure if the AI is actually smart or just good at sounding smart.",
      funFact: "DeepSeek R1 scores 96.3% on HumanEval. It codes better than 96% of humans. But ask it to draw ASCII art and it has an existential crisis."
    },
    {
      id: 'context',
      icon: Gauge,
      title: "Context Windows",
      subtitle: "AI's working memory",
      color: "from-orange-500 to-yellow-600",
      explanation: "Context window = how much text the AI can 'see' at once. GPT-4 Turbo: 128K tokens. Claude: 200K. Gemini: 1M. Bigger = better memory but slower & pricier. It's like RAM for your brain. More RAM = more browser tabs before your computer starts crying.",
      funFact: "Fun fact: Gemini's 1M token context is like reading 'War and Peace' 3 times and remembering every detail. Meanwhile, I forget why I opened the fridge."
    },
    {
      id: 'cost',
      icon: DollarSign,
      title: "WTF is Cost Per Million Tokens?",
      subtitle: "The AI tax",
      color: "from-yellow-500 to-green-600",
      explanation: "Every time you use an AI, you're buying tokens. Input tokens (what you send) + Output tokens (what it responds) = your bill. GPT-4: $10-30/M tokens. Claude: $3-15/M. DeepSeek: $0.55/M (it's basically free wtf). The math: 1M tokens ≈ 750K words ≈ a novel. So you're paying ~$3-30 per novel's worth of conversation.",
      funFact: "DeepSeek R1 is so cheap it costs less than a coffee to have a 100-page conversation. The future is weird."
    },
    {
      id: 'parameters',
      icon: Code,
      title: "Parameters",
      subtitle: "Size matters (kind of)",
      color: "from-green-500 to-teal-600",
      explanation: "Parameters = the 'knobs' the AI adjusts during training. More parameters ≠ always better (see: DeepSeek R1 with 'only' 671B params beating models with trillions). It's like saying a 10GB app is better than a 1GB app. Sometimes the smaller one just works smarter. Quality > quantity.",
      funFact: "GPT-4 allegedly has 1.76T parameters. That's more 'settings' than there are people on Earth. And yet it still can't count how many 'r's are in 'strawberry'."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <Header />

      <main className="container py-12 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-20"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block text-8xl mb-4"
          >
            🤯
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              WTF
            </span>{" "}
            is AI?
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            You know it's a big deal. You see the headlines. But{" "}
            <span className="text-primary font-semibold">what does it all mean?</span>
            <br />
            Let's break it down with pretty graphics and minimal BS.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-sm text-muted-foreground">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              For humans who aren't robots
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              Also funny if you're a dev
            </span>
            <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20">
              3D graphics included
            </span>
          </div>
        </motion.div>

        {/* Neural Network Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              This is What's Happening Inside
            </h2>
            <p className="text-lg text-muted-foreground">
              A neural network doing its thing. Rotate it. It's interactive. You're welcome.
            </p>
          </div>
          <NeuralNetworkViz />
          <p className="text-center text-sm text-muted-foreground mt-4 italic">
            Each glowing ball is a "neuron" (math function). The lines are connections. Data flows left to right. Magic happens in the middle.
          </p>
        </motion.div>

        {/* Concepts Grid */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Concepts, Decoded
            </h2>
            <p className="text-lg text-muted-foreground">
              Click any card to expand. Prepare for enlightenment (or at least mild understanding).
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section, index) => {
              const Icon = section.icon
              const isActive = activeSection === section.id

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: isActive ? 1 : 1.02 }}
                  onClick={() => setActiveSection(isActive ? null : section.id)}
                  className={`
                    relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500
                    ${isActive
                      ? 'bg-gradient-to-br ' + section.color + ' border-transparent shadow-2xl shadow-primary/30'
                      : 'bg-card border-border hover:border-primary/50 hover:shadow-xl'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      p-3 rounded-xl transition-all duration-500
                      ${isActive ? 'bg-white/20' : 'bg-primary/10'}
                    `}>
                      <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-primary'}`} />
                    </div>

                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-1 ${isActive ? 'text-white' : 'text-foreground'}`}>
                        {section.title}
                      </h3>
                      <p className={`text-sm ${isActive ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`mt-6 space-y-4 ${isActive ? 'text-white' : ''}`}>
                      <p className="leading-relaxed">
                        {section.explanation}
                      </p>
                      <div className={`
                        p-4 rounded-lg italic text-sm
                        ${isActive ? 'bg-white/10' : 'bg-primary/5'}
                      `}>
                        {section.funFact}
                      </div>
                    </div>
                  </motion.div>

                  <div className="mt-4 text-sm">
                    <span className={`
                      ${isActive ? 'text-white/60' : 'text-muted-foreground'}
                    `}>
                      {isActive ? '▼ Click to close' : '▶ Click to expand'}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center space-y-6 p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-2 border-primary/20"
        >
          <div className="text-6xl mb-4">🎓</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Still Confused? That's Normal.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI is complicated. These visualizations are simplified. But now you know enough to sound smart at parties.
            Check out the leaderboards to see which models are actually good at this stuff.
          </p>
          <motion.a
            href="/leaderboards"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
          >
            Check the Leaderboards →
          </motion.a>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

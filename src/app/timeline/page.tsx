import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Zap, DollarSign, Brain, Code, Database, Cpu, Globe, Building2 } from 'lucide-react';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'LLM Evolution Timeline - AI Models Universe',
  description: 'Comprehensive developer-focused timeline of large language model progression from 2015 to 2025',
};

// Provider branding configurations
const getProviderBadge = (provider: string) => {
  const providerStyles: Record<string, { bg: string; text: string; border: string }> = {
    'OpenAI': { bg: 'bg-emerald-950/50', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    'Anthropic': { bg: 'bg-orange-950/50', text: 'text-orange-400', border: 'border-orange-500/30' },
    'Google': { bg: 'bg-blue-950/50', text: 'text-blue-400', border: 'border-blue-500/30' },
    'Google Research': { bg: 'bg-blue-950/50', text: 'text-blue-400', border: 'border-blue-500/30' },
    'Meta': { bg: 'bg-indigo-950/50', text: 'text-indigo-400', border: 'border-indigo-500/30' },
    'xAI': { bg: 'bg-gray-950/50', text: 'text-gray-300', border: 'border-gray-500/30' },
    'DeepSeek': { bg: 'bg-green-950/50', text: 'text-green-400', border: 'border-green-500/30' },
    'Alibaba': { bg: 'bg-red-950/50', text: 'text-red-400', border: 'border-red-500/30' },
    'Microsoft': { bg: 'bg-cyan-950/50', text: 'text-cyan-400', border: 'border-cyan-500/30' },
    'Research': { bg: 'bg-purple-950/50', text: 'text-purple-400', border: 'border-purple-500/30' },
    'Allen AI': { bg: 'bg-teal-950/50', text: 'text-teal-400', border: 'border-teal-500/30' },
    'fast.ai': { bg: 'bg-pink-950/50', text: 'text-pink-400', border: 'border-pink-500/30' },
  };

  const style = providerStyles[provider] || { bg: 'bg-slate-950/50', text: 'text-slate-400', border: 'border-slate-500/30' };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border ${style.bg} ${style.border} ${style.text} transition-all duration-300 hover:shadow-lg hover:shadow-${provider.toLowerCase().replace(' ', '-')}/20 hover:scale-105`}>
      <Building2 className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
      <span className="font-semibold text-xs tracking-wide">{provider}</span>
    </div>
  );
};

export default function TimelinePage() {
  const milestones = [
    {
      date: '2015-06',
      model: 'Attention Mechanism',
      provider: 'Research',
      milestone: 'Pre-Transformer Era',
      description: 'Bahdanau et al. introduce attention mechanism for neural machine translation',
      devInfo: {
        architecture: 'Seq2seq with attention',
        impact: 'Foundation for transformer architecture',
        availability: 'Research paper only',
        significance: 'Enabled models to focus on relevant parts of input',
      },
      color: 'from-gray-500 to-gray-600',
    },
    {
      date: '2017-06',
      model: 'Transformer Architecture',
      provider: 'Google Research',
      milestone: 'Attention Is All You Need',
      description: 'Vaswani et al. introduce the transformer architecture',
      devInfo: {
        architecture: 'Self-attention mechanism, encoder-decoder',
        parameters: '65M (base), 213M (large)',
        contextWindow: 512,
        impact: 'Revolutionized NLP, foundation of all modern LLMs',
        availability: 'Research paper, TensorFlow implementation',
        keyFeature: 'Parallelizable training, better long-range dependencies',
      },
      color: 'from-blue-400 to-blue-500',
    },
    {
      date: '2017-12',
      model: 'ULMFiT',
      provider: 'fast.ai',
      milestone: 'Transfer Learning for NLP',
      description: 'Universal Language Model Fine-tuning introduces transfer learning to NLP',
      devInfo: {
        architecture: 'AWD-LSTM',
        impact: 'Proved transfer learning works for NLP',
        availability: 'Open source, fastai library',
        trainingData: 'Wikipedia',
        keyFeature: 'Discriminative fine-tuning, gradual unfreezing',
      },
      color: 'from-purple-400 to-purple-500',
    },
    {
      date: '2018-02',
      model: 'ELMo',
      provider: 'Allen AI',
      milestone: 'Contextual Embeddings',
      description: 'Embeddings from Language Models - first major contextual word embeddings',
      devInfo: {
        architecture: 'Bidirectional LSTM',
        parameters: '93.6M',
        availability: 'Open source, TensorFlow Hub',
        trainingData: '1B Word Benchmark',
        keyFeature: 'Context-dependent word representations',
      },
      color: 'from-green-400 to-green-500',
    },
    {
      date: '2018-06',
      model: 'GPT-1',
      provider: 'OpenAI',
      parameters: '117M',
      contextWindow: 512,
      milestone: 'Generative Pre-training',
      description: 'First GPT model - proves generative pre-training works',
      devInfo: {
        architecture: 'Transformer decoder',
        trainingData: 'BooksCorpus (4.5GB text)',
        trainingTokens: '~1B tokens',
        availability: 'Research paper, weights not initially released',
        apiAccess: 'No',
        fineTuning: 'Manual implementation required',
        maxTokens: 512,
        layers: 12,
        keyFeature: 'Task-agnostic pre-training + task-specific fine-tuning',
      },
      color: 'from-blue-500 to-blue-600',
    },
    {
      date: '2018-10',
      model: 'BERT Base',
      provider: 'Google',
      parameters: '110M',
      contextWindow: 512,
      milestone: 'Bidirectional Training',
      description: 'Bidirectional Encoder Representations from Transformers',
      devInfo: {
        architecture: 'Transformer encoder (bidirectional)',
        trainingData: 'BooksCorpus + Wikipedia (3.3B words)',
        availability: 'Open source, TensorFlow',
        apiAccess: 'No official API',
        fineTuning: 'Full fine-tuning supported',
        layers: 12,
        hiddenSize: 768,
        attentionHeads: 12,
        keyFeature: 'Masked language modeling, bidirectional context',
        useCases: 'Classification, NER, question answering',
      },
      color: 'from-orange-500 to-orange-600',
    },
    {
      date: '2019-02',
      model: 'GPT-2 Small',
      provider: 'OpenAI',
      parameters: '117M',
      contextWindow: 1024,
      milestone: 'Scale Begins',
      description: 'Smallest GPT-2 variant released',
      devInfo: {
        architecture: 'Transformer decoder',
        trainingData: 'WebText (40GB)',
        trainingTokens: '~10B tokens',
        availability: 'Open source (initial release)',
        apiAccess: 'No',
        fineTuning: 'Community implementations',
        layers: 12,
        maxTokens: 1024,
        vocabSize: 50257,
        keyFeature: 'Zero-shot task transfer',
      },
      color: 'from-blue-600 to-blue-700',
    },
    {
      date: '2019-08',
      model: 'GPT-2 1.5B',
      provider: 'OpenAI',
      parameters: '1.5B',
      contextWindow: 1024,
      milestone: 'Responsible Release',
      description: 'Full GPT-2 released after staged rollout due to safety concerns',
      devInfo: {
        architecture: 'Transformer decoder',
        trainingData: 'WebText (40GB, 8M documents)',
        availability: 'Open source',
        apiAccess: 'No',
        fineTuning: 'HuggingFace Transformers support',
        layers: 48,
        hiddenSize: 1600,
        attentionHeads: 25,
        keyFeature: 'Coherent long-form generation',
        deployment: 'Self-hosted only',
      },
      color: 'from-blue-700 to-indigo-600',
    },
    {
      date: '2019-10',
      model: 'T5',
      provider: 'Google',
      parameters: '11B (XXL)',
      contextWindow: 512,
      milestone: 'Text-to-Text Framework',
      description: 'Transfer Text-to-Text Transformer - unified framework',
      devInfo: {
        architecture: 'Encoder-decoder transformer',
        trainingData: 'C4 corpus (750GB)',
        availability: 'Open source, multiple sizes',
        apiAccess: 'Via Google Cloud AI Platform',
        fineTuning: 'Supported across all sizes',
        variants: '60M, 220M, 770M, 3B, 11B',
        keyFeature: 'All tasks as text-to-text',
        deployment: 'Cloud or self-hosted',
      },
      color: 'from-green-600 to-emerald-600',
    },
    {
      date: '2020-05',
      model: 'GPT-3 davinci',
      provider: 'OpenAI',
      parameters: '175B',
      contextWindow: 2048,
      mmlu: 43.9,
      inputCost: 60,
      outputCost: 120,
      milestone: 'API-First Era Begins',
      description: 'Largest language model, API-only access, few-shot learning breakthrough',
      devInfo: {
        architecture: 'Transformer decoder',
        trainingData: 'Common Crawl, WebText2, Books1, Books2, Wikipedia (570GB)',
        trainingTokens: '300B tokens',
        availability: 'API only (closed source)',
        apiAccess: 'Waitlist, then public beta',
        fineTuning: 'Available via API',
        layers: 96,
        hiddenSize: 12288,
        attentionHeads: 96,
        maxTokensOutput: 2048,
        rateLimit: 'Per-account limits',
        keyFeature: 'Few-shot learning, in-context learning',
        endpoints: 'Completions API',
        trainingCutoff: '2019-10',
      },
      color: 'from-purple-500 to-purple-600',
    },
    {
      date: '2020-07',
      model: 'GPT-3 curie',
      provider: 'OpenAI',
      parameters: '6.7B',
      contextWindow: 2048,
      inputCost: 6,
      outputCost: 12,
      milestone: 'Cost Tiers',
      description: 'More affordable GPT-3 variant for simpler tasks',
      devInfo: {
        architecture: 'Transformer decoder',
        availability: 'API only',
        apiAccess: 'Public beta',
        fineTuning: 'Supported',
        layers: 32,
        maxTokensOutput: 2048,
        speedComparison: '~3x faster than davinci',
        useCase: 'Classification, translation, simple tasks',
        keyFeature: 'Balance of speed and capability',
      },
      color: 'from-purple-600 to-purple-700',
    },
    {
      date: '2021-07',
      model: 'Codex (code-davinci-002)',
      provider: 'OpenAI',
      parameters: '12B',
      contextWindow: 8192,
      humanEval: 47.0,
      inputCost: 0,
      milestone: 'Code Generation Era',
      description: 'GPT-3 fine-tuned on code, powers GitHub Copilot',
      devInfo: {
        architecture: 'Transformer decoder',
        trainingData: 'Code from GitHub (54M repositories)',
        availability: 'API (free during beta)',
        apiAccess: 'Limited beta',
        fineTuning: 'Not available',
        languages: '12+ programming languages',
        contextWindow: 8192,
        keyFeature: 'Code completion, code explanation',
        deployment: 'Embedded in GitHub Copilot',
        trainingCutoff: '2021-06',
      },
      color: 'from-cyan-500 to-cyan-700',
    },
    {
      date: '2021-08',
      model: 'GPT-3 davinci-instruct-beta',
      provider: 'OpenAI',
      parameters: '175B',
      contextWindow: 2048,
      milestone: 'Instruction Following',
      description: 'First instruction-tuned GPT-3 model using RLHF',
      devInfo: {
        architecture: 'Transformer decoder + RLHF',
        trainingMethod: 'Reinforcement Learning from Human Feedback',
        availability: 'API only',
        apiAccess: 'Beta testers',
        fineTuning: 'Not available',
        keyFeature: 'Better instruction following, reduced harmful outputs',
        improvement: 'Less verbose, more helpful responses',
      },
      color: 'from-purple-700 to-pink-600',
    },
    {
      date: '2022-01',
      model: 'GPT-3.5 text-davinci-002',
      provider: 'OpenAI',
      parameters: '175B',
      contextWindow: 4096,
      inputCost: 20,
      outputCost: 20,
      milestone: 'RLHF Production',
      description: 'Production instruction-tuned model with extended context',
      devInfo: {
        architecture: 'Transformer decoder + RLHF + PPO',
        availability: 'API',
        apiAccess: 'Public',
        fineTuning: 'Supported',
        contextWindow: 4096,
        maxTokensOutput: 4096,
        trainingMethod: 'Supervised fine-tuning + RLHF',
        keyFeature: 'Better code understanding, extended context',
        endpoints: 'Completions API, Edits API',
        trainingCutoff: '2021-06',
      },
      color: 'from-pink-600 to-rose-600',
    },
    {
      date: '2022-03',
      model: 'GPT-3.5 text-davinci-003',
      provider: 'OpenAI',
      parameters: '175B',
      contextWindow: 4096,
      inputCost: 20,
      outputCost: 20,
      milestone: 'Enhanced Instructions',
      description: 'Improved instruction following and reduced harmful content',
      devInfo: {
        architecture: 'Transformer decoder + enhanced RLHF',
        availability: 'API',
        apiAccess: 'Public',
        fineTuning: 'Supported',
        improvements: 'Better factuality, less making up info',
        keyFeature: 'Improved instruction adherence',
        endpoints: 'Completions API',
        trainingCutoff: '2021-06',
      },
      color: 'from-rose-600 to-red-600',
    },
    {
      date: '2022-11',
      model: 'ChatGPT (gpt-3.5-turbo)',
      provider: 'OpenAI',
      parameters: '175B',
      contextWindow: 4096,
      mmlu: 70.0,
      humanEval: 76.8,
      inputCost: 1.5,
      outputCost: 2.0,
      milestone: 'Conversational AI Mainstream',
      description: 'Chat-optimized model, 100M users in 2 months',
      devInfo: {
        architecture: 'Transformer decoder + RLHF for dialogue',
        availability: 'Web interface + API',
        apiAccess: 'Public API (March 2023)',
        fineTuning: 'Added November 2023',
        contextWindow: 4096,
        maxTokensOutput: 4096,
        costReduction: '10x cheaper than davinci-003',
        functionCalling: 'Added June 2023',
        jsonMode: 'Added November 2023',
        keyFeature: 'Multi-turn conversations, system messages',
        endpoints: 'Chat Completions API',
        trainingCutoff: '2021-09',
        rateLimit: '3,500 requests/min, 90,000 tokens/min',
      },
      color: 'from-green-500 to-green-600',
    },
    {
      date: '2023-02',
      model: 'LLaMA 65B',
      provider: 'Meta',
      parameters: '65B',
      contextWindow: 2048,
      mmlu: 63.4,
      milestone: 'Open Research Models',
      description: 'High-performance open research model',
      devInfo: {
        architecture: 'Transformer decoder',
        trainingData: 'Public datasets only (1.4T tokens)',
        trainingTokens: '1.4T tokens',
        availability: 'Research license (weights leaked)',
        apiAccess: 'No',
        fineTuning: 'Community supported',
        variants: '7B, 13B, 33B, 65B',
        efficiency: 'Trained for longer on less data',
        keyFeature: 'Competitive with larger models',
        deployment: 'Self-hosted only',
        trainingCutoff: '2022-12',
      },
      color: 'from-blue-500 to-blue-700',
    },
    {
      date: '2023-03',
      model: 'GPT-4',
      provider: 'OpenAI',
      parameters: '1.7T (estimated)',
      contextWindow: 8192,
      mmlu: 86.4,
      humanEval: 67.0,
      inputCost: 30,
      outputCost: 60,
      milestone: 'Multimodal Reasoning',
      description: 'First major multimodal LLM with vision capabilities',
      devInfo: {
        architecture: 'Transformer + Mixture of Experts (rumored)',
        availability: 'API + ChatGPT Plus',
        apiAccess: 'Waitlist, then public',
        fineTuning: 'Not available initially',
        contextWindow: 8192,
        maxTokensOutput: 8192,
        visionSupport: 'Images (GPT-4V variant)',
        functionCalling: 'Native support',
        jsonMode: 'Supported',
        keyFeature: 'Advanced reasoning, vision understanding',
        endpoints: 'Chat Completions API',
        trainingCutoff: '2023-12',
        rateLimit: 'Tier-based (10k-300k TPM)',
        safetyImprovement: '82% less harmful responses vs GPT-3.5',
      },
      color: 'from-purple-600 to-purple-700',
    },
    {
      date: '2023-03',
      model: 'GPT-4-32k',
      provider: 'OpenAI',
      parameters: '1.7T (estimated)',
      contextWindow: 32768,
      mmlu: 86.4,
      inputCost: 60,
      outputCost: 120,
      milestone: 'Extended Context Premium',
      description: 'Extended context variant of GPT-4',
      devInfo: {
        architecture: 'Same as GPT-4',
        availability: 'API (limited access)',
        apiAccess: 'Waitlist',
        contextWindow: 32768,
        maxTokensOutput: 32768,
        useCase: 'Long document analysis, large codebases',
        costPremium: '2x GPT-4 base pricing',
        keyFeature: '~50 pages of text context',
      },
      color: 'from-purple-700 to-purple-800',
    },
    {
      date: '2023-06',
      model: 'GPT-3.5-turbo-16k',
      provider: 'OpenAI',
      parameters: '175B',
      contextWindow: 16384,
      mmlu: 70.0,
      inputCost: 3,
      outputCost: 4,
      milestone: 'Affordable Extended Context',
      description: 'Extended context for GPT-3.5 at accessible pricing',
      devInfo: {
        architecture: 'Transformer decoder',
        availability: 'API',
        apiAccess: 'Public',
        fineTuning: 'Supported',
        contextWindow: 16384,
        functionCalling: 'Supported',
        jsonMode: 'Supported',
        keyFeature: 'Affordable long context',
        trainingCutoff: '2021-09',
      },
      color: 'from-green-600 to-green-700',
    },
    {
      date: '2023-07',
      model: 'Claude 2',
      provider: 'Anthropic',
      parameters: 'Undisclosed',
      contextWindow: 100000,
      mmlu: 78.5,
      humanEval: 71.2,
      inputCost: 11.02,
      outputCost: 32.68,
      milestone: '100K Context Revolution',
      description: 'First production model with 100K context window',
      devInfo: {
        architecture: 'Transformer decoder + Constitutional AI',
        trainingMethod: 'RLHF + Constitutional AI',
        availability: 'Web + API',
        apiAccess: 'Public',
        fineTuning: 'Not available',
        contextWindow: 100000,
        maxTokensOutput: 4096,
        tokensProcessed: '~75,000 words in context',
        keyFeature: 'Massive context, harmlessness focus',
        endpoints: 'Messages API',
        trainingCutoff: '2023-01',
        safetyFeatures: 'Constitutional AI, reduced harmful outputs',
      },
      color: 'from-orange-500 to-orange-600',
    },
    {
      date: '2023-07',
      model: 'Llama 2 70B',
      provider: 'Meta',
      parameters: '70B',
      contextWindow: 4096,
      mmlu: 68.9,
      humanEval: 29.9,
      inputCost: 0.9,
      milestone: 'Open Source Commercial',
      description: 'First major open-source model with commercial license',
      devInfo: {
        architecture: 'Transformer decoder',
        trainingData: 'Public data (2T tokens)',
        trainingTokens: '2T tokens',
        availability: 'Open source, permissive license',
        apiAccess: 'Via third parties',
        fineTuning: 'Full weights available',
        variants: '7B, 13B, 70B',
        license: 'Commercial use allowed',
        contextWindow: 4096,
        keyFeature: 'Free commercial use, self-hostable',
        deployment: 'Cloud or on-premises',
        quantization: 'Community 4-bit, 8-bit versions',
        trainingCutoff: '2023-07',
      },
      color: 'from-blue-600 to-indigo-700',
    },
    {
      date: '2023-09',
      model: 'GPT-3.5-turbo-instruct',
      provider: 'OpenAI',
      parameters: '175B',
      contextWindow: 4096,
      inputCost: 1.5,
      outputCost: 2.0,
      milestone: 'Legacy Completions',
      description: 'GPT-3.5 in completions format for backwards compatibility',
      devInfo: {
        architecture: 'Transformer decoder',
        availability: 'API',
        apiFormat: 'Completions API (not Chat)',
        fineTuning: 'Supported',
        useCase: 'Text completion, legacy apps',
        keyFeature: 'Non-chat format for specific use cases',
        trainingCutoff: '2021-09',
      },
      color: 'from-green-700 to-teal-700',
    },
    {
      date: '2023-11',
      model: 'GPT-4 Turbo (1106)',
      provider: 'OpenAI',
      parameters: '1.7T (estimated)',
      contextWindow: 128000,
      mmlu: 86.4,
      humanEval: 87.2,
      inputCost: 10,
      outputCost: 30,
      milestone: '128K Context Breakthrough',
      description: 'Massive context increase and cost reduction',
      devInfo: {
        architecture: 'Optimized transformer',
        availability: 'API + ChatGPT Plus',
        apiAccess: 'Public',
        fineTuning: 'Not available',
        contextWindow: 128000,
        maxTokensOutput: 4096,
        visionSupport: 'GPT-4V integrated',
        functionCalling: 'Improved parallel calls',
        jsonMode: 'Guaranteed JSON output',
        seedParameter: 'Deterministic outputs',
        keyFeature: '300 page context, 3x cheaper than GPT-4',
        trainingCutoff: '2023-04',
        knowledgeUpdate: 'April 2023 (vs Dec 2021)',
      },
      color: 'from-purple-700 to-pink-700',
    },
    {
      date: '2024-01',
      model: 'GPT-3.5-turbo-0125',
      provider: 'OpenAI',
      parameters: '175B',
      contextWindow: 16385,
      mmlu: 70.0,
      humanEval: 76.8,
      inputCost: 0.5,
      outputCost: 1.5,
      milestone: 'Cost Optimization',
      description: 'Updated GPT-3.5 with better accuracy and 50% cost reduction',
      devInfo: {
        architecture: 'Optimized transformer',
        availability: 'API',
        apiAccess: 'Public',
        fineTuning: 'Supported',
        contextWindow: 16385,
        improvements: 'Better task completion, reduced laziness',
        costReduction: '50% vs previous version',
        keyFeature: 'Best value for simple tasks',
        trainingCutoff: '2021-09',
      },
      color: 'from-green-700 to-emerald-800',
    },
    {
      date: '2024-02',
      model: 'Gemini Pro 1.0',
      provider: 'Google',
      parameters: 'Undisclosed',
      contextWindow: 32000,
      mmlu: 79.1,
      inputCost: 0.5,
      outputCost: 1.5,
      milestone: 'Google Enters Race',
      description: 'Google\'s first production LLM API',
      devInfo: {
        architecture: 'Multimodal transformer',
        availability: 'API + Google AI Studio',
        apiAccess: 'Public',
        fineTuning: 'Not initially available',
        contextWindow: 32000,
        multimodal: 'Text, images, video, audio',
        keyFeature: 'Native multimodal understanding',
        endpoints: 'Generative AI API',
        rateLimit: '60 requests/min (free tier)',
        trainingCutoff: '2023-11',
      },
      color: 'from-blue-500 to-indigo-600',
    },
    {
      date: '2024-02',
      model: 'Claude 3 Haiku',
      provider: 'Anthropic',
      parameters: 'Undisclosed',
      contextWindow: 200000,
      mmlu: 75.2,
      humanEval: 75.9,
      inputCost: 0.25,
      outputCost: 1.25,
      milestone: 'Fast AI',
      description: 'Fastest Claude model with instant responses',
      devInfo: {
        architecture: 'Optimized transformer',
        availability: 'API',
        apiAccess: 'Public',
        contextWindow: 200000,
        maxTokensOutput: 4096,
        speed: '3x faster than Claude 2',
        visionSupport: 'Yes',
        keyFeature: 'Near-instant responses, low latency',
        endpoints: 'Messages API',
        trainingCutoff: '2023-08',
      },
      color: 'from-orange-400 to-yellow-500',
    },
    {
      date: '2024-02',
      model: 'Claude 3 Sonnet',
      provider: 'Anthropic',
      parameters: 'Undisclosed',
      contextWindow: 200000,
      mmlu: 79.0,
      humanEval: 73.0,
      inputCost: 3,
      outputCost: 15,
      milestone: 'Balanced Performance',
      description: 'Mid-tier Claude with excellent balance',
      devInfo: {
        architecture: 'Transformer decoder',
        availability: 'API + Claude.ai',
        apiAccess: 'Public',
        contextWindow: 200000,
        maxTokensOutput: 4096,
        visionSupport: 'Yes',
        keyFeature: 'Speed/intelligence balance',
        endpoints: 'Messages API',
        trainingCutoff: '2023-08',
      },
      color: 'from-orange-500 to-orange-700',
    },
    {
      date: '2024-02',
      model: 'Claude 3 Opus',
      provider: 'Anthropic',
      parameters: 'Undisclosed',
      contextWindow: 200000,
      mmlu: 86.8,
      humanEval: 84.9,
      gpqa: 50.4,
      inputCost: 15,
      outputCost: 75,
      milestone: 'GPT-4 Challenger',
      description: 'Matches or exceeds GPT-4 on many benchmarks',
      devInfo: {
        architecture: 'Large transformer decoder',
        availability: 'API + Claude.ai Pro',
        apiAccess: 'Public',
        contextWindow: 200000,
        maxTokensOutput: 4096,
        visionSupport: 'Yes',
        analysisCapability: 'Charts, graphs, screenshots',
        keyFeature: 'Top-tier reasoning, vision',
        endpoints: 'Messages API',
        trainingCutoff: '2023-08',
        batchAPI: 'Supported',
      },
      color: 'from-orange-600 to-red-600',
    },
    {
      date: '2024-04',
      model: 'GPT-4 Turbo (2024-04-09)',
      provider: 'OpenAI',
      parameters: '1.7T (estimated)',
      contextWindow: 128000,
      mmlu: 86.4,
      humanEval: 87.2,
      inputCost: 10,
      outputCost: 30,
      milestone: 'Refined Intelligence',
      description: 'Updated GPT-4 Turbo with improved performance',
      devInfo: {
        architecture: 'Optimized transformer',
        availability: 'API + ChatGPT Plus',
        apiAccess: 'Public',
        fineTuning: 'Experimental',
        contextWindow: 128000,
        maxTokensOutput: 4096,
        visionSupport: 'Integrated',
        functionCalling: 'Enhanced',
        improvements: 'Better task completion',
        trainingCutoff: '2023-12',
      },
      color: 'from-purple-700 to-purple-800',
    },
    {
      date: '2024-05',
      model: 'GPT-4o',
      provider: 'OpenAI',
      parameters: 'Undisclosed',
      contextWindow: 128000,
      mmlu: 87.2,
      humanEval: 90.2,
      inputCost: 2.5,
      outputCost: 10,
      milestone: 'Omni-Modal Era',
      description: 'Native audio, vision, and text in single model',
      devInfo: {
        architecture: 'Unified multimodal transformer',
        availability: 'API + ChatGPT (free & Plus)',
        apiAccess: 'Public',
        fineTuning: 'Supported (text only)',
        contextWindow: 128000,
        maxTokensOutput: 16384,
        audioSupport: 'Native real-time audio I/O',
        visionSupport: 'Native',
        speedImprovement: '2x faster than GPT-4 Turbo',
        costReduction: '75% cheaper than GPT-4 Turbo',
        keyFeature: 'Real-time multimodal interaction',
        endpoints: 'Chat Completions, Realtime API',
        trainingCutoff: '2023-10',
        rateLimit: 'Up to 10k requests/min (tier 5)',
      },
      color: 'from-purple-700 to-pink-600',
    },
    {
      date: '2024-05',
      model: 'Gemini 1.5 Pro',
      provider: 'Google',
      parameters: 'Undisclosed',
      contextWindow: 2000000,
      mmlu: 85.9,
      humanEval: 84.1,
      inputCost: 1.25,
      outputCost: 5.0,
      milestone: '2M Token Context',
      description: 'Unprecedented context window breakthrough',
      devInfo: {
        architecture: 'Sparse mixture-of-experts transformer',
        availability: 'API + Google AI Studio',
        apiAccess: 'Public',
        fineTuning: 'Not available',
        contextWindow: 2000000,
        maxTokensOutput: 8192,
        multimodal: 'Text, images, video, audio, documents',
        videoProcessing: 'Up to 1 hour of video',
        codebaseAnalysis: 'Entire large repositories',
        keyFeature: 'Massive context for long documents',
        endpoints: 'Generative AI API',
        trainingCutoff: '2024-01',
        cachingSupport: 'Context caching available',
      },
      color: 'from-blue-600 to-cyan-600',
    },
    {
      date: '2024-05',
      model: 'Gemini 1.5 Flash',
      provider: 'Google',
      parameters: 'Undisclosed',
      contextWindow: 1000000,
      mmlu: 78.9,
      humanEval: 74.1,
      inputCost: 0.075,
      outputCost: 0.3,
      milestone: 'Fast Multimodal',
      description: 'Fast, affordable model with 1M context',
      devInfo: {
        architecture: 'Efficient transformer',
        availability: 'API + Google AI Studio',
        apiAccess: 'Public',
        contextWindow: 1000000,
        maxTokensOutput: 8192,
        multimodal: 'Text, images, video, audio',
        speed: 'Optimized for low latency',
        keyFeature: 'Best value for high-frequency tasks',
        trainingCutoff: '2024-01',
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      date: '2024-06',
      model: 'Claude 3.5 Sonnet',
      provider: 'Anthropic',
      parameters: 'Undisclosed',
      contextWindow: 200000,
      mmlu: 88.7,
      humanEval: 92.0,
      inputCost: 3,
      outputCost: 15,
      milestone: 'Coding Excellence',
      description: 'Best coding model, beats GPT-4o on many benchmarks',
      devInfo: {
        architecture: 'Advanced transformer',
        availability: 'API + Claude.ai',
        apiAccess: 'Public',
        fineTuning: 'Not available',
        contextWindow: 200000,
        maxTokensOutput: 8192,
        visionSupport: 'Enhanced',
        artifacts: 'Supported (interactive content)',
        sweBench: '64% (highest at time)',
        keyFeature: 'Superior coding, agentic tasks',
        endpoints: 'Messages API',
        trainingCutoff: '2024-04',
        toolUse: 'Advanced function calling',
      },
      color: 'from-orange-600 to-red-600',
    },
    {
      date: '2024-07',
      model: 'GPT-4o mini',
      provider: 'OpenAI',
      parameters: 'Undisclosed',
      contextWindow: 128000,
      mmlu: 82.0,
      humanEval: 87.2,
      inputCost: 0.15,
      outputCost: 0.6,
      milestone: 'Affordable Intelligence',
      description: 'Most cost-efficient small model',
      devInfo: {
        architecture: 'Compact transformer',
        availability: 'API + ChatGPT',
        apiAccess: 'Public',
        fineTuning: 'Supported',
        contextWindow: 128000,
        maxTokensOutput: 16384,
        visionSupport: 'Yes',
        audioSupport: 'Yes',
        costComparison: '60% cheaper than GPT-3.5 Turbo',
        speedComparison: 'Faster than GPT-3.5',
        keyFeature: 'Best price/performance for high volume',
        trainingCutoff: '2023-10',
      },
      color: 'from-pink-500 to-rose-600',
    },
    {
      date: '2024-07',
      model: 'Llama 3.1 405B',
      provider: 'Meta',
      parameters: '405B',
      contextWindow: 128000,
      mmlu: 88.6,
      humanEval: 89.0,
      inputCost: 2.7,
      outputCost: 2.7,
      milestone: 'Open Source Flagship',
      description: 'Largest open source model, rivals closed-source leaders',
      devInfo: {
        architecture: 'Dense transformer decoder',
        trainingData: 'Public + licensed data (15T tokens)',
        trainingTokens: '15T tokens',
        availability: 'Open source, permissive license',
        apiAccess: 'Via providers (Together, Groq, etc)',
        fineTuning: 'Full weights available',
        variants: '8B, 70B, 405B',
        contextWindow: 128000,
        toolUse: 'Native tool calling',
        multilingualSupport: '8 languages',
        keyFeature: 'Competitive with GPT-4, fully open',
        deployment: 'Self-hosted or cloud',
        quantization: '8-bit, 4-bit versions available',
        trainingCutoff: '2023-12',
        license: 'Llama 3.1 Community License',
      },
      color: 'from-blue-700 to-indigo-800',
    },
    {
      date: '2024-09',
      model: 'o1-preview',
      provider: 'OpenAI',
      parameters: 'Undisclosed',
      contextWindow: 128000,
      mmlu: 92.3,
      math: 96.4,
      gpqa: 78.3,
      inputCost: 15,
      outputCost: 60,
      milestone: 'Reasoning Models',
      description: 'Chain-of-thought reasoning for complex problems',
      devInfo: {
        architecture: 'Transformer + extended thinking',
        availability: 'API + ChatGPT Plus/Pro',
        apiAccess: 'Limited release',
        fineTuning: 'Not available',
        contextWindow: 128000,
        maxTokensOutput: 32768,
        thinkingTokens: 'Internal reasoning (not counted)',
        noStreaming: 'Streaming not supported',
        noSystemMessages: 'No system message support',
        visionSupport: 'Not in initial release',
        useCase: 'Math, science, coding, reasoning',
        keyFeature: 'Visible chain-of-thought reasoning',
        trainingCutoff: '2023-10',
        rateLimit: '500 RPM (tier 5)',
      },
      color: 'from-purple-800 to-purple-900',
    },
    {
      date: '2024-09',
      model: 'o1-mini',
      provider: 'OpenAI',
      parameters: 'Undisclosed',
      contextWindow: 128000,
      mmlu: 85.2,
      humanEval: 94.6,
      math: 90.0,
      inputCost: 3,
      outputCost: 12,
      milestone: 'Affordable Reasoning',
      description: 'Faster, cheaper reasoning model for STEM',
      devInfo: {
        architecture: 'Compact reasoning model',
        availability: 'API + ChatGPT Plus/Pro',
        apiAccess: 'Limited release',
        contextWindow: 128000,
        maxTokensOutput: 65536,
        speedComparison: '3-5x faster than o1-preview',
        costComparison: '80% cheaper than o1-preview',
        focusArea: 'STEM, coding, math',
        keyFeature: 'Fast reasoning at lower cost',
        trainingCutoff: '2023-10',
      },
      color: 'from-purple-700 to-indigo-800',
    },
    {
      date: '2024-10',
      model: 'Claude 3.5 Sonnet (Updated)',
      provider: 'Anthropic',
      parameters: 'Undisclosed',
      contextWindow: 200000,
      mmlu: 88.7,
      humanEval: 93.7,
      inputCost: 3,
      outputCost: 15,
      milestone: 'Computer Use',
      description: 'Adds computer use capabilities - can control desktop',
      devInfo: {
        architecture: 'Advanced transformer',
        availability: 'API + Claude.ai',
        apiAccess: 'Public',
        contextWindow: 200000,
        maxTokensOutput: 8192,
        computerUse: 'Beta - can interact with desktop apps',
        visionEnhancements: 'Improved visual reasoning',
        sweBench: '49% verified (industry leading)',
        agentic: 'Enhanced agentic capabilities',
        keyFeature: 'Computer control, better coding',
        trainingCutoff: '2024-04',
      },
      color: 'from-orange-700 to-red-700',
    },
    {
      date: '2024-12',
      model: 'Gemini 2.0 Flash',
      provider: 'Google',
      parameters: 'Undisclosed',
      contextWindow: 1048576,
      mmlu: 71.9,
      humanEval: 74.4,
      inputCost: 0.1,
      outputCost: 0.4,
      milestone: 'Multimodal Output',
      description: 'First model with native image and audio generation',
      devInfo: {
        architecture: 'Multimodal transformer',
        availability: 'API + Google AI Studio',
        apiAccess: 'Public',
        contextWindow: 1048576,
        multimodalOutput: 'Can generate images and speech',
        nativeToolUse: 'Built-in function calling',
        googleSearch: 'Grounding with Search',
        keyFeature: 'Multimodal input AND output',
        trainingCutoff: '2024-08',
      },
      color: 'from-blue-600 to-cyan-700',
    },
    {
      date: '2025-01',
      model: 'DeepSeek R1',
      provider: 'DeepSeek',
      parameters: '671B (MoE)',
      contextWindow: 64000,
      mmlu: 79.8,
      humanEval: 96.3,
      math: 97.3,
      inputCost: 0.55,
      outputCost: 2.19,
      milestone: 'Value Revolution',
      description: 'Exceptional coding and math at breakthrough low pricing',
      devInfo: {
        architecture: 'Mixture-of-Experts (MoE)',
        activeParameters: '37B',
        totalParameters: '671B',
        availability: 'Open source + API',
        apiAccess: 'Public API available',
        fineTuning: 'Weights available',
        contextWindow: 64000,
        reasoningTokens: 'Visible chain of thought',
        license: 'MIT License',
        deployment: 'Self-hosted or API',
        keyFeature: 'GPT-4 level performance at 1/30th cost',
        trainingCutoff: '2024-06',
        chinesePerformance: 'Exceptional',
      },
      color: 'from-green-600 to-emerald-700',
    },
    {
      date: '2025-03',
      model: 'Gemini 2.5 Pro',
      provider: 'Google',
      parameters: 'Undisclosed',
      contextWindow: 1000000,
      mmlu: 89.8,
      humanEval: 91.5,
      math: 89.7,
      inputCost: 10,
      outputCost: 40,
      milestone: 'Deep Think',
      description: 'Introduces Deep Think mode for complex reasoning',
      devInfo: {
        architecture: 'Advanced transformer',
        availability: 'API + Google AI Studio',
        apiAccess: 'Public',
        contextWindow: 1000000,
        deepThinkMode: 'Step-by-step reasoning mode',
        multimodal: 'Text, vision, audio',
        contextCaching: 'Supported',
        keyFeature: 'Deep Think for complex problems',
        trainingCutoff: '2025-01',
      },
      color: 'from-blue-700 to-indigo-700',
    },
    {
      date: '2025-08',
      model: 'GPT-5',
      provider: 'OpenAI',
      parameters: 'Undisclosed',
      contextWindow: 200000,
      mmlu: 90.4,
      humanEval: 93.5,
      math: 91.8,
      inputCost: 15,
      outputCost: 60,
      milestone: 'Fifth Generation',
      description: 'Major architectural improvements and reasoning advances',
      devInfo: {
        architecture: 'Next-gen transformer',
        availability: 'API + ChatGPT Plus/Pro',
        apiAccess: 'Staged rollout',
        fineTuning: 'Enterprise only (initially)',
        contextWindow: 200000,
        maxTokensOutput: 32768,
        visionSupport: 'Enhanced',
        audioSupport: 'Native',
        multimodalOutput: 'Images planned',
        agenticCapabilities: 'Improved',
        keyFeature: 'Significant reasoning improvements',
        trainingCutoff: '2025-03',
      },
      color: 'from-purple-700 to-purple-900',
    },
    {
      date: '2025-09',
      model: 'Qwen 3 72B',
      provider: 'Alibaba',
      parameters: '72B',
      contextWindow: 131072,
      mmlu: 87.8,
      humanEval: 89.2,
      math: 84.5,
      inputCost: 0.9,
      outputCost: 0.9,
      milestone: 'Chinese AI Leader',
      description: 'Third generation with multilingual excellence',
      devInfo: {
        architecture: 'Dense transformer',
        availability: 'Open source + API',
        apiAccess: 'Via Alibaba Cloud',
        fineTuning: 'Weights available',
        contextWindow: 131072,
        multilingualSupport: '29 languages',
        chinesePerformance: 'Industry leading',
        license: 'Apache 2.0',
        deployment: 'Self-hosted or cloud',
        keyFeature: 'Best Chinese + multilingual performance',
        trainingCutoff: '2025-07',
      },
      color: 'from-red-600 to-red-800',
    },
    {
      date: '2025-10',
      model: 'Grok 4 Fast',
      provider: 'xAI',
      parameters: 'Undisclosed',
      contextWindow: 2000000,
      mmlu: 84.2,
      humanEval: 86.4,
      inputCost: 2,
      outputCost: 8,
      milestone: 'Maximum Context',
      description: 'World record 2M token context with fast inference',
      devInfo: {
        architecture: 'Optimized transformer',
        availability: 'API + X Premium',
        apiAccess: 'Limited beta',
        contextWindow: 2000000,
        realTimeData: 'Live X/Twitter integration',
        imageGeneration: 'Via Grok image',
        keyFeature: 'Largest context window available',
        trainingCutoff: '2025-09',
      },
      color: 'from-gray-700 to-gray-900',
    },
    {
      date: '2025-11',
      model: 'DeepSeek V3.2',
      provider: 'DeepSeek',
      parameters: '671B (MoE)',
      contextWindow: 128000,
      mmlu: 85.7,
      humanEval: 95.8,
      math: 96.2,
      inputCost: 0.6,
      outputCost: 2.4,
      milestone: 'Enhanced MoE',
      description: 'Improved mixture-of-experts for better efficiency',
      devInfo: {
        architecture: 'Enhanced MoE',
        activeParameters: '37B',
        availability: 'Open source + API',
        apiAccess: 'Public',
        fineTuning: 'Supported',
        contextWindow: 128000,
        license: 'MIT',
        improvements: 'Better reasoning, lower latency',
        keyFeature: 'Best coding performance per dollar',
        trainingCutoff: '2025-08',
      },
      color: 'from-green-700 to-emerald-800',
    },
    {
      date: '2025-11',
      model: 'GPT-5.1',
      provider: 'OpenAI',
      parameters: 'Undisclosed',
      contextWindow: 200000,
      mmlu: 91.2,
      humanEval: 94.3,
      math: 93.1,
      inputCost: 18,
      outputCost: 72,
      milestone: 'Adaptive Reasoning',
      description: 'Dynamically adjusts thinking time based on complexity',
      devInfo: {
        architecture: 'Advanced transformer',
        availability: 'API + ChatGPT Pro',
        apiAccess: 'Public',
        contextWindow: 200000,
        maxTokensOutput: 32768,
        adaptiveThinking: 'Auto-adjusts reasoning depth',
        visionSupport: 'Enhanced',
        keyFeature: 'Dynamic computational allocation',
        trainingCutoff: '2025-05',
        releaseContext: 'Released during November AI race',
      },
      color: 'from-purple-800 to-purple-950',
    },
    {
      date: '2025-11',
      model: 'Gemini 3 Pro',
      provider: 'Google',
      parameters: 'Undisclosed',
      contextWindow: 1000000,
      mmlu: 91.5,
      humanEval: 93.8,
      math: 93.2,
      inputCost: 15,
      outputCost: 60,
      milestone: '1500 Elo Breakthrough',
      description: 'First model to break 1500 LMArena Elo barrier',
      devInfo: {
        architecture: 'Next-gen transformer',
        availability: 'API + Gemini Advanced',
        apiAccess: 'Public',
        contextWindow: 1000000,
        maxTokensOutput: 8192,
        lmArenaElo: 1501,
        deepThink: 'Enhanced reasoning mode',
        multimodal: 'Advanced text, vision, audio',
        keyFeature: 'Highest Elo rating achieved',
        trainingCutoff: '2025-08',
        agenticFeatures: 'Multi-step task execution',
      },
      color: 'from-blue-800 to-indigo-900',
    },
    {
      date: '2025-11',
      model: 'Claude Sonnet 4.5',
      provider: 'Anthropic',
      parameters: 'Undisclosed',
      contextWindow: 1000000,
      mmlu: 88.3,
      humanEval: 93.7,
      inputCost: 3,
      outputCost: 15,
      milestone: 'SWE-bench Champion',
      description: 'Tops real-world GitHub issue resolution at 77.2%',
      devInfo: {
        architecture: 'Advanced transformer',
        availability: 'API + Claude.ai',
        apiAccess: 'Public',
        fineTuning: 'Enterprise (limited)',
        contextWindow: 1000000,
        maxTokensOutput: 16384,
        sweBench: '77.2% (industry record)',
        computerUse: 'Enhanced desktop interaction',
        agenticCapabilities: 'Multi-step coding tasks',
        batchAPI: 'Supported',
        keyFeature: 'Best real-world coding performance',
        trainingCutoff: '2025-07',
        messagesBatching: 'Up to 10k requests',
      },
      color: 'from-orange-700 to-red-800',
    },
    {
      date: '2025-11',
      model: 'Claude Opus 4.5',
      provider: 'Anthropic',
      parameters: 'Undisclosed',
      contextWindow: 200000,
      mmlu: 88.7,
      humanEval: 92.0,
      math: 90.5,
      inputCost: 15,
      outputCost: 75,
      milestone: 'Agentic AI',
      description: 'Optimized for long-running agents and complex workflows',
      devInfo: {
        architecture: 'Large transformer',
        availability: 'API + Claude.ai Pro',
        apiAccess: 'Public',
        contextWindow: 200000,
        maxTokensOutput: 16384,
        agenticOptimization: 'Multi-hour task execution',
        computerUse: 'Advanced',
        toolUse: 'Enhanced multi-tool orchestration',
        visionAnalysis: 'Deep visual reasoning',
        arcAgi2: '37.6% (lower than GPT-5.2)',
        keyFeature: 'Best for autonomous agents',
        trainingCutoff: '2025-08',
      },
      color: 'from-orange-800 to-red-900',
    },
    {
      date: '2025-11',
      model: 'Claude 4.5 Haiku',
      provider: 'Anthropic',
      parameters: 'Undisclosed',
      contextWindow: 200000,
      mmlu: 78.5,
      humanEval: 82.3,
      inputCost: 0.8,
      outputCost: 4,
      milestone: 'Fast + Affordable',
      description: 'Fastest Claude 4.5 with excellent value',
      devInfo: {
        architecture: 'Efficient transformer',
        availability: 'API + Claude.ai',
        apiAccess: 'Public',
        contextWindow: 200000,
        maxTokensOutput: 8192,
        latency: 'Sub-second responses',
        visionSupport: 'Yes',
        keyFeature: 'Best for high-volume, low-latency',
        trainingCutoff: '2025-07',
      },
      color: 'from-orange-500 to-yellow-600',
    },
    {
      date: '2025-11',
      model: 'Grok 4.1',
      provider: 'xAI',
      parameters: 'Undisclosed',
      contextWindow: 131072,
      mmlu: 88.9,
      humanEval: 90.7,
      inputCost: 5,
      outputCost: 15,
      milestone: 'AI Race November',
      description: 'Released during intense 6-day November competition',
      devInfo: {
        architecture: 'Transformer',
        availability: 'API + X Premium',
        apiAccess: 'Limited',
        contextWindow: 131072,
        realTimeData: 'Live X integration',
        imageGeneration: 'Built-in',
        uncensored: 'Less filtering than competitors',
        keyFeature: 'Real-time knowledge, X integration',
        trainingCutoff: '2025-11',
        releaseContext: 'Part of Nov 2025 AI blitz',
      },
      color: 'from-gray-800 to-gray-950',
    },
    {
      date: '2025-12',
      model: 'GPT-5.2',
      provider: 'OpenAI',
      parameters: 'Undisclosed',
      contextWindow: 200000,
      mmlu: 92.8,
      humanEval: 95.1,
      math: 94.7,
      gpqa: 67.5,
      inputCost: 20,
      outputCost: 80,
      milestone: 'Code Red Response',
      description: 'Released after internal "code red" to reclaim leadership',
      devInfo: {
        architecture: 'Advanced transformer',
        availability: 'API + ChatGPT Plus/Pro',
        apiAccess: 'Public',
        contextWindow: 200000,
        maxTokensOutput: 32768,
        arcAgi2: '54.2% (highest score)',
        arcAgi2Thinking: '52.9% with thinking mode',
        visionSupport: 'Enhanced',
        audioSupport: 'Native',
        functionCalling: 'Advanced parallel execution',
        professionalTasks: 'Optimized for spreadsheets, code, presentations',
        keyFeature: 'Highest reasoning benchmarks',
        trainingCutoff: '2025-06',
        releaseContext: 'Response to Gemini 3 competition',
      },
      color: 'from-purple-900 to-black',
    },
    {
      date: '2025-12',
      model: 'Gemini 3 Flash',
      provider: 'Google',
      parameters: 'Undisclosed',
      contextWindow: 1000000,
      mmlu: 85.4,
      humanEval: 87.2,
      inputCost: 0.15,
      outputCost: 0.6,
      milestone: 'Frontier Speed',
      description: 'Frontier intelligence built for speed at exceptional value',
      devInfo: {
        architecture: 'Optimized transformer',
        availability: 'API + Gemini',
        apiAccess: 'Public',
        contextWindow: 1000000,
        maxTokensOutput: 8192,
        multimodal: 'Text, vision, audio',
        speedOptimization: 'Ultra-low latency',
        costEfficiency: 'Best price/performance ratio',
        keyFeature: 'Fast frontier model at low cost',
        trainingCutoff: '2025-10',
      },
      color: 'from-blue-900 to-indigo-950',
    },
  ];

  const stats = {
    totalMilestones: milestones.length,
    timespan: '2015-2025',
    peakMMlu: '92.8%',
    maxContext: '2M tokens',
    bestCoding: '96.3% HumanEval',
    lowestCost: '$0.075/1M tokens',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent animate-in fade-in duration-700">
            LLM Development Timeline
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-in fade-in duration-700 delay-100">
            Comprehensive developer-focused chronicle of LLM evolution from foundational research to production APIs
          </p>
          <p className="text-xs md:text-sm text-muted-foreground animate-in fade-in duration-700 delay-200">
            {stats.totalMilestones} Major Milestones • {stats.timespan} • Detailed Technical Specifications
          </p>

          {/* Enhanced Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto mt-8">
            <div className="bg-card rounded-lg p-3 md:p-4 border shadow-sm hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-primary mb-2 mx-auto group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">{stats.peakMMlu}</div>
              <div className="text-xs text-muted-foreground">Peak MMLU</div>
            </div>
            <div className="bg-card rounded-lg p-3 md:p-4 border shadow-sm hover:shadow-xl hover:shadow-purple-600/20 hover:border-purple-600/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Brain className="h-5 w-5 md:h-6 md:w-6 text-purple-600 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{stats.maxContext}</div>
              <div className="text-xs text-muted-foreground">Max Context</div>
            </div>
            <div className="bg-card rounded-lg p-3 md:p-4 border shadow-sm hover:shadow-xl hover:shadow-green-600/20 hover:border-green-600/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Code className="h-5 w-5 md:h-6 md:w-6 text-green-600 mb-2 mx-auto group-hover:rotate-6 transition-transform duration-300" />
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{stats.bestCoding}</div>
              <div className="text-xs text-muted-foreground">Best Coding</div>
            </div>
            <div className="bg-card rounded-lg p-3 md:p-4 border shadow-sm hover:shadow-xl hover:shadow-emerald-600/20 hover:border-emerald-600/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-emerald-600 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{stats.lowestCost}</div>
              <div className="text-xs text-muted-foreground">Lowest Cost</div>
            </div>
            <div className="bg-card rounded-lg p-3 md:p-4 border shadow-sm hover:shadow-xl hover:shadow-blue-600/20 hover:border-blue-600/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Database className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mb-2 mx-auto group-hover:-rotate-12 transition-transform duration-300" />
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">15T</div>
              <div className="text-xs text-muted-foreground">Max Training Tokens</div>
            </div>
            <div className="bg-card rounded-lg p-3 md:p-4 border shadow-sm hover:shadow-xl hover:shadow-orange-600/20 hover:border-orange-600/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Globe className="h-5 w-5 md:h-6 md:w-6 text-orange-600 mb-2 mx-auto group-hover:rotate-180 transition-transform duration-500" />
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">1501</div>
              <div className="text-xs text-muted-foreground">Peak Elo Rating</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-600 to-pink-600 shadow-lg shadow-purple-600/50"></div>

            {/* Milestones */}
            <div className="space-y-6 md:space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={`${milestone.date}-${milestone.model}`}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-card rounded-lg p-4 md:p-5 border shadow-lg hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] group" style={{ animation: `fadeIn 0.7s ease-in ${index * 50}ms both` }}>
                      {/* Header */}
                      <div className="mb-3">
                        <div className={`flex flex-wrap items-center gap-2 mb-3 justify-start ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                          {getProviderBadge(milestone.provider)}
                          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${milestone.color} text-white shadow-lg`}>
                            {milestone.milestone}
                          </div>
                        </div>
                        <div className={`text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                          <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">{milestone.model}</h3>
                          <div className="text-xs text-muted-foreground">
                            {new Date(milestone.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm mb-4 leading-relaxed">{milestone.description}</p>

                      {/* Developer Information */}
                      {milestone.devInfo && (
                        <div className="space-y-3 border-t pt-3">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wide">
                            <Code className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-300" />
                            <span>Developer Info</span>
                          </div>

                          {/* Core Specs Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            {milestone.parameters && (
                              <div className="bg-muted/50 rounded p-2 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
                                <div className="text-muted-foreground">Parameters</div>
                                <div className="font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">{milestone.parameters}</div>
                              </div>
                            )}
                            {milestone.contextWindow && (
                              <div className="bg-muted/50 rounded p-2 hover:bg-blue-600/10 hover:shadow-md hover:shadow-blue-600/20 transition-all duration-300 cursor-pointer">
                                <div className="text-muted-foreground">Context</div>
                                <div className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{milestone.contextWindow.toLocaleString()}</div>
                              </div>
                            )}
                            {milestone.mmlu && (
                              <div className="bg-muted/50 rounded p-2 hover:bg-green-600/10 hover:shadow-md hover:shadow-green-600/20 transition-all duration-300 cursor-pointer">
                                <div className="text-muted-foreground">MMLU</div>
                                <div className="font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{milestone.mmlu}%</div>
                              </div>
                            )}
                            {milestone.humanEval && (
                              <div className="bg-muted/50 rounded p-2 hover:bg-purple-600/10 hover:shadow-md hover:shadow-purple-600/20 transition-all duration-300 cursor-pointer">
                                <div className="text-muted-foreground">HumanEval</div>
                                <div className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{milestone.humanEval}%</div>
                              </div>
                            )}
                            {milestone.inputCost && (
                              <div className="bg-muted/50 rounded p-2 hover:bg-emerald-600/10 hover:shadow-md hover:shadow-emerald-600/20 transition-all duration-300 cursor-pointer">
                                <div className="text-muted-foreground">Cost/1M</div>
                                <div className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">${milestone.inputCost}</div>
                              </div>
                            )}
                            {milestone.devInfo.apiAccess && (
                              <div className="bg-muted/50 rounded p-2 hover:bg-orange-600/10 hover:shadow-md hover:shadow-orange-600/20 transition-all duration-300 cursor-pointer">
                                <div className="text-muted-foreground">API Access</div>
                                <div className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{milestone.devInfo.apiAccess}</div>
                              </div>
                            )}
                          </div>

                          {/* Additional Dev Details */}
                          <div className="space-y-1 text-xs">
                            {milestone.devInfo.architecture && (
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-muted-foreground flex items-center gap-1">
                                  <Cpu className="h-3 w-3" />
                                  Architecture:
                                </span>
                                <span className="font-medium">{milestone.devInfo.architecture}</span>
                              </div>
                            )}
                            {milestone.devInfo.availability && (
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-muted-foreground flex items-center gap-1">
                                  <Globe className="h-3 w-3" />
                                  Availability:
                                </span>
                                <span className="font-medium">{milestone.devInfo.availability}</span>
                              </div>
                            )}
                            {milestone.devInfo.fineTuning && (
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-muted-foreground flex items-center gap-1">
                                  <Zap className="h-3 w-3" />
                                  Fine-tuning:
                                </span>
                                <span className="font-medium">{milestone.devInfo.fineTuning}</span>
                              </div>
                            )}
                            {milestone.devInfo.trainingCutoff && (
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-muted-foreground flex items-center gap-1">
                                  <Database className="h-3 w-3" />
                                  Training Cutoff:
                                </span>
                                <span className="font-medium">{milestone.devInfo.trainingCutoff}</span>
                              </div>
                            )}
                            {milestone.devInfo.keyFeature && (
                              <div className="mt-2 p-2.5 bg-primary/10 rounded-md border border-primary/20 text-primary font-medium flex items-start gap-2">
                                <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span>{milestone.devInfo.keyFeature}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-purple-600 border-4 border-background z-10 shadow-lg"></div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-lg p-8 shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">Explore Current Models</h2>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Compare the latest models, explore detailed benchmarks, and find the perfect API for your application.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/leaderboards/llm"
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center gap-2"
              >
                View LLM Leaderboard
                <ArrowRight className="h-4 w-4" />
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
      </div>
    </div>
  );
}

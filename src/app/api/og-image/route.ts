import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''

  // Detect platform from user agent
  let imagePath: string

  if (userAgent.includes('facebookexternalhit') || userAgent.includes('facebot')) {
    // Facebook prefers 1200x630
    imagePath = 'og-image_med.png'
  } else if (userAgent.includes('twitterbot') || userAgent.includes('twitter')) {
    // Twitter supports larger images
    imagePath = 'og-image_lrg.png'
  } else if (userAgent.includes('linkedinbot') || userAgent.includes('linkedin')) {
    // LinkedIn prefers 1200x627, we'll use medium
    imagePath = 'og-image_med.png'
  } else if (userAgent.includes('whatsapp') || userAgent.includes('wa.me')) {
    // WhatsApp prefers smaller, optimized images
    imagePath = 'og-image_med.png'
  } else if (userAgent.includes('slackbot') || userAgent.includes('slack')) {
    // Slack works well with medium size
    imagePath = 'og-image_med.png'
  } else if (userAgent.includes('discordbot') || userAgent.includes('discord')) {
    // Discord supports larger images
    imagePath = 'og-image_lrg.png'
  } else if (userAgent.includes('telegrambot') || userAgent.includes('telegram')) {
    // Telegram prefers medium size
    imagePath = 'og-image_med.png'
  } else if (userAgent.includes('pinterestbot') || userAgent.includes('pinterest')) {
    // Pinterest supports larger, detailed images
    imagePath = 'og-image_lrg.png'
  } else {
    // Default fallback - use medium for best compatibility
    imagePath = 'og-image_med.png'
  }

  try {
    const publicPath = join(process.cwd(), 'public', imagePath)
    const imageBuffer = await readFile(publicPath)

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Served-Image': imagePath, // Debug header
      },
    })
  } catch (error) {
    console.error('Error serving OG image:', error)
    return new NextResponse('Image not found', { status: 404 })
  }
}

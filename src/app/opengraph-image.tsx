import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'LLM-refs - AI Models Universe'
export const size = {
  width: 3840,
  height: 2160,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          position: 'relative',
        }}
      >
        {/* Gradient Orbs */}
        <div
          style={{
            position: 'absolute',
            width: '1200px',
            height: '1200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
            top: '-400px',
            left: '-200px',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '1000px',
            height: '1000px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            bottom: '-300px',
            right: '-100px',
            filter: 'blur(100px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '200px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              marginBottom: '80px',
            }}
          >
            <div
              style={{
                fontSize: '140px',
                background: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: '900',
                letterSpacing: '-0.05em',
              }}
            >
              ✨
            </div>
            <h1
              style={{
                fontSize: '220px',
                background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: '900',
                letterSpacing: '-0.05em',
                margin: 0,
              }}
            >
              LLM-refs
            </h1>
          </div>

          <p
            style={{
              fontSize: '80px',
              color: '#a0a0a0',
              textAlign: 'center',
              maxWidth: '2800px',
              lineHeight: 1.4,
              margin: '0 0 80px 0',
            }}
          >
            The Ultimate AI Model Reference Platform
          </p>

          <div
            style={{
              display: 'flex',
              gap: '60px',
              marginBottom: '100px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div
                style={{
                  fontSize: '60px',
                  background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: '700',
                }}
              >
                500+
              </div>
              <div style={{ fontSize: '50px', color: '#666' }}>AI Models</div>
            </div>
            <div style={{ fontSize: '60px', color: '#333' }}>•</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div
                style={{
                  fontSize: '60px',
                  background: 'linear-gradient(to right, #a855f7, #ec4899)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: '700',
                }}
              >
                50+
              </div>
              <div style={{ fontSize: '50px', color: '#666' }}>Benchmarks</div>
            </div>
            <div style={{ fontSize: '60px', color: '#333' }}>•</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div
                style={{
                  fontSize: '60px',
                  background: 'linear-gradient(to right, #ec4899, #ef4444)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: '700',
                }}
              >
                25+
              </div>
              <div style={{ fontSize: '50px', color: '#666' }}>Providers</div>
            </div>
          </div>

          <div
            style={{
              fontSize: '50px',
              color: '#808080',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <span>Created by</span>
            <span
              style={{
                color: '#ffffff',
                fontWeight: '600',
              }}
            >
              Daniel Minton
            </span>
            <span style={{ color: '#333' }}>•</span>
            <span style={{ color: '#10b981' }}>Available for Hire</span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            fontSize: '45px',
            color: '#404040',
          }}
        >
          llm-refs.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

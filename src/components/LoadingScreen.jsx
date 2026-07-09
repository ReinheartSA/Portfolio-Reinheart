import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const LOADING_DURATION = 4
const FADE_OUT_DURATION = 0.45

function LoadingScreen({ onComplete }) {
  const overlayRef = useRef(null)
  const fillRef = useRef(null)
  const textRef = useRef(null)
  const [phase, setPhase] = useState('loading')
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    if (!fillRef.current) {
      return undefined
    }

    const fillTween = gsap.fromTo(
      fillRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: LOADING_DURATION,
        ease: 'power2.inOut',
        transformOrigin: 'left center',
        onComplete: () => setPhase('done'),
      },
    )

    return () => {
      fillTween.kill()
    }
  }, [])

  useEffect(() => {
    if (phase !== 'done' || !textRef.current || !overlayRef.current) {
      return undefined
    }

    const ctx = gsap.context(() => {
      const popTimeline = gsap.timeline()

      popTimeline
        .fromTo(
          textRef.current,
          { scale: 0.86, y: 8, opacity: 0 },
          {
            scale: 1.08,
            y: 0,
            opacity: 1,
            duration: 0.16,
            ease: 'power2.out',
          },
        )
        .to(textRef.current, {
          scale: 1,
          duration: 0.14,
          ease: 'power1.out',
        })

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: FADE_OUT_DURATION,
        delay: 0.7,
        ease: 'power2.out',
        onComplete: () => {
          setIsHidden(true)
          onComplete?.()
        },
      })
    }, overlayRef)

    return () => {
      ctx.revert()
    }
  }, [onComplete, phase])

  if (isHidden) {
    return null
  }

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-live="polite"
      aria-busy={phase !== 'done'}
      className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-950/85 backdrop-blur-2xl"
    >
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-5 px-6 text-center">
        <div className="space-y-3">
          <p
            ref={textRef}
            className="text-base font-medium tracking-[0.3em] text-white/90 uppercase"
          >
            {phase === 'done' ? 'Done!' : 'Loading...'}
          </p>

          <div className="h-4 w-72 overflow-hidden rounded-full border border-white/15 bg-white/10 p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] sm:w-96">
            <div
              ref={fillRef}
              className="h-full w-full origin-left rounded-full bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 shadow-[0_0_24px_rgba(129,140,248,0.35)]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

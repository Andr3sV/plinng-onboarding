"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide {
  title: string
  description: string
  videoUrl: string
}

interface ProfileSlidesProps {
  slides: Slide[]
}

export function ProfileSlides({ slides }: ProfileSlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Swipe support for mobile
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: Event) => {
      const touchEvent = e as TouchEvent
      touchStartX = touchEvent.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: Event) => {
      const touchEvent = e as TouchEvent
      touchEndX = touchEvent.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      if (touchEndX < touchStartX - 50) {
        nextSlide()
      }
      if (touchEndX > touchStartX + 50) {
        prevSlide()
      }
    }

    const container = document.querySelector('[data-slides-container]')
    if (container) {
      container.addEventListener('touchstart', handleTouchStart)
      container.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [nextSlide, prevSlide])

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="overflow-hidden rounded-lg" data-slides-container>
          <div
            className="flex transition-transform duration-300 ease-in-out touch-manipulation"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">{slide.title}</h3>
                  <p className="text-muted-foreground">{slide.description}</p>
                </div>
                <VideoPlayer src={slide.videoUrl} title={slide.title} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Anterior</span>
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-4">
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-muted hover:bg-muted-foreground/50"
            )}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center text-sm text-muted-foreground">
        {currentSlide + 1} de {slides.length}
      </div>
    </div>
  )
}


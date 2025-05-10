"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface InternetStepProps {
  icon: React.ReactNode
  color: string
  step: string
  title: string
  description: string
  visual: React.ReactNode
}

export default function InternetStep({ icon, color, step, title, description, visual }: InternetStepProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-20 transition-all duration-1000",
        color,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-4">{icon}</div>
            <h2 className="text-xl uppercase tracking-wider mb-2 font-bold">{step}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
            <p className="text-lg md:text-xl">{description}</p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="transform transition-all duration-500 hover:scale-105">{visual}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

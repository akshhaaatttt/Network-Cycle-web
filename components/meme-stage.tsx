"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface MemeStageProps {
  icon: React.ReactNode
  color: string
  title: string
  heading: string
  description: string
  imageSrc: string
  imageAlt: string
  hasTransform?: boolean
  hasSpreadAnimation?: boolean
  hasVariants?: boolean
  hasFadeEffect?: boolean
}

export default function MemeStage({
  icon,
  color,
  title,
  heading,
  description,
  imageSrc,
  imageAlt,
  hasTransform = false,
  hasSpreadAnimation = false,
  hasVariants = false,
  hasFadeEffect = false,
}: MemeStageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
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
            <h2 className="text-xl uppercase tracking-wider mb-2 font-bold">{title}</h2>
            <h3 className="text-3xl md:text-4xl font-display mb-4">{heading}</h3>
            <p className="text-lg md:text-xl">{description}</p>
          </div>
          <div className="md:w-1/2 relative">
            {hasTransform ? (
              <div
                className="relative cursor-pointer transition-all duration-500 transform-gpu"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0)",
                }}
              >
                <Image
                  src={imageSrc === "/placeholder.svg?height=300&width=400" ? "/images/success-kid.png" : imageSrc}
                  alt={imageAlt}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-xl object-cover"
                />
                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                    <p className="text-white text-xl font-bold">Meme Created!</p>
                  </div>
                )}
              </div>
            ) : hasSpreadAnimation ? (
              <div className="relative">
                <Image
                  src={imageSrc === "/placeholder.svg?height=300&width=400" ? "/images/success-kid.png" : imageSrc}
                  alt={imageAlt}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-xl object-cover"
                />
                {isVisible && (
                  <>
                    <div className="absolute -top-10 -right-10 animate-ping-slow delay-300 bg-blue-500 p-3 rounded-full">
                      <span className="text-xl">🐦</span>
                    </div>
                    <div className="absolute -bottom-10 -right-5 animate-ping-slow delay-600 bg-pink-500 p-3 rounded-full">
                      <span className="text-xl">📸</span>
                    </div>
                    <div className="absolute -bottom-5 -left-10 animate-ping-slow delay-900 bg-orange-500 p-3 rounded-full">
                      <span className="text-xl">📱</span>
                    </div>
                  </>
                )}
              </div>
            ) : hasVariants ? (
              <div className="grid grid-cols-3 gap-2">
                <Image
                  src={imageSrc === "/placeholder.svg?height=300&width=400" ? "/images/success-kid.png" : imageSrc}
                  alt={`${imageAlt} 1`}
                  width={150}
                  height={150}
                  className="rounded-lg shadow-xl transform rotate-[-5deg] object-cover"
                />
                <Image
                  src={imageSrc === "/placeholder.svg?height=300&width=400" ? "/images/success-kid.png" : imageSrc}
                  alt={`${imageAlt} 2`}
                  width={150}
                  height={150}
                  className="rounded-lg shadow-xl transform translate-y-4 object-cover"
                  style={{ filter: "hue-rotate(30deg)" }}
                />
                <Image
                  src={imageSrc === "/placeholder.svg?height=300&width=400" ? "/images/success-kid.png" : imageSrc}
                  alt={`${imageAlt} 3`}
                  width={150}
                  height={150}
                  className="rounded-lg shadow-xl transform rotate-[5deg] object-cover"
                  style={{ filter: "saturate(1.5)" }}
                />
              </div>
            ) : hasFadeEffect ? (
              <div className="relative">
                <Image
                  src={imageSrc === "/placeholder.svg?height=300&width=400" ? "/images/success-kid.png" : imageSrc}
                  alt={imageAlt}
                  width={400}
                  height={300}
                  className={cn(
                    "rounded-lg shadow-xl transition-all duration-1000 object-cover",
                    isVisible ? "grayscale opacity-50" : "",
                  )}
                />
                {isVisible && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-4xl font-bold opacity-50">R.I.P.</p>
                  </div>
                )}
              </div>
            ) : (
              <Image
                src={imageSrc === "/placeholder.svg?height=300&width=400" ? "/images/success-kid.png" : imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                className="rounded-lg shadow-xl object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

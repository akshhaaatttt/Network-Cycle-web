"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function BlinkingMeme() {
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 300)
    }, 3000)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <div className="relative w-64 h-64">
      <div className={`transition-opacity duration-300 ${isBlinking ? "opacity-0" : "opacity-100"}`}>
        <Image
          src="/images/success-kid.png"
          alt="Success Kid meme"
          width={256}
          height={256}
          className="rounded-lg shadow-xl object-cover"
        />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isBlinking ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/images/success-kid.png"
          alt="Success Kid meme blinking"
          width={256}
          height={256}
          className="rounded-lg shadow-xl object-cover brightness-90"
          style={{ filter: "brightness(0.9) contrast(0.9)" }}
        />
      </div>
    </div>
  )
}

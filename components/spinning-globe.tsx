"use client"

import { useEffect, useRef } from "react"

export default function SpinningGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Draw the globe
    const drawGlobe = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.4

      // Draw globe
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(100, 120, 255, 0.1)"
      ctx.fill()

      // Draw latitude lines
      for (let i = 1; i <= 5; i++) {
        const latRadius = (radius / 5) * i
        ctx.beginPath()
        ctx.arc(centerX, centerY, latRadius, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
        ctx.stroke()
      }

      // Draw longitude lines
      const time = Date.now() / 3000 // Rotation speed
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + time

        ctx.beginPath()
        ctx.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle))
        ctx.lineTo(centerX + radius * Math.cos(angle + Math.PI), centerY + radius * Math.sin(angle + Math.PI))
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
        ctx.stroke()
      }

      // Draw connection points
      for (let i = 0; i < 20; i++) {
        const angle1 = Math.random() * Math.PI * 2
        const angle2 = Math.random() * Math.PI * 2
        const r1 = Math.random() * radius
        const r2 = Math.random() * radius

        const x1 = centerX + r1 * Math.cos(angle1)
        const y1 = centerY + r1 * Math.sin(angle1)
        const x2 = centerX + r2 * Math.cos(angle2)
        const y2 = centerY + r2 * Math.sin(angle2)

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = "rgba(100, 200, 255, 0.1)"
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(x1, y1, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(100, 200, 255, 0.5)"
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x2, y2, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(100, 200, 255, 0.5)"
        ctx.fill()
      }
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      drawGlobe()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

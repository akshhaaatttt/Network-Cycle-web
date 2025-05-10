"use client"

import { useState, useEffect } from "react"
import { ComputerIcon, WifiIcon, BuildingIcon, SearchIcon, ServerIcon, LayoutIcon, ArrowRightIcon } from "lucide-react"

export default function FlowChart() {
  const [activeStep, setActiveStep] = useState(-1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 0 : prev + 1))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    { icon: <ComputerIcon />, label: "Device", color: "bg-blue-600" },
    { icon: <WifiIcon />, label: "Router", color: "bg-green-600" },
    { icon: <BuildingIcon />, label: "ISP", color: "bg-yellow-500" },
    { icon: <SearchIcon />, label: "DNS", color: "bg-orange-500" },
    { icon: <ServerIcon />, label: "Server", color: "bg-red-600" },
    { icon: <LayoutIcon />, label: "Browser", color: "bg-purple-600" },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeStep === index ? step.color : "bg-gray-700"
            } ${activeStep === index ? "scale-110" : "scale-100"}`}
            onMouseEnter={() => setActiveStep(index)}
          >
            <div className="text-white">
              {step.icon}
              <div className="text-xs mt-1 text-center">{step.label}</div>
            </div>
          </div>
          {index < steps.length - 1 && <ArrowRightIcon className="w-8 h-8 mx-2 text-white" />}
        </div>
      ))}
    </div>
  )
}

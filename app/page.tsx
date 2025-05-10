import {
  ArrowDownIcon,
  GlobeIcon,
  ComputerIcon,
  WifiIcon,
  BuildingIcon,
  SearchIcon,
  ServerIcon,
  LayoutIcon,
} from "lucide-react"
import InternetStep from "@/components/internet-step"
import FlowChart from "@/components/flow-chart"
import SpinningGlobe from "@/components/spinning-globe"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 to-indigo-700 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <SpinningGlobe />
        </div>
        <div className="relative z-10">
          <GlobeIcon className="w-16 h-16 mb-6 text-blue-300" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">How the Internet Works 🌍</h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 mx-auto">
            A step-by-step visual guide from your device to the destination server.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-2xl mx-auto mb-12">
            <p className="text-xl font-medium">
              Let's trace what happens when you type www.google.com in your browser!
            </p>
          </div>
          <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-indigo-100 transition-colors mx-auto">
            Explore the Journey <ArrowDownIcon size={20} />
          </button>
        </div>
      </section>

      {/* Step 1: Device Sends a Request */}
      <InternetStep
        icon={<ComputerIcon className="w-12 h-12" />}
        color="bg-blue-600"
        step="Step 1"
        title="You Type a URL"
        description="It all starts when you enter a web address into your browser and hit Enter."
        visual={
          <div className="bg-gray-800 rounded-lg p-2 w-full max-w-md mx-auto shadow-xl">
            <div className="bg-gray-700 rounded-t-md p-2 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-white rounded-b-md p-2">
              <div className="bg-gray-100 rounded-md flex items-center p-2 gap-2">
                <SearchIcon className="w-4 h-4 text-gray-500" />
                <div className="text-black font-medium">www.google.com</div>
              </div>
            </div>
          </div>
        }
      />

      {/* Step 2: Router Forwards the Request */}
      <InternetStep
        icon={<WifiIcon className="w-12 h-12" />}
        color="bg-green-600"
        step="Step 2"
        title="Request Goes to Your Router"
        description="Your device sends the request to your local router, usually through Wi-Fi or Ethernet."
        visual={
          <div className="relative">
            <div className="bg-gray-200 rounded-lg p-4 w-48 h-48 mx-auto flex items-center justify-center">
              <WifiIcon className="w-24 h-24 text-green-600" />
              <div className="absolute -top-4 -left-4 animate-ping-slow delay-300 bg-blue-500 p-2 rounded-full">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="absolute -top-4 -right-4 animate-ping-slow delay-600 bg-blue-500 p-2 rounded-full">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-ping-slow delay-900 bg-blue-500 p-2 rounded-full">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 animate-ping-slow delay-1200 bg-blue-500 p-2 rounded-full">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        }
      />

      {/* Step 3: ISP Takes Over */}
      <InternetStep
        icon={<BuildingIcon className="w-12 h-12" />}
        color="bg-yellow-500"
        step="Step 3"
        title="Internet Service Provider (ISP)"
        description="The router sends the request to your ISP — they handle your internet connection and route the request further."
        visual={
          <div className="relative">
            <div className="bg-gray-200 rounded-lg p-4 w-64 h-64 mx-auto flex flex-col items-center justify-center">
              <BuildingIcon className="w-32 h-32 text-yellow-600" />
              <div className="text-black font-bold mt-2">ISP</div>
              <div className="absolute top-1/2 -left-16 w-16 h-2 bg-blue-500"></div>
              <div className="absolute top-1/2 -right-16 w-16 h-2 bg-blue-500"></div>
            </div>
          </div>
        }
      />

      {/* Step 4: DNS Resolution */}
      <InternetStep
        icon={<SearchIcon className="w-12 h-12" />}
        color="bg-orange-500"
        step="Step 4"
        title="DNS Finds the IP Address"
        description="The DNS server translates www.google.com into a machine-readable IP address like 142.250.77.206."
        visual={
          <div className="bg-gray-800 rounded-lg p-4 w-full max-w-md mx-auto shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-bold">DNS Lookup</div>
              <SearchIcon className="w-6 h-6 text-orange-400" />
            </div>
            <div className="bg-gray-700 p-3 rounded-md mb-3 flex justify-between">
              <div>www.google.com</div>
              <div className="text-orange-400">→</div>
            </div>
            <div className="bg-gray-700 p-3 rounded-md flex justify-between">
              <div>142.250.77.206</div>
              <div className="text-green-400">✓</div>
            </div>
          </div>
        }
      />

      {/* Step 5: Request Reaches the Server */}
      <InternetStep
        icon={<ServerIcon className="w-12 h-12" />}
        color="bg-red-600"
        step="Step 5"
        title="Server Responds with the Website"
        description="The request reaches Google's server. It processes your request and sends back the webpage data."
        visual={
          <div className="relative">
            <div className="bg-gray-800 rounded-lg p-4 w-64 h-64 mx-auto flex flex-col items-center justify-center gap-4">
              <div className="bg-gray-700 w-full h-12 rounded-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <div className="bg-gray-700 w-full h-12 rounded-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <div className="bg-gray-700 w-full h-12 rounded-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <div className="text-sm font-mono mt-2">Google Server</div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-blue-500"></div>
            </div>
          </div>
        }
      />

      {/* Step 6: Browser Renders the Page */}
      <InternetStep
        icon={<LayoutIcon className="w-12 h-12" />}
        color="bg-purple-600"
        step="Step 6"
        title="The Website Loads"
        description="The HTML, CSS, and JS are sent back to your device — and the website appears on your screen."
        visual={
          <div className="bg-white rounded-lg p-4 w-full max-w-md mx-auto shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                G
              </div>
              <div className="bg-gray-100 rounded-full px-4 py-2 flex-1">
                <div className="h-4 w-3/4 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="h-6 w-1/2 bg-blue-500 rounded-md mb-3"></div>
            <div className="h-4 w-full bg-gray-300 rounded-md mb-2"></div>
            <div className="h-4 w-full bg-gray-300 rounded-md mb-2"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded-md mb-4"></div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-12 bg-gray-200 rounded-md"></div>
              <div className="h-12 bg-gray-200 rounded-md"></div>
              <div className="h-12 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        }
      />

      {/* Bonus Section: Quick Recap */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Recap</h2>
        <FlowChart />
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg">Made with ❤️ for CodeQuest Day 2 – by Internet Explorer</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-white hover:text-blue-300 transition-colors">
            GitHub
          </a>
          <a href="#" className="text-white hover:text-blue-300 transition-colors">
            Inovact
          </a>
          <a href="#" className="text-white hover:text-blue-300 transition-colors">
            Netlify
          </a>
        </div>
      </footer>
    </main>
  )
}

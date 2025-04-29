"use client"
import { Search, Sun, Wind, MessageSquare, Settings, X } from "lucide-react"
import Link from "next/link"
import NigeriaMap from "@/components/nigeria-map"
import { useState } from "react"

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-[#4ade80]">Climate</span>Base.ai
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex gap-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/signup" className="hover:text-gray-300">
              Signup
            </Link>
          </nav>
          <button className="rounded-full p-1 bg-white/10 hover:bg-white/20">
            <Settings className="h-5 w-5 text-white" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start pt-8 px-4 gap-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Nigerian states for data"
            className="w-full py-2 px-4 pr-10 rounded-full bg-white text-black"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Data Type Toggle */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-[#ffb84d] hover:bg-[#ffa326] text-black px-6 py-2 rounded-full font-medium">
            <Sun className="h-5 w-5" /> Solar Radiation
          </button>
          <button className="flex items-center gap-2 bg-[#1a1a1a] border border-[#4d88ff] hover:bg-[#4d88ff]/10 text-white px-6 py-2 rounded-full font-medium">
            <Wind className="h-5 w-5" /> Wind Speed
          </button>
        </div>

        {/* Map Visualization */}
        <div className="w-full max-w-4xl mt-2 bg-[#252525] rounded-xl p-4 relative">
          <h2 className="text-lg font-semibold mb-4 text-center">Solar Radiation Map - Nigeria</h2>

          <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-gray-700">
            {/* Nigeria Map with Solar Radiation Heat Map */}
            <div className="w-full h-full bg-[#1e1e1e] relative">
              <NigeriaMap dataType="solar" />
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-4 flex-wrap">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#ffdd00]"></div>
              <span className="text-sm">Low (4-5 kWh/m²)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#ffb700]"></div>
              <span className="text-sm">Medium (5-6 kWh/m²)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#ff8c00]"></div>
              <span className="text-sm">High (6-7 kWh/m²)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#ff0000]"></div>
              <span className="text-sm">Very High (7+ kWh/m²)</span>
            </div>
          </div>
        </div>

        {/* State Data */}
        <div className="w-full max-w-4xl bg-[#252525] rounded-xl p-4 mt-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Lagos State - Solar Radiation</h3>
            <span className="bg-[#ffb700] text-black px-2 py-1 rounded-lg text-xs font-medium">5.4 kWh/m²</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Monthly chart */}
            <div className="bg-[#1e1e1e] p-3 rounded-lg">
              <h4 className="text-sm text-gray-400 mb-3">Monthly Solar Radiation (kWh/m²)</h4>
              <div className="h-40 flex items-end justify-around">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                  (month, index) => {
                    // Values represent solar radiation levels for each month (sample data)
                    const heights = [60, 65, 80, 85, 75, 55, 45, 50, 65, 70, 75, 65]
                    const colors = [
                      "#ffb700",
                      "#ff8c00",
                      "#ff8c00",
                      "#ff0000",
                      "#ff0000",
                      "#ffb700",
                      "#ffdd00",
                      "#ffdd00",
                      "#ffb700",
                      "#ff8c00",
                      "#ff8c00",
                      "#ffb700",
                    ]

                    return (
                      <div key={month} className="flex flex-col items-center group">
                        <div
                          style={{ height: `${heights[index]}%`, backgroundColor: colors[index] }}
                          className="w-5 rounded-t"
                        ></div>
                        <span className="text-[10px] mt-1">{month}</span>
                      </div>
                    )
                  },
                )}
              </div>
            </div>

            {/* Daily pattern chart */}
            <div className="bg-[#1e1e1e] p-3 rounded-lg">
              <h4 className="text-sm text-gray-400 mb-3">Daily Solar Pattern (Today)</h4>
              <div className="relative h-40">
                <svg width="100%" height="100%" viewBox="0 0 300 120">
                  {/* X axis */}
                  <line x1="30" y1="100" x2="280" y2="100" stroke="#555" />
                  {/* Y axis */}
                  <line x1="30" y1="20" x2="30" y2="100" stroke="#555" />

                  {/* Sun pattern curve */}
                  <path
                    d="M30,100 C70,100 80,95 100,85 C130,70 160,30 170,25 C180,20 200,20 210,25 C220,30 250,70 280,100"
                    fill="none"
                    stroke="#ffb700"
                    strokeWidth="2"
                  />
                  <path
                    d="M30,100 C70,100 80,95 100,85 C130,70 160,30 170,25 C180,20 200,20 210,25 C220,30 250,70 280,100"
                    fill="url(#sunPatternGradient)"
                    fillOpacity="0.3"
                    strokeWidth="0"
                  />

                  {/* Time markers */}
                  {["6AM", "9AM", "Noon", "3PM", "6PM"].map((time, index) => {
                    const xPos = 30 + index * 62.5
                    return (
                      <g key={time}>
                        <line x1={xPos} y1="100" x2={xPos} y2="105" stroke="#555" />
                        <text x={xPos - 10} y="115" fill="#999" fontSize="10">
                          {time}
                        </text>
                      </g>
                    )
                  })}

                  {/* Value indicators */}
                  {[0, 2, 4, 6, 8].map((value, index) => {
                    const yPos = 100 - index * 20
                    return (
                      <g key={value}>
                        <line x1="25" y1={yPos} x2="30" y2={yPos} stroke="#555" />
                        <text x="10" y={yPos + 3} fill="#999" fontSize="10">
                          {value}
                        </text>
                      </g>
                    )
                  })}

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="sunPatternGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffb700" />
                      <stop offset="100%" stopColor="#ffb700" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1e1e1e] p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Annual Average</span>
                <Sun className="h-4 w-4 text-[#ffb700]" />
              </div>
              <div className="text-xl font-semibold mt-1">5.4 kWh/m²</div>
              <div className="text-xs text-[#4ade80]">Good solar potential</div>
            </div>

            <div className="bg-[#1e1e1e] p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Peak Month</span>
                <Sun className="h-4 w-4 text-[#ff0000]" />
              </div>
              <div className="text-xl font-semibold mt-1">April (7.2 kWh/m²)</div>
              <div className="text-xs text-[#4ade80]">Excellent generation potential</div>
            </div>

            <div className="bg-[#1e1e1e] p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Minimum Month</span>
                <Sun className="h-4 w-4 text-[#ffdd00]" />
              </div>
              <div className="text-xl font-semibold mt-1">July (4.2 kWh/m²)</div>
              <div className="text-xs text-yellow-400">Moderate generation potential</div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Assistant Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={toggleChat}
          className="bg-[#4ade80] hover:bg-[#3fcb70] text-black rounded-full p-3 shadow-lg transition-all hover:shadow-xl"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      </div>

      {/* AI Chat Panel */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-[#252525] rounded-lg shadow-xl border border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between bg-[#1a1a1a] p-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[#4ade80]" />
              <h3 className="font-medium">Climate Assistant</h3>
            </div>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-3 max-h-96 overflow-y-auto">
            <div className="bg-[#1e1e1e] p-2 rounded-lg mb-2">
              <p className="text-sm">
                Welcome to ClimateBase.ai! Ask me about solar radiation or wind data for any state in Nigeria.
              </p>
            </div>

            <div className="bg-[#4ade80]/10 p-2 rounded-lg mb-2 ml-auto max-w-[80%]">
              <p className="text-sm">What's the solar potential for Lagos?</p>
            </div>

            <div className="bg-[#1e1e1e] p-2 rounded-lg mb-2">
              <p className="text-sm">
                Lagos has good solar potential with an annual average of 5.4 kWh/m². The peak radiation occurs in April
                (7.2 kWh/m²) and the lowest in July (4.2 kWh/m²) during the rainy season. A typical 1kW solar system
                could generate approximately 1,950 kWh annually in Lagos.
              </p>
            </div>

            <div className="bg-[#4ade80]/10 p-2 rounded-lg mb-2 ml-auto max-w-[80%]">
              <p className="text-sm">How does it compare to Kano?</p>
            </div>

            <div className="bg-[#1e1e1e] p-2 rounded-lg mb-2">
              <p className="text-sm">
                Kano has significantly higher solar potential with an annual average of 6.8 kWh/m², which is about 26%
                higher than Lagos. Due to its location in the northern region with less cloud cover and rainfall, Kano
                maintains consistently high solar radiation throughout the year, particularly from October to May.
              </p>
            </div>
          </div>

          <div className="p-3 border-t border-gray-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask about solar or wind data..."
                className="w-full bg-[#1e1e1e] rounded-full py-2 px-4 text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4ade80]">
                <MessageSquare className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Data Download Section */}
      <section className="w-full max-w-4xl mx-auto bg-[#252525] rounded-xl p-6 mt-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Download Climate Data</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1e1e1e] p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
              <Sun className="h-5 w-5 text-[#ffb700]" /> Solar Radiation Data
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Select Region</label>
                <select className="w-full bg-[#252525] border border-gray-700 rounded-md p-2 text-sm">
                  <option value="all">All Nigerian States</option>
                  <option value="north">Northern States</option>
                  <option value="south">Southern States</option>
                  <option value="lagos">Lagos State</option>
                  <option value="kano">Kano State</option>
                  <option value="abuja">FCT Abuja</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Time Period</label>
                <select className="w-full bg-[#252525] border border-gray-700 rounded-md p-2 text-sm">
                  <option value="2024">2024 (Current Year)</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="5year">5-Year Average (2019-2024)</option>
                  <option value="10year">10-Year Average (2014-2024)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Data Format</label>
                <div className="flex gap-3">
                  <button className="bg-[#1a1a1a] border border-[#4ade80] hover:bg-[#4ade80]/10 text-white px-3 py-1 rounded-md text-sm flex-1">
                    CSV
                  </button>
                  <button className="bg-[#1a1a1a] border border-gray-700 hover:bg-white/5 text-white px-3 py-1 rounded-md text-sm flex-1">
                    JSON
                  </button>
                  <button className="bg-[#1a1a1a] border border-gray-700 hover:bg-white/5 text-white px-3 py-1 rounded-md text-sm flex-1">
                    Excel
                  </button>
                </div>
              </div>

              <button className="w-full bg-[#4ade80] hover:bg-[#3fcb70] text-black font-medium py-2 rounded-md mt-2 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Solar Data
              </button>
            </div>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
              <Wind className="h-5 w-5 text-[#4d88ff]" /> Wind Speed Data
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Select Region</label>
                <select className="w-full bg-[#252525] border border-gray-700 rounded-md p-2 text-sm">
                  <option value="all">All Nigerian States</option>
                  <option value="north">Northern States</option>
                  <option value="south">Southern States</option>
                  <option value="coastal">Coastal States</option>
                  <option value="lagos">Lagos State</option>
                  <option value="sokoto">Sokoto State</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Time Period</label>
                <select className="w-full bg-[#252525] border border-gray-700 rounded-md p-2 text-sm">
                  <option value="2024">2024 (Current Year)</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="5year">5-Year Average (2019-2024)</option>
                  <option value="10year">10-Year Average (2014-2024)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Data Format</label>
                <div className="flex gap-3">
                  <button className="bg-[#1a1a1a] border border-[#4d88ff] hover:bg-[#4d88ff]/10 text-white px-3 py-1 rounded-md text-sm flex-1">
                    CSV
                  </button>
                  <button className="bg-[#1a1a1a] border border-gray-700 hover:bg-white/5 text-white px-3 py-1 rounded-md text-sm flex-1">
                    JSON
                  </button>
                  <button className="bg-[#1a1a1a] border border-gray-700 hover:bg-white/5 text-white px-3 py-1 rounded-md text-sm flex-1">
                    Excel
                  </button>
                </div>
              </div>

              <button className="w-full bg-[#4d88ff] hover:bg-[#3d78ef] text-black font-medium py-2 rounded-md mt-2 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Wind Data
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-[#1e1e1e] p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Bulk Data Downloads</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#252525] p-3 rounded-md border border-gray-700 hover:border-[#4ade80] transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Complete Dataset</span>
                <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">2.4 GB</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">Solar & wind data for all Nigerian states (2014-2024)</p>
              <button className="w-full bg-[#1a1a1a] hover:bg-white/5 text-white text-sm py-1 rounded flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download ZIP
              </button>
            </div>

            <div className="bg-[#252525] p-3 rounded-md border border-gray-700 hover:border-[#4ade80] transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Research Package</span>
                <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">1.8 GB</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">Hourly data with research documentation and methodology</p>
              <button className="w-full bg-[#1a1a1a] hover:bg-white/5 text-white text-sm py-1 rounded flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download ZIP
              </button>
            </div>

            <div className="bg-[#252525] p-3 rounded-md border border-gray-700 hover:border-[#4ade80] transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">GIS Package</span>
                <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">3.1 GB</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">Shapefiles and GeoJSON with climate data attributes</p>
              <button className="w-full bg-[#1a1a1a] hover:bg-white/5 text-white text-sm py-1 rounded flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download ZIP
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-400">
          <p className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-info"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Data is provided under CC BY-NC 4.0 license. For commercial use, please contact us.
          </p>
          <p className="mt-1">
            Last updated: April 15, 2025 | Source: Nigerian Meteorological Agency (NiMet) and Sirius-x Energy Weather Stations.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto p-4 text-center text-sm text-gray-400">
        <p>© 2025 ClimateBase.ai - Solar & Wind Data Platform for Nigeria</p>
      </footer>
    </div>
  )
}

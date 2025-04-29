"use client"
import NigeriaMap from "./nigeria-map"

export default function WindView() {
  return (
    <div className="w-full max-w-4xl mt-2 bg-[#252525] rounded-xl p-4 relative">
      <h2 className="text-lg font-semibold mb-4 text-center">Wind Speed Map - Nigeria</h2>

      <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-gray-700">
        {/* Nigeria Map with Wind Speed Heat Map */}
        <div className="w-full h-full bg-[#1e1e1e] relative">
          <NigeriaMap dataType="wind" />
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4 flex-wrap">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#80aaff]"></div>
          <span className="text-sm">Low (2-4 m/s)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#4d88ff]"></div>
          <span className="text-sm">Medium (4-6 m/s)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#0044cc]"></div>
          <span className="text-sm">High (6+ m/s)</span>
        </div>
      </div>
    </div>
  )
}

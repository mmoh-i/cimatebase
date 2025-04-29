"use client"
import { MessageSquare, X } from "lucide-react"

interface AIAssistantProps {
  isOpen: boolean
  onClose: () => void
}

export default function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  if (!isOpen) return null

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-[#252525] rounded-lg shadow-xl border border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between bg-[#1a1a1a] p-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-[#4ade80]" />
          <h3 className="font-medium">Climate Assistant</h3>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="p-3 max-h-96 overflow-y-auto">
        <div className="bg-[#1e1e1e] p-2 rounded-lg mb-2">
          <p className="text-sm">How can I help you understand climate data for Nigerian states?</p>
        </div>

        <div className="bg-[#4ade80]/10 p-2 rounded-lg mb-2 ml-auto max-w-[80%]">
          <p className="text-sm">Tell me about Lagos climate trends</p>
        </div>

        <div className="bg-[#1e1e1e] p-2 rounded-lg mb-2">
          <p className="text-sm">
            Lagos is experiencing rising temperatures with an average increase of 1.8°C since 1990. Rainfall patterns
            have become more erratic with a 12% overall increase, leading to more frequent flooding events. The coastal
            areas are particularly vulnerable to sea level rise, which threatens infrastructure and communities.
          </p>
        </div>
      </div>

      <div className="p-3 border-t border-gray-700">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask about climate data..."
            className="w-full bg-[#1e1e1e] rounded-full py-2 px-4 text-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4ade80]">
            <MessageSquare className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

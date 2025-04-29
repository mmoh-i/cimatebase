"use client"
import { useState } from "react"

interface NigeriaMapProps {
  dataType: "solar" | "wind"
}

export default function NigeriaMap({ dataType }: NigeriaMapProps) {
  const [selectedState, setSelectedState] = useState<string | null>(null)

  // Solar radiation data by state (sample data)
  const solarData: Record<string, { value: number; level: string; color: string }> = {
    abia: { value: 5.1, level: "medium", color: "#ffb700" },
    adamawa: { value: 6.5, level: "high", color: "#ff8c00" },
    "akwa-ibom": { value: 4.9, level: "low", color: "#ffdd00" },
    anambra: { value: 5.2, level: "medium", color: "#ffb700" },
    bauchi: { value: 6.7, level: "high", color: "#ff8c00" },
    bayelsa: { value: 4.8, level: "low", color: "#ffdd00" },
    benue: { value: 5.8, level: "medium", color: "#ffb700" },
    borno: { value: 7.1, level: "very-high", color: "#ff0000" },
    "cross-river": { value: 5.0, level: "medium", color: "#ffb700" },
    delta: { value: 4.9, level: "low", color: "#ffdd00" },
    ebonyi: { value: 5.3, level: "medium", color: "#ffb700" },
    edo: { value: 5.1, level: "medium", color: "#ffb700" },
    ekiti: { value: 5.4, level: "medium", color: "#ffb700" },
    enugu: { value: 5.3, level: "medium", color: "#ffb700" },
    fct: { value: 6.2, level: "high", color: "#ff8c00" },
    gombe: { value: 6.6, level: "high", color: "#ff8c00" },
    imo: { value: 5.0, level: "medium", color: "#ffb700" },
    jigawa: { value: 6.9, level: "high", color: "#ff8c00" },
    kaduna: { value: 6.4, level: "high", color: "#ff8c00" },
    kano: { value: 6.8, level: "high", color: "#ff8c00" },
    katsina: { value: 6.9, level: "high", color: "#ff8c00" },
    kebbi: { value: 6.5, level: "high", color: "#ff8c00" },
    kogi: { value: 5.7, level: "medium", color: "#ffb700" },
    kwara: { value: 5.9, level: "medium", color: "#ffb700" },
    lagos: { value: 5.4, level: "medium", color: "#ffb700" },
    nasarawa: { value: 6.1, level: "high", color: "#ff8c00" },
    niger: { value: 6.3, level: "high", color: "#ff8c00" },
    ogun: { value: 5.3, level: "medium", color: "#ffb700" },
    ondo: { value: 5.2, level: "medium", color: "#ffb700" },
    osun: { value: 5.4, level: "medium", color: "#ffb700" },
    oyo: { value: 5.6, level: "medium", color: "#ffb700" },
    plateau: { value: 6.3, level: "high", color: "#ff8c00" },
    rivers: { value: 4.9, level: "low", color: "#ffdd00" },
    sokoto: { value: 6.8, level: "high", color: "#ff8c00" },
    taraba: { value: 6.2, level: "high", color: "#ff8c00" },
    yobe: { value: 7.0, level: "very-high", color: "#ff0000" },
    zamfara: { value: 6.7, level: "high", color: "#ff8c00" },
  }

  // Wind data by state (sample data)
  const windData: Record<string, { value: number; level: string; color: string }> = {
    abia: { value: 3.1, level: "low", color: "#80aaff" },
    adamawa: { value: 4.2, level: "medium", color: "#4d88ff" },
    "akwa-ibom": { value: 3.8, level: "low", color: "#80aaff" },
    anambra: { value: 3.0, level: "low", color: "#80aaff" },
    bauchi: { value: 4.5, level: "medium", color: "#4d88ff" },
    bayelsa: { value: 3.9, level: "low", color: "#80aaff" },
    benue: { value: 3.4, level: "low", color: "#80aaff" },
    borno: { value: 5.2, level: "high", color: "#0044cc" },
    "cross-river": { value: 3.5, level: "low", color: "#80aaff" },
    delta: { value: 3.7, level: "low", color: "#80aaff" },
    ebonyi: { value: 3.1, level: "low", color: "#80aaff" },
    edo: { value: 3.3, level: "low", color: "#80aaff" },
    ekiti: { value: 3.2, level: "low", color: "#80aaff" },
    enugu: { value: 3.0, level: "low", color: "#80aaff" },
    fct: { value: 3.8, level: "low", color: "#80aaff" },
    gombe: { value: 4.7, level: "medium", color: "#4d88ff" },
    imo: { value: 3.2, level: "low", color: "#80aaff" },
    jigawa: { value: 5.0, level: "high", color: "#0044cc" },
    kaduna: { value: 4.2, level: "medium", color: "#4d88ff" },
    kano: { value: 4.8, level: "medium", color: "#4d88ff" },
    katsina: { value: 5.1, level: "high", color: "#0044cc" },
    kebbi: { value: 4.5, level: "medium", color: "#4d88ff" },
    kogi: { value: 3.4, level: "low", color: "#80aaff" },
    kwara: { value: 3.6, level: "low", color: "#80aaff" },
    lagos: { value: 3.8, level: "low", color: "#80aaff" },
    nasarawa: { value: 3.7, level: "low", color: "#80aaff" },
    niger: { value: 3.9, level: "low", color: "#80aaff" },
    ogun: { value: 3.5, level: "low", color: "#80aaff" },
    ondo: { value: 3.4, level: "low", color: "#80aaff" },
    osun: { value: 3.3, level: "low", color: "#80aaff" },
    oyo: { value: 3.5, level: "low", color: "#80aaff" },
    plateau: { value: 4.3, level: "medium", color: "#4d88ff" },
    rivers: { value: 3.9, level: "low", color: "#80aaff" },
    sokoto: { value: 5.3, level: "high", color: "#0044cc" },
    taraba: { value: 4.1, level: "medium", color: "#4d88ff" },
    yobe: { value: 5.5, level: "high", color: "#0044cc" },
    zamfara: { value: 4.6, level: "medium", color: "#4d88ff" },
  }

  const data = dataType === "wind" ? windData : solarData

  const handleStateClick = (stateName: string) => {
    setSelectedState(stateName)
    // In a real app, this would trigger an API call or state update to show data for the selected state
    console.log(`Selected state: ${stateName}, ${dataType} value: ${data[stateName]?.value}`)
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 800 800" className="w-full h-full max-h-[600px]" style={{ backgroundColor: "#1e1e1e" }}>
        {/* Nigeria states - accurate geographic data */}
        <g>
          {/* FCT (Abuja) */}
          <path
            d="M400,400 L410,390 L425,395 L430,410 L420,420 L405,415 L400,400"
            fill={data["fct"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("fct")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="415" y="405" className="text-[12px] fill-white font-bold pointer-events-none">
            FCT
          </text>

          {/* Kano */}
          <path
            d="M380,250 L420,240 L450,260 L460,290 L440,310 L410,315 L380,300 L370,270 L380,250"
            fill={data["kano"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("kano")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="415" y="280" className="text-[12px] fill-white font-bold pointer-events-none">
            Kano
          </text>

          {/* Lagos */}
          <path
            d="M250,520 L270,510 L290,515 L300,530 L290,545 L270,550 L250,540 L250,520"
            fill={data["lagos"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("lagos")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="275" y="530" className="text-[12px] fill-white font-bold pointer-events-none">
            Lagos
          </text>

          {/* Rivers */}
          <path
            d="M420,580 L450,570 L470,580 L480,600 L470,620 L440,625 L420,610 L420,580"
            fill={data["rivers"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("rivers")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="450" y="600" className="text-[12px] fill-white font-bold pointer-events-none">
            Rivers
          </text>

          {/* Borno */}
          <path
            d="M520,200 L580,180 L620,200 L640,250 L630,300 L590,330 L550,340 L520,320 L500,280 L510,240 L520,200"
            fill={data["borno"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("borno")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="570" y="260" className="text-[12px] fill-white font-bold pointer-events-none">
            Borno
          </text>

          {/* Kaduna */}
          <path
            d="M350,320 L390,310 L420,320 L430,350 L420,380 L390,390 L360,380 L340,350 L350,320"
            fill={data["kaduna"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("kaduna")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="385" y="350" className="text-[12px] fill-white font-bold pointer-events-none">
            Kaduna
          </text>

          {/* Oyo */}
          <path
            d="M280,480 L320,470 L350,480 L360,510 L340,540 L310,550 L280,530 L270,500 L280,480"
            fill={data["oyo"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("oyo")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="320" y="510" className="text-[12px] fill-white font-bold pointer-events-none">
            Oyo
          </text>

          {/* Sokoto */}
          <path
            d="M250,250 L290,240 L320,250 L330,280 L320,310 L290,320 L260,310 L240,280 L250,250"
            fill={data["sokoto"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("sokoto")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="285" y="280" className="text-[12px] fill-white font-bold pointer-events-none">
            Sokoto
          </text>

          {/* Yobe */}
          <path
            d="M480,240 L520,230 L550,240 L560,270 L550,300 L520,310 L490,300 L480,270 L480,240"
            fill={data["yobe"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("yobe")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="520" y="270" className="text-[12px] fill-white font-bold pointer-events-none">
            Yobe
          </text>

          {/* Bauchi */}
          <path
            d="M450,320 L490,310 L520,320 L530,350 L520,380 L490,390 L460,380 L450,350 L450,320"
            fill={data["bauchi"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("bauchi")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="490" y="350" className="text-[12px] fill-white font-bold pointer-events-none">
            Bauchi
          </text>

          {/* Plateau */}
          <path
            d="M430,420 L470,410 L500,420 L510,450 L500,480 L470,490 L440,480 L430,450 L430,420"
            fill={data["plateau"]?.color || "#333"}
            stroke="#333"
            strokeWidth="1"
            onClick={() => handleStateClick("plateau")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <text x="470" y="450" className="text-[12px] fill-white font-bold pointer-events-none">
            Plateau
          </text>

          {/* Other states would be added here with accurate paths */}
          {/* This is a simplified representation - a real implementation would include all 36 states + FCT */}
        </g>

        {/* State highlight effect when selected */}
        {selectedState && (
          <g className="pointer-events-none">
            <circle cx="400" cy="400" r="10" fill="white" fillOpacity="0.5" className="animate-ping" />
          </g>
        )}

        {/* Nigeria outline */}
        <path
          d="M200,150 L250,120 L350,100 L450,110 L550,150 L650,200 L700,300 L720,400 L700,500 L650,600 L550,650 L450,680 L350,670 L250,630 L180,550 L150,450 L150,350 L180,250 L200,150"
          fill="none"
          stroke="#666"
          strokeWidth="2"
          className="pointer-events-none"
        />
      </svg>
    </div>
  )
}

import { NextResponse } from "next/server"

// Mock API endpoint that returns solar and wind data for Nigerian states
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const state = searchParams.get("state")
  const dataType = searchParams.get("dataType") || "solar" // Default to solar data

  // Solar radiation data by state (sample data)
  const solarData: Record<string, any> = {
    abia: {
      annual: 5.1,
      peak: { month: "March", value: 6.3 },
      minimum: { month: "July", value: 4.0 },
      monthly: [5.0, 5.3, 6.3, 6.1, 5.5, 4.8, 4.0, 4.2, 4.7, 5.2, 5.4, 5.0],
      potentialKwh: 1850,
    },
    adamawa: {
      annual: 6.5,
      peak: { month: "March", value: 7.8 },
      minimum: { month: "August", value: 5.2 },
      monthly: [6.3, 6.7, 7.8, 7.5, 6.8, 6.0, 5.5, 5.2, 5.7, 6.5, 6.8, 6.4],
      potentialKwh: 2370,
    },
    lagos: {
      annual: 5.4,
      peak: { month: "April", value: 7.2 },
      minimum: { month: "July", value: 4.2 },
      monthly: [5.1, 5.5, 6.2, 7.2, 6.8, 5.3, 4.2, 4.5, 5.0, 5.5, 5.8, 5.2],
      potentialKwh: 1950,
    },
    kano: {
      annual: 6.8,
      peak: { month: "March", value: 8.2 },
      minimum: { month: "August", value: 5.5 },
      monthly: [6.5, 6.9, 8.2, 7.9, 7.3, 6.8, 5.9, 5.5, 6.0, 6.8, 7.0, 6.7],
      potentialKwh: 2480,
    },
    rivers: {
      annual: 4.9,
      peak: { month: "February", value: 6.1 },
      minimum: { month: "July", value: 3.8 },
      monthly: [5.2, 6.1, 5.8, 5.5, 5.0, 4.2, 3.8, 4.0, 4.3, 4.8, 5.0, 5.1],
      potentialKwh: 1780,
    },
    borno: {
      annual: 7.1,
      peak: { month: "March", value: 8.5 },
      minimum: { month: "August", value: 5.8 },
      monthly: [6.8, 7.2, 8.5, 8.2, 7.6, 7.0, 6.2, 5.8, 6.3, 7.0, 7.3, 6.9],
      potentialKwh: 2590,
    },
    yobe: {
      annual: 7.0,
      peak: { month: "March", value: 8.4 },
      minimum: { month: "August", value: 5.7 },
      monthly: [6.7, 7.1, 8.4, 8.1, 7.5, 6.9, 6.1, 5.7, 6.2, 6.9, 7.2, 6.8],
      potentialKwh: 2550,
    },
  }

  // Wind data by state (sample data)
  const windData: Record<string, any> = {
    abia: {
      annual: 3.1,
      peak: { month: "August", value: 4.2 },
      minimum: { month: "December", value: 2.3 },
      monthly: [2.5, 2.8, 3.0, 3.2, 3.5, 3.8, 4.0, 4.2, 3.9, 3.5, 2.8, 2.3],
      direction: "SW",
      potentialMwh: 550,
    },
    adamawa: {
      annual: 4.2,
      peak: { month: "January", value: 5.5 },
      minimum: { month: "September", value: 3.0 },
      monthly: [5.5, 5.3, 5.0, 4.7, 4.3, 3.8, 3.5, 3.2, 3.0, 3.3, 4.0, 4.8],
      direction: "NE",
      potentialMwh: 950,
    },
    lagos: {
      annual: 3.8,
      peak: { month: "August", value: 5.2 },
      minimum: { month: "December", value: 2.9 },
      monthly: [3.2, 3.5, 3.8, 4.1, 4.5, 4.8, 5.0, 5.2, 4.8, 4.2, 3.5, 2.9],
      direction: "SW",
      potentialMwh: 850,
    },
    kano: {
      annual: 4.8,
      peak: { month: "February", value: 6.0 },
      minimum: { month: "September", value: 3.5 },
      monthly: [5.8, 6.0, 5.7, 5.3, 4.7, 4.0, 3.7, 3.6, 3.5, 3.8, 4.5, 5.2],
      direction: "NE",
      potentialMwh: 1200,
    },
    rivers: {
      annual: 3.9,
      peak: { month: "July", value: 5.3 },
      minimum: { month: "January", value: 2.8 },
      monthly: [2.8, 3.0, 3.3, 3.6, 4.0, 4.8, 5.3, 5.1, 4.7, 4.2, 3.5, 3.0],
      direction: "SW",
      potentialMwh: 880,
    },
    borno: {
      annual: 5.2,
      peak: { month: "February", value: 6.5 },
      minimum: { month: "September", value: 3.8 },
      monthly: [6.2, 6.5, 6.2, 5.8, 5.2, 4.5, 4.2, 4.0, 3.8, 4.2, 5.0, 5.8],
      direction: "NE",
      potentialMwh: 1350,
    },
    yobe: {
      annual: 5.5,
      peak: { month: "February", value: 6.8 },
      minimum: { month: "September", value: 4.0 },
      monthly: [6.5, 6.8, 6.5, 6.0, 5.5, 4.8, 4.5, 4.2, 4.0, 4.5, 5.3, 6.0],
      direction: "NE",
      potentialMwh: 1450,
    },
  }

  const data = dataType === "wind" ? windData : solarData

  if (state && state.toLowerCase() in data) {
    return NextResponse.json({
      state: state,
      dataType: dataType,
      data: data[state.toLowerCase()],
    })
  }

  // Return list of all states if no specific state is requested
  return NextResponse.json({
    states: Object.keys(data),
    dataTypes: ["solar", "wind"],
    message: "Provide a state parameter to get detailed data",
  })
}

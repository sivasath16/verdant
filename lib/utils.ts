import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 3959 // Earth's radius in miles
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(degrees: number) {
  return degrees * (Math.PI / 180)
}

export function calculateFlightEmissions(distance: number) {
  // Average CO2e per passenger mile for flights (in kg)
  const emissionsPerMile = 0.23
  return distance * emissionsPerMile
}

export function calculateCarEmissions(distance: number) {
  // Average CO2e per mile for cars (in kg)
  const emissionsPerMile = 0.404
  return distance * emissionsPerMile
}
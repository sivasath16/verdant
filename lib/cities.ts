export interface City {
    name: string
    state: string
    lat: number
    lng: number
  }
  
  export const cities: City[] = [
    // Major Northeast Cities
    { name: "New York", state: "NY", lat: 40.7128, lng: -74.006 },
    { name: "Boston", state: "MA", lat: 42.3601, lng: -71.0589 },
    { name: "Philadelphia", state: "PA", lat: 39.9526, lng: -75.1652 },
    { name: "Pittsburgh", state: "PA", lat: 40.4406, lng: -79.9959 },
    { name: "Buffalo", state: "NY", lat: 42.8864, lng: -78.8784 },
  
    // Major Midwest Cities
    { name: "Chicago", state: "IL", lat: 41.8781, lng: -87.6298 },
    { name: "Detroit", state: "MI", lat: 42.3314, lng: -83.0458 },
    { name: "Minneapolis", state: "MN", lat: 44.9778, lng: -93.265 },
    { name: "Cleveland", state: "OH", lat: 41.4993, lng: -81.6944 },
    { name: "Cincinnati", state: "OH", lat: 39.1031, lng: -84.512 },
    { name: "St. Louis", state: "MO", lat: 38.627, lng: -90.1994 },
    { name: "Kansas City", state: "MO", lat: 39.0997, lng: -94.5786 },
    { name: "Milwaukee", state: "WI", lat: 43.0389, lng: -87.9065 },
  
    // Major Southern Cities
    { name: "Miami", state: "FL", lat: 25.7617, lng: -80.1918 },
    { name: "Atlanta", state: "GA", lat: 33.749, lng: -84.388 },
    { name: "Dallas", state: "TX", lat: 32.7767, lng: -96.797 },
    { name: "Houston", state: "TX", lat: 29.7604, lng: -95.3698 },
    { name: "Austin", state: "TX", lat: 30.2672, lng: -97.7431 },
    { name: "San Antonio", state: "TX", lat: 29.4241, lng: -98.4936 },
    { name: "New Orleans", state: "LA", lat: 29.9511, lng: -90.0715 },
    { name: "Nashville", state: "TN", lat: 36.1627, lng: -86.7816 },
    { name: "Charlotte", state: "NC", lat: 35.2271, lng: -80.8431 },
    { name: "Orlando", state: "FL", lat: 28.5383, lng: -81.3792 },
    { name: "Tampa", state: "FL", lat: 27.9506, lng: -82.4572 },
  
    // Major Western Cities
    { name: "Los Angeles", state: "CA", lat: 34.0522, lng: -118.2437 },
    { name: "San Francisco", state: "CA", lat: 37.7749, lng: -122.4194 },
    { name: "Seattle", state: "WA", lat: 47.6062, lng: -122.3321 },
    { name: "Portland", state: "OR", lat: 45.5155, lng: -122.6789 },
    { name: "Las Vegas", state: "NV", lat: 36.1699, lng: -115.1398 },
    { name: "Phoenix", state: "AZ", lat: 33.4484, lng: -112.074 },
    { name: "Denver", state: "CO", lat: 39.7392, lng: -104.9903 },
    { name: "Salt Lake City", state: "UT", lat: 40.7608, lng: -111.891 },
    { name: "San Diego", state: "CA", lat: 32.7157, lng: -117.1611 },
    { name: "Sacramento", state: "CA", lat: 38.5816, lng: -121.4944 },
  
    // Popular Tourist Cities
    { name: "Honolulu", state: "HI", lat: 21.3069, lng: -157.8583 },
    { name: "San Jose", state: "CA", lat: 37.3382, lng: -121.8863 },
    { name: "Anchorage", state: "AK", lat: 61.2181, lng: -149.9003 },
    { name: "Albuquerque", state: "NM", lat: 35.0844, lng: -106.6504 },
    { name: "Charleston", state: "SC", lat: 32.7765, lng: -79.9311 },
    { name: "Savannah", state: "GA", lat: 32.0809, lng: -81.0912 },
    { name: "Key West", state: "FL", lat: 24.5551, lng: -81.78 },
    { name: "Aspen", state: "CO", lat: 39.1911, lng: -106.8175 },
    { name: "Maui", state: "HI", lat: 20.7984, lng: -156.3319 },
  
    // State Capitals
    { name: "Albany", state: "NY", lat: 42.6526, lng: -73.7562 },
    { name: "Hartford", state: "CT", lat: 41.7658, lng: -72.6734 },
    { name: "Richmond", state: "VA", lat: 37.5407, lng: -77.436 },
    { name: "Raleigh", state: "NC", lat: 35.7796, lng: -78.6382 },
    { name: "Columbia", state: "SC", lat: 34.0007, lng: -81.0348 },
    { name: "Tallahassee", state: "FL", lat: 30.4383, lng: -84.2807 },
    { name: "Montgomery", state: "AL", lat: 32.3792, lng: -86.3077 },
    { name: "Baton Rouge", state: "LA", lat: 30.4515, lng: -91.1871 },
    { name: "Madison", state: "WI", lat: 43.0731, lng: -89.4012 },
  
    // Tech Hubs
    { name: "Boulder", state: "CO", lat: 40.015, lng: -105.2705 },
    { name: "Ann Arbor", state: "MI", lat: 42.2808, lng: -83.743 },
    { name: "Durham", state: "NC", lat: 35.994, lng: -78.8986 },
    { name: "Cambridge", state: "MA", lat: 42.3736, lng: -71.1097 },
    { name: "Santa Clara", state: "CA", lat: 37.3541, lng: -121.9552 },
    { name: "Bellevue", state: "WA", lat: 47.6101, lng: -122.2015 },
  ]
  
  
export interface Reward {
    id: string
    name: string
    description: string
    points: number
    category: "Gift Cards" | "Electronics" | "Travel" | "Experiences"
    image: string
  }
  
  export const rewards: Reward[] = [
    {
      id: "amazon-50",
      name: "Amazon Gift Card",
      description: "$50 Amazon.com Gift Card",
      points: 5000,
      category: "Gift Cards",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "starbucks-25",
      name: "Starbucks Gift Card",
      description: "$25 Starbucks Gift Card",
      points: 2500,
      category: "Gift Cards",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "airpods",
      name: "Apple AirPods",
      description: "AirPods with Charging Case",
      points: 25000,
      category: "Electronics",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "hotel-night",
      name: "Hotel Stay",
      description: "One Night at Select Hotels",
      points: 15000,
      category: "Travel",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "spa-day",
      name: "Spa Day",
      description: "Full Day Spa Experience",
      points: 20000,
      category: "Experiences",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "target-50",
      name: "Target Gift Card",
      description: "$50 Target Gift Card",
      points: 5000,
      category: "Gift Cards",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "bluetooth-speaker",
      name: "Bluetooth Speaker",
      description: "Premium Portable Speaker",
      points: 10000,
      category: "Electronics",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "cooking-class",
      name: "Cooking Class",
      description: "Gourmet Cooking Experience",
      points: 8000,
      category: "Experiences",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]
  
  
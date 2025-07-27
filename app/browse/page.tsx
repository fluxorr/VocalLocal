"use client"

import { useState } from "react"
import { Search, Filter, Star, MapPin, Phone, Mail, Globe, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/contexts/language-context"
import { BusinessDetailsModal } from "@/components/business-details-modal"

const businesses = [
  {
    id: 1,
    name: "Sharma Electronics",
    category: "Electronics",
    rating: 4.8,
    reviews: 124,
    location: "Connaught Place, Delhi",
    distance: "2.3 km",
    image: "/placeholder.svg?height=200&width=300",
    description: "Quality electronics, mobile repairs, and accessories with 15+ years of experience.",
    phone: "+91 9876543210",
    email: "sharma.electronics@gmail.com",
    website: "www.sharmaelectronics.com",
    isOpen: true,
    featured: true,
  },
  {
    id: 2,
    name: "Spice Garden Restaurant",
    category: "Food & Dining",
    rating: 4.6,
    reviews: 89,
    location: "Bandra West, Mumbai",
    distance: "1.8 km",
    image: "/placeholder.svg?height=200&width=300",
    description: "Authentic North Indian cuisine with home-style cooking and catering services.",
    phone: "+91 9876543211",
    email: "spicegarden@gmail.com",
    website: "www.spicegarden.in",
    isOpen: true,
    featured: false,
  },
  {
    id: 3,
    name: "Green Thumb Nursery",
    category: "Plants & Garden",
    rating: 4.9,
    reviews: 67,
    location: "Koramangala, Bangalore",
    distance: "3.1 km",
    image: "/placeholder.svg?height=200&width=300",
    description: "Indoor plants, outdoor plants, gardening tools, and expert plant care advice.",
    phone: "+91 9876543212",
    email: "greenthumb@gmail.com",
    website: "www.greenthumb.co.in",
    isOpen: false,
    featured: true,
  },
  {
    id: 4,
    name: "Fashion Hub Boutique",
    category: "Fashion & Clothing",
    rating: 4.4,
    reviews: 156,
    location: "Park Street, Kolkata",
    distance: "0.9 km",
    image: "/placeholder.svg?height=200&width=300",
    description: "Trendy clothing, ethnic wear, and custom tailoring for men and women.",
    phone: "+91 9876543213",
    email: "fashionhub@gmail.com",
    website: "www.fashionhub.in",
    isOpen: true,
    featured: false,
  },
  {
    id: 5,
    name: "Wellness Spa & Salon",
    category: "Health & Beauty",
    rating: 4.7,
    reviews: 203,
    location: "Jubilee Hills, Hyderabad",
    distance: "4.2 km",
    image: "/placeholder.svg?height=200&width=300",
    description: "Full-service spa, salon treatments, and wellness therapies by certified professionals.",
    phone: "+91 9876543214",
    email: "wellness@gmail.com",
    website: "www.wellnessspa.in",
    isOpen: true,
    featured: true,
  },
  {
    id: 6,
    name: "Tech Solutions Hub",
    category: "Professional Services",
    rating: 4.5,
    reviews: 78,
    location: "Sector 62, Noida",
    distance: "5.7 km",
    image: "/placeholder.svg?height=200&width=300",
    description: "Web development, mobile apps, digital marketing, and IT consulting services.",
    phone: "+91 9876543215",
    email: "techsolutions@gmail.com",
    website: "www.techsolutions.co.in",
    isOpen: true,
    featured: false,
  },
]

const categories = [
  "All Categories",
  "Food & Dining",
  "Electronics",
  "Fashion & Clothing",
  "Health & Beauty",
  "Plants & Garden",
  "Professional Services",
  "Automotive",
  "Education",
]

export default function BrowsePage() {
  const { t } = useLanguage()
  const [selectedBusiness, setSelectedBusiness] = useState<(typeof businesses)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("relevance")
  const [showFilters, setShowFilters] = useState(false)
  const [ratingFilter, setRatingFilter] = useState([0])
  const [distanceFilter, setDistanceFilter] = useState([10])
  const [openNowOnly, setOpenNowOnly] = useState(false)
  const [featuredOnly, setFeaturedOnly] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (businessId: number) => {
    setFavorites((prev) => (prev.includes(businessId) ? prev.filter((id) => id !== businessId) : [...prev, businessId]))
  }

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || business.category === selectedCategory
    const matchesRating = business.rating >= ratingFilter[0]
    const matchesDistance = Number.parseFloat(business.distance) <= distanceFilter[0]
    const matchesOpenNow = !openNowOnly || business.isOpen
    const matchesFeatured = !featuredOnly || business.featured

    return matchesSearch && matchesCategory && matchesRating && matchesDistance && matchesOpenNow && matchesFeatured
  })

  const handleViewDetails = (business: (typeof businesses)[0]) => {
    setSelectedBusiness(business)
    setIsModalOpen(true)
  }

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, "_self")
  }

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`, "_self")
  }

  const handleWebsite = (website: string) => {
    window.open(website.startsWith("http") ? website : `https://${website}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="font-medium">LocalConnect</span>
            </Link>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search businesses, products, or services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="hidden md:flex">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Minimum Rating: {ratingFilter[0]}+</label>
                  <Slider
                    value={ratingFilter}
                    onValueChange={setRatingFilter}
                    max={5}
                    min={0}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Distance: Up to {distanceFilter[0]} km</label>
                  <Slider
                    value={distanceFilter}
                    onValueChange={setDistanceFilter}
                    max={20}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="openNow"
                      checked={openNowOnly}
                      onCheckedChange={(checked) => setOpenNowOnly(checked as boolean)}
                    />
                    <label htmlFor="openNow" className="text-sm">
                      Open now
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="featured"
                      checked={featuredOnly}
                      onCheckedChange={(checked) => setFeaturedOnly(checked as boolean)}
                    />
                    <label htmlFor="featured" className="text-sm">
                      Featured businesses
                    </label>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setSelectedCategory("All Categories")
                    setRatingFilter([0])
                    setDistanceFilter([10])
                    setOpenNowOnly(false)
                    setFeaturedOnly(false)
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">{filteredBusinesses.length} businesses found</p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="distance">Nearest First</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Business Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredBusinesses.map((business) => (
                <Card key={business.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={business.image || "/placeholder.svg"}
                        alt={business.name}
                        className="w-full h-full object-cover"
                      />
                      {business.featured && <Badge className="absolute top-2 left-2 bg-yellow-500">Featured</Badge>}
                      <div className="absolute top-2 right-2 flex space-x-1">
                        <Badge variant={business.isOpen ? "default" : "secondary"}>
                          {business.isOpen ? "Open" : "Closed"}
                        </Badge>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="p-1 h-6 w-6"
                          onClick={() => toggleFavorite(business.id)}
                        >
                          <Heart
                            className={`h-3 w-3 ${
                              favorites.includes(business.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                            }`}
                          />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{business.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {business.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{business.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500">{business.reviews} reviews</p>
                      </div>
                    </div>
                    <CardDescription className="mt-2">{business.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {business.location} • {business.distance}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleCall(business.phone)}>
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleEmail(business.email)}>
                          <Mail className="h-4 w-4" />
                        </Button>
                        {business.website && (
                          <Button size="sm" variant="outline" onClick={() => handleWebsite(business.website!)}>
                            <Globe className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <Button size="sm">{t("featured.viewDetails")}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredBusinesses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No businesses found matching your criteria</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All Categories")
                    setRatingFilter([0])
                    setDistanceFilter([10])
                    setOpenNowOnly(false)
                    setFeaturedOnly(false)
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <BusinessDetailsModal
        business={selectedBusiness}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onToggleFavorite={toggleFavorite}
        isFavorite={selectedBusiness ? favorites.includes(selectedBusiness.id) : false}
      />
    </div>
  )
}

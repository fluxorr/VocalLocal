"use client"

import { useState } from "react"
import { Search, Star, MapPin, Phone, Mail, Globe, Users, Store, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"
import { BusinessDetailsModal } from "@/components/business-details-modal"

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिंदी" },

]

const featuredBusinesses = [
  {
    id: 1,
    name: "Sharma Electronics",
    category: "Electronics",
    rating: 4.8,
    reviews: 124,
    location: "Delhi",
    image: "/placeholder.svg?height=200&width=300",
    description: "Quality electronics and repair services",
  },
  {
    id: 2,
    name: "Spice Garden Restaurant",
    category: "Food & Dining",
    rating: 4.6,
    reviews: 89,
    location: "Mumbai",
    image: "/placeholder.svg?height=200&width=300",
    description: "Authentic Indian cuisine and catering",
  },
  {
    id: 3,
    name: "Green Thumb Nursery",
    category: "Plants & Garden",
    rating: 4.9,
    reviews: 67,
    location: "Bangalore",
    image: "/placeholder.svg?height=200&width=300",
    description: "Indoor and outdoor plants with care tips",
  },
]

const categories = [
  "Food & Dining",
  "Electronics",
  "Fashion & Clothing",
  "Health & Beauty",
  "Home & Garden",
  "Automotive",
  "Education",
  "Professional Services",
]

export default function HomePage() {
  const { language, setLanguage, t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedBusiness, setSelectedBusiness] = useState<(typeof featuredBusinesses)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (businessId: number) => {
    setFavorites((prev) => (prev.includes(businessId) ? prev.filter((id) => id !== businessId) : [...prev, businessId]))
  }

  const handleViewDetails = (business: (typeof featuredBusinesses)[0]) => {
    setSelectedBusiness(business)
    setIsModalOpen(true)
  }

  const translatedCategories = [
    t("category.foodDining"),
    t("category.electronics"),
    t("category.fashion"),
    t("category.health"),
    t("category.home"),
    t("category.automotive"),
    t("category.education"),
    t("category.professional"),
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">LocalConnect</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t("header.browse")}
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t("header.categories")}
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t("header.about")}
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-32">
                  <Globe className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.native}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Link href="/auth/login">
                <Button variant="outline">{t("header.login")}</Button>
              </Link>
              <Link href="/auth/register">
                <Button>{t("header.register")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("hero.title")}
            <span className="text-blue-600"> {t("hero.titleHighlight")}</span>
          </h1>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder={t("search.placeholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-0 focus:ring-0"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="md:w-48 h-12">
                  <SelectValue placeholder={t("search.allCategories")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("search.allCategories")}</SelectItem>
                  {translatedCategories.map((category, index) => (
                    <SelectItem key={categories[index]} value={categories[index]}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button size="lg" className="h-12 px-8">
                {t("search.search")}
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Store className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">5,000+</span>
              </div>
              <p className="text-gray-600">{t("stats.businesses")}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-green-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">50,000+</span>
              </div>
              <p className="text-gray-600">{t("stats.customers")}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-purple-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">98%</span>
              </div>
              <p className="text-gray-600">{t("stats.success")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("featured.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBusinesses.map((business) => (
              <Card key={business.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={business.image || "/placeholder.svg"}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-blue-600">{business.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{business.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{business.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{business.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {business.location}
                    </div>
                    <span className="text-sm text-gray-500">{business.reviews} reviews</span>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button size="sm" className="flex-1" onClick={() => handleViewDetails(business)}>
                      {t("featured.viewDetails")}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              {t("featured.viewAll")}
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("categories.title")}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category} className="hover:shadow-md transition-shadow cursor-pointer text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Store className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-gray-900">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("cta.title")}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="px-8">
                {t("cta.register")}
              </Button>
            </Link>
            <Link href="/browse">
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                {t("cta.browse")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center text-gray-300 text-xl" >LocalConnect</div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LocalConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <BusinessDetailsModal
        //@ts-ignore
        business={selectedBusiness}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onToggleFavorite={toggleFavorite}
        isFavorite={selectedBusiness ? favorites.includes(selectedBusiness.id) : false}
      />
    </div>
  )
}

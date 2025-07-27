"use client"

import { useState } from "react"
import { Star, MapPin, Phone, Mail, Globe, Clock, Heart, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"

interface Business {
  id: number
  name: string
  category: string
  rating: number
  reviews: number
  location: string
  distance?: string
  image: string
  description: string
  phone: string
  email: string
  website?: string
  isOpen: boolean
  featured?: boolean
}

interface BusinessDetailsModalProps {
  business: Business | null
  isOpen: boolean
  onClose: () => void
  onToggleFavorite: (businessId: number) => void
  isFavorite: boolean
}

export function BusinessDetailsModal({
  business,
  isOpen,
  onClose,
  onToggleFavorite,
  isFavorite,
}: BusinessDetailsModalProps) {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("about")

  if (!business) return null

  const handleCall = () => {
    window.open(`tel:${business.phone}`, "_self")
  }

  const handleEmail = () => {
    window.open(`mailto:${business.email}`, "_self")
  }

  const handleWebsite = () => {
    if (business.website) {
      window.open(business.website.startsWith("http") ? business.website : `https://${business.website}`, "_blank")
    }
  }

  const handleDirections = () => {
    const query = encodeURIComponent(business.location)
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">{t("modal.businessDetails")}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={() => onToggleFavorite(business.id)} className="p-2">
              <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Business Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={business.image || "/placeholder.svg"}
              alt={business.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex space-x-2">
              {business.featured && <Badge className="bg-yellow-500">{t("browse.featured")}</Badge>}
              <Badge variant={business.isOpen ? "default" : "secondary"}>
                {business.isOpen ? t("browse.open") : t("browse.closed")}
              </Badge>
            </div>
          </div>

          {/* Business Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{business.name}</h2>
                <Badge variant="outline" className="mt-2">
                  {t(`category.${business.category.toLowerCase().replace(/[^a-z]/g, "")}`)}
                </Badge>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{business.rating}</span>
                </div>
                <p className="text-sm text-gray-500">
                  {business.reviews} {t("browse.reviews")}
                </p>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{business.location}</span>
              {business.distance && <span className="ml-2">• {business.distance}</span>}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button onClick={handleCall} className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{t("modal.call")}</span>
            </Button>
            <Button onClick={handleEmail} variant="outline" className="flex items-center space-x-2 bg-transparent">
              <Mail className="h-4 w-4" />
              <span>{t("modal.email")}</span>
            </Button>
            {business.website && (
              <Button onClick={handleWebsite} variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Globe className="h-4 w-4" />
                <span>{t("modal.website")}</span>
              </Button>
            )}
            <Button onClick={handleDirections} variant="outline" className="flex items-center space-x-2 bg-transparent">
              <MapPin className="h-4 w-4" />
              <span>{t("modal.getDirections")}</span>
            </Button>
          </div>

          <Separator />

          {/* Tabs */}
          <div className="space-y-4">
            <div className="flex space-x-4 border-b">
              <button
                onClick={() => setActiveTab("about")}
                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "about"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {t("modal.about")}
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "contact"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {t("modal.contact")}
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "reviews"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {t("browse.reviews")}
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "about" && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t("modal.about")}</h3>
                  <p className="text-gray-600 leading-relaxed">{business.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t("modal.location")}</h3>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{business.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t("modal.hours")}</h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{business.isOpen ? "Open Now • 9:00 AM - 9:00 PM" : "Closed • Opens at 9:00 AM"}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-4">{t("modal.contactInfo")}</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">{business.phone}</span>
                    </div>
                    <Button size="sm" onClick={handleCall}>
                      {t("modal.call")}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">{business.email}</span>
                    </div>
                    <Button size="sm" variant="outline" onClick={handleEmail} className="bg-transparent">
                      {t("modal.email")}
                    </Button>
                  </div>

                  {business.website && (
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">{business.website}</span>
                      </div>
                      <Button size="sm" variant="outline" onClick={handleWebsite} className="bg-transparent">
                        {t("modal.website")}
                      </Button>
                    </div>
                  )}

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">{business.location}</span>
                    </div>
                    <Button size="sm" variant="outline" onClick={handleDirections} className="bg-transparent">
                      {t("modal.getDirections")}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{t("browse.reviews")}</h3>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {t("modal.writeReview")}
                  </Button>
                </div>

                <div className="space-y-4">
                  {/* Sample reviews */}
                  {[
                    {
                      name: "Rajesh Kumar",
                      rating: 5,
                      comment: "Excellent service and genuine products. Highly recommended!",
                      date: "2 days ago",
                    },
                    {
                      name: "Priya Sharma",
                      rating: 4,
                      comment: "Good quality products and fair pricing. Will visit again.",
                      date: "1 week ago",
                    },
                    {
                      name: "Amit Singh",
                      rating: 5,
                      comment: "Very helpful staff and quick service. Great experience!",
                      date: "2 weeks ago",
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-600">{review.name.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm">{review.name}</p>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-sm text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

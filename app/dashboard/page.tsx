"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  Star,
  TrendingUp,
  Plus,
  Edit,
  Eye,
  MessageSquare,
  Settings,
  LogOut,
  Store,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

const businessData = {
  name: "Sharma Electronics",
  category: "Electronics",
  rating: 4.8,
  totalReviews: 124,
  totalViews: 2847,
  totalContacts: 156,
  joinDate: "March 2023",
  isVerified: true,
}

const recentProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S24",
    category: "Smartphones",
    price: "₹74,999",
    stock: 15,
    status: "Active",
    views: 234,
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    category: "Smartphones",
    price: "₹1,34,900",
    stock: 8,
    status: "Active",
    views: 189,
  },
  {
    id: 3,
    name: "MacBook Air M2",
    category: "Laptops",
    price: "₹1,14,900",
    stock: 5,
    status: "Low Stock",
    views: 156,
  },
]

const recentReviews = [
  {
    id: 1,
    customerName: "Rajesh Kumar",
    rating: 5,
    comment: "Excellent service and genuine products. Highly recommended!",
    date: "2 days ago",
    product: "Samsung Galaxy S24",
  },
  {
    id: 2,
    customerName: "Priya Sharma",
    rating: 4,
    comment: "Good quality products and fair pricing. Will visit again.",
    date: "5 days ago",
    product: "iPhone 15 Pro",
  },
  {
    id: 3,
    customerName: "Amit Singh",
    rating: 5,
    comment: "Very helpful staff and quick service. Great experience!",
    date: "1 week ago",
    product: "MacBook Air M2",
  },
]

export default function DashboardPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Store className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-semibold">LocalConnect</span>
              </Link>
              <Badge variant="secondary">{t("dashboard.businessDashboard")}</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                {t("dashboard.viewPublicProfile")}
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                {t("dashboard.settings")}
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                {t("dashboard.logout")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Business Info Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback>SE</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold text-gray-900">{businessData.name}</h1>
                  {businessData.isVerified && (
                    <Badge className="bg-green-100 text-green-800">{t("dashboard.verified")}</Badge>
                  )}
                </div>
                <p className="text-gray-600">{businessData.category}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{businessData.rating}</span>
                    <span className="text-gray-500">
                      ({businessData.totalReviews} {t("dashboard.reviews")})
                    </span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">
                    {t("dashboard.memberSince")} {businessData.joinDate}
                  </span>
                </div>
              </div>
            </div>
            <Button>
              <Edit className="h-4 w-4 mr-2" />
              {t("dashboard.editProfile")}
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("dashboard.totalViews")}</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{businessData.totalViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">{t("dashboard.viewsLastMonth")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("dashboard.customerContacts")}</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{businessData.totalContacts}</div>
              <p className="text-xs text-muted-foreground">{t("dashboard.contactsLastMonth")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("dashboard.averageRating")}</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{businessData.rating}</div>
              <p className="text-xs text-muted-foreground">
                {t("dashboard.basedOn")} {businessData.totalReviews} {t("dashboard.reviews")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("dashboard.growthRate")}</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+15%</div>
              <p className="text-xs text-muted-foreground">{t("dashboard.monthlyGrowth")}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">{t("dashboard.overview")}</TabsTrigger>
            <TabsTrigger value="products">{t("dashboard.products")}</TabsTrigger>
            <TabsTrigger value="reviews">{t("dashboard.reviews")}</TabsTrigger>
            <TabsTrigger value="analytics">{t("dashboard.analytics")}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Products */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{t("dashboard.recentProducts")}</CardTitle>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    {t("dashboard.addProduct")}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProducts.slice(0, 3).map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{product.name}</h4>
                          <p className="text-sm text-gray-600">{product.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{product.price}</p>
                          <Badge variant={product.status === "Active" ? "default" : "destructive"}>
                            {product.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reviews */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{t("dashboard.recentReviews")}</CardTitle>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {t("dashboard.viewAll")}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReviews.slice(0, 3).map((review) => (
                      <div key={review.id} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{review.customerName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{review.customerName}</p>
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
                        <p className="text-sm text-gray-600 mb-1">{review.comment}</p>
                        <p className="text-xs text-gray-500">
                          {t("dashboard.product")}: {review.product}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>{t("dashboard.quickActions")}</CardTitle>
                <CardDescription>{t("dashboard.manageProfile")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button className="h-20 flex-col space-y-2">
                    <Plus className="h-6 w-6" />
                    <span>{t("dashboard.addProduct")}</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
                    <Edit className="h-6 w-6" />
                    <span>{t("dashboard.editProfile")}</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
                    <MessageSquare className="h-6 w-6" />
                    <span>{t("dashboard.respondToReviews")}</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
                    <BarChart3 className="h-6 w-6" />
                    <span>{t("dashboard.viewAnalytics")}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{t("dashboard.productListings")}</CardTitle>
                  <CardDescription>{t("dashboard.manageProducts")}</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  {t("dashboard.addNewProduct")}
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("dashboard.productName")}</TableHead>
                      <TableHead>{t("dashboard.category")}</TableHead>
                      <TableHead>{t("dashboard.price")}</TableHead>
                      <TableHead>{t("dashboard.stock")}</TableHead>
                      <TableHead>{t("dashboard.views")}</TableHead>
                      <TableHead>{t("dashboard.status")}</TableHead>
                      <TableHead>{t("dashboard.actions")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.views}</TableCell>
                        <TableCell>
                          <Badge variant={product.status === "Active" ? "default" : "destructive"}>
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("dashboard.customerReviews")}</CardTitle>
                <CardDescription>{t("dashboard.manageFeedback")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentReviews.map((review) => (
                    <div key={review.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>{review.customerName.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{review.customerName}</p>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          {t("dashboard.reply")}
                        </Button>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <p className="text-sm text-gray-500">
                        {t("dashboard.product")}: {review.product}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("dashboard.profileViews")}</CardTitle>
                  <CardDescription>{t("dashboard.trackProfileViews")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">{businessData.totalViews.toLocaleString()}</div>
                  <p className="text-sm text-green-600">{t("dashboard.viewsLastMonth")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("dashboard.customerInquiries")}</CardTitle>
                  <CardDescription>{t("dashboard.phoneEmails")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">{businessData.totalContacts}</div>
                  <p className="text-sm text-green-600">{t("dashboard.contactsLastMonth")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("dashboard.topProducts")}</CardTitle>
                  <CardDescription>{t("dashboard.mostViews")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentProducts.map((product, index) => (
                      <div key={product.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">#{index + 1}</span>
                          <span className="text-sm">{product.name}</span>
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.views} {t("dashboard.views")}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("dashboard.reviewSummary")}</CardTitle>
                  <CardDescription>{t("dashboard.feedbackOverview")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{t("dashboard.averageRating")}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{businessData.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{t("dashboard.totalReviews")}</span>
                      <span className="font-medium">{businessData.totalReviews}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{t("dashboard.responseRate")}</span>
                      <span className="font-medium text-green-600">95%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

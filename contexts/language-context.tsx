"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "hi" | "bn" | "te" | "mr" | "ta" | "gu" | "kn" | "ml" | "pa"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "header.browse": "Browse Businesses",
    "header.categories": "Categories",
    "header.about": "About",
    "header.login": "Login",
    "header.register": "Register Business",
    "hero.description" : "",

    //Search
    "search.search" : "Search",
    "search.allCategories" : "All Categories",
    "search.placeholder" : "Search Local Businesses",

    // Hero Section
    "hero.title": "Connect with",
    "hero.titleHighlight": "Local Businesses",
    "hero.subtitle":
      "Discover amazing local businesses in your area and support the vocal for local movement. Connect directly with business owners and find exactly what you need.",
    "hero.searchPlaceholder": "Search for businesses, products, or services...",
    "hero.allCategories": "All Categories",
    "hero.search": "Search",

    // Stats
    "stats.businesses": "Local Businesses",
    "stats.customers": "Happy Customers",
    "stats.successRate": "Success Rate",

    // Featured Section
    "featured.title": "Featured Local Businesses",
    "featured.subtitle":
      "Discover top-rated businesses in your area that are making a difference in their communities.",
    "featured.viewDetails": "View Details",
    "featured.viewAll": "View All Businesses",
    "featured.description" : "",

    // Categories
    "categories.title": "Browse by Category",
    "categories.subtitle": "Find businesses by the services and products you need",

    // CTA Section
    "cta.title": "Ready to Grow Your Business?",
    "cta.subtitle": "Join thousands of local businesses already connecting with customers on LocalConnect",
    "cta.registerBusiness": "Register Your Business",
    "cta.browseBusinesses": "Browse Businesses",

    // Footer
    "footer.tagline": "Connecting local businesses with customers across India.",
    "footer.forBusinesses": "For Businesses",
    "footer.forCustomers": "For Customers",
    "footer.support": "Support",
    "footer.register": "Register",
    "footer.dashboard": "Dashboard",
    "footer.pricing": "Pricing",
    "footer.browse": "Browse",
    "footer.reviews": "Reviews",
    "footer.helpCenter": "Help Center",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy",
    "footer.copyright": "© 2024 LocalConnect. All rights reserved.",

    // Auth
    "auth.welcomeBack": "Welcome Back",
    "auth.signInSubtitle": "Sign in to your business account to manage your profile and connect with customers",
    "auth.email": "Email Address",
    "auth.password": "Password",
    "auth.rememberMe": "Remember me",
    "auth.forgotPassword": "Forgot password?",
    "auth.signIn": "Sign In",
    "auth.noAccount": "Don't have an account? ",
    "auth.registerBusiness": "Register your business",
    "auth.browseAsCustomer": "Browse as Customer",
    "auth.backToHome": "Back to Home",

    // Register
    "register.title": "Register Your Business",
    "register.subtitle": "Join LocalConnect and start connecting with customers in your area",
    "register.businessInfo": "Business Information",
    "register.businessName": "Business Name",
    "register.ownerName": "Owner Name",
    "register.category": "Business Category",
    "register.description": "Business Description",
    "register.contactInfo": "Contact Information",
    "register.phone": "Phone Number",
    "register.website": "Website (Optional)",
    "register.address": "Business Address",
    "register.streetAddress": "Street Address",
    "register.city": "City",
    "register.state": "State",
    "register.pincode": "PIN Code",
    "register.security": "Account Security",
    "register.confirmPassword": "Confirm Password",
    "register.logo": "Business Logo (Optional)",
    "register.uploadLogo": "Upload your business logo",
    "register.chooseFile": "Choose File",
    "register.terms": "I agree to the Terms of Service and Privacy Policy",
    "register.alreadyAccount": "Already have an account? Sign in here",

    // Browse
    "browse.businessesFound": "businesses found",
    "browse.filters": "Filters",
    "browse.minimumRating": "Minimum Rating",
    "browse.distance": "Distance: Up to",
    "browse.openNow": "Open now",
    "browse.featured": "Featured businesses",
    "browse.clearFilters": "Clear Filters",
    "browse.mostRelevant": "Most Relevant",
    "browse.highestRated": "Highest Rated",
    "browse.nearestFirst": "Nearest First",
    "browse.mostReviews": "Most Reviews",
    "browse.open": "Open",
    "browse.closed": "Closed",
    "browse.reviews": "reviews",
    "browse.noBusinesses": "No businesses found matching your criteria",
    "browse.clearAllFilters": "Clear All Filters",

    // Dashboard
    "dashboard.businessDashboard": "Business Dashboard",
    "dashboard.viewPublicProfile": "View Public Profile",
    "dashboard.settings": "Settings",
    "dashboard.logout": "Logout",
    "dashboard.verified": "Verified",
    "dashboard.memberSince": "Member since",
    "dashboard.editProfile": "Edit Profile",
    "dashboard.totalViews": "Total Views",
    "dashboard.customerContacts": "Customer Contacts",
    "dashboard.averageRating": "Average Rating",
    "dashboard.growthRate": "Growth Rate",
    "dashboard.monthlyGrowth": "Monthly growth",
    "dashboard.overview": "Overview",
    "dashboard.products": "Products",
    "dashboard.analytics": "Analytics",
    "dashboard.recentProducts": "Recent Products",
    "dashboard.addProduct": "Add Product",
    "dashboard.recentReviews": "Recent Reviews",
    "dashboard.viewAll": "View All",
    "dashboard.quickActions": "Quick Actions",
    "dashboard.quickActionsDesc": "Manage your business profile and listings",
    "dashboard.respondToReviews": "Respond to Reviews",
    "dashboard.viewAnalytics": "View Analytics",

    // Categories
    "category.foodDining": "Food & Dining",
    "category.electronics": "Electronics",
    "category.fashion": "Fashion & Clothing",
    "category.health": "Health & Beauty",
    "category.home": "Home & Garden",
    "category.automotive": "Automotive",
    "category.education": "Education",
    "category.professional": "Professional Services",
    "category.sports": "Sports & Recreation",
    "category.arts": "Arts & Crafts",
    "category.plants": "Plants & Garden",

    // Modal
    "modal.businessDetails": "Business Details",
    "modal.contact": "Contact",
    "modal.call": "Call",
    "modal.email": "Email",
    "modal.website": "Website",
    "modal.getDirections": "Get Directions",
    "modal.writeReview": "Write Review",
    "modal.close": "Close",
    "modal.about": "About",
    "modal.location": "Location",
    "modal.hours": "Business Hours",
    "modal.contactInfo": "Contact Information",
    "cta.browse" : "Browse",
    "cta.register" : "Register",
  },
  hi: {
    // Header
    "header.browse": "व्यवसाय ब्राउज़ करें",
    "header.categories": "श्रेणियां",
    "header.about": "के बारे में",
    "header.login": "लॉगिन",
    "header.register": "व्यवसाय पंजीकृत करें",

    // Hero Section
    "hero.title": "जुड़ें",
    "hero.titleHighlight": "स्थानीय व्यवसायों से",
    "hero.subtitle":
      "अपने क्षेत्र में अद्भुत स्थानीय व्यवसायों की खोज करें और वोकल फॉर लोकल आंदोलन का समर्थन करें। व्यवसाय मालिकों से सीधे जुड़ें और वही पाएं जिसकी आपको जरूरत है।",
    "hero.searchPlaceholder": "व्यवसाय, उत्पाद या सेवाओं की खोज करें...",
    "hero.allCategories": "सभी श्रेणियां",
    "hero.search": "खोजें",

    // Stats
    "stats.businesses": "स्थानीय व्यवसाय",
    "stats.customers": "खुश ग्राहक",
    "stats.successRate": "सफलता दर",

    // Featured Section
    "featured.title": "विशेष स्थानीय व्यवसाय",
    "featured.subtitle": "अपने क्षेत्र के शीर्ष-रेटेड व्यवसायों की खोज करें जो अपने समुदायों में बदलाव ला रहे हैं।",
    "featured.viewDetails": "विवरण देखें",
    "featured.viewAll": "सभी व्यवसाय देखें",

    // Categories
    "categories.title": "श्रेणी के अनुसार ब्राउज़ करें",
    "categories.subtitle": "आपकी आवश्यक सेवाओं और उत्पादों के अनुसार व्यवसाय खोजें",

    // CTA Section
    "cta.title": "अपना व्यवसाय बढ़ाने के लिए तैयार हैं?",
    "cta.subtitle": "हजारों स्थानीय व्यवसायों में शामिल हों जो पहले से ही LocalConnect पर ग्राहकों से जुड़ रहे हैं",
    "cta.registerBusiness": "अपना व्यवसाय पंजीकृत करें",
    "cta.browseBusinesses": "व्यवसाय ब्राउज़ करें",

    // Footer
    "footer.tagline": "भारत भर में स्थानीय व्यवसायों को ग्राहकों से जोड़ना।",
    "footer.forBusinesses": "व्यवसायों के लिए",
    "footer.forCustomers": "ग्राहकों के लिए",
    "footer.support": "सहायता",
    "footer.register": "पंजीकरण",
    "footer.dashboard": "डैशबोर्ड",
    "footer.pricing": "मूल्य निर्धारण",
    "footer.browse": "ब्राउज़ करें",
    "footer.reviews": "समीक्षाएं",
    "footer.helpCenter": "सहायता केंद्र",
    "footer.contact": "संपर्क",
    "footer.privacy": "गोपनीयता",
    "footer.copyright": "© 2024 LocalConnect। सभी अधिकार सुरक्षित।",

    // Auth
    "auth.welcomeBack": "वापस स्वागत है",
    "auth.signInSubtitle": "अपने व्यवसाय खाते में साइन इन करें और अपनी प्रोफ़ाइल प्रबंधित करें और ग्राहकों से जुड़ें",
    "auth.email": "ईमेल पता",
    "auth.password": "पासवर्ड",
    "auth.rememberMe": "मुझे याद रखें",
    "auth.forgotPassword": "पासवर्ड भूल गए?",
    "auth.signIn": "साइन इन करें",
    "auth.noAccount": "खाता नहीं है? ",
    "auth.registerBusiness": "अपना व्यवसाय पंजीकृत करें",
    "auth.browseAsCustomer": "ग्राहक के रूप में ब्राउज़ करें",
    "auth.backToHome": "होम पर वापस",

    // Categories
    "category.foodDining": "भोजन और भोजन",
    "category.electronics": "इलेक्ट्रॉनिक्स",
    "category.fashion": "फैशन और कपड़े",
    "category.health": "स्वास्थ्य और सुंदरता",
    "category.home": "घर और बगीचा",
    "category.automotive": "ऑटोमोटिव",
    "category.education": "शिक्षा",
    "category.professional": "व्यावसायिक सेवाएं",
    "category.sports": "खेल और मनोरंजन",
    "category.arts": "कला और शिल्प",
    "category.plants": "पौधे और बगीचा",

    // Modal
    "modal.businessDetails": "व्यवसाय विवरण",
    "modal.contact": "संपर्क",
    "modal.call": "कॉल करें",
    "modal.email": "ईमेल",
    "modal.website": "वेबसाइट",
    "modal.getDirections": "दिशा प्राप्त करें",
    "modal.writeReview": "समीक्षा लिखें",
    "modal.close": "बंद करें",
    "modal.about": "के बारे में",
    "modal.location": "स्थान",
    "modal.hours": "व्यावसायिक घंटे",
    "modal.contactInfo": "संपर्क जानकारी",
  },
  bn: {
    // Header
    "header.browse": "ব্যবসা ব্রাউজ করুন",
    "header.categories": "বিভাগসমূহ",
    "header.about": "সম্পর্কে",
    "header.login": "লগইন",
    "header.register": "ব্যবসা নিবন্ধন করুন",

    // Hero Section
    "hero.title": "সংযুক্ত হন",
    "hero.titleHighlight": "স্থানীয় ব্যবসার সাথে",
    "hero.subtitle":
      "আপনার এলাকার অসাধারণ স্থানীয় ব্যবসাগুলি আবিষ্কার করুন এবং ভোকাল ফর লোকাল আন্দোলনকে সমর্থন করুন। ব্যবসার মালিকদের সাথে সরাসরি সংযুক্ত হন এবং আপনার প্রয়োজনীয় জিনিস খুঁজে পান।",
    "hero.searchPlaceholder": "ব্যবসা, পণ্য বা সেবা খুঁজুন...",
    "hero.allCategories": "সব বিভাগ",
    "hero.search": "খুঁজুন",

    // Stats
    "stats.businesses": "স্থানীয় ব্যবসা",
    "stats.customers": "সন্তুষ্ট গ্রাহক",
    "stats.successRate": "সাফল্যের হার",

    // Featured Section
    "featured.title": "বিশেষ স্থানীয় ব্যবসা",
    "featured.subtitle": "আপনার এলাকার শীর্ষ-রেটেড ব্যবসাগুলি আবিষ্কার করুন যারা তাদের সম্প্রদায়ে পরিবর্তন আনছে।",
    "featured.viewDetails": "বিস্তারিত দেখুন",
    "featured.viewAll": "সব ব্যবসা দেখুন",

    // Categories
    "categories.title": "বিভাগ অনুযায়ী ব্রাউজ করুন",
    "categories.subtitle": "আপনার প্রয়োজনীয় সেবা এবং পণ্য অনুযায়ী ব্যবসা খুঁজুন",

    // CTA Section
    "cta.title": "আপনার ব্যবসা বৃদ্ধির জন্য প্রস্তুত?",
    "cta.subtitle": "হাজার হাজার স্থানীয় ব্যবসার সাথে যোগ দিন যারা ইতিমধ্যে LocalConnect-এ গ্রাহকদের সাথে সংযুক্ত হচ্ছে",
    "cta.registerBusiness": "আপনার ব্যবসা নিবন্ধন করুন",
    "cta.browseBusinesses": "ব্যবসা ব্রাউজ করুন",

    // Categories
    "category.foodDining": "খাদ্য ও ভোজন",
    "category.electronics": "ইলেকট্রনিক্স",
    "category.fashion": "ফ্যাশন ও পোশাক",
    "category.health": "স্বাস্থ্য ও সৌন্দর্য",
    "category.home": "বাড়ি ও বাগান",
    "category.automotive": "অটোমোটিভ",
    "category.education": "শিক্ষা",
    "category.professional": "পেশাদার সেবা",
    "category.sports": "খেলাধুলা ও বিনোদন",
    "category.arts": "শিল্প ও কারুশিল্প",
    "category.plants": "গাছপালা ও বাগান",

    // Modal
    "modal.businessDetails": "ব্যবসার বিস্তারিত",
    "modal.contact": "যোগাযোগ",
    "modal.call": "কল করুন",
    "modal.email": "ইমেইল",
    "modal.website": "ওয়েবসাইট",
    "modal.getDirections": "দিকনির্দেশনা পান",
    "modal.writeReview": "রিভিউ লিখুন",
    "modal.close": "বন্ধ করুন",
    "modal.about": "সম্পর্কে",
    "modal.location": "অবস্থান",
    "modal.hours": "ব্যবসার সময়",
    "modal.contactInfo": "যোগাযোগের তথ্য",
  },
  te: {
    // Header
    "header.browse": "వ్యాపారాలను బ్రౌజ్ చేయండి",
    "header.categories": "వర్గాలు",
    "header.about": "గురించి",
    "header.login": "లాగిన్",
    "header.register": "వ్యాపారం నమోదు చేయండి",

    // Hero Section
    "hero.title": "కనెక్ట్ అవ్వండి",
    "hero.titleHighlight": "స్థానిక వ్యాపారాలతో",
    "hero.subtitle":
      "మీ ప్రాంతంలోని అద్భుతమైన స్థానిక వ్యాపారాలను కనుగొనండి మరియు వోకల్ ఫర్ లోకల్ ఉద్యమానికి మద్దతు ఇవ్వండి। వ్యాపార యజమానులతో నేరుగా కనెక్ట్ అవ్వండి మరియు మీకు అవసరమైనది కనుగొనండి।",
    "hero.searchPlaceholder": "వ్యాపారాలు, ఉత్పత్తులు లేదా సేవలను వెతకండి...",
    "hero.allCategories": "అన్ని వర్గాలు",
    "hero.search": "వెతకండి",

    // Stats
    "stats.businesses": "స్థానిక వ్యాపారాలు",
    "stats.customers": "సంతోషకరమైన కస్టమర్లు",
    "stats.successRate": "విజయ రేటు",

    // Featured Section
    "featured.title": "ప్రత్యేక స్థానిక వ్యాపారాలు",
    "featured.subtitle": "మీ ప్రాంతంలో వారి కమ్యూనిటీలలో మార్పు తెస్తున్న టాప్-రేటెడ్ వ్యాపారాలను కనుగొనండి।",
    "featured.viewDetails": "వివరాలు చూడండి",
    "featured.viewAll": "అన్ని వ్యాపారాలు చూడండి",

    // Categories
    "categories.title": "వర్గం ప్రకారం బ్రౌజ్ చేయండి",
    "categories.subtitle": "మీకు అవసరమైన సేవలు మరియు ఉత్పత్తుల ప్రకారం వ్యాపారాలను కనుగొనండి",

    // CTA Section
    "cta.title": "మీ వ్యాపారాన్ని పెంచడానికి సిద్ధంగా ఉన్నారా?",
    "cta.subtitle": "ఇప్పటికే LocalConnect లో కస్టమర్లతో కనెక్ట్ అవుతున్న వేలాది స్థానిక వ్యాపారాలలో చేరండి",
    "cta.registerBusiness": "మీ వ్యాపారాన్ని నమోదు చేయండి",
    "cta.browseBusinesses": "వ్యాపారాలను బ్రౌజ్ చేయండి",

    // Categories
    "category.foodDining": "ఆహారం & భోజనం",
    "category.electronics": "ఎలక్ట్రానిక్స్",
    "category.fashion": "ఫ్యాషన్ & దుస్తులు",
    "category.health": "ఆరోగ్యం & అందం",
    "category.home": "ఇల్లు & తోట",
    "category.automotive": "ఆటోమోటివ్",
    "category.education": "విద్య",
    "category.professional": "తొలియదు సేవలు",
    "category.sports": "విలైదు మరియు పొలియదు",
    "category.arts": "కళలు & కరకుషలు",
    "category.plants": "పౌలు & తోట",

    // Modal
    "modal.businessDetails": "వ్యాపార వివరాలు",
    "modal.contact": "సంపర్కం",
    "modal.call": "అందం",
    "modal.email": "మెయిల్",
    "modal.website": "వెబ్‌సైట్",
    "modal.getDirections": "దిశలను పొందండి",
    "modal.writeReview": "మద్దతు ఎలా ఇవ్వాలి?",
    "modal.close": "మూసివేయండి",
    "modal.about": "గురించి",
    "modal.location": "స్థానం",
    "modal.hours": "వ్యాపార నిమిషాలు",
    "modal.contactInfo": "సంపర్క సమాచారం",
  },
  mr: {
    // Header
    "header.browse": "व्यवसाय ब्राउझ करा",
    "header.categories": "श्रेणी",
    "header.about": "बद्दल",
    "header.login": "लॉगिन",
    "header.register": "व्यवसाय नोंदणी करा",

    // Hero Section
    "hero.title": "जोडा",
    "hero.titleHighlight": "स्थानिक व्यवसायांशी",
    "hero.subtitle":
      "तुमच्या परिसरातील अद्भुत स्थानिक व्यवसाय शोधा आणि व्होकल फॉर लोकल चळवळीला पाठिंबा द्या। व्यवसाय मालिकांशी थेट संपर्क साधा आणि तुम्हाला जे हवे ते शोधा.",
    "hero.searchPlaceholder": "व्यवसाय, उत्पादने किंवा सेवा शोधा...",
    "hero.allCategories": "सर्व श्रेणी",
    "hero.search": "शोधा",

    // Stats
    "stats.businesses": "स्थानिक व्यवसाय",
    "stats.customers": "आनंदी ग्राहक",
    "stats.successRate": "यश दर",

    // Featured Section
    "featured.title": "वैशिष्ट्यीकृत स्थानिक व्यवसाय",
    "featured.subtitle": "तुमच्या परिसरातील टॉप-रेटेड व्यवसाय शोधा जे त्यांच्या समुदायांमध्ये बदल घडवून आणत आहेत.",
    "featured.viewDetails": "तपशील पहा",
    "featured.viewAll": "सर्व व्यवसाय पहा",

    // Categories
    "categories.title": "श्रेणीनुसार ब्राउझ करा",
    "categories.subtitle": "तुम्हाला आवश्यक असलेल्या सेवा आणि उत्पादनांनुसार व्यवसाय शोधा",

    // CTA Section
    "cta.title": "तुमचा व्यवसाय वाढवण्यासाठी तयार आहात?",
    "cta.subtitle": "आधीच LocalConnect वर ग्राहकांशी जोडले जाणारे हजारो स्थानिक व्यवसायांमध्ये सामील व्हा",
    "cta.registerBusiness": "तुमचा व्यवसाय नोंदणी करा",
    "cta.browseBusinesses": "व्यवसाय ब्राउझ करा",

    // Categories
    "category.foodDining": "अन्न आणि जेवण",
    "category.electronics": "इलेक्ट्रॉनिक्स",
    "category.fashion": "फॅशन आणि कपडे",
    "category.health": "आरोग्य आणि सौंदर्य",
    "category.home": "घर आणि बाग",
    "category.automotive": "ऑटोमोटिव्ह",
    "category.education": "शिक्षण",
    "category.professional": "व्यावसायिक सेवा",
    "category.sports": "खेळ आणि मनोरंજन",
    "category.arts": "कला आणि हस्तकला",
    "category.plants": "झाडे आणि बाग",

    // Modal
    "modal.businessDetails": "व्यवसाय तपशील",
    "modal.contact": "संपर्क",
    "modal.call": "कॉल करा",
    "modal.email": "ईमेल",
    "modal.website": "वेबसाइट",
    "modal.getDirections": "दिशा मिळवा",
    "modal.writeReview": "पुनरावलोकन लिहा",
    "modal.close": "बंद करा",
    "modal.about": "बद्दल",
    "modal.location": "स्थान",
    "modal.hours": "व्यवसाय तास",
    "modal.contactInfo": "संपर्क माहिती",
  },
  ta: {
    // Header
    "header.browse": "வணிகங்களை உலாவுக",
    "header.categories": "வகைகள்",
    "header.about": "பற்றி",
    "header.login": "உள்நுழைவு",
    "header.register": "வணிகத்தை பதிவு செய்யுங்கள்",

    // Hero Section
    "hero.title": "இணைந்து கொள்ளுங்கள்",
    "hero.titleHighlight": "உள்ளூர் வணிகங்களுடன்",
    "hero.subtitle":
      "உங்கள் பகுதியில் உள்ள அற்புதமான உள்ளூர் வணிகங்களைக் கண்டறிந்து வோகல் ஃபார் லோக்கல் இயக்கத்தை ஆதரிக்கவும். வணிக உரிமையாளர்களுடன் நேரடியாக இணைந்து உங்களுக்குத் தேவையானதைக் கண்டறியுங்கள்.",
    "hero.searchPlaceholder": "வணிகங்கள், தயாரிப்புகள் அல்லது சேவைகளைத் தேடுங்கள்...",
    "hero.allCategories": "அனைத்து வகைகள்",
    "hero.search": "தேடுக",

    // Stats
    "stats.businesses": "உள்ளூர் வணிகங்கள்",
    "stats.customers": "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    "stats.successRate": "வெற்றி விகிதம்",

    // Featured Section
    "featured.title": "சிறப்பு உள்ளூர் வணிகங்கள்",
    "featured.subtitle": "உங்கள் பகுதியில் அவர்களின் சமூகங்களில் மாற்றத்தை ஏற்படுத்தும் உயர்-மதிப்பீட்டு வணிகங்களைக் கண்டறியுங்கள்.",
    "featured.viewDetails": "விவரங்களைப் பார்க்கவும்",
    "featured.viewAll": "அனைத்து வணிகங்களையும் பார்க்கவும்",

    // Categories
    "categories.title": "வகை அடிப்படையில் உலாவுக",
    "categories.subtitle": "உங்களுக்குத் தேவையான சேவைகள் மற்றும் தயாரிப்புகளின் அடிப்படையில் வணிகங்களைக் கண்டறியுங்கள்",

    // CTA Section
    "cta.title": "உங்கள் வணிகத்தை வளர்க்க தயாரா?",
    "cta.subtitle": "ஏற்கனவே LocalConnect இல் வாடிக்கையாளர்களுடன் இணைந்து வரும் ஆயிரக்கணக்கான உள்ளூர் வணிகங்களில் சேருங்கள்",
    "cta.registerBusiness": "உங்கள் வணிகத்தை பதிவு செய்யுங்கள்",
    "cta.browseBusinesses": "வணிகங்களை உலாவுக",

    // Categories
    "category.foodDining": "உணவு மற்றும் உணவருந்துதல்",
    "category.electronics": "மின்னணுவியல்",
    "category.fashion": "ஃபேஷன் மற்றும் ஆடை",
    "category.health": "ஆரோக்கியம் மற்றும் அழகு",
    "category.home": "வீடு மற்றும் தோட்டம்",
    "category.automotive": "வாகன",
    "category.education": "கல்வி",
    "category.professional": "தொழில்முறை சேவைகள்",
    "category.sports": "விளையாட்டு மற்றும் பொழுதுபோக்கு",
    "category.arts": "கலை மற்றும் கைவினை",
    "category.plants": "தாவரங்கள் மற்றும் தோட்டம்",

    // Modal
    "modal.businessDetails": "வணிக விவரங்கள்",
    "modal.contact": "தொடர்பு",
    "modal.call": "அழைக்கவும்",
    "modal.email": "மின்னஞ்சல்",
    "modal.website": "வலைத்தளம்",
    "modal.getDirections": "திசைகளைப் பெறுங்கள்",
    "modal.writeReview": "மதிப்பாய்வு எழுதுங்கள்",
    "modal.close": "மூடுக",
    "modal.about": "பற்றி",
    "modal.location": "இடம்",
    "modal.hours": "வணிக நேரங்கள்",
    "modal.contactInfo": "தொடர்பு தகவல்",
  },
  gu: {
    // Header
    "header.browse": "વ્યવસાયો બ્રાઉઝ કરો",
    "header.categories": "શ્રેણીઓ",
    "header.about": "વિશે",
    "header.login": "લોગિન",
    "header.register": "વ્યવસાય નોંધણી કરો",

    // Hero Section
    "hero.title": "જોડાઓ",
    "hero.titleHighlight": "સ્થાનિક વ્યવસાયો સાથે",
    "hero.subtitle":
      "તમારા વિસ્તારમાં અદ્ભુત સ્થાનિક વ્યવસાયો શોધો અને વોકલ ફોર લોકલ ચળવળને ટેકો આપો. વ્યવસાય માલિકો સાથે સીધો સંપર્ક કરો અને તમને જે જોઈએ તે શોધો.",
    "hero.searchPlaceholder": "વ્યવસાયો, ઉત્પાદનો અથવા સેવાઓ શોધો...",
    "hero.allCategories": "બધી શ્રેણીઓ",
    "hero.search": "શોધો",

    // Stats
    "stats.businesses": "સ્થાનિક વ્યવસાયો",
    "stats.customers": "ખુશ ગ્રાહકો",
    "stats.successRate": "સફળતા દર",

    // Featured Section
    "featured.title": "વિશેષ સ્થાનિક વ્યવસાયો",
    "featured.subtitle": "તમારા વિસ્તારમાં તેમના સમુદાયોમાં ફેરફાર લાવતા ટોપ-રેટેડ વ્યવસાયો શોધો.",
    "featured.viewDetails": "વિગતો જુઓ",
    "featured.viewAll": "બધા વ્યવસાયો જુઓ",

    // Categories
    "categories.title": "શ્રેણી પ્રમાણે બ્રાઉઝ કરો",
    "categories.subtitle": "તમને જોઈતી સેવાઓ અને ઉત્પાદનો પ્રમાણે વ્યવસાયો શોધો",

    // CTA Section
    "cta.title": "તમારો વ્યવસાય વધારવા માટે તૈયાર છો?",
    "cta.subtitle": "પહેલેથી જ LocalConnect પર ગ્રાહકો સાથે જોડાતા હજારો સ્થાનિક વ્યવસાયોમાં જોડાઓ",
    "cta.registerBusiness": "તમારો વ્યવસાય નોંધણી કરો",
    "cta.browseBusinesses": "વ્યવસાયો બ્રાઉઝ કરો",

    // Categories
    "category.foodDining": "ખોરાક અને ભોજન",
    "category.electronics": "ઇલેક્ટ્રોનિક્સ",
    "category.fashion": "ફેશન અને કપડાં",
    "category.health": "આરોગ્ય અને સુંદરતા",
    "category.home": "ઘર અને બગીચો",
    "category.automotive": "ઓટોમોટિવ",
    "category.education": "શિક્ષણ",
    "category.professional": "વ્યાવસાયિક સેવાઓ",
    "category.sports": "રમતગમત અને મનોરંજન",
    "category.arts": "કલા અને હસ્તકલા",
    "category.plants": "છોડ અને બગીચો",

    // Modal
    "modal.businessDetails": "વ્યવસાય વિગતો",
    "modal.contact": "સંપર્ક",
    "modal.call": "કૉલ કરો",
    "modal.email": "ઇમેઇલ",
    "modal.website": "વેબસાઇટ",
    "modal.getDirections": "દિશાઓ મેળવો",
    "modal.writeReview": "સમીક્ષા લખો",
    "modal.close": "બંધ કરો",
    "modal.about": "વિશે",
    "modal.location": "સ્થાન",
    "modal.hours": "વ્યવસાય કલાકો",
    "modal.contactInfo": "સંપર્ક માહિતી",
  },
  kn: {
    // Header
    "header.browse": "ವ್ಯಾಪಾರಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ",
    "header.categories": "ವರ್ಗಗಳು",
    "header.about": "ಬಗ್ಗೆ",
    "header.login": "ಲಾಗಿನ್",
    "header.register": "ವ್ಯಾಪಾರ ನೋಂದಣಿ ಮಾಡಿ",

    // Hero Section
    "hero.title": "ಸಂಪರ್ಕಿಸಿ",
    "hero.titleHighlight": "ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಗಳೊಂದಿಗೆ",
    "hero.subtitle":
      "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿನ ಅದ್ಭುತ ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ ಮತ್ತು ವೋಕಲ್ ಫಾರ್ ಲೋಕಲ್ ಚಳುವಳಿಯನ್ನು ಬೆಂಬಲಿಸಿ. ವ್ಯಾಪಾರ ಮಾಲೀಕರೊಂದಿಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ನಿಮಗೆ ಬೇಕಾದುದನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
    "hero.searchPlaceholder": "ವ್ಯಾಪಾರಗಳು, ಉತ್ಪನ್ನಗಳು ಅಥವಾ ಸೇವೆಗಳನ್ನು ಹುಡುಕಿ...",
    "hero.allCategories": "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    "hero.search": "ಹುಡುಕಿ",

    // Stats
    "stats.businesses": "ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಗಳು",
    "stats.customers": "ಸಂತೋಷದ ಗ್ರಾಹಕರು",
    "stats.successRate": "ಯಶಸ್ಸಿನ ದರ",

    // Featured Section
    "featured.title": "ವಿಶೇಷ ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಗಳು",
    "featured.subtitle": "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ತಮ್ಮ ಸಮುದಾಯಗಳಲ್ಲಿ ಬದಲಾವಣೆ ತರುತ್ತಿરುವ ಉನ್ನತ-રೇಟೆಡ್ ವ್ಯವસાયಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
    "featured.viewDetails": "ವಿವರಗಳನ್ನು ನೋಡಿ",
    "featured.viewAll": "ಎಲ್ಲಾ ವ್ಯಾಪಾರಗಳನ್ನು ನೋಡಿ",

    // Categories
    "categories.title": "ವರ್ಗದ ಪ್ರಕಾರ ಬ್ರೌಸ್ ಮಾಡಿ",
    "categories.subtitle": "ನಿಮಗೆ ಬೇಕಾದ ಸೇವೆಗಳು ಮತ್ತು ಉತ್ಪಾદನಗಳ ಪ್ರಕಾರ ವ್ಯಾಪಾರಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ",

    // CTA Section
    "cta.title": "ನಿಮ್ಮ ವ್ಯಾಪಾರವನ್ನು ಬೆಳೆಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    "cta.subtitle": "ಈಗಾಗಲೇ LocalConnect ನಲ್ಲಿ ಗ್ರಾಹಕರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತಿರುವ ಸಾವಿರಾರು ಸ್ಥಳೀಯ ವ್ಯಾಪಾರಗಳಲ್ಲಿ ಸೇರಿ",
    "cta.registerBusiness": "ನಿಮ್ಮ ವ್ಯಾಪಾರವನ್ನು ನೋಂದಣಿ ಮಾಡಿ",
    "cta.browseBusinesses": "ವ್ಯಾಪಾರಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ",

    // Categories
    "category.foodDining": "ಆಹಾರ ಮತ್ತು ಭೋಜನ",
    "category.electronics": "ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್",
    "category.fashion": "ಫ್ಯಾಷನ್ ಮತ್ತು ಬಟ್ಟೆ",
    "category.health": "ಆરೋಗ್ಯ ಮತ್ತು ಸೌಂದರ್ಯ",
    "category.home": "ಮನೆ ಮತ್ತು ತೋಟ",
    "category.automotive": "ಆಟೋಮೋಟಿವ್",
    "category.education": "ಶಿಕ್ಷಣ",
    "category.professional": "ವೃತ್ತಿಪರ ಸೇವೆಗಳು",
    "category.sports": "ಕ್ರೀಡೆ ಮತ್ತು ಮನರಂಜನೆ",
    "category.arts": "ಕಲೆ ಮತ್ತು ಕರಕುಶಲ",
    "category.plants": "ಸಸ್ಯಗಳು ಮತ್ತು ತೋಟ",

    // Modal
    "modal.businessDetails": "ವ್ಯಾಪಾರ ವಿವರಗಳು",
    "modal.contact": "ಸಂಪರ್ಕ",
    "modal.call": "ಕರೆ ಮಾಡಿ",
    "modal.email": "ಇಮೇಲ್",
    "modal.website": "ವೆಬ್‌ಸೈಟ್",
    "modal.getDirections": "ದಿಕ್ಕುಗಳನ್ನು ಪಡೆಯಿರಿ",
    "modal.writeReview": "ವಿಮರ್ಶೆ ಬರೆಯಿರಿ",
    "modal.close": "ಮುಚ್ಚಿ",
    "modal.about": "ಬಗ್ಗೆ",
    "modal.location": "ಸ್ಥಳ",
    "modal.hours": "ವ್ಯಾಪಾರ ಸಮಯ",
    "modal.contactInfo": "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
  },
  ml: {
    // Header
    "header.browse": "ബിസിനസ്സുകൾ ബ്രൗസ് ചെയ്യുക",
    "header.categories": "വിഭാഗങ്ങൾ",
    "header.about": "കുറിച്ച്",
    "header.login": "ലോഗിൻ",
    "header.register": "ബിസിനസ്സ് രജിസ്റ്റർ ചെയ്യുക",

    // Hero Section
    "hero.title": "കണക്റ്റ് ചെയ്യുക",
    "hero.titleHighlight": "പ്രാദേശിക ബിസിനസ്സുകളുമായി",
    "hero.subtitle":
      "നിങ്ങളുടെ പ്രദേശത്തെ അത്ഭുതകരമായ പ്രാദേശിക ബിസിനസ്സുകൾ കണ്ടെത്തുകയും വോക്കൽ ഫോർ ലോക്കൽ പ്രസ്ഥാനത്തെ പിന്തുണയ്ക്കുകയും ചെയ്യുക. ബിസിനസ്സ് ഉടമകളുമായി നേരിട്ട് കണക്റ്റ് ചെയ്യുകയും നിങ്ങൾക്ക് വേണ്ടത് കംಡುಹಿಡಿയಿരಿ.",
    "hero.searchPlaceholder": "ബിസിനസ്സുകൾ, ഉൽപ്പന്നങ്ങൾ അല്ലെങ്കിൽ സേവനങ്ങൾ തിരയുക...",
    "hero.allCategories": "എല്ലാ വിഭാഗങ്ങളും",
    "hero.search": "തിരയുക",

    // Stats
    "stats.businesses": "പ്രാദേശിക ബിസിനസ്സുകൾ",
    "stats.customers": "സന്തുഷ്ടരായ ഉപഭോക്താക്കൾ",
    "stats.successRate": "വിജയ നിരക്ക്",

    // Featured Section
    "featured.title": "പ്രത്യേക പ്രാദേശിക ബിസിനസ്സുകൾ",
    "featured.subtitle": "നിങ്ങളുടെ പ്രദേശത്ത് അവരുടെ കമ്മ്യൂണിറ്റികളിൽ മാറ്റം വരുത്തുന്ന ടോപ്പ്-റേറ്റഡ് ബിസിനസ്സുകൾ കണ്ടെത്തുക.",
    "featured.viewDetails": "വിശദാംശങ്ങൾ കാണുക",
    "featured.viewAll": "എല്ലാ ബിസിനസ്സുകളും കാണുക",

    // Categories
    "categories.title": "വിഭാഗം അനുസരിച്ച് ബ്രൌസ് ചെയ്യുക",
    "categories.subtitle": "നിങ്ങൾക്ക് ആവശ്യമുള്ള സേവനങ്ങളും ഉൽപ്പന്നങ്ങളും അനുസരിച്ച് ബിസിനസ്സുകൾ കണ്ടെത്തുക",

    // CTA Section
    "cta.title": "നിങ്ങളുടെ ബിസിനസ്സ് വളർത്താൻ തയ്യാറാണോ?",
    "cta.subtitle": "ഇതിനകം LocalConnect-ൽ ഉപഭോക്താക്കളുമായി കണക്റ്റ് ചെയ്യുന്ന ആയിരക്കണക്കിന് പ്രാദേശിക ബിസിനസ്സുകളിൽ ചേരുക",
    "cta.registerBusiness": "നിങ്ങളുടെ ബിസിനസ്സ് രജിസ്റ്റർ ചെയ്യുക",
    "cta.browseBusinesses": "ബിസിനസ്സുകൾ ബ്രൌസ് ചെയ്യുക",

    // Categories
    "category.foodDining": "ഭക്ഷണവും ഡൈനിംഗും",
    "category.electronics": "ഇലക്ട്രോണിക്സ്",
    "category.fashion": "ഫാഷനും വസ്ത്രവും",
    "category.health": "ആരോഗ്യവും സൌന്ദര്യവും",
    "category.home": "വീടും പൂന്തോട്ടവും",
    "category.automotive": "ഓട്ടോമോട്ടീവ്",
    "category.education": "വിദ്യാഭ്യാസം",
    "category.professional": "പ്രൊഫഷണൽ സേവനങ്ങൾ",
    "category.sports": "കായികവും വിനോദവും",
    "category.arts": "കലയും കരകൗശലവും",
    "category.plants": "ചെടികളും പൂന്തോട്ടവും",

    // Modal
    "modal.businessDetails": "ബിസിനസ്സ് വിശദാംശങ്ങൾ",
    "modal.contact": "ബന്ധപ്പെടുക",
    "modal.call": "വിളിക്കുക",
    "modal.email": "ഇമെയിൽ",
    "modal.website": "വെബ്സൈറ്റ്",
    "modal.getDirections": "ദിശകൾ നേടുക",
    "modal.writeReview": "അവലോകനം എഴുതുക",
    "modal.close": "അടയ്ക്കുക",
    "modal.about": "കുറിച്ച്",
    "modal.location": "സ്ഥലം",
    "modal.hours": "ബിസിനസ്സ് സമയം",
    "modal.contactInfo": "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
  },
  pa: {
    // Header
    "header.browse": "ਕਾਰੋਬਾਰ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
    "header.categories": "ਸ਼੍ਰੇਣੀਆਂ",
    "header.about": "ਬਾਰੇ",
    "header.login": "ਲਾਗਇਨ",
    "header.register": "ਕਾਰੋਬਾਰ ਨਵੀਕਰਣ ਕਰੋ",

    // Hero Section
    "hero.title": "ਜੁੜੋ",
    "hero.titleHighlight": "ਸਥਾਨਕ ਕਾਰੋਬਾਰਾਂ ਨਾਲ",
    "hero.subtitle":
      "ਆਪਣੇ ਖੇਤਰ ਵਿੱਚ ਸ਼ਾਨਦਾਰ ਸਥਾਨਕ ਕਾਰੋਬਾਰਾਂ ਦੀ ਖੋਜ ਕਰੋ ਅਤੇ ਵੋਕਲ ਫਾਰ ਲੋਕਲ ਅੰਦੋਲਨ ਦਾ ਸਮਰਥਨ ਕਰੋ। ਕਾਰੋਬਾਰ ਮਾਲਕਾਂ ਨਾਲ ਸਿੱਧੇ ਜੁੜੋ ਅਤੇ ਜੋ ਤੁਹਾਨੂੰ ਚਾਹੀਦਾ ਹੈ ਉਹ ਲੱਭੋ।",
    "hero.searchPlaceholder": "ਕਾਰੋਬਾਰ, ਉਤਪਾਦ ਜਾਂ ਸੇਵਾਵਾਂ ਖੋਜੋ...",
    "hero.allCategories": "ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ",
    "hero.search": "ਖੋਜੋ",

    // Stats
    "stats.businesses": "ਸਥਾਨਕ ਕਾਰੋਬਾਰ",
    "stats.customers": "ਖੁਸ਼ ਗਾਹਕ",
    "stats.successRate": "ਸਫਲਤਾ ਦਰ",

    // Featured Section
    "featured.title": "ਵਿਸ਼ੇਸ਼ ਸਥਾਨਕ ਕਾਰੋਬਾਰ",
    "featured.subtitle": "ਆਪਣੇ ਖੇਤਰ ਵਿੱਚ ਉਹ ਚੋਟੀ-ਦਰਜਾ ਪ੍ਰਾਪਤ ਕਾਰੋਬਾਰ ਲੱਭੋ ਜੋ ਆਪਣੇ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਤਬਦੀਲੀ ਲਿਆ ਰਹੇ ਹਨ।",
    "featured.viewDetails": "ਵੇਰਵੇ ਵੇਖੋ",
    "featured.viewAll": "ਸਾਰੇ ਕਾਰੋਬਾਰ ਵੇਖੋ",

    // Categories
    "categories.title": "ਸ਼੍ਰੇਣੀ ਅਨੁਸਾਰ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
    "categories.subtitle": "ਤੁਹਾਨੂੰ ਲੋੜੀਂਦੀਆਂ ਸੇਵਾਵਾਂ ਅਤੇ ਉਤਪਾਦਾਂ ਅਨੁਸਾਰ ਕਾਰੋਬਾਰ ਲੱਭੋ",

    // CTA Section
    "cta.title": "ਆਪਣਾ ਕਾਰੋਬਾਰ ਵਧਾਉਣ ਲਈ ਤਿਆਰ ਹੋ?",
    "cta.subtitle": "ਹਜ਼ਾਰਾਂ ਸਥਾਨਕ ਕਾਰੋਬਾਰਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ ਜੋ ਪਹਿਲਾਂ ਹੀ LocalConnect ਤੇ ਗਾਹਕਾਂ ਨਾਲ ਜੁੜ ਰਹੇ ਹਨ",
    "cta.registerBusiness": "ਆਪਣਾ ਕਾਰੋਬਾਰ ਨਵੀਕਰਣ ਕਰੋ",
    "cta.browseBusinesses": "ਕਾਰੋਬਾਰ ਬ੍ਰਾਊਜ਼ ਕਰੋ",

    // Categories
    "category.foodDining": "ਭੋਜਨ ਅਤੇ ਖਾਣਾ",
    "category.electronics": "ਇਲੈਕਟ੍ਰਾਨਿਕਸ",
    "category.fashion": "ਫੈਸ਼ਨ ਅਤੇ ਕੱਪੜੇ",
    "category.health": "ਸਿਹਤ ਅਤੇ ਸੁੰਦਰਤਾ",
    "category.home": "ਘਰ ਅਤੇ ਬਾਗ",
    "category.automotive": "ਆਟੋਮੋਟਿਵ",
    "category.education": "ਸਿੱਖਿਆ",
    "category.professional": "ਪੇਸ਼ੇਵਰ ਸੇਵਾਵਾਂ",
    "category.sports": "ਖੇਡ ਅਤੇ ਮਨੋਰੰਜਨ",
    "category.arts": "ਕਲਾ ਅਤੇ ਦਸਤਕਾਰੀ",
    "category.plants": "ਪੌਧੇ ਅਤੇ ਬਾਗ",

    // Modal
    "modal.businessDetails": "ਕਾਰੋਬਾਰ ਵੇਰਵੇ",
    "modal.contact": "ਸੰਪਰਕ",
    "modal.call": "ਕਾਲ ਕਰੋ",
    "modal.email": "ਈਮੇਲ",
    "modal.website": "ਵੈਬਸਾਈਟ",
    "modal.getDirections": "ਦਿਸ਼ਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
    "modal.writeReview": "ਸਮੀਖਿਆ ਲਿਖੋ",
    "modal.close": "ਬੰਦ ਕਰੋ",
    "modal.about": "ਬਾਰੇ",
    "modal.location": "ਸਥਾਨ",
    "modal.hours": "ਕਾਰੋਬਾਰ ਦੇ ਘੰਟੇ",
    "modal.contactInfo": "ਸੰਪਰਕ ਜਾਣਕਾਰੀ",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { useAuth } from "@/components/auth-provider"
import { Calendar, Users, Sparkles, ArrowRight, Play, Star } from "lucide-react"

const featuredEvents = [
  {
    id: "1",
    name: "TechFest 2024",
    image: "/images/tech-fest.png",
    date: "15 Mar",
    attendees: "2.5K+",
    category: "Technology",
    description: "India's largest college tech festival",
  },
  {
    id: "2",
    name: "Cultural Carnival",
    image: "/images/cultural-event.png",
    date: "22 Mar",
    attendees: "1.8K+",
    category: "Cultural",
    description: "Celebrate diversity through art & music",
  },
  {
    id: "3",
    name: "Innovation Summit",
    image: "/images/campus-life.png",
    date: "28 Mar",
    attendees: "3K+",
    category: "Business",
    description: "Where ideas meet opportunity",
  },
]

const stats = [
  { number: "50K+", label: "Students Connected", icon: Users },
  { number: "500+", label: "Events Hosted", icon: Calendar },
  { number: "100+", label: "Partner Colleges", icon: Star },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  // const { user } = useAuth()
  const user: [] = [];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-violet-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-purple-200 rounded-lg opacity-20 rotate-45"
          animate={{
            rotate: [45, 65, 45],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-20 h-20 bg-pink-200 rounded-full opacity-20"
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4 lg:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white border-0 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                India's #1 College Event Platform
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight">
                Discover Amazing{" "}
                <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  College Events
                </span>{" "}
                Near You
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                From tech fests to cultural nights, hackathons to workshops — find and join the most exciting college
                events across India. Connect, learn, and create memories that last forever.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link href="#events">
                  <Calendar className="mr-2 lg:mr-3 h-5 w-5 lg:h-6 lg:w-6" />
                  Explore Events
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {user ? (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 group bg-transparent"
                  asChild
                >
                  <Link href="/dashboard">
                    <Play className="mr-2 lg:mr-3 h-5 w-5 lg:h-6 lg:w-6" />
                    Go to Dashboard
                  </Link>
                </Button>
              ) : (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 group bg-transparent"
                  asChild
                >
                  <Link href="/auth/signup">
                    <Play className="mr-2 lg:mr-3 h-5 w-5 lg:h-6 lg:w-6" />
                    Join Now
                  </Link>
                </Button>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-4 h-4 lg:w-6 lg:h-6 text-violet-600 mr-1 lg:mr-2" />
                    <div className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-xs lg:text-sm font-medium text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Featured Events Slider */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[300px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={featuredEvents[currentSlide]?.image || "/placeholder.svg"}
                    alt={featuredEvents[currentSlide]?.name || "Event image"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <motion.div
                    className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8 text-white"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Badge className="bg-white/20 text-white border-white/30 mb-2 lg:mb-4">
                      {featuredEvents[currentSlide]?.category}
                    </Badge>
                    <h3 className="text-xl lg:text-3xl font-bold mb-1 lg:mb-2">{featuredEvents[currentSlide]?.name}</h3>
                    <p className="text-sm lg:text-lg text-white/90 mb-2 lg:mb-4">
                      {featuredEvents[currentSlide]?.description}
                    </p>
                    <div className="flex items-center gap-4 lg:gap-6 text-xs lg:text-sm">
                      <div className="flex items-center gap-1 lg:gap-2">
                        <Calendar className="w-3 h-3 lg:w-5 lg:h-5" />
                        {featuredEvents[currentSlide]?.date}
                      </div>
                      <div className="flex items-center gap-1 lg:gap-2">
                        <Users className="w-3 h-3 lg:w-5 lg:h-5" />
                        {featuredEvents[currentSlide]?.attendees}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center mt-4 lg:mt-6 gap-3">
              {featuredEvents.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-violet-600 w-8" : "bg-slate-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

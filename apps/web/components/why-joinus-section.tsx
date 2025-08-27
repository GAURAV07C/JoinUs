"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, QrCode, Bell, Calendar, Award, Zap, Heart } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "50K+ Students Connected",
    description: "Join India's largest community of college students discovering amazing events together",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Verified College Events",
    description: "Every event is verified by our team. Only authentic college events make it to our platform",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: QrCode,
    title: "Instant QR Tickets",
    description: "Get your digital tickets instantly. No more waiting in long queues or losing paper tickets",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Never miss your favorite events with personalized notifications and reminders",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Calendar,
    title: "Calendar Sync",
    description: "Seamlessly sync events with Google Calendar, Apple Calendar, and other calendar apps",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Award,
    title: "Certificates & Rewards",
    description: "Earn digital certificates and unlock exclusive rewards for active participation",
    color: "text-violet-600",
    bgColor: "bg-violet-100",
    gradient: "from-violet-500 to-violet-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

import type { ReactElement } from "react"

export function WhyJoinUsSection(): ReactElement {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 mb-6 px-4 py-2">
            <Heart className="w-4 h-4 mr-2" />
            Why Students Love JoinUs
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              Epic College Events
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From discovering events to getting tickets, from networking to earning certificates — we've got everything
            covered for your college journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm h-full group">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className={`w-10 h-10 ${feature.color}`} />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed flex-grow">{feature.description}</p>

                  <motion.div
                    className={`mt-6 h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg">
            <Zap className="w-6 h-6" />
            Ready to discover amazing events?
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession,  signOut } from "next-auth/react";
import { Badge } from "@/components/ui/badge"

import {
  Home,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  Plus,
  QrCode,
  BarChart3,
  UserCheck,
  Shield,
  CheckSquare,
} from "lucide-react"

interface SidebarProps {
  className?: string
}
import { toast } from "sonner";

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
}

const overlayVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession();
    const user = session?.user; // abhi se tumhe user mil jayega

  const toggleSidebar = () => setIsOpen(!isOpen)

  const getNavigationItems = () => {
    const baseItems = [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: Home,
      },
      {
        name: "My Events",
        href: "/dashboard/my-events",
        icon: Calendar,
      },
    ]

    if (user?.role === "ORGANIZER" || user?.role === "ADMIN") {
      baseItems.push(
        {
          name: "Create Event",
          href: "/dashboard/create-event",
          icon: Plus,
        },
        {
          name: "QR Scanner",
          href: "/dashboard/qr-scanner",
          icon: QrCode,
        },
        {
          name: "Analytics",
          href: "/dashboard/analytics",
          icon: BarChart3,
        },
      )
    }

    if (user?.role === "ADMIN") {
      baseItems.push(
        {
          name: "User Approvals",
          href: "/dashboard/admin/approvals",
          icon: UserCheck,
        },
        {
          name: "Event Approvals",
          href: "/dashboard/admin/event-approvals",
          icon: CheckSquare,
        },
        {
          name: "Admin Analytics",
          href: "/dashboard/admin/analytics",
          icon: Shield,
        },
      )
    }

    baseItems.push({
      name: "Profile",
      href: "/dashboard/profile",
      icon: Settings,
    })

    return baseItems
  }

  const navigationItems = getNavigationItems()

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    signOut();
   
    setIsOpen(false)
  }

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-white border-r border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">JU</span>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={toggleSidebar} className="lg:hidden">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* User Profile */}
      {user && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user?.name || ""} />
              <AvatarFallback className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white">
                {user.name?.charAt(0) }
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={user.role === "ADMIN" ? "destructive" : user.role === "ORGANIZER" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {user?.role?.toLowerCase()}
                </Badge>
                <Badge variant={user.status === "APPROVED" ? "default" : "secondary"} className="text-xs">
                  {user.status?.toLowerCase()}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
              <div
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-md"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:z-50">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
              onClick={toggleSidebar}
            />

            {/* Sidebar */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed inset-y-0 left-0 z-50 w-64 lg:hidden"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

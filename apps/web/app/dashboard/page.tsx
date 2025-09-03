"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import {
  Calendar,
  Users,
  Star,
  TrendingUp,
  Plus,
  Bell,
  Award,
  Clock,
  MapPin,
  Zap,
} from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function DashboardPage() {
 const { data: session } = useSession();
   const user = session?.user; // abhi se tumhe user mil jayega

  if (!user) return null;

  const getDashboardContent = () => {
    switch (user.role) {
      case "USER":
        return <StudentDashboard user={user} />;
      case "ORGANIZER":
        return <OrganizerDashboard user={user} />;
      case "ADMIN":
        return <AdminDashboard user={user} />;
      default:
        return <StudentDashboard user={user} />;
    }
  };

  return (
    <div className="p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Welcome back, {user?.name?.split(" ")[0] || ""}! 👋
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            {user.role === "USER" &&
              "Discover amazing events and connect with your community"}
            {user.role === "ORGANIZER" &&
              "Manage your events and engage with your audience"}
            {user.role === "ADMIN" &&
              "Monitor platform performance and manage users"}
          </p>
        </div>
        <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 text-sm">
          {user.role === "USER" && "Student"}
          {user.role === "ORGANIZER" && "Organizer"}
          {user.role === "ADMIN" && "Administrator"}
        </Badge>
      </motion.div>

      {getDashboardContent()}
    </div>
  );
}

function StudentDashboard({ user }: { user: any }) {
  const stats = [
    {
      icon: Calendar,
      label: "Events Attended",
      value: "0",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Star,
      label: "Favorite Events",
      value: "0",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      icon: Award,
      label: "Certificates",
      value: "0",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Users,
      label: "Connections",
      value: "0",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  const upcomingEvents = [
    {
      name: "Tech Fest 2024",
      date: "Mar 15",
      time: "9:00 AM",
      venue: "Main Auditorium",
    },
    {
      name: "Cultural Night",
      date: "Mar 20",
      time: "6:00 PM",
      venue: "Open Theatre",
    },
    {
      name: "Hackathon 2024",
      date: "Apr 5",
      time: "9:00 AM",
      venue: "CS Building",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-amber-600" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-amber-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold">{event.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.venue}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500"
              >
                <Link href="/">Browse More Events</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-12 bg-transparent"
              >
                <Link href="/dashboard/my-events">
                  <Star className="mr-3 h-5 w-5" />
                  View My Events
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-12 bg-transparent"
              >
                <Link href="/dashboard/tickets">
                  <Award className="mr-3 h-5 w-5" />
                  My Tickets
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-12 bg-transparent"
              >
                <Link href="/dashboard/notifications">
                  <Bell className="mr-3 h-5 w-5" />
                  Notifications
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

function OrganizerDashboard({ user }: { user: any }) {
  const stats = [
    {
      icon: Calendar,
      label: "Total Events",
      value: "15",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Users,
      label: "Total Registrations",
      value: "1,234",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: TrendingUp,
      label: "Revenue",
      value: "₹45,600",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Star,
      label: "Avg Rating",
      value: "4.8",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                asChild
                className="w-full justify-start h-12 bg-gradient-to-r from-amber-500 to-yellow-500"
              >
                <Link href="/dashboard/create-event">
                  <Plus className="mr-3 h-5 w-5" />
                  Create New Event
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-12 bg-transparent"
              >
                <Link href="/dashboard/analytics">
                  <TrendingUp className="mr-3 h-5 w-5" />
                  View Analytics
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-12 bg-transparent"
              >
                <Link href="/dashboard/qr-scanner">
                  <Users className="mr-3 h-5 w-5" />
                  QR Scanner
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-amber-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      New registration for Tech Fest 2024
                    </p>
                    <p className="text-xs text-muted-foreground">
                      2 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Event published: Cultural Night
                    </p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Payment received: ₹500
                    </p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

function AdminDashboard({ user }: { user: any }) {
  const stats = [
    {
      icon: Users,
      label: "Total Users",
      value: "12,456",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Calendar,
      label: "Total Events",
      value: "1,234",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: TrendingUp,
      label: "Platform Revenue",
      value: "₹2,45,600",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Star,
      label: "Active Organizers",
      value: "456",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Admin Actions */}
        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-600" />
                Admin Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-12 bg-transparent"
              >
                <Link href="/dashboard/admin/users">
                  <Users className="mr-3 h-5 w-5" />
                  Manage Users
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-12 bg-transparent"
              >
                <Link href="/dashboard/admin/events">
                  <Calendar className="mr-3 h-5 w-5" />
                  Manage Events
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start h-12 bg-transparent"
              >
                <Link href="/dashboard/admin/analytics">
                  <TrendingUp className="mr-3 h-5 w-5" />
                  Platform Analytics
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* System Status */}
        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-amber-600" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Server Status</span>
                  <Badge className="bg-green-500 text-white">Online</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">Database</span>
                  <Badge className="bg-blue-500 text-white">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-sm font-medium">Payment Gateway</span>
                  <Badge className="bg-yellow-500 text-white">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  TrendingUp,
  DollarSign,
  Download,
  BarChart3,
  Activity,
  Calendar,
  Building,
  Shield,
  AlertTriangle,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  AreaChart,
  Area,
  PieChart,
  Pie,
} from "recharts";

// Mock admin analytics data
const platformStats = [
  { date: "Jan", users: 1200, events: 45, revenue: 25000, organizers: 15 },
  { date: "Feb", users: 1800, events: 62, revenue: 38000, organizers: 22 },
  { date: "Mar", users: 2400, events: 78, revenue: 52000, organizers: 28 },
  { date: "Apr", users: 3200, events: 95, revenue: 68000, organizers: 35 },
  { date: "May", users: 4100, events: 112, revenue: 85000, organizers: 42 },
  { date: "Jun", users: 5200, events: 134, revenue: 105000, organizers: 48 },
];

const userGrowth = [
  { month: "Jan", students: 800, organizers: 12, admins: 3 },
  { month: "Feb", students: 1200, organizers: 18, admins: 3 },
  { month: "Mar", students: 1600, organizers: 24, admins: 4 },
  { month: "Apr", students: 2100, organizers: 30, admins: 4 },
  { month: "May", students: 2800, organizers: 36, admins: 5 },
  { month: "Jun", students: 3600, organizers: 42, admins: 5 },
];

const eventCategories = [
  { name: "Technology", value: 35, color: "#F59E0B" },
  { name: "Cultural", value: 28, color: "#EAB308" },
  { name: "Sports", value: 20, color: "#FB923C" },
  { name: "Academic", value: 17, color: "#F97316" },
];

const topColleges = [
  { name: "Tech University", events: 45, users: 1200 },
  { name: "Arts College", events: 38, users: 980 },
  { name: "Engineering College", events: 32, users: 850 },
  { name: "Business School", events: 28, users: 720 },
  { name: "Medical College", events: 22, users: 650 },
];

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

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("6m");

  const totalUsers = 12456;
  const totalEvents = 1234;
  const totalRevenue = 245600;
  const activeOrganizers = 456;
  const growthRate = 18.5;

  return (
    <div className="p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Platform Analytics
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Monitor platform performance and user engagement
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last month</SelectItem>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
      >
        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">
                    Total Users
                  </p>
                  <p className="text-3xl font-bold text-blue-900">
                    {totalUsers.toLocaleString()}
                  </p>
                  <p className="text-sm text-blue-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />+{growthRate}% growth
                  </p>
                </div>
                <div className="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">
                    Total Events
                  </p>
                  <p className="text-3xl font-bold text-green-900">
                    {totalEvents.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12% from last month
                  </p>
                </div>
                <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-600">
                    Platform Revenue
                  </p>
                  <p className="text-3xl font-bold text-amber-900">
                    ₹{totalRevenue.toLocaleString()}
                  </p>
                  <p className="text-sm text-amber-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +25% from last month
                  </p>
                </div>
                <div className="h-12 w-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">
                    Active Organizers
                  </p>
                  <p className="text-3xl font-bold text-purple-900">
                    {activeOrganizers}
                  </p>
                  <p className="text-sm text-purple-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +8% from last month
                  </p>
                </div>
                <div className="h-12 w-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-600">
                    System Health
                  </p>
                  <p className="text-3xl font-bold text-red-900">99.9%</p>
                  <p className="text-sm text-red-600 flex items-center mt-1">
                    <Shield className="w-4 h-4 mr-1" />
                    All systems operational
                  </p>
                </div>
                <div className="h-12 w-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <Activity className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Platform Growth */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-amber-600" />
                    Platform Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={platformStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="users"
                        stroke="#F59E0B"
                        fill="url(#colorUsers)"
                      />
                      <defs>
                        <linearGradient
                          id="colorUsers"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#F59E0B"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#F59E0B"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Event Categories */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-amber-600" />
                    Event Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={eventCategories}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {eventCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {eventCategories.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm">
                          {item.name}: {item.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Top Colleges */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-amber-600" />
                  Top Performing Colleges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topColleges.map((college, index) => (
                    <div
                      key={college.name}
                      className="flex items-center justify-between p-4 bg-amber-50 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold">{college.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {college.events} events • {college.users} users
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Progress
                          value={(college.events / 50) * 100}
                          className="w-24 h-2"
                        />
                        <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
                          Active
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>User Growth Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={userGrowth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="#F59E0B" name="Students" />
                    <Bar
                      dataKey="organizers"
                      fill="#EAB308"
                      name="Organizers"
                    />
                    <Bar dataKey="admins" fill="#FB923C" name="Admins" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Event Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={platformStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="events"
                      stroke="#F59E0B"
                      strokeWidth={3}
                      dot={{ fill: "#F59E0B", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-amber-600" />
                  Revenue Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={platformStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#EAB308"
                      fill="url(#colorRevenue)"
                    />
                    <defs>
                      <linearGradient
                        id="colorRevenue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#EAB308"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#EAB308"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-amber-600" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">
                      API Response Time
                    </span>
                    <Badge className="bg-green-500 text-white">120ms</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">
                      Database Performance
                    </span>
                    <Badge className="bg-blue-500 text-white">Optimal</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm font-medium">Server Uptime</span>
                    <Badge className="bg-yellow-500 text-white">99.9%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Active Sessions</span>
                    <Badge className="bg-purple-500 text-white">1,234</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        System backup completed
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Database optimization completed
                      </p>
                      <p className="text-xs text-muted-foreground">
                        6 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        High traffic detected
                      </p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

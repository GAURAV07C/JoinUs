"use client";

import { useState } from "react";
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
  Eye,
  Download,
  BarChart3,
  PieChartIcon as RechartsPieChart,
  Activity,
  Star,
  MapPin,
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
  Pie,
} from "recharts";

// Mock analytics data
const registrationData = [
  { date: "Mar 1", registrations: 12, revenue: 1800 },
  { date: "Mar 2", registrations: 19, revenue: 2850 },
  { date: "Mar 3", registrations: 8, revenue: 1200 },
  { date: "Mar 4", registrations: 25, revenue: 3750 },
  { date: "Mar 5", registrations: 31, revenue: 4650 },
  { date: "Mar 6", registrations: 22, revenue: 3300 },
  { date: "Mar 7", registrations: 18, revenue: 2700 },
];

const eventPerformance = [
  {
    name: "Tech Fest 2024",
    registrations: 234,
    capacity: 500,
    revenue: 0,
    views: 1250,
  },
  {
    name: "Cultural Night",
    registrations: 187,
    capacity: 300,
    revenue: 28050,
    views: 890,
  },
  {
    name: "Startup Pitch",
    registrations: 67,
    capacity: 100,
    revenue: 33500,
    views: 456,
  },
  {
    name: "Photography Workshop",
    registrations: 32,
    capacity: 50,
    revenue: 0,
    views: 234,
  },
  {
    name: "Hackathon 2024",
    registrations: 156,
    capacity: 200,
    revenue: 0,
    views: 678,
  },
];

const demographicsData = [
  { name: "1st Year", value: 35, color: "#8B5CF6" },
  { name: "2nd Year", value: 28, color: "#EC4899" },
  { name: "3rd Year", value: 22, color: "#F59E0B" },
  { name: "4th Year", value: 15, color: "#10B981" },
];

const locationData = [
  { city: "Mumbai", registrations: 145 },
  { city: "Delhi", registrations: 98 },
  { city: "Bangalore", registrations: 87 },
  { city: "Chennai", registrations: 76 },
  { city: "Pune", registrations: 65 },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [selectedMetric, setSelectedMetric] = useState("registrations");

  const totalRegistrations = eventPerformance.reduce(
    (sum, event) => sum + event.registrations,
    0
  );
  const totalRevenue = eventPerformance.reduce(
    (sum, event) => sum + event.revenue,
    0
  );
  const totalViews = eventPerformance.reduce(
    (sum, event) => sum + event.views,
    0
  );
  const avgRating = 4.7;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Event Analytics
        </h1>
        <p className="text-muted-foreground">
          Track your event performance and audience insights
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 3 months</SelectItem>
            <SelectItem value="1y">Last year</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" className="bg-transparent">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">
                  Total Registrations
                </p>
                <p className="text-3xl font-bold text-purple-900">
                  {totalRegistrations}
                </p>
                <p className="text-sm text-purple-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12% from last week
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-pink-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-pink-600">
                  Total Revenue
                </p>
                <p className="text-3xl font-bold text-pink-900">
                  ₹{totalRevenue.toLocaleString()}
                </p>
                <p className="text-sm text-pink-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +8% from last week
                </p>
              </div>
              <div className="h-12 w-12 bg-pink-500 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-600">
                  Total Views
                </p>
                <p className="text-3xl font-bold text-amber-900">
                  {totalViews.toLocaleString()}
                </p>
                <p className="text-sm text-amber-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +15% from last week
                </p>
              </div>
              <div className="h-12 w-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-600">
                  Avg Rating
                </p>
                <p className="text-3xl font-bold text-emerald-900">
                  {avgRating}
                </p>
                <p className="text-sm text-emerald-600 flex items-center mt-1">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  Based on 156 reviews
                </p>
              </div>
              <div className="h-12 w-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Registration Trends */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Registration Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={registrationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="registrations"
                      stroke="#8B5CF6"
                      fill="url(#colorRegistrations)"
                    />
                    <defs>
                      <linearGradient
                        id="colorRegistrations"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#8B5CF6"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8B5CF6"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Demographics */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RechartsPieChart className="h-5 w-5 text-primary" />
                  Student Demographics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={demographicsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {demographicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap gap-4 mt-4">
                  {demographicsData.map((item) => (
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
          </div>

          {/* Top Locations */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Top Registration Cities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {locationData.map((location, index) => (
                  <div
                    key={location.city}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="font-medium">{location.city}</span>
                  </div>
                    <div className="flex items-center gap-3">
                      <Progress
                        value={
                          (location.registrations /
                            locationData[0]!.registrations) *
                          100
                        }
                        className="w-24 h-2"
                      />
                      <span className="text-sm font-medium w-12 text-right">
                        {location.registrations}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Event Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {eventPerformance.map((event) => (
                  <div key={event.name} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">{event.name}</h3>
                      <Badge
                        variant={event.revenue > 0 ? "default" : "secondary"}
                      >
                        {event.revenue > 0 ? "Paid" : "Free"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Registrations
                        </p>
                        <p className="text-2xl font-bold text-primary">
                          {event.registrations}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Capacity
                        </p>
                        <p className="text-2xl font-bold">{event.capacity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Revenue</p>
                        <p className="text-2xl font-bold text-emerald-600">
                          ₹{event.revenue.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Views</p>
                        <p className="text-2xl font-bold text-amber-600">
                          {event.views}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Capacity Filled</span>
                        <span>
                          {Math.round(
                            (event.registrations / event.capacity) * 100
                          )}
                          %
                        </span>
                      </div>
                      <Progress
                        value={(event.registrations / event.capacity) * 100}
                        className="h-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={demographicsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Average Session Duration
                  </span>
                  <span className="text-lg font-bold">4m 32s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Bounce Rate</span>
                  <span className="text-lg font-bold">23%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Return Visitors</span>
                  <span className="text-lg font-bold">67%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Social Shares</span>
                  <span className="text-lg font-bold">1,234</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Revenue Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={registrationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#EC4899"
                    strokeWidth={3}
                    dot={{ fill: "#EC4899", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-emerald-500" />
                <p className="text-2xl font-bold">
                  ₹{totalRevenue.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Activity className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                <p className="text-2xl font-bold">
                  ₹{Math.round(totalRevenue / totalRegistrations)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Avg Revenue per User
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-pink-500" />
                <p className="text-2xl font-bold">+18%</p>
                <p className="text-sm text-muted-foreground">Growth Rate</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

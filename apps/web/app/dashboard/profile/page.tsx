"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession,signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Edit, Save, LogOut, Calendar, Trophy } from "lucide-react";
import { toast } from "sonner";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

   const { data: session } = useSession();
    const user = session?.user;
    console.log(user)

  const [profileData, setProfileData] = useState({
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
  });

  const handleSave = () => {
    setIsEditing(false);
    setTimeout(() => {
      toast.success("Profile updated successfully!");
    }, 0);
  };

  const handleLogout = () => {
    setTimeout(() => {
      signOut();
      toast.success("Logged out successfully!");
    }, 0);
  };

  // Mock past events data
  const pastEvents = [
    { id: "1", name: "Tech Fest 2023", date: "2023-12-15", status: "Attended" },
    {
      id: "2",
      name: "Cultural Night 2023",
      date: "2023-11-20",
      status: "Attended",
    },
    {
      id: "3",
      name: "Startup Pitch 2023",
      date: "2023-10-10",
      status: "Winner",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Profile</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Profile Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Personal Information</CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </>
              ) : (
                <>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </>
              )}
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src="/placeholder.svg?height=80&width=80"
                  alt="Profile"
                />
                <AvatarFallback className="text-lg">JD</AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button variant="outline" size="sm">
                  Change Photo
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profileData.name || ""}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email || ""}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={profileData.phone || ""}
                onChange={(e) =>
                  setProfileData({ ...profileData, phone: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>

            {isEditing && (
              <div className="flex gap-2">
                <Button onClick={handleSave}>Save Changes</Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Switch to dark theme
                </p>
              </div>
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
            </div>
          </CardContent>
        </Card>

        {/* Past Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Past Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            {pastEvents.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">
                No past events found
              </p>
            ) : (
              <div className="space-y-3">
                {pastEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{event.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <Badge
                      variant={
                        event.status === "Winner" ? "default" : "secondary"
                      }
                      className={
                        event.status === "Winner" ? "bg-yellow-500" : ""
                      }
                    >
                      {event.status === "Winner" && (
                        <Trophy className="mr-1 h-3 w-3" />
                      )}
                      {event.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="w-full text-black font-bold"
            >
              <LogOut className="mr-2 h-4 w-4 text-black font-bold" />
              Log Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

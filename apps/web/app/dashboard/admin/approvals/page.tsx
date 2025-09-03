"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Search,
  Filter,
  Eye,
  UserCheck,
  UserX,
  UserMinus,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";
import { getAllUsers, updateUserStatus } from "@/data/user";

import type { User, UserStatus } from "@/types";
import { toast } from "sonner";

type CurrentUser = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER";
};

export default function UserApprovalsPage() {
  const { data: session } = useSession();
  const currentUser = session?.user as CurrentUser;
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<UserStatus | "ALL">("ALL");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [actionReason, setActionReason] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!currentUser || currentUser.role !== "ADMIN") {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
          <p className="text-muted-foreground">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        toast.error("Failed to load users");
      }
    }
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.college?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "ALL" || user.status === statusFilter;
    return matchesSearch && matchesStatus && user.id !== currentUser.id;
  });

  const getStatusCounts = () => {
    return {
      pending: users.filter((u) => u.status === "PENDING").length,
      approved: users.filter((u) => u.status === "APPROVED").length,
      rejected: users.filter((u) => u.status === "REJECTED").length,
      suspended: users.filter((u) => u.status === "SUSPENDED").length,
    };
  };

  const statusCounts = getStatusCounts();

  const handleUserAction = async (
    userId: string,
    status: UserStatus,
    reason?: string
  ) => {
    setIsLoading(true);
    try {
      const updatedUser = await updateUserStatus(
        userId,
        status,
        reason,
        currentUser.id
      );

      if (updatedUser) {
        // ✅ Await getAllUsers before setting state
        const refreshedUsers = await getAllUsers();
        setUsers((prev) =>
          prev.map((u) =>
            u.id === userId
              ? { ...u, status, rejectionReason: reason ?? null } // update only the changed user
              : u
          )
        );

        setSelectedUser(null);
        setActionReason("");

        const actionText =
          status === "APPROVED"
            ? "approved"
            : status === "REJECTED"
              ? "rejected"
              : "suspended";

        toast.success(`User ${actionText} successfully`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update user status");
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status: UserStatus) => {
    const variants = {
      PENDING: "bg-yellow-100 text-yellow-800 border-yellow-200",
      APPROVED: "bg-green-100 text-green-800 border-green-200",
      REJECTED: "bg-red-100 text-red-800 border-red-200",
      SUSPENDED: "bg-orange-100 text-orange-800 border-orange-200",
    };

    const icons = {
      PENDING: Clock,
      APPROVED: CheckCircle,
      REJECTED: XCircle,
      SUSPENDED: AlertTriangle,
    };

    const Icon = icons[status];

    return (
      <Badge className={`${variants[status]} border`}>
        <Icon className="h-3 w-3 mr-1" />
        {status}
      </Badge>
    );
  };

  const getRoleBadge = (role: string) => {
    const colors = {
      USER: "bg-blue-100 text-blue-800",
      ORGANIZER: "bg-purple-100 text-purple-800",
      ADMIN: "bg-red-100 text-red-800",
    };

    return (
      <Badge className={colors[role as keyof typeof colors] || colors.USER}>
        {role}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          User Approvals
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage user registrations and access permissions
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-yellow-800">Pending</p>
                  <p className="text-2xl font-bold text-yellow-900">
                    {statusCounts.pending}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-800">Approved</p>
                  <p className="text-2xl font-bold text-green-900">
                    {statusCounts.approved}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black">Rejected</p>
                  <p className="text-2xl font-bold text-[#512929]">
                    {statusCounts.rejected}
                  </p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium  text-[#553a5b]">
                    Suspended
                  </p>
                  <p className="text-2xl font-bold text-[#753454]">
                    {statusCounts.suspended}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or college..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={statusFilter}
              onValueChange={(value) =>
                setStatusFilter(value as UserStatus | "ALL")
              }
            >
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Status</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="APPROVED">Approved</SelectItem>
                <SelectItem value="REJECTED">Rejected</SelectItem>
                <SelectItem value="SUSPENDED">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <div className="grid gap-4">
        {filteredUsers.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                      />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{user.name}</h3>
                        {getRoleBadge(user.role)}
                        {getStatusBadge(user.status)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </div>
                        {user.phone && (
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {user.phone}
                          </div>
                        )}
                        {user.college && (
                          <div className="flex items-center gap-1">
                            <GraduationCap className="h-3 w-3" />
                            {user.college}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {user.createdAt.toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedUser(user)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>User Details</DialogTitle>
                          <DialogDescription>
                            Complete information about {user.name}
                          </DialogDescription>
                        </DialogHeader>

                        {selectedUser && (
                          <div className="space-y-6">
                            <div className="flex items-center gap-4">
                              <Avatar className="h-16 w-16">
                                <AvatarImage
                                  src={
                                    selectedUser.avatar || "/placeholder.svg"
                                  }
                                  alt={selectedUser.name}
                                />
                                <AvatarFallback className="text-lg">
                                  {selectedUser.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <h3 className="text-xl font-semibold">
                                    {selectedUser.name}
                                  </h3>
                                  {getRoleBadge(selectedUser.role)}
                                  {getStatusBadge(selectedUser.status)}
                                </div>
                                <p className="text-muted-foreground">
                                  {selectedUser.email}
                                </p>
                              </div>
                            </div>

                            <Separator />

                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <h4 className="font-semibold">
                                  Personal Information
                                </h4>
                                <div className="space-y-2 text-sm">
                                  <div>
                                    <span className="font-medium">Phone:</span>{" "}
                                    {selectedUser.phone || "Not provided"}
                                  </div>
                                  <div>
                                    <span className="font-medium">
                                      College:
                                    </span>{" "}
                                    {selectedUser.college || "Not provided"}
                                  </div>
                                  <div>
                                    <span className="font-medium">
                                      Department:
                                    </span>{" "}
                                    {selectedUser.department || "Not provided"}
                                  </div>
                                  <div>
                                    <span className="font-medium">Year:</span>{" "}
                                    {selectedUser.year || "Not provided"}
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <h4 className="font-semibold">
                                  Account Information
                                </h4>
                                <div className="space-y-2 text-sm">
                                  <div>
                                    <span className="font-medium">
                                      Registered:
                                    </span>{" "}
                                    {selectedUser.createdAt.toLocaleDateString()}
                                  </div>
                                  <div>
                                    <span className="font-medium">
                                      Last Updated:
                                    </span>{" "}
                                    {selectedUser.updatedAt.toLocaleDateString()}
                                  </div>
                                  {selectedUser.approvedBy && (
                                    <div>
                                      <span className="font-medium">
                                        Approved By:
                                      </span>{" "}
                                      {selectedUser.approvedBy}
                                    </div>
                                  )}
                                  {selectedUser.approvedAt && (
                                    <div>
                                      <span className="font-medium">
                                        Approved On:
                                      </span>{" "}
                                      {selectedUser.approvedAt.toLocaleDateString()}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            {(selectedUser.rejectionReason ||
                              selectedUser.suspensionReason) && (
                              <>
                                <Separator />
                                <div className="space-y-2">
                                  <h4 className="font-semibold text-destructive">
                                    {selectedUser.rejectionReason
                                      ? "Rejection Reason"
                                      : "Suspension Reason"}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {selectedUser.rejectionReason ||
                                      selectedUser.suspensionReason}
                                  </p>
                                </div>
                              </>
                            )}

                            <Separator />

                            <div className="space-y-4">
                              <Label htmlFor="reason">
                                Action Reason (Optional)
                              </Label>
                              <Textarea
                                id="reason"
                                placeholder="Enter reason for this action..."
                                value={actionReason}
                                onChange={(e) =>
                                  setActionReason(e.target.value)
                                }
                              />
                            </div>
                          </div>
                        )}

                        <DialogFooter className="gap-2">
                          {selectedUser?.status !== "APPROVED" && (
                            <Button
                              onClick={() =>
                                handleUserAction(
                                  selectedUser!.id,
                                  "APPROVED",
                                  actionReason
                                )
                              }
                              disabled={isLoading}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <UserCheck className="h-4 w-4 mr-2" />
                              Approve
                            </Button>
                          )}

                          {selectedUser?.status !== "REJECTED" && (
                            <Button
                              onClick={() =>
                                handleUserAction(
                                  selectedUser!.id,
                                  "REJECTED",
                                  actionReason
                                )
                              }
                              disabled={isLoading}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              <UserX className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                          )}

                          {selectedUser?.status === "APPROVED" && (
                            <Button
                              variant="outline"
                              onClick={() =>
                                handleUserAction(
                                  selectedUser!.id,
                                  "SUSPENDED",
                                  actionReason
                                )
                              }
                              disabled={isLoading}
                              className="border-orange-200 text-orange-700 hover:bg-orange-50"
                            >
                              <UserMinus className="h-4 w-4 mr-2" />
                              Suspend
                            </Button>
                          )}
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    {user.status === "PENDING" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleUserAction(user.id, "APPROVED")}
                          disabled={isLoading}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <UserCheck className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleUserAction(user.id, "REJECTED")}
                          disabled={isLoading}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <UserX className="h-4 w-4 mr-1 " />
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No users found</h3>
            <p className="text-muted-foreground">
              {searchTerm || statusFilter !== "ALL"
                ? "Try adjusting your search or filter criteria"
                : "No users to display at the moment"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

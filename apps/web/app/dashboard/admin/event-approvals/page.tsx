"use client";

import { useEffect, useMemo, useState } from "react";
import { useEvents, useUpdateEventStatus } from "@/hooks/use-events";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

import {
  Calendar,
  Clock,
  MapPin,
  User,
  Search,
  CheckCircle,
  XCircle,
  Eye,
  Filter,
  Tags,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function EventApprovalsPage() {
  const updateEventStatus = useUpdateEventStatus();
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();
  const { data: allEvents, isLoading, refetch } = useEvents();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"ALL" | "COLLEGE" | "PRIVATE">(
    "ALL"
  );
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");

  const pendingEvents = useMemo(() => {
    let list = (allEvents || []).filter((e) => e.status === "PENDING");
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (e) =>
          e.name?.toLowerCase().includes(q) ||
          e.description?.toLowerCase().includes(q) ||
          e.organizer?.name?.toLowerCase().includes(q) ||
          e.city?.toLowerCase().includes(q) ||
          (Array.isArray(e.tags) &&
            e.tags.some((t: string) => t?.toLowerCase().includes(q)))
      );
    }
    if (typeFilter !== "ALL") list = list.filter((e) => e.type === typeFilter);
    return list;
  }, [allEvents, search, typeFilter]);

  useEffect(() => {
    if (user && user.role !== "ADMIN") {
      toast.error("Access denied. Admins only.");
      router.push("/dashboard");
    }
  }, [user, router]);

  if (user && user.role !== "ADMIN") {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
          <p className="text-muted-foreground">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    );
  }

  const approveEvent = async (eventId: string) => {
    const res = await updateEventStatus.mutateAsync({
      eventId,
      status: "PUBLISHED",
    });
    if (res) {
      toast.success("Event approved and published");
      refetch();
    } else {
      toast.error("Failed to approve event");
    }
  };

  const openReject = (e: any) => {
    setSelectedEvent(e);
    setRejectReason("");
    setRejectDialogOpen(true);
  };

  const rejectEvent = async () => {
    if (!selectedEvent) return;
    const res = await updateEventStatus.mutateAsync({
      eventId: selectedEvent.id,
      status: "REJECTED",
      reason: rejectReason || undefined,
    });
    if (res) {
      toast.success("Event rejected");
      setRejectDialogOpen(false);
      setSelectedEvent(null);
      refetch();
    } else {
      toast.error("Failed to reject event");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Event Approvals
        </h1>
        <p className="text-muted-foreground mt-2">
          Review and manage event submissions awaiting approval
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by event name, organizer, tags, or city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex gap-2">
                <Button
                  variant={typeFilter === "ALL" ? "default" : "outline"}
                  onClick={() => setTypeFilter("ALL")}
                  className={typeFilter === "ALL" ? "" : "bg-transparent"}
                >
                  All
                </Button>
                <Button
                  variant={typeFilter === "COLLEGE" ? "default" : "outline"}
                  onClick={() => setTypeFilter("COLLEGE")}
                  className={typeFilter === "COLLEGE" ? "" : "bg-transparent"}
                >
                  College
                </Button>
                <Button
                  variant={typeFilter === "PRIVATE" ? "default" : "outline"}
                  onClick={() => setTypeFilter("PRIVATE")}
                  className={typeFilter === "PRIVATE" ? "" : "bg-transparent"}
                >
                  Private
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pending List */}
      <div className="grid gap-6 lg:grid-cols-2">
        {isLoading ? (
          <Card>
            <CardContent className="p-12 text-center text-muted-foreground">
              Loading events...
            </CardContent>
          </Card>
        ) : pendingEvents.length === 0 ? (
          <Card className="lg:col-span-2">
            <CardContent className="p-12 text-center">
              <Eye className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-lg font-semibold">No pending events</p>
              <p className="text-muted-foreground">
                New submissions will appear here for review.
              </p>
            </CardContent>
          </Card>
        ) : (
          pendingEvents.map((e) => (
            <Card key={e.id} className="overflow-hidden border-0 shadow-md">
              <div className="relative h-40">
                <Image
                  src={
                    e.posterUrl ||
                    "/placeholder.svg?height=300&width=600&query=event%20poster"
                  }
                  alt={e.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge
                    variant={e.type === "COLLEGE" ? "default" : "secondary"}
                    className="bg-white/90 text-slate-800 border-0"
                  >
                    {e.type}
                  </Badge>
                  {e.isPaid ? (
                    <Badge className="bg-amber-500 text-white border-0">
                      ₹{e.price}
                    </Badge>
                  ) : (
                    <Badge className="bg-emerald-500 text-white border-0">
                      FREE
                    </Badge>
                  )}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{e.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {e.description}
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{new Date(e.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {new Date(`2000-01-01T${e.time}`).toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {e.venue} • {e.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{e.organizer?.name}</span>
                  </div>
                </div>

                {Array.isArray(e.tags) && e.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {e.tags.slice(0, 4).map((t: string) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        <Tags className="h-3 w-3 mr-1" />
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="border rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      Registration Form
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {(e.eventForm?.fields as any)?.map((f: any) => (
                      <li key={f.id} className="text-xs">
                        • {f.label} {f.required ? "(required)" : ""}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" onClick={() => approveEvent(e.id)}>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1 text-white"
                    onClick={() => openReject(e)}
                    
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <Dialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Event</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Provide a reason for rejection (optional, but recommended).
            </p>
            <Textarea
              placeholder="Reason for rejection..."
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              className="bg-transparent"
              onClick={() => setRejectDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={rejectEvent}>
              Reject Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

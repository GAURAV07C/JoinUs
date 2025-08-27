import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer(): React.ReactElement {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">JU</span>
              </div>
              <span className="font-bold text-xl">JoinUs</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting students with amazing college events. Join the community of 10,000+ students discovering and
              creating memorable experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-primary">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Browse Events
              </Link>
              <Link href="/dashboard/create-event" className="block text-gray-400 hover:text-white transition-colors">
                Create Event
              </Link>
              <Link href="/dashboard/my-events" className="block text-gray-400 hover:text-white transition-colors">
                My Events
              </Link>
              <Link href="/dashboard/profile" className="block text-gray-400 hover:text-white transition-colors">
                Profile
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm">Get notified about new events and features</p>
            <div className="space-y-2">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">© 2024 JoinUs. All rights reserved.</div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>India</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>hello@joinus.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

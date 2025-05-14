"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SocialLinks } from "@/components/social-links"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { toast, Toaster } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 5000,
        position: "top-center",
        style: {
          background: "#10B981",
          color: "white",
          border: "none",
        },
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        duration: 5000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "white",
          border: "none",
        },
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }))
  }

  return (
    <div className="flex flex-col">
      <Toaster richColors closeButton />
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/OKTEST.JPG?height=800&width=1920"
            alt="Contact Glitch!"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Get in Touch</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-lg text-muted-foreground">
            Get in touch with the Glitch! eSports Society team
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="john.doe@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select onValueChange={handleSelectChange} value={formData.subject}>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sponsorship">Sponsorship Opportunity</SelectItem>
                        <SelectItem value="event">Event Collaboration</SelectItem>
                        <SelectItem value="membership">Membership Query</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Your message here..." 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">glitchesports@muj.manipal.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+91 9869380730 (President)</p>
                      <p className="text-muted-foreground">+91 9871162997 (General Secretary)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">
                        Manipal University Jaipur
                        <br />
                        Dehmi Kalan, Near GVK Toll Plaza
                        <br />
                        Jaipur-Ajmer Expressway
                        <br />
                        Jaipur, Rajasthan 303007
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Follow us on social media and join our Discord server to stay updated with the latest news and
                    events.
                  </p>
                  <SocialLinks />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>4:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>2:00 PM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Note: Hours may vary during events and holidays. Please email us to schedule a meeting.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full py-8">
        <div className="container px-4">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image src="/REZUME000.jpg?height=800&width=1920&text=Map" alt="Map" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}

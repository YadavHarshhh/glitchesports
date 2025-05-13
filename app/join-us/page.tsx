import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JoinUsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gamedev1.jpg?height=800&width=1920"
            alt="Join Glitch!"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Join Us</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-lg text-muted-foreground">
            Become part of Manipal University Jaipur's premier esports community
          </p>
        </div>
      </section>

      {/* Club Domains */}
      <section className="w-full py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Our Club Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tech & Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Manage our technical infrastructure, develop our website, handle streaming setups, and ensure smooth
                  operations during events.
                </p>
                <ul className="mt-4 space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Web Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Streaming & Production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Technical Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Public Relations & Sponsorships</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Build relationships with sponsors, manage external communications, and represent the club to the
                  university and external organizations.
                </p>
                <ul className="mt-4 space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Sponsor Relations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>External Communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Partnership Development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Media & Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Create and manage content for our social media platforms, handle internal communications, and document
                  our events.
                </p>
                <ul className="mt-4 space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Social Media Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Content Creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Photography & Videography</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Marketing & Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Develop marketing strategies, create promotional materials, and manage our brand identity across all
                  platforms.
                </p>
                <ul className="mt-4 space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Marketing Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Brand Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Campaign Development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Graphic Design & VFX</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Create visual assets for our events, social media, and marketing materials, including posters,
                  banners, and video effects.
                </p>
                <ul className="mt-4 space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Graphic Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Motion Graphics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Visual Effects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logistics & Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Coordinate event logistics, manage equipment, and ensure smooth operations during tournaments and
                  activities.
                </p>
                <ul className="mt-4 space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Event Planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Equipment Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Venue Coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Member Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=200&width=200" alt="Member 1" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="mb-4 italic">
                      "Joining Glitch! was the best decision I made in college. I've improved my gaming skills, made
                      lifelong friends, and gained valuable experience in event management."
                    </p>
                    <div>
                      <p className="font-semibold">Rahul Sharma</p>
                      <p className="text-sm text-muted-foreground">Valorant Team, 3rd Year</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=200&width=200" alt="Member 2" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="mb-4 italic">
                      "As a graphic designer for Glitch!, I've had the opportunity to work on exciting projects and
                      build my portfolio while being part of an amazing community of gamers."
                    </p>
                    <div>
                      <p className="font-semibold">Priya Patel</p>
                      <p className="text-sm text-muted-foreground">Design Team, 2nd Year</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=200&width=200" alt="Member 3" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="mb-4 italic">
                      "Being part of the tech team has given me hands-on experience with streaming setups, web
                      development, and event production that I couldn't get anywhere else."
                    </p>
                    <div>
                      <p className="font-semibold">Arjun Singh</p>
                      <p className="text-sm text-muted-foreground">Tech Team, 4th Year</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
       
      {/* Application Form */}
      <section className="w-full py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Join Our Team</h2>
            <Card>
              <CardHeader>
                <CardTitle>Recruitment Application</CardTitle>
                <CardDescription>Fill out the form below to apply for membership</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 9876543210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Year of Study</Label>
                      <Select>
                        <SelectTrigger id="year">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                          <SelectItem value="4">4th Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="domain">Preferred Domain</Label>
                    <Select>
                      <SelectTrigger id="domain">
                        <SelectValue placeholder="Select domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Tech & Production</SelectItem>
                        <SelectItem value="pr">Public Relations & Sponsorships</SelectItem>
                        <SelectItem value="media">Media & Communication</SelectItem>
                        <SelectItem value="marketing">Marketing & Content</SelectItem>
                        <SelectItem value="design">Graphic Design & VFX</SelectItem>
                        <SelectItem value="logistics">Logistics & Operations</SelectItem>
                        <SelectItem value="gaming">Gaming Team</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Textarea id="experience" placeholder="Tell us about your relevant experience or skills" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="why">Why do you want to join Glitch! eSports Society?</Label>
                    <Textarea id="why" placeholder="Share your motivation for joining our community" />
                  </div>

                  <Button type="submit" className="w-full">
                    Application Starting Soon
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

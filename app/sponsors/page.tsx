import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SponsorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/spon.jpg?height=800&width=1920"
            alt="Glitch! Sponsors"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Sponsors & Partners</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-lg text-muted-foreground">
            The brands and organizations that support our mission
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="w-full py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SponsorCard
              name="BoomPanda"
              /*category="Title Sponsor"*/
              description="TechCorp has been our title sponsor for the past 2 years, providing essential support for our flagship events and tournaments."
              logoSrc="/boom.png"
              website="https://example.com"
            />
            <SponsorCard
              name="Lets Game Now"
              /*category="Gaming Partner"*/
              description="GameHub provides gaming equipment and peripherals for our tournaments and training sessions."
              logoSrc="/lgn.png"
              website="https://www.letsgamenow.com/home"
            />
            <SponsorCard
              name="The Esports Club"
              /*category="Streaming Partner"*/
              description="StreamX powers our live broadcasts and provides technical support for our online events."
              logoSrc="/tec.png"
              website="https://theesports.club/"
            />
            <SponsorCard
              name="Lenovo Legion"
              /*category="Beverage Partner"*/
              description="EnergyDrink keeps our players and attendees refreshed during our long tournament days."
              logoSrc="/lenovo.svg"
              website="https://www.lenovo.com/in/en/legion/?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOoqP0wmzwKDZ9E9OaVaJowuDY-1KvarEZKn_9yNP1v7dp6oVmBZy"
            />
            <SponsorCard
              name="Global Reach"
              category="Educational Partner"
              description="TechUniversity provides workshops and educational resources for our members interested in game development."
              logoSrc="/gr.png"
              website="https://www.globalreach.in/"
            />
            <SponsorCard
              name="Vrkaa"
              category="Merchandise Partner"
              description="GamerGear supplies our team jerseys and merchandise for our events and community."
              logoSrc="/vrkaa.avif"
              website="https://vrkaa.com/"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Partner Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0">
                    <Image src="/placeholder-logo.svg" alt="TechCorp" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="mb-2 italic">
                      "Working with Glitch! eSports Society has been an incredible experience. Their professionalism and
                      passion for gaming create the perfect environment for brands like ours to connect with the student
                      gaming community."
                    </p>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Marketing Director, TechCorp</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0">
                    <Image src="/placeholder-logo.svg" alt="GameHub" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="mb-2 italic">
                      "The events organized by Glitch! are top-notch. The level of engagement and enthusiasm from
                      participants makes our partnership incredibly valuable. We're proud to support the next generation
                      of esports talent."
                    </p>
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">CEO, GameHub</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="w-full py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Become a Sponsor</h2>
            <p className="text-lg text-muted-foreground">
              Partner with Glitch! eSports Society to connect with the vibrant gaming community at Manipal University
              Jaipur. We offer various sponsorship packages tailored to your brand's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sponsorship-deck.pdf">Download Sponsorship Deck</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface SponsorCardProps {
  name: string
  category: string
  description: string
  logoSrc: string
  website: string
}

function SponsorCard({ name, category, description, logoSrc, website }: SponsorCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{category}</CardDescription>
          </div>
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image src={logoSrc || "/placeholder.svg"} alt={name} fill className="object-contain" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <Button variant="outline" size="sm" asChild>
          <Link href={website} target="_blank" rel="noopener noreferrer">
            Visit Website
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

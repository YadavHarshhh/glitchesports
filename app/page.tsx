import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EventCard } from "@/components/event-card"
import { SocialLinks } from "@/components/social-links"
import { ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/homemain.jpg?height=1080&width=1920"
            alt="Glitch! eSports"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 flex flex-col items-center text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            
            <br />
            Glitch! eSports Society
            <br />
            <span className="text-primary">Powering Campus eSports</span>
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground">
            The premier gaming community at Manipal University Jaipur, fostering competitive gaming, skill development,
            and esports excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild>
              <Link href="/join-us">Join Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/events">Explore Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Events Highlights */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Recent Event Highlights</h2>
            <Link
              href="/events"
              className="group flex items-center text-primary hover:text-primary/80 transition-colors mt-2 md:mt-0"
            >
              View all events
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Desktop view - 3 columns */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="REZUME 4.0"
              date="APRIL 2025"
              description="Our flagship tournament featuring multiple games with over 500+ participants and 3000+ footfall."
              imageSrc="/rezume.jpeg?height=400&width=600"
            />
            <EventCard
              title="CLUTCH"
              date="FEBRUARY 2025"
              description="Part of annual cultural fest of MANIPAL UNIVERSITY JAIPUR, ONEIROS, LAN of the biggest esports titles."
              imageSrc="/clutchmainpage.jpg?height=400&width=600"
            />
            <EventCard
              title="PIT STATION"
              date="SEPTEMBER 2024"
              description="Exclusive FIFA & F1 LAN on consoles."
              imageSrc="/pitstn.jpg?height=400&width=600"
            />
          </div>

          {/* Mobile view - carousel */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto pb-4 space-x-4 snap-x snap-mandatory scrollbar-hide">
              <div className="snap-center flex-shrink-0 w-[85vw]">
                <EventCard
                  title="REZUME 4.0"
                  date="APRIL 2025"
                  description="Our flagship tournament featuring multiple games with over 500+ participants and 3000+ footfall."
                  imageSrc="/rezume.jpeg?height=400&width=600"
                />
              </div>
              <div className="snap-center flex-shrink-0 w-[85vw]">
                <EventCard
                  title="CLUTCH"
                  date="FEBRUARY 2025"
                  description="Part of annual cultural fest of MANIPAL UNIVERSITY JAIPUR, ONEIROS, LAN of the biggest esports titles."
                  imageSrc="/clutchmainpage.jpg?height=400&width=600"
                />
              </div>
              <div className="snap-center flex-shrink-0 w-[85vw]">
                <EventCard
                  title="PIT STATION"
                  date="SEPTEMBER 2024"
                  description="Exclusive FIFA & F1 LAN on consoles."
                  imageSrc="/pitstn.jpg?height=400&width=600"
                />
              </div>
             
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="w-full py-20 bg-primary/10">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Ready to Level Up?</h2>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Join Glitch! eSports Society and be part of Manipal University Jaipur's premier gaming community.
                Compete, learn, and grow with fellow gamers.
              </p>
              <Button size="lg" asChild>
                <Link href="/join-us">Join Our Community</Link>
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-video">
                <Image
                  src="/rezume.jpeg?height=400&width=600"
                  alt="Glitch! Community"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="w-full py-16">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-10">Connect With Us</h2>
          <SocialLinks className="justify-center" />
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lan1ot.jpeg?height=800&width=1920"
            alt="About Glitch!"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Uncover The Mission</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-lg text-muted-foreground">
            Learn about our journey, mission, and the values that drive Glitch! eSports Society
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission & Vision</h2>
                <p className="text-lg text-muted-foreground">
                At Glitch! eSports Society, our mission is to create a powerful ecosystem where student gamers, creators, and tech minds can collaborate, compete, and grow. While rooted at Manipal University Jaipur, our reach now spans across India, building a national stage for collegiate esports and gaming culture.We aim to be the driving force behind campus esports in India, bridging passion with professionalism through high-impact tournaments, workshops, and industry partnerships.
                </p>
              </div>
              
            </div>
            <div className="relative w-full aspect-square lg:aspect-video">
              <Image
                src="/lenovo1.jpg?height=600&width=800"
                alt="Glitch! Vision"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Journey */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Our Journey & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>2020</CardTitle>
                <CardDescription>Founded</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Glitch! eSports Society was established with a small group of passionate gamers at MUJ, with the vision of empowering and cultivating a strong esports culture within the college. What began as a close-knit initiative has since laid the foundation for a thriving, competitive, and inclusive gaming community.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>LAN</CardTitle>
                <CardDescription>Rezume Launched</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                We reintroduced REZUME, our flagship event, designed to bring together the best collegiate esports talent through intense Valorant LAN and national outreach.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Inter College </CardTitle>
                <CardDescription>Gamers Asylum</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                Launched Gamers Asylum — our first-ever pan-India college esports tournament, inviting top teams across universities to compete and network at scale.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Present</CardTitle>
                <CardDescription>Community & Growth</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                Now with 5000+ active members and multiple divisions, Glitch! is the beating heart of MUJ’s gaming culture — promoting competition, collaboration, and a future-ready gaming ecosystem.                </p>
              </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We believe in building a supportive, inclusive gaming community where everyone feels welcome
                  regardless of skill level.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We strive for excellence in everything we do, from organizing events to competing in tournaments.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We embrace new technologies, games, and formats to keep our community at the cutting edge of esports.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Sportsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We promote fair play, respect for opponents, and ethical gaming practices in all our activities.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We focus on personal and collective growth, helping members develop gaming skills and professional
                  abilities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We work together across game divisions and with other organizations to create better experiences for
                  all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

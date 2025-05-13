import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/clutch.jpg?height=800&width=1920"
            alt="Glitch! Events"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Events</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-lg text-muted-foreground">
          Step into the world of Glitch
          Where flagship tournaments, immersive workshops, and high-octane gaming sessions redefine campus esports.
          </p>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="w-full py-16">
        <div className="container px-4">
          <Tabs defaultValue="flagship" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8">
              <TabsTrigger value="flagship">Flagship Tournaments</TabsTrigger>
              <TabsTrigger value="workshops">Workshops & Sessions</TabsTrigger>
              <TabsTrigger value="lan-online">Battle Zones</TabsTrigger>
            </TabsList>

            {/* Flagship Tournaments */}
            <TabsContent value="flagship" className="space-y-8">
              {/* Original 3 events */}
              <Card className="overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/rezumeevents.jpg?height=600&width=800"
                      alt="REZUME Tournament"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center justify-between">
                        <Badge className="mb-2">Annual</Badge>
                        <Badge variant="outline">Multi-Game</Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">REZUME</CardTitle>
                      <CardDescription>Our premier annual gaming festival</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-4 space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>March-April (Every Year)</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>MUJ Campus</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>500+ Participants</span>
                      </div>
                      <p className="mt-4">
                      MUJ’s annual flagship gaming fest featuring LAN battles, 20+ game titles, all platforms (mobile/PC/console), creator meetups, workshops, and more — with participants from colleges across India.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/clutch7.jpg?height=600&width=800"
                      alt="ONO Tournament"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center justify-between">
                        <Badge className="mb-2">Annual</Badge>
                        <Badge variant="outline">MUJ Campus</Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">CLUTCH</CardTitle>
                      <CardDescription>Online/Offline nationwide tournament series</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-4 space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>February</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>MUJ Campus</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>300+ Participants</span>
                      </div>
                      <p className="mt-4">
                      Thrilling part of ONEIROS, MUJ’s annual cultural fest, featuring BGMI, Valorant, Tekken, and FIFA LAN tournaments.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/pitstation.jpg?height=600&width=800"
                      alt="PIT STATIONS"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center justify-between">
                        <Badge className="mb-2">Annual</Badge>
                        <Badge variant="outline">OFFLINE LAN</Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">PIT STATION</CardTitle>
                      <CardDescription>Intense LAN competitions</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-4 space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>September</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>MUJ Campus</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>100+ Participants</span>
                      </div>
                      <p className="mt-4">
                      FIFA and F1 LAN event, featuring only high-end consoles — imagine the scale and the thrill of competitive gaming at its best!
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Additional events */}
              <Card className="overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/clutch5.jpg?height=600&width=800"
                      alt="GameFest Tournament"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center justify-between">
                        <Badge className="mb-2">Annual</Badge>
                        <Badge variant="outline">Hybrid</Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">GAMERS ASYLUM</CardTitle>
                      <CardDescription> Pan-India</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-4 space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>September</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>MUJ Campus & Online</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>500+ Participants</span>
                      </div>
                      <p className="mt-4">
                      Exhilarating Pan-India inter-college Valorant tournament, bringing together top college teams from across the country. Featuring high-end casting, the event promises an immersive viewing experience, with top-tier commentary and expert analysis. Players will battle it out for glory and a massive prize pool, making it a must-watch for all Valorant enthusiasts!
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/abtus.jpg?height=600&width=800"
                      alt="Freshman Cup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center justify-between">
                        <Badge className="mb-2">Annual</Badge>
                        <Badge variant="outline">Offline</Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">HOMEBASE</CardTitle>
                      <CardDescription>Retro-themed event for first-year students</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-4 space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>February</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>MUJ Campus</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>300+ Participants</span>
                      </div>
                      <p className="mt-4">
                      Retro-themed event featuring classic old games with a free-to-play setup, perfect to relive the old memories.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 pt-4">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            {/* Workshops & Sessions */}
            <TabsContent value="workshops">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>ENTREPRENEURSHIP SEMINAR</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full aspect-video mb-4">
                      <Image
                        src="/boompanda.jpg?height=400&width=600"
                        alt="ENTREPRENEURSHIP SEMINAR"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p>
                    Learn and lead the way to success with insights from industry experts in both business and gaming. Last year, we had the privilege of hosting the CEO of Boom Panda, who shared invaluable strategies and experiences, merging the worlds of entrepreneurship and gaming to inspire the next generation of gaming industry leaders.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>February</span>
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Code and Quest</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full aspect-video mb-4">
                      <Image
                        src="/gamedev4.jpg?height=400&width=600"
                        alt="Streaming Workshop"
                        fill
                        className="object-cover rounded-md"/>
                    </div>
                    <p>
                    A game development workshop led by our talented alumnis, where they not only teach you how to create games but also share their journeys to success in the gaming industry. This workshop is organized in collaboration with the Directorate of Alumni Relations, offering invaluable insights and guidance for aspiring game developers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>November 2023</span>
                    </div>
                  </CardFooter>
                </Card>

                

                {/* Pagination */}
                <div className="col-span-1 md:col-span-2 flex justify-center items-center space-x-2 pt-4">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* LAN vs Online */}
            <TabsContent value="lan-online">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="relative w-full aspect-video">
                    <Image
                      src="/clutch11.jpg?height=400&width=600"
                      alt="LAN Event"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Command Center → The Arena Experience Emphasizes the intense, immersive, in-person gameplay environment.</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Real-time reactions, real-world tension – feel every moment with zero lag.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Standardized pro-level setups to ensure fair, balanced gameplay.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Forge real connections with fellow gamers, alumni, and industry guests.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Live-stage atmosphere with shoutcasting, crowds, and lights.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Local legend vibes – open to MUJ and nearby institutions.</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Our LAN Events:</h4>
                      <p>REZUME, CLUTCH , Pit Station , Gamers Asylum , Homebase</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative w-full aspect-video">
                    <Image
                      src="/homemain.jpg?height=400&width=600"
                      alt="Online Event"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Digital Arena → The Virtual Showdown
                    Highlights the expansive, flexible, and remote-access nature of online tournaments.</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Nationwide participation – no travel needed, just skills.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Flexible match slots – play across days, manage with ease.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Bigger prize pools, lower costs – more rewards, less hassle.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Broadcast-ready matches – streamlined production with pro casters.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Connectivity hurdles exist, but our fair-play tools keep things in check.</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Our Online Events:</h4>
                      <p>Victor Verse , Reyna's Reals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

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
            Discover our flagship tournaments, workshops, and gaming sessions
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
              <TabsTrigger value="lan-online">LAN vs Online Events</TabsTrigger>
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
                        REZUME is our flagship multi-day gaming festival featuring tournaments across all major game
                        titles, workshops, exhibitions, and industry speakers. The event attracts participants from
                        colleges across India.
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
                        <Badge variant="outline">Online</Badge>
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
                        <span>300+ Teams</span>
                      </div>
                      <p className="mt-4">
                        TBF.
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
                        <Badge className="mb-2">TBF</Badge>
                        <Badge variant="outline">OFFLINE LAN</Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">PIT STATION</CardTitle>
                      <CardDescription>Intense LAN competitions</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-4 space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Quarterly</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>MUJ Campus</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>16 Teams per Game</span>
                      </div>
                      <p className="mt-4">
                        The CLUTCH Series features intense LAN competitions for CSGO and Valorant with a focus on high
                        production value and competitive integrity. These events are perfect for experiencing the thrill
                        of in-person esports.
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
                      src="/placeholder.svg?height=600&width=800"
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
                      <CardDescription>Celebration of gaming culture</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-4 space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>September (Every Year)</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>MUJ Campus & Online</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>400+ Participants</span>
                      </div>
                      <p className="mt-4">
                        GameFest combines competitive tournaments with casual gaming, cosplay competitions, and gaming
                        industry panels. This event celebrates gaming culture in all its forms.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Freshman Cup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center justify-between">
                        <Badge className="mb-2">Annual</Badge>
                        <Badge variant="outline">LAN</Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">Freshman Cup</CardTitle>
                      <CardDescription>Tournament for first-year students</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-4 space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>October (Every Year)</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>MUJ Campus</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>150+ Participants</span>
                      </div>
                      <p className="mt-4">
                        The Freshman Cup is exclusively for first-year students, providing them with a platform to
                        showcase their gaming skills and integrate into the campus gaming community.
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
                    <CardDescription>Learn to create your own games</CardDescription>
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
                      Our game development workshops cover everything from basic concepts to advanced techniques using
                      Unity and Unreal Engine. These hands-on sessions are led by experienced developers and club
                      members.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Monthly</span>
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>GAME DEVELOPMENT WORKSHOP</CardTitle>
                    <CardDescription>Learn to create your own games</CardDescription>
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
                    Our game development workshops cover everything from basic concepts to advanced techniques using
                      Unity and Unreal Engine. These hands-on sessions are led by experienced developers and club
                      members.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Bi-Monthly</span>
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
                      src="/placeholder.svg?height=400&width=600"
                      alt="LAN Event"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">LAN Events</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>In-person experience with immediate reactions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Standardized equipment for fair competition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Networking opportunities with fellow gamers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Higher production value with live audience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Limited to MUJ and nearby colleges</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Our LAN Events:</h4>
                      <p>REZUME, CLUTCH Series, Intra-MUJ Championships, Freshman Cup, GameFest</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative w-full aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Online Event"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Online Events</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Nationwide participation without travel</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Flexible scheduling across multiple days</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Lower operational costs, higher prize pools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Professional streaming and casting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Challenges with connectivity and fair play</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Our Online Events:</h4>
                      <p>ONO Championship, Weekly Scrims, Friendly Matches, Inter-College League, Summer Showdown</p>
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

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users } from "lucide-react"

export default function TeamsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Glitch! Teams"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Teams & Divisions</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-lg text-muted-foreground">
            Meet our competitive teams across various game titles
          </p>
        </div>
      </section>

      {/* Game Divisions */}
      <section className="w-full py-16">
        <div className="container px-4">
          <Tabs defaultValue="valorant" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="valorant">Valorant</TabsTrigger>
              <TabsTrigger value="bgmi">BGMI</TabsTrigger>
              <TabsTrigger value="csgo">CSGO</TabsTrigger>
              <TabsTrigger value="f1">F1</TabsTrigger>
              <TabsTrigger value="coc">Clash of Clans</TabsTrigger>
            </TabsList>

            {/* Valorant */}
            <TabsContent value="valorant">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="sticky top-20 space-y-6">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=600&width=600"
                        alt="Valorant Team"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Valorant Division</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>25+ Active Players</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Trophy className="mr-2 h-4 w-4" />
                        <span>3 Tournament Wins</span>
                      </div>
                      <p className="mt-4">
                        Our Valorant division is one of our strongest competitive teams, with multiple tournament
                        victories and a structured training program. We field multiple teams for different skill levels.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Team Alpha</CardTitle>
                        <Badge>Main Roster</Badge>
                      </div>
                      <CardDescription>Our primary competitive team</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((player) => (
                          <div key={player} className="text-center">
                            <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2 mx-auto">
                              <Image
                                src={`/placeholder.svg?height=200&width=200&text=Player${player}`}
                                alt={`Player ${player}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h4 className="font-medium">Player {player}</h4>
                            <p className="text-sm text-muted-foreground">Role</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>1st Place - College Valorant League 2023</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>2nd Place - REZUME 5.0</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Top 8 - National Collegiate Championship</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Team Beta</CardTitle>
                        <Badge variant="outline">Secondary Roster</Badge>
                      </div>
                      <CardDescription>Our development team</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((player) => (
                          <div key={player} className="text-center">
                            <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2 mx-auto">
                              <Image
                                src={`/placeholder.svg?height=200&width=200&text=Player${player}`}
                                alt={`Player ${player}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h4 className="font-medium">Player {player}</h4>
                            <p className="text-sm text-muted-foreground">Role</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>3rd Place - Intra-MUJ Tournament</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Quarterfinalists - Regional College Cup</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Training Schedule</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Team Practice</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Monday, Wednesday, Friday: 6PM - 9PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>VOD Review</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Tuesday, Thursday: 7PM - 8PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Scrims</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Saturday: 4PM - 8PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Strategy Session</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Sunday: 5PM - 7PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* BGMI */}
            <TabsContent value="bgmi">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="sticky top-20 space-y-6">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=600&width=600"
                        alt="BGMI Team"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">BGMI Division</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>30+ Active Players</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Trophy className="mr-2 h-4 w-4" />
                        <span>5 Tournament Wins</span>
                      </div>
                      <p className="mt-4">
                        Our BGMI division is our largest and most successful team, with multiple tournament victories at
                        regional and national levels. We have a comprehensive training program and multiple competitive
                        squads.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Team Phantom</CardTitle>
                        <Badge>Main Roster</Badge>
                      </div>
                      <CardDescription>Our primary competitive squad</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((player) => (
                          <div key={player} className="text-center">
                            <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2 mx-auto">
                              <Image
                                src={`/placeholder.svg?height=200&width=200&text=Player${player}`}
                                alt={`Player ${player}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h4 className="font-medium">Player {player}</h4>
                            <p className="text-sm text-muted-foreground">Role</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>1st Place - ONO Championship 2023</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>1st Place - REZUME 5.0</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Top 5 - National Collegiate BGMI League</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Team Shadow</CardTitle>
                        <Badge variant="outline">Secondary Roster</Badge>
                      </div>
                      <CardDescription>Our development squad</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((player) => (
                          <div key={player} className="text-center">
                            <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2 mx-auto">
                              <Image
                                src={`/placeholder.svg?height=200&width=200&text=Player${player}`}
                                alt={`Player ${player}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h4 className="font-medium">Player {player}</h4>
                            <p className="text-sm text-muted-foreground">Role</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>2nd Place - Intra-MUJ Tournament</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Semifinalists - Regional College Cup</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Training Schedule</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Team Practice</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Tuesday, Thursday, Saturday: 7PM - 10PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>VOD Review</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Monday, Friday: 8PM - 9PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Scrims</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Wednesday, Sunday: 6PM - 9PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* CSGO */}
            <TabsContent value="csgo">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="sticky top-20 space-y-6">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=600&width=600"
                        alt="CSGO Team"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">CSGO Division</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>20+ Active Players</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Trophy className="mr-2 h-4 w-4" />
                        <span>2 Tournament Wins</span>
                      </div>
                      <p className="mt-4">
                        Our CSGO division has a strong foundation in tactical gameplay and teamwork. We focus on
                        developing strategic depth and mechanical skill through regular practice and competition.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Team Precision</CardTitle>
                        <Badge>Main Roster</Badge>
                      </div>
                      <CardDescription>Our primary competitive team</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((player) => (
                          <div key={player} className="text-center">
                            <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2 mx-auto">
                              <Image
                                src={`/placeholder.svg?height=200&width=200&text=Player${player}`}
                                alt={`Player ${player}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h4 className="font-medium">Player {player}</h4>
                            <p className="text-sm text-muted-foreground">Role</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>1st Place - CLUTCH Series Winter 2022</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>3rd Place - REZUME 5.0</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Quarterfinalists - Regional College Championship</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Training Schedule</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Team Practice</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Monday, Wednesday, Friday: 7PM - 10PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Strategy Session</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Tuesday, Thursday: 8PM - 9PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Scrims</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Saturday: 5PM - 8PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* F1 */}
            <TabsContent value="f1">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="sticky top-20 space-y-6">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image src="/placeholder.svg?height=600&width=600" alt="F1 Team" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">F1 Division</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>15+ Active Racers</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Trophy className="mr-2 h-4 w-4" />
                        <span>1 Tournament Win</span>
                      </div>
                      <p className="mt-4">
                        Our F1 division is our newest competitive team, focusing on racing simulation and strategy. We
                        participate in collegiate racing leagues and organize regular practice sessions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Team Velocity</CardTitle>
                        <Badge>Racing Team</Badge>
                      </div>
                      <CardDescription>Our competitive racing squad</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((player) => (
                          <div key={player} className="text-center">
                            <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2 mx-auto">
                              <Image
                                src={`/placeholder.svg?height=200&width=200&text=Racer${player}`}
                                alt={`Racer ${player}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h4 className="font-medium">Racer {player}</h4>
                            <p className="text-sm text-muted-foreground">Driver</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>1st Place - Collegiate Racing League Season 2</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>2nd Place - REZUME 5.0 Racing Championship</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Racing Schedule</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Practice Sessions</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Tuesday, Thursday: 7PM - 9PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Track Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Monday: 8PM - 9PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Race Day</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Sunday: 6PM - 8PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Clash of Clans */}
            <TabsContent value="coc">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="sticky top-20 space-y-6">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=600&width=600"
                        alt="Clash of Clans Team"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Clash of Clans Division</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>25+ Active Players</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Trophy className="mr-2 h-4 w-4" />
                        <span>3 Tournament Wins</span>
                      </div>
                      <p className="mt-4">
                        Our Clash of Clans division focuses on clan wars and strategic gameplay. We have a dedicated
                        clan for competitive players and regularly participate in tournaments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Glitch Warriors</CardTitle>
                        <Badge>Main Clan</Badge>
                      </div>
                      <CardDescription>Our competitive clan</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((player) => (
                          <div key={player} className="text-center">
                            <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2 mx-auto">
                              <Image
                                src={`/placeholder.svg?height=200&width=200&text=Player${player}`}
                                alt={`Player ${player}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h4 className="font-medium">Player {player}</h4>
                            <p className="text-sm text-muted-foreground">TH14</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Recent Achievements:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>1st Place - Collegiate Clan War League 2023</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>1st Place - REZUME 5.0 Clan Wars</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>20+ War Win Streak</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <div>
                    <h3 className="text-xl font-bold mb-4">War Schedule</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Clan Wars</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Wednesday, Sunday</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Strategy Session</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Monday: 8PM - 9PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Clan War League</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>First week of every month</p>
                        </CardContent>
                      </Card>
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

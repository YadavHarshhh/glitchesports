import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Search, User } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Glitch! Blog"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Blog & News</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-lg text-muted-foreground">
            Stay updated with the latest from Glitch! eSports Society
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-16">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-8">
                <BlogPostCard
                  title="REZUME 5.0: A Recap of Our Biggest Event Yet"
                  excerpt="REZUME 5.0 brought together over 500 gamers from across the country for three days of intense competition, workshops, and networking. Here's a complete recap of the event."
                  date="March 15, 2023"
                  author="John Doe"
                  category="Events"
                  readTime="5 min read"
                  imageSrc="/placeholder.svg?height=600&width=1200"
                  slug="rezume-5-recap"
                />

                <BlogPostCard
                  title="The Evolution of Competitive Valorant: Meta Analysis"
                  excerpt="Our Valorant team head breaks down the current meta, agent picks, and strategies that are dominating the competitive scene in 2023."
                  date="February 28, 2023"
                  author="Ryan Park"
                  category="Game Meta"
                  readTime="8 min read"
                  imageSrc="/placeholder.svg?height=600&width=1200"
                  slug="valorant-meta-analysis"
                />

                <BlogPostCard
                  title="Member Spotlight: Meet Our BGMI Champion"
                  excerpt="Get to know Aiden Kumar, the captain of our BGMI team who led the squad to victory in the recent ONO Championship."
                  date="January 20, 2023"
                  author="Sarah Lee"
                  category="Member Spotlight"
                  readTime="4 min read"
                  imageSrc="/placeholder.svg?height=600&width=1200"
                  slug="member-spotlight-bgmi"
                />

                <BlogPostCard
                  title="Game Development Workshop Series: What We Learned"
                  excerpt="A summary of our recent game development workshop series, including key takeaways and resources for aspiring game developers."
                  date="December 10, 2022"
                  author="David Kim"
                  category="Workshops"
                  readTime="6 min read"
                  imageSrc="/placeholder.svg?height=600&width=1200"
                  slug="game-dev-workshop-recap"
                />

                <BlogPostCard
                  title="Esports Industry Trends to Watch in 2023"
                  excerpt="Our analysis of the emerging trends in the esports industry and what they mean for collegiate esports communities like ours."
                  date="November 30, 2022"
                  author="Emily Wang"
                  category="Industry Insights"
                  readTime="7 min read"
                  imageSrc="/placeholder.svg?height=600&width=1200"
                  slug="esports-trends-2023"
                />
              </div>

              <div className="flex justify-center mt-10">
                <Button variant="outline">Load More</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-8">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle>Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex w-full items-center space-x-2">
                    <Input type="text" placeholder="Search articles..." />
                    <Button type="submit" size="icon" className="flex-shrink-0">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="cursor-pointer">Events</Badge>
                    <Badge className="cursor-pointer">Game Meta</Badge>
                    <Badge className="cursor-pointer">Member Spotlight</Badge>
                    <Badge className="cursor-pointer">Workshops</Badge>
                    <Badge className="cursor-pointer">Industry Insights</Badge>
                    <Badge className="cursor-pointer">Tournaments</Badge>
                    <Badge className="cursor-pointer">Tips & Tricks</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Recent post"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2">REZUME 5.0: A Recap of Our Biggest Event Yet</h4>
                      <p className="text-xs text-muted-foreground">March 15, 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Recent post"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2">The Evolution of Competitive Valorant: Meta Analysis</h4>
                      <p className="text-xs text-muted-foreground">February 28, 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Recent post"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2">Member Spotlight: Meet Our BGMI Champion</h4>
                      <p className="text-xs text-muted-foreground">January 20, 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  imageSrc: string
  slug: string
}

function BlogPostCard({ title, excerpt, date, author, category, readTime, imageSrc, slug }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        <div className="relative h-60 md:h-auto md:w-1/3 md:flex-shrink-0">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-col p-6 md:w-2/3">
          <CardHeader className="p-0 pb-2">
            <div className="flex items-center gap-2 mb-2">
              <Badge>{category}</Badge>
              <span className="text-xs text-muted-foreground">{readTime}</span>
            </div>
            <CardTitle className="line-clamp-2">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 py-2 flex-grow">
            <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
          </CardContent>
          <CardFooter className="p-0 pt-2 flex-col items-start">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/blog/${slug}`}>Read More</Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

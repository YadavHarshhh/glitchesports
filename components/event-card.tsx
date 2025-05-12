import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  description: string
  imageSrc: string
  link?: string
}

export function EventCard({ title, date, description, imageSrc, link = "/events" }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center text-muted-foreground mb-2">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{date}</span>
        </div>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" asChild>
          <Link href={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

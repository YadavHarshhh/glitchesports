"use client"

import Image from "next/image"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Glitch! Gallery"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Gallery</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-lg text-muted-foreground">
            Relive the moments from our events and tournaments
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full py-16">
        <div className="container px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                {/*<TabsTrigger value="2023">2023</TabsTrigger>
                <TabsTrigger value="2022">2022</TabsTrigger>
                <TabsTrigger value="rezume">REZUME</TabsTrigger>
                <TabsTrigger value="ono">ONO</TabsTrigger>*/}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <GalleryGrid />
            </TabsContent>

            <TabsContent value="2023" className="mt-0">
              <GalleryGrid filter="2023" />
            </TabsContent>

            <TabsContent value="2022" className="mt-0">
              <GalleryGrid filter="2022" />
            </TabsContent>

            <TabsContent value="rezume" className="mt-0">
              <GalleryGrid filter="rezume" />
            </TabsContent>

            <TabsContent value="ono" className="mt-0">
              <GalleryGrid filter="ono" />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

interface GalleryGridProps {
  filter?: string
}

function GalleryGrid({ filter }: GalleryGridProps) {
  // In a real implementation, you would filter based on the filter prop
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <GalleryItem
            key={i}
            type={i % 3 === 0 ? "video" : "image"}
            src={`/placeholder.svg?height=600&width=600&text=Gallery${i + 1}`}
            alt={`Gallery item ${i + 1}`}
          />
        ))}
      </div>

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
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          3
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

interface GalleryItemProps {
  type: "image" | "video"
  src: string
  alt: string
}

function GalleryItem({ type, src, alt }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 relative">
        <div className="relative aspect-square">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {type === "video" && (
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
            >
              <Button size="icon" variant="secondary" className="rounded-full h-12 w-12">
                <Play className="h-6 w-6" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

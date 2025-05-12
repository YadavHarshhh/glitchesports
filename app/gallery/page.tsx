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
  const imageFiles = [
    "IMG-20250221-WA0063.jpg",
    "IMG-20250221-WA0059(1).jpg",
    "IMG-20250221-WA0069.jpg",
    "Oneiros x Glitch- Clutch – Where Skills Meet Thrills. Are You Game (1).jpg",
    "IMG-20250411-WA0043.jpg",
    "rezumeevents.jpg",
    "IMG-20250411-WA0042.jpg",
    "Oneiros x Glitch- Clutch – Where Skills Meet Thrills. Are You Game.jpg",
    "homemain.jpg",
    "lan1ot.jpeg",
    "DSC08977.JPG",
    "DSC08982.JPG",
    "DSC09025.JPG",
    "DSC09063.JPG",
    "DSC09085.JPG",
    "DSC09128.JPG",
    "DSC09136.JPG",
    "DSC09154.JPG",
    "DSC09217.JPG",
    "IMG_20250413_005706.jpg",
    "IMG_20250413_005947.jpg",
    "IMG_20250413_010142.jpg",
    "IMG_20250413_010440.jpg",
    "DSC09292.JPG",
    "DSC09293.JPG",
    "DSC09324.JPG",
    "DSC09350.JPG",
    "DSC09372.JPG",
    "DSC09404.JPG",
    "IMG_20250414_034044.jpg",
    "IMG_20250414_035810.jpg",
    "IMG_20250414_040356.jpg",
    "IMG_20250414_040856.jpg",
    "IMG_5624.png",
    "WhatsApp Image 2023-11-08 at 10.19.32 PM (2).jpeg",
    "IMG-20240529-WA0035.jpg",
    "abtus.jpg",
    "IMG_2702.JPG",
    "IMG_2709.JPG",
    "pitstn.jpg",
    "clutchmainpage.jpg",
    "IMG_6565-Enhanced-NR.jpg",
    "clutch1.jpg",
    "clutch4.jpg",
    "clutch11.jpg",
    "clutch3.jpg",
    "clutch.jpg",
    "clutch8.jpg",
    "clutch10.jpg",
    "clutch2.jpg",
    "clutch6.jpg",
    "clutch5.jpg",
    "clutch7.jpg",
    "clutch9.jpg",
    "boombanda6.jpg",
    "boompanda.jpg",
    "boompanda5.jpg",
    "boompanda4.jpg",
    "boompanda3.jpg",
    "boompanda2.jpg",
    "pitstation.jpg",
    "pitstation2.png",
    "gamedev.jpg",
    "gamedev4.jpg",
    "gamedev3.jpg",
    "gamedev2.jpg",
    "gamedev1.jpg",
    "gamedev5.jpg",
    "lenovo1.jpg"
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageFiles.map((imageName, i) => (
          <GalleryItem
            key={i}
            type={i % 3 === 0 ? "video" : "image"}
            src={`/${imageName}`}
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
  );
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

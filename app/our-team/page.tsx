import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function OurTeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/boombanda6.jpg?height=800&width=1920"
            alt="Glitch! Team"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Meet the Glitch! Crew</h1>
          <p className="mt-4 max-w-[700px] mx-auto text-lg text-muted-foreground">
            The passionate individuals behind Manipal University Jaipur's premier esports society
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="w-full py-16">
        <div className="container px-4">
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="core">Executive Core Committee</TabsTrigger>
              <TabsTrigger value="domains">Core Committee</TabsTrigger>
              <TabsTrigger value="gameheads">Faculty Coordinator</TabsTrigger>
            </TabsList>

            {/* Core Committee */}
            <TabsContent value="core">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <TeamMemberCard
                  name="Harsh Yadav"
                  role="President"
                  imageSrc="/harsh.jpeg?height=400&width=400"
                  instagram="https://instagram.com/hxrshhh.y"
                  linkedin="https://www.linkedin.com/in/hxrshy/"
                />
                <TeamMemberCard
                  name="Nalin Anand"
                  role="General Secretary"
                  imageSrc="/nalin.jpg?height=400&width=400"
                  instagram="https://www.instagram.com/nalin._.05?igsh=OHpuMGpwYXg3b2ln"
                  linkedin="https://www.linkedin.com/in/nalin-anand-90a355314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                />
                <TeamMemberCard
                  name="Ria Aggarwal"
                  role="Managing Director"
                  imageSrc="/placeholder.svg?height=400&width=400"
                  instagram="https://instagram.com"
                  linkedin="https://linkedin.com"
                />
                <TeamMemberCard
                  name="Keshav Raj"
                  role="Treasurer"
                  imageSrc="/keshav.jpg?height=400&width=400"
                  instagram="https://instagram.com/eshu_av"
                  linkedin="https://www.linkedin.com/in/keshav-raj-ba0b7922a/"
                />
                <TeamMemberCard
                  name="Chaitany Gupta"
                  role="Director of Operations"
                  imageSrc="/mao.jpeg?height=400&width=400"
                  instagram="https://www.instagram.com/chaitany_1501/?igsh=cjY2YmJ4MWc2Z295#"
                  linkedin="https://www.linkedin.com/in/chaitany-gupta-209436365/"
                />
                <TeamMemberCard
                  name="Safwaan Siddiqui"
                  role="Director of Events"
                  imageSrc="/placeholder.svg?height=400&width=400"
                  instagram="https://instagram.com"
                  linkedin="https://linkedin.com"
                />
                <TeamMemberCard
                  name="Abhinav Singh"
                  role="Director of Production"
                  imageSrc="/abhinav.jpeg?height=400&width=400"
                  instagram="https://instagram.com"
                  linkedin="https://www.linkedin.com/in/abhinav-singh-b27211340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                />
              </div>
            </TabsContent>

            {/* Club Domains */}
            <TabsContent value="domains">
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6"></h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <TeamMemberCard
                      name="Devanshi Shukla"
                      role="Head of Operations"
                      imageSrc="/devanshi.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/deeeva12?igsh=Mml5eHphZGZhNnUw"
                      linkedin="https://www.linkedin.com/in/devanshi-shukla-7169b6273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    />
                    <TeamMemberCard
                      name="Priyaansh Sapru"
                      role="Head of Operations"
                      imageSrc="/priyaansh.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/_.priyaanshsapru._?igsh=MW92eGpzbDczeGpjdw=="
                      linkedin="https://www.linkedin.com/in/priyaansh-sapru-b44539363/"
                    />
                    <TeamMemberCard
                      name="Arham Jain"
                      role="Head of Events"
                      imageSrc="/placeholder.svg?height=400&width=400"
                      instagram="https://instagram.com"
                      linkedin="https://linkedin.com"
                    />
                     <TeamMemberCard
                      name="Arpit Akhoury"
                      role="Head of Production"
                      imageSrc="/dante.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/dante_uwi?igsh=MTVuODFkZGdlNGVoMQ=="
                      linkedin="https://www.linkedin.com/in/arpit-akhoury-753884211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    />
                     <TeamMemberCard
                      name="Divyansh Dinkar"
                      role="Head of Production"
                      imageSrc="/divyansh.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/d.ivdin?igsh=MWlyMDI3N3A3OWViMw%3D%3D&utm_source=qr"
                      linkedin="https://www.linkedin.com/in/divyansh-dinkar-4080ab351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    />
                     <TeamMemberCard
                      name="Moksh Tyagi"
                      role="Head of Curations"
                      imageSrc="/placeholder.svg?height=400&width=400"
                      instagram="https://instagram.com"
                      linkedin="https://linkedin.com"
                    />
                     <TeamMemberCard
                      name="Kunal Maharia"
                      role="Head of Promotions"
                      imageSrc="/kunal.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/kunal_maharia?igsh=YWMzYWdrNnI2ZzUy"
                      linkedin="https://www.linkedin.com/in/kunal-maharia-73214834a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    />
                     <TeamMemberCard
                      name="Atharva Yewale"
                      role="Head of Promotions"
                      imageSrc="/placeholder.svg?height=400&width=400"
                      instagram="https://instagram.com"
                      linkedin="https://linkedin.com"
                    />
                     <TeamMemberCard
                      name="Tejas Sinha"
                      role="Head of Graphic Design"
                      imageSrc="tejas.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/sad.n_young/"
                      linkedin="https://www.linkedin.com/in/tejas-sinha-a667282a7/"
                    />
                    <TeamMemberCard
                      name="Darsh Sinha"
                      role="Head of Graphic Design"
                      imageSrc="/darsh.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/go2sleepdarsh?igsh=MWc0bTh4OXFmOXQ4MA%3D%3D&utm_source=qr"
                      linkedin="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
                    />
                    <TeamMemberCard
                      name="Pratyush Srivastava"
                      role="Head of Media and Coverage"
                      imageSrc="/placeholder.svg?height=400&width=400"
                      instagram="https://instagram.com"
                      linkedin="https://linkedin.com"
                    />
                    <TeamMemberCard
                      name="Raunit Chatterjee"
                      role="Head of Social Media"
                      imageSrc="/raunit.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/novanity999___?igsh=MWRvZTVieGZwYzByeA%3D%3D&utm_source=qr"
                      linkedin="https://www.linkedin.com/in/raunit-chatterjee-00aa9a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    />
                    <TeamMemberCard
                      name="Anuj Bhardwaj"
                      role="Head of eSports"
                      imageSrc="/anuj.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/anujb._"
                      linkedin="https://in.linkedin.com/in/anujbhardwaj2006"
                    />
                    <TeamMemberCard
                      name="Sarthak Pal"
                      role="Head of eSports"
                      imageSrc="/sarthak.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/_sarthak.pal_?igsh=ZDZvdm44dnR0a3Q1"
                      linkedin="https://www.linkedin.com/in/sarthak-pal-969600363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    />
                    <TeamMemberCard
                      name="Jayesh Sarode"
                      role="Head of eSports"
                      imageSrc="/jayesh.jpeg?height=400&width=400"
                      instagram="https://www.instagram.com/jayeshsarode10?igsh=dzU2OTYwamhqYjh5"
                      linkedin="https://www.linkedin.com/in/jayesh-sarode-578699280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Game Heads */}
            <TabsContent value="gameheads">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <TeamMemberCard
                  name="Dr. Arvind Dhaka"
                  role="Faculty Coordinator"
                  imageSrc="/arvindsir.jpg?height=400&width=400"
                />
                <TeamMemberCard
                  name="Dr. Arpit Kumar Sharma"
                  role="Faculty Coordinator"
                  imageSrc="/arpitsir.jpg?height=400&width=400"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

interface TeamMemberCardProps {
  name: string
  role: string
  imageSrc: string
  instagram?: string
  linkedin?: string
}

function TeamMemberCard({ name, role, imageSrc, instagram, linkedin }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <p className="text-muted-foreground">{role}</p>
      </CardHeader>
      <CardFooter className="flex justify-start gap-4">
        {instagram && (
          <Link
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        )}
        {linkedin && (
          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        )}

      </CardFooter>
    </Card>
  )
}

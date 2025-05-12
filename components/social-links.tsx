import Link from "next/link"
import { DiscIcon as Discord, Facebook, Instagram, Twitch, Twitter, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Discord className="h-5 w-5" />
        <span className="sr-only">Discord</span>
      </Link>
      <Link
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Youtube className="h-5 w-5" />
        <span className="sr-only">YouTube</span>
      </Link>
      <Link
        href="https://twitch.tv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Twitch className="h-5 w-5" />
        <span className="sr-only">Twitch</span>
      </Link>
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Link>
    </div>
  )
}

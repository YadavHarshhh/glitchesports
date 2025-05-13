import Link from "next/link"
import { SocialLinks } from "@/components/social-links"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Glitch! eSports Society</h3>
            <p className="text-sm text-muted-foreground">
              The premier gaming community at Manipal University Jaipur, fostering competitive gaming, skill
              development, and esports excellence.
            </p>
            <SocialLinks />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>Manipal University Jaipur</p>
              <p>Dehmi Kalan, Jaipur-Ajmer Expressway</p>
              <p>Jaipur, Rajasthan 303007</p>
              <p className="mt-4">
                <a href="mailto:glitch.esports@muj.manipal.edu" className="hover:text-primary transition-colors">
                  glitchesports@muj.manipal.edu
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Glitch! eSports Society. Made with ❤️ by Harsh.
          </p>
        </div>
      </div>
    </footer>
  )
}

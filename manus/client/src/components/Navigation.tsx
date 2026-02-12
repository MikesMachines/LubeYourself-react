import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-smooth">
                LubeYourself
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/articles">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Articles
              </a>
            </Link>
            <Link href="/guides">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                DIY Guides
              </a>
            </Link>
            <Link href="/shop">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                Shop
              </a>
            </Link>
            <Link href="/about">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                About
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/articles">
                <a
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Articles
                </a>
              </Link>
              <Link href="/guides">
                <a
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  DIY Guides
                </a>
              </Link>
              <Link href="/shop">
                <a
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </a>
              </Link>
              <Link href="/about">
                <a
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

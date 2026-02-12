import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-display font-bold text-foreground mb-4">
              LubeYourself
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Educational resources and natural products for personal wellness and intimate care.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Learn</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/articles">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                    Safety Articles
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/guides">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                    DIY Guides
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/articles">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                    Ingredient Database
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                    Custom Blends
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                    Starter Kits
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                    Ingredients
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} LubeYourself. Educational content for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

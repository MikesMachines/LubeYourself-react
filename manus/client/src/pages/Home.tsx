import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Beaker, BookOpen, ShoppingBag, Shield, Droplets, Leaf } from "lucide-react";

/*
Design: Clinical Modernism with Organic Warmth
- Asymmetric layouts with distinct content zones
- Warm natural colors (sage green, terracotta, cream)
- Generous whitespace for educational clarity
- Fraunces display font + Inter body text
*/

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section - Asymmetric layout with background */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/6NA2jn8QJAqQlrAjx1EJJy/sandbox/Ex5oCKdYwqnRXrle2jctHv-img-1_1770670280000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNk5BMmpuOFFKQXFRbHJBangxRUpKeS9zYW5kYm94L0V4NW9DS2RZd3FuUlhybGUyamN0SHYtaW1nLTFfMTc3MDY3MDI4MDAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AtNWzSyWc3zICgKieGBIx88Ptgo9YEMwqiZ6SRzFCuTFVdnO28~xtbfWsLaMIIHUyfahgS0PIBHPZSAj-8IlM5hNjWFenORV6dhPWfKhwFPye0nDvfSdLz9E6MndxwUPN6~xH8VYh1crnhK1axib6GFdvf14uz4q4AdQ7DhhvRL9hMpKHG2TMsW0tCs2dAG9-LVDBVc2Xd6oNKd5kK1PLxRfTsQFhcZFyZkWTe~mzoCZ~V7gR8lbpgf9N6I0uGlaM7lNcBLcsCoKDdoZZQWUY98rxa9B0j4cjbKv6esGcDV8uUiY5edF8pnGQ-7x09f9FHaBveevTRH6txAxYEPc0A__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Evidence-Based Education
              </Badge>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Know What's Safe for Your Body
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Learn about personal lubricant safety, understand ingredients in commercial products, and discover how to make natural alternatives at home with our comprehensive guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/articles">
                  <Button size="lg" className="w-full sm:w-auto">
                    Read Articles
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/guides">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    DIY Guides
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/6NA2jn8QJAqQlrAjx1EJJy/sandbox/Ex5oCKdYwqnRXrle2jctHv-img-2_1770670275000_na1fn_aW5ncmVkaWVudHMtYWJzdHJhY3Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNk5BMmpuOFFKQXFRbHJBangxRUpKeS9zYW5kYm94L0V4NW9DS2RZd3FuUlhybGUyamN0SHYtaW1nLTJfMTc3MDY3MDI3NTAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkSE10WVdKemRISmhZM1EucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QZgQqv8NhZ2NBpEoZlKyl7GXSeOc9ZZr4UsDBv0rhP3DqwUhb1U0LXos68y0BracwCxWpEIMnNWwoTZWb5Wi12PQpIRiYwDwCe4h8GekX6zd~idN9a3LVicCMw0JYwX27PjcCei~bp3-zcEDnrUJzj-kFETr9g2JeFwLQONCKp0evIh5aRtNMP0~UXtHvK6aHvkiGqD9PIYfRGAHoe6KlZYRG4co1Hnp7oBpX9Y8VJO~hyAJ0K3mSbUEtgVqxr87RBpCzAaHv93-3fApJHzNQj3Ki6kN7Y6yEFjZtt7UBv34qFqbi7Ok-nKhQ1M8WwP2AEwREifFBkrPotgkBIapMg__"
                alt="Molecular and botanical illustration"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Why Lubricant Safety Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most commercial lubricants don't comply with WHO safety standards for pH and osmolality. Understanding ingredients and their effects helps you make informed choices for your intimate health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <CardTitle className="font-display">pH Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Vaginal pH should be 3.5-4.5. Many commercial products fall outside this range, potentially causing irritation or infections.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Droplets className="text-accent" size={24} />
                </div>
                <CardTitle className="font-display">Osmolality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  High osmolality can damage vaginal tissue. WHO recommends 380 mOsm/kg or lower, but many products exceed 3,000 mOsm/kg.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="text-primary" size={24} />
                </div>
                <CardTitle className="font-display">Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Glycerin, parabens, and PFAS are common in commercial lubes. Natural alternatives can be safer and more body-compatible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Three Ways to Learn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive resources to help you understand, create, and choose safe personal lubricants.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Articles */}
            <Link href="/articles">
              <Card className="h-full hover:shadow-xl transition-smooth cursor-pointer group border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                    <BookOpen className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-display text-2xl">Safety Articles</CardTitle>
                  <CardDescription className="text-base">
                    Evidence-based information about ingredients, safety standards, and commercial product analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-smooth">
                    Read Articles
                    <ArrowRight className="ml-2" size={18} />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* DIY Guides */}
            <Link href="/guides">
              <Card className="h-full hover:shadow-xl transition-smooth cursor-pointer group border-2 hover:border-accent/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-smooth">
                    <Beaker className="text-accent" size={28} />
                  </div>
                  <CardTitle className="font-display text-2xl">DIY Guides</CardTitle>
                  <CardDescription className="text-base">
                    Step-by-step recipes for making natural lubricants at home with safe, simple ingredients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-smooth">
                    View Guides
                    <ArrowRight className="ml-2" size={18} />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Shop */}
            <Link href="/shop">
              <Card className="h-full hover:shadow-xl transition-smooth cursor-pointer group border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                    <ShoppingBag className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-display text-2xl">Custom Blends</CardTitle>
                  <CardDescription className="text-base">
                    Pre-measured ingredient kits and custom blends as starting points for your own formulations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-smooth">
                    Shop Now
                    <ArrowRight className="ml-2" size={18} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                Popular Guide
              </Badge>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Make Your Own Water-Based Lubricant
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Learn how to create a safe, natural water-based lubricant using just three ingredients: filtered water, cornstarch, and time. This simple recipe is condom-compatible and can be made in under 10 minutes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Simple ingredients you already have at home</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Safe for use with latex condoms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">No preservatives or questionable chemicals</span>
                </li>
              </ul>
              <Link href="/guides">
                <Button size="lg">
                  View Full Recipe
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/6NA2jn8QJAqQlrAjx1EJJy/sandbox/Ex5oCKdYwqnRXrle2jctHv-img-3_1770670284000_na1fn_ZGl5LXdvcmtzcGFjZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNk5BMmpuOFFKQXFRbHJBangxRUpKeS9zYW5kYm94L0V4NW9DS2RZd3FuUlhybGUyamN0SHYtaW1nLTNfMTc3MDY3MDI4NDAwMF9uYTFmbl9aR2w1TFhkdmNtdHpjR0ZqWlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ahopkf5FWOHSDypDZrsAaSsh11UHcIBPrGGtMlyVPqYfpkUTY5Wmo3zrLs2SvQNKTViUrPVNst3AP4sXXi3rA1mo8nqhfsUUJzZhxbDfPr62OgflT9F8M9yq72mVCYSZGurbb7BKR1hgnylfkNGb6Jn83tFaQ7NTlcJoVpWjv0GNMFbA4xtUKA9xo18S3MMc5NcwqEKakML6RwdBfplMiv4tEa~miXPtLvnrEf7cOb9MtqcbtWSz0CUFx8NVpjaVQg0jBn0KqWoERANL7oTZv0w-t1vBvI4wpTap0yQgEvo4VZvyFduHgszXlqmfFkGMVkLT0T8ZHNZMdvU2LFRcGQ__"
                alt="DIY lubricant making workspace"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-3xl p-12 md:p-16 text-center border-2 border-primary/20">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Start Your Journey to Safer Intimacy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands who have learned to make informed choices about personal lubricants through our evidence-based resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/articles">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Articles
                </Button>
              </Link>
              <Link href="/shop">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

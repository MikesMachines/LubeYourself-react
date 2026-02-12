import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Leaf, Droplets, Beaker } from "lucide-react";
import { toast } from "sonner";

/*
Design: Clinical Modernism - Product showcase with clean cards
*/

const products = [
  {
    id: 1,
    name: "Simple Start Water-Based Kit",
    description: "Everything you need to make your first batch of water-based lubricant. Includes pre-measured cornstarch, filtered water concentrate, and detailed instructions.",
    price: "$18.00",
    features: ["Makes 4-6 batches", "Condom-safe", "Beginner-friendly", "pH balanced"],
    icon: Droplets,
    badge: "Bestseller",
    badgeColor: "bg-primary/10 text-primary border-primary/20"
  },
  {
    id: 2,
    name: "Aloe Essentials Blend",
    description: "Pure organic aloe vera gel with optional vitamin E preservative. Soothing and naturally moisturizing for sensitive skin.",
    price: "$24.00",
    features: ["100% organic aloe", "Vitamin E included", "Hypoallergenic", "2-3 week shelf life"],
    icon: Leaf,
    badge: "Natural",
    badgeColor: "bg-accent/10 text-accent border-accent/20"
  },
  {
    id: 3,
    name: "Flaxseed Pro Kit",
    description: "Premium whole flaxseeds and straining tools for making longer-lasting natural lubricant. For experienced DIY makers.",
    price: "$22.00",
    features: ["Organic flaxseeds", "Fine mesh strainer", "Storage container", "Lasts 2 weeks"],
    icon: Beaker,
    badge: "Advanced",
    badgeColor: "bg-muted text-muted-foreground border-muted"
  },
  {
    id: 4,
    name: "Coconut Comfort Oil",
    description: "Fractionated organic coconut oil that stays liquid at room temperature. Perfect for those not using latex barriers.",
    price: "$16.00",
    features: ["Fractionated formula", "Fast-absorbing", "No refrigeration needed", "NOT latex-safe"],
    icon: Droplets,
    badge: "Oil-Based",
    badgeColor: "bg-destructive/10 text-destructive border-destructive/20"
  },
  {
    id: 5,
    name: "Complete Starter Bundle",
    description: "Try all three water-based recipes! Includes ingredients for cornstarch, aloe, and flaxseed lubricants plus comprehensive guide.",
    price: "$52.00",
    features: ["3 recipe kits", "Detailed guidebook", "Storage containers", "Save $12"],
    icon: Beaker,
    badge: "Bundle",
    badgeColor: "bg-primary/10 text-primary border-primary/20"
  },
  {
    id: 6,
    name: "Sensitive Skin Collection",
    description: "Hypoallergenic ingredients specifically chosen for sensitive skin. Includes aloe, vitamin E, and glycerin-free options.",
    price: "$28.00",
    features: ["Fragrance-free", "No glycerin", "Dermatologist-tested", "Patch test guide"],
    icon: Leaf,
    badge: "Gentle",
    badgeColor: "bg-accent/10 text-accent border-accent/20"
  }
];

export default function Shop() {
  const handleAddToCart = (productName: string) => {
    toast.success(`Added ${productName} to cart`, {
      description: "This is a demo store. No actual purchase will be made."
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Custom Blends & Kits
            </Badge>
            <h1 className="font-display text-5xl font-bold text-foreground mb-6">
              Shop Starter Kits
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pre-measured ingredients and custom blends designed as starting points for making your own natural lubricants at home.
            </p>
          </div>
        </div>
      </section>



      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card key={product.id} className="flex flex-col border-2 hover:border-primary/50 hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <IconComponent className="text-primary" size={28} />
                      </div>
                      <Badge className={product.badgeColor}>
                        {product.badge}
                      </Badge>
                    </div>
                    <CardTitle className="font-display text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mt-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-foreground font-display">
                          {product.price}
                        </span>
                      </div>
                      <Button 
                        className="w-full" 
                        onClick={() => handleAddToCart(product.name)}
                      >
                        <ShoppingCart className="mr-2" size={18} />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Kits */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose Our Kits?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Beaker className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Pre-Measured</h3>
                <p className="text-muted-foreground">
                  No guessing or measuring. Everything is portioned correctly for optimal results.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-accent" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Quality Ingredients</h3>
                <p className="text-muted-foreground">
                  Organic, food-grade ingredients sourced from trusted suppliers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  All formulations designed to meet WHO pH and osmolality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> This is a demonstration store. Products shown are conceptual examples designed to illustrate the types of custom blends and starter kits that could be offered. All product information is for educational purposes. Consult with a healthcare provider before using any new intimate products.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

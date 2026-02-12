import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Clock, Droplets, Thermometer, CheckCircle } from "lucide-react";

/*
Design: Clinical Modernism - Recipe card aesthetic with clear instructions
*/

export default function Guides() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
              DIY Recipes
            </Badge>
            <h1 className="font-display text-5xl font-bold text-foreground mb-6">
              Make Your Own Lubricants
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Simple, safe recipes using natural ingredients you can find at home. All recipes are designed to be body-safe and easy to make.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-12 bg-accent/5">
        <div className="container">
          <Alert className="max-w-4xl mx-auto border-2 border-accent/30">
            <AlertTriangle className="h-5 w-5 text-accent" />
            <AlertDescription className="ml-2">
              <strong className="font-semibold">Important Safety Guidelines:</strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Use only fresh ingredients - if it's too old to eat, don't use it</li>
                <li>• Store homemade lubricants in the refrigerator for 3-4 days maximum</li>
                <li>• Never use sugar, honey, dairy, or animal products (promotes bacterial growth)</li>
                <li>• Be aware of allergies - don't use ingredients you wouldn't eat or apply to skin</li>
                <li>• Oil-based recipes will degrade latex condoms - use water-based for barrier protection</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Recipes */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Water & Cornstarch Recipe */}
            <Card className="border-2 border-primary/30 overflow-hidden">
              <div className="bg-primary/5 px-8 py-6 border-b border-primary/20">
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                    Water-Based • Beginner
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      10 mins
                    </span>
                    <span className="flex items-center gap-1">
                      <Droplets size={16} />
                      Condom-safe
                    </span>
                  </div>
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                  Simple Water & Cornstarch Lube
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The easiest recipe to start with. Just two ingredients and a few minutes of cooking time. Perfect for beginners.
                </p>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                      Ingredients
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        <span>1 cup filtered water</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        <span>3-4 teaspoons cornstarch</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                      Instructions
                    </h3>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground flex-shrink-0">1.</span>
                        <span>Dissolve the cornstarch completely in the water</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground flex-shrink-0">2.</span>
                        <span>Heat the mixture until boiling, then turn off heat</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground flex-shrink-0">3.</span>
                        <span>Continue stirring until there are no lumps</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground flex-shrink-0">4.</span>
                        <span>Let cool completely before using</span>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Storage:</strong> Refrigerate in an airtight container for up to 3-4 days. Discard if you notice any changes in smell, color, or texture.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Aloe Vera Recipe */}
            <Card className="border-2 border-primary/30 overflow-hidden">
              <div className="bg-primary/5 px-8 py-6 border-b border-primary/20">
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                    Water-Based • Easy
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      5 mins
                    </span>
                    <span className="flex items-center gap-1">
                      <Droplets size={16} />
                      Condom-safe
                    </span>
                  </div>
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                  Pure Aloe Vera Lube
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Soothing and natural. Can be used straight from the bottle or made fresh from an aloe plant.
                </p>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Option A: Store-Bought</h3>
                    <div className="pl-6 border-l-2 border-primary/20">
                      <p className="text-muted-foreground mb-3">
                        Use 100% pure aloe vera gel with no added alcohols, fragrances, or colors.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Check the label:</strong> The only ingredient should be "Aloe Barbadensis Leaf Juice" or similar.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Option B: Fresh from Plant</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Ingredients</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="text-primary flex-shrink-0" size={20} />
                            <span>1 aloe plant leaf</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="text-primary flex-shrink-0" size={20} />
                            <span>1 tsp vitamin E (optional preservative)</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Instructions</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Peel one side of the leaf with a vegetable peeler</li>
                          <li>2. Scoop out the clear gel inside</li>
                          <li>3. Blend until smooth in a blender or food processor</li>
                          <li>4. Add vitamin E if using</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Storage:</strong> Refrigerate for 3-4 days without vitamin E, or up to 2-3 weeks with vitamin E added.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flaxseed Recipe */}
            <Card className="border-2 border-accent/30 overflow-hidden">
              <div className="bg-accent/5 px-8 py-6 border-b border-accent/20">
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-accent/20 text-accent hover:bg-accent/30">
                    Water-Based • Intermediate
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      25 mins
                    </span>
                    <span className="flex items-center gap-1">
                      <Droplets size={16} />
                      Condom-safe
                    </span>
                  </div>
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                  Flaxseed Lube
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A longer-lasting water-based option with natural omega-3s. Requires more time but stores longer.
                </p>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Ingredients</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-accent flex-shrink-0" size={20} />
                        <span>1 tablespoon whole flaxseeds (NOT flaxseed oil)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-accent flex-shrink-0" size={20} />
                        <span>1 cup filtered water</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Instructions</h3>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground flex-shrink-0">1.</span>
                        <span>Boil the flaxseeds in water for 20 minutes</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground flex-shrink-0">2.</span>
                        <span>Continue until water volume is reduced by half</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground flex-shrink-0">3.</span>
                        <span>Strain the liquid into an airtight container</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-semibold text-foreground flex-shrink-0">4.</span>
                        <span>Discard the cooked flaxseeds</span>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Storage:</strong> Refrigerate in an airtight container for up to 2 weeks. The mixture will thicken as it cools.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Oil-Based Recipe */}
            <Card className="border-2 border-destructive/30 overflow-hidden">
              <div className="bg-destructive/5 px-8 py-6 border-b border-destructive/20">
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-destructive/20 text-destructive hover:bg-destructive/30">
                    Oil-Based • Simple
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      1 min
                    </span>
                    <span className="flex items-center gap-1 text-destructive">
                      <AlertTriangle size={16} />
                      NOT condom-safe
                    </span>
                  </div>
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                  Simple Coconut Oil Lube
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The simplest option, but remember: oil-based lubricants will degrade latex condoms and should not be used with barrier protection.
                </p>
              </div>
              <CardContent className="p-8">
                <Alert className="mb-6 border-destructive/30 bg-destructive/5">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <AlertDescription className="ml-2">
                    <strong>Warning:</strong> Oil-based lubricants will break down latex condoms and dental dams, making them ineffective. Use only if you're not relying on latex barrier protection.
                  </AlertDescription>
                </Alert>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Recommended Oils</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium text-foreground mb-1">Coconut Oil</p>
                        <p className="text-sm text-muted-foreground">Organic, unrefined, virgin. Fractionated coconut oil absorbs faster.</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium text-foreground mb-1">Olive Oil</p>
                        <p className="text-sm text-muted-foreground">Extra virgin, organic. Good for sensitive skin.</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium text-foreground mb-1">Avocado Oil</p>
                        <p className="text-sm text-muted-foreground">Rich in vitamins, very moisturizing.</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium text-foreground mb-1">Almond Oil</p>
                        <p className="text-sm text-muted-foreground">Light texture. Avoid if nut allergies.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Instructions</h3>
                    <p className="text-muted-foreground">
                      Simply use the oil directly from the bottle. No preparation needed. Choose organic, unrefined oils with no added flavors or scents.
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Storage:</strong> Store at room temperature. Coconut oil solidifies below 76°F but melts with body heat.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              General Tips for DIY Lubricants
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl">Hygiene</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm space-y-2">
                  <p>• Always wash off remaining lube after use</p>
                  <p>• Pee after sexual activity to prevent UTIs</p>
                  <p>• Use clean, sterilized containers for storage</p>
                  <p>• Wash hands before preparing recipes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl">Allergies</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm space-y-2">
                  <p>• Test a small amount on your inner arm first</p>
                  <p>• Avoid almond/coconut oil if nut allergies</p>
                  <p>• Never use essential oils undiluted</p>
                  <p>• Discontinue use if irritation occurs</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl">Storage</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm space-y-2">
                  <p>• Always refrigerate water-based recipes</p>
                  <p>• Use airtight, clean containers</p>
                  <p>• Label with date prepared</p>
                  <p>• Discard if smell, color, or texture changes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl">Safety</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm space-y-2">
                  <p>• Never use sugar-based ingredients</p>
                  <p>• Avoid dairy or animal products</p>
                  <p>• Don't use expired ingredients</p>
                  <p>• When in doubt, throw it out</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

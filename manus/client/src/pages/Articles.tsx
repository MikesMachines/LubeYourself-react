import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

/*
Design: Clinical Modernism - Educational content with research paper aesthetic
*/

export default function Articles() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Evidence-Based Research
            </Badge>
            <h1 className="font-display text-5xl font-bold text-foreground mb-6">
              Safety Articles
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive, research-backed information about personal lubricant safety, ingredients, and industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Article Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* WHO Standards Article */}
              <article className="prose prose-lg max-w-none">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline">Featured Article</Badge>
                      <span className="text-sm text-muted-foreground">8 min read</span>
                    </div>
                    <CardTitle className="font-display text-3xl">
                      Understanding WHO Safety Standards for Personal Lubricants
                    </CardTitle>
                    <CardDescription className="text-base mt-4">
                      Most commercial lubricants fail to meet World Health Organization recommendations for pH and osmolality. Here's what you need to know.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3">The Problem with Commercial Products</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A 2014 study published in <em>Pharmaceutics</em> tested twelve commercially available lubricants and found that most do not comply with WHO recommended standards. Four products had osmolality values approximately three times higher than the maximum acceptable limit of 1,200 mOsm/kg, with some exceeding 3,600 mOsm/kg.
                      </p>
                    </div>

                    <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
                      <h4 className="font-semibold text-foreground mb-2">Key Finding</h4>
                      <p className="text-muted-foreground">
                        High osmolality can damage vaginal mucosa and potentially increase the risk of HIV transmission. The WHO recommends osmolality of 380 mOsm/kg or lower as desirable.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3">pH Balance Matters</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Normal vaginal pH ranges from 3.5 to 4.5. This acidic environment is crucial for maintaining healthy vaginal flora and preventing infections. However, many commercial lubricants fall outside this range:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <XCircle className="text-destructive flex-shrink-0 mt-1" size={20} />
                          <span className="text-muted-foreground">Products with pH above 4.5 may promote bacterial vaginosis</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <XCircle className="text-destructive flex-shrink-0 mt-1" size={20} />
                          <span className="text-muted-foreground">Products with pH below 3.0 can cause irritation and tissue damage</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                          <span className="text-muted-foreground">Only 5 out of 12 tested products fell within the healthy range</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-semibold mb-3">Why This Happens</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The FDA and European Medicine Agency classify personal lubricants as medical devices rather than drugs. This means they are not required to undergo the extensive pre-clinical and clinical testing that pharmaceutical products face. While manufacturers typically use GRAS (Generally Recognized as Safe) ingredients, the combination and concentration of these ingredients can still pose risks.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* Ingredients Article */}
              <article>
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline">Ingredient Guide</Badge>
                      <span className="text-sm text-muted-foreground">6 min read</span>
                    </div>
                    <CardTitle className="font-display text-3xl">
                      Common Ingredients: What to Avoid and Why
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-destructive flex items-center gap-2">
                          <AlertCircle size={20} />
                          Potentially Problematic
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-foreground">Glycerin</p>
                            <p className="text-sm text-muted-foreground">May promote yeast infections in sensitive individuals</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Parabens</p>
                            <p className="text-sm text-muted-foreground">Preservatives with potential hormonal effects</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Propylene Glycol</p>
                            <p className="text-sm text-muted-foreground">Can cause irritation and allergic reactions</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">PFAS Chemicals</p>
                            <p className="text-sm text-muted-foreground">Found in major brands like Trojan and KY Jelly</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Chlorhexidine</p>
                            <p className="text-sm text-muted-foreground">Antimicrobial that can disrupt vaginal flora</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary flex items-center gap-2">
                          <CheckCircle size={20} />
                          Generally Safe Options
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-foreground">Purified Water</p>
                            <p className="text-sm text-muted-foreground">Base for water-based formulations</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Hyaluronic Acid</p>
                            <p className="text-sm text-muted-foreground">Natural moisture retention, body-compatible</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Aloe Vera</p>
                            <p className="text-sm text-muted-foreground">Soothing, natural, well-tolerated</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Medical-Grade Silicone</p>
                            <p className="text-sm text-muted-foreground">Inert, long-lasting, hypoallergenic</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Vitamin E</p>
                            <p className="text-sm text-muted-foreground">Natural preservative and skin conditioner</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* Types Comparison */}
              <article>
                <Card className="border-2">
                  <CardHeader>
                    <Badge variant="outline" className="mb-4">Comparison Guide</Badge>
                    <CardTitle className="font-display text-3xl">
                      Water-Based vs. Silicone vs. Oil-Based
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-foreground mb-2">Water-Based</h4>
                        <p className="text-muted-foreground mb-3">Most common type, compatible with all condoms and toys.</p>
                        <div className="space-y-1 text-sm">
                          <p className="text-primary">✓ Condom-safe</p>
                          <p className="text-primary">✓ Easy cleanup</p>
                          <p className="text-primary">✓ Widely available</p>
                          <p className="text-muted-foreground">✗ May dry out and need reapplication</p>
                          <p className="text-muted-foreground">✗ Often contains preservatives</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-accent pl-6">
                        <h4 className="font-semibold text-foreground mb-2">Silicone-Based</h4>
                        <p className="text-muted-foreground mb-3">Long-lasting, typically 2-4 ingredients only.</p>
                        <div className="space-y-1 text-sm">
                          <p className="text-primary">✓ Very long-lasting</p>
                          <p className="text-primary">✓ Condom-safe</p>
                          <p className="text-primary">✓ Fewer ingredients</p>
                          <p className="text-primary">✓ Hypoallergenic</p>
                          <p className="text-muted-foreground">✗ Not compatible with silicone toys</p>
                          <p className="text-muted-foreground">✗ Harder to clean up</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-destructive pl-6">
                        <h4 className="font-semibold text-foreground mb-2">Oil-Based</h4>
                        <p className="text-muted-foreground mb-3">Natural options like coconut oil, but limited compatibility.</p>
                        <div className="space-y-1 text-sm">
                          <p className="text-primary">✓ Natural ingredients</p>
                          <p className="text-primary">✓ Long-lasting</p>
                          <p className="text-primary">✓ Moisturizing</p>
                          <p className="text-destructive">✗ NOT safe with latex condoms</p>
                          <p className="text-muted-foreground">✗ Can stain fabrics</p>
                          <p className="text-muted-foreground">✗ May promote infections in some people</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">Quick Reference</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">WHO pH Standard</h4>
                      <p className="text-2xl font-bold text-primary">3.5 - 4.5</p>
                      <p className="text-xs text-muted-foreground">Normal vaginal pH range</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Osmolality Limit</h4>
                      <p className="text-2xl font-bold text-primary">≤ 380</p>
                      <p className="text-xs text-muted-foreground">mOsm/kg (desirable)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Max Acceptable</h4>
                      <p className="text-2xl font-bold text-accent">≤ 1,200</p>
                      <p className="text-xs text-muted-foreground">mOsm/kg (interim standard)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-xl">Related Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a href="#" className="block text-sm text-primary hover:underline">
                      WHO Advisory Note on Personal Lubricants
                    </a>
                    <a href="#" className="block text-sm text-primary hover:underline">
                      PMC Study: Commercial Lubricant Safety
                    </a>
                    <a href="#" className="block text-sm text-primary hover:underline">
                      UNFPA Safe Lubricants Guidelines
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-accent/5 border-accent/20">
                  <CardHeader>
                    <CardTitle className="font-display text-lg">Make Your Own</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Want complete control over ingredients? Check out our DIY guides for safe, natural recipes.
                    </p>
                    <a href="/guides" className="text-sm font-medium text-accent hover:underline">
                      View DIY Guides →
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

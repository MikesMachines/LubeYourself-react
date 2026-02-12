import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Our Mission
            </Badge>
            <h1 className="font-display text-5xl font-bold text-foreground mb-6">
              About LubeYourself
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Empowering people with evidence-based knowledge to make informed choices about personal lubricants and intimate wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                  Why We Exist
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Most people don't know that the majority of commercial personal lubricants fail to meet World Health Organization safety standards. High osmolality, improper pH levels, and questionable ingredients are common in products used by millions.
                  </p>
                  <p>
                    We believe everyone deserves access to transparent, research-backed information about what they're putting on and in their bodies. LubeYourself was created to bridge the gap between scientific research and practical, accessible knowledge.
                  </p>
                  <p>
                    Our goal is not to sell you products, but to educate you so you can make the best choices for your body—whether that means selecting safer commercial options, making your own at home, or understanding what to look for on ingredient labels.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/6NA2jn8QJAqQlrAjx1EJJy/sandbox/Ex5oCKdYwqnRXrle2jctHv-img-5_1770670275000_na1fn_c2FmZXR5LWVkdWNhdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNk5BMmpuOFFKQXFRbHJBangxRUpKeS9zYW5kYm94L0V4NW9DS2RZd3FuUlhybGUyamN0SHYtaW1nLTVfMTc3MDY3MDI3NTAwMF9uYTFmbl9jMkZtWlhSNUxXVmtkV05oZEdsdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Nxbp97lyWtdMbBwsJNCRc-tDCWkndnA~IMgD6N8e6cPvkxEsPXRrZuC7QHfYf41H2ecTODk~-HhYE1IVPrOQp7EVl423nv5tt543V3B0~J8l2aq2--uCraDKpkwNIYNK3ZMyaFc68sPtxrK4Bcibn6sRfiaIzAeyfTq35NuuQIm~B7nY15KPZn2F7Y9wk3WXj3hYh1xfQbxw06JSVxSocAhWP1xjyF9wib9BntkUW5NPI2sDIhWhBk3DW8WxnpFiU0CZWC9j4AW2HwZeGTJ-L9PsNn8vEZPJu3TNq~b6PYOOT2bdR57DA~IHGAolr2pvn0A0nDmJtknrQ4OaoTCr2w__"
                  alt="Safety and education illustration"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Shield className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-4">Evidence-Based</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every article and recommendation is backed by peer-reviewed research, WHO guidelines, and scientific studies. We cite our sources and encourage you to verify information independently.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Heart className="text-accent" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-4">Body Positive</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sexual wellness is for everyone. We provide inclusive, judgment-free information that respects all bodies, identities, and intimate practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <BookOpen className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-4">Transparent</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're honest about what we know and what we don't. When research is limited or conflicting, we say so. Our goal is education, not persuasion.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Users className="text-accent" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-4">Accessible</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Scientific information shouldn't require a PhD to understand. We translate complex research into clear, practical guidance anyone can use.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Not */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              What We're Not
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">We're not medical professionals.</strong> The information on this site is educational and should not replace advice from your healthcare provider. Always consult with a doctor or qualified health professional about your specific situation.
              </p>
              <p>
                <strong className="text-foreground">We're not trying to sell you something.</strong> While we offer conceptual product examples to illustrate safer formulations, our primary mission is education. We have no financial relationships with lubricant manufacturers.
              </p>
              <p>
                <strong className="text-foreground">We're not anti-commercial products.</strong> Some commercial lubricants are well-formulated and safe. We simply believe you should have the information needed to identify which ones meet safety standards.
              </p>
              <p>
                <strong className="text-foreground">We're not one-size-fits-all.</strong> Every body is different. What works safely for one person may not work for another. We provide information so you can make choices that work for your unique situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Our Sources
            </h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-1">World Health Organization</p>
                    <p className="text-muted-foreground">WHO/UNFPA specifications for plain lubricants (Annex 11)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Pharmaceutics Journal</p>
                    <p className="text-muted-foreground">"Characterization of Commercially Available Vaginal Lubricants: A Safety Perspective" (2014)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">United Nations Population Fund</p>
                    <p className="text-muted-foreground">Safe Lubricants For All guidelines</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Peer-Reviewed Research</p>
                    <p className="text-muted-foreground">Studies on osmolality, pH, and ingredient safety from medical journals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

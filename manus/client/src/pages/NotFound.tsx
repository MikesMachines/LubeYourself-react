import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-md px-4">
          <div className="mb-8">
            <h1 className="font-display text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <Link href="/">
            <Button size="lg">
              <Home className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

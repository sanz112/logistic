import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-primary">
                Global Logistics
                <span className="block text-blue-600">Made Simple</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Streamline your supply chain with our comprehensive logistics solutions. 
                From warehousing to last-mile delivery, we've got you covered worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-2xl text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Shipments Delivered</div>
              </div>
              <div>
                <div className="text-2xl text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1714627798569-b3e36d409c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzU4MjI1MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern logistics warehouse with containers"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg opacity-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
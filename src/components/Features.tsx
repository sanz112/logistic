import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Clock, Shield, BarChart3, Smartphone, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Monitor your shipments 24/7 with GPS tracking and instant notifications.",
    badge: "Live Updates"
  },
  {
    icon: Clock,
    title: "Time-Definite Delivery",
    description: "Guaranteed delivery times with money-back service level agreements.",
    badge: "SLA Backed"
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    description: "Comprehensive coverage protecting your valuable shipments worldwide.",
    badge: "Fully Insured"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Detailed insights and reports to optimize your supply chain performance.",
    badge: "Data Driven"
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Manage shipments, track cargo, and communicate on-the-go.",
    badge: "iOS & Android"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer service from our global support team.",
    badge: "Always Available"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced technology and innovative solutions that give you complete 
            visibility and control over your logistics operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-blue-100 rounded-lg w-fit">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl text-primary mb-4">Ready to Transform Your Logistics?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of businesses that trust us with their supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl text-blue-600">15%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-blue-600">40%</div>
                <div className="text-sm text-muted-foreground">Faster Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-blue-600">99.5%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
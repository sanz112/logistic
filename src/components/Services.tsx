import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Truck, Ship, Warehouse, Plane, Package, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective shipping solutions for large volumes across global trade routes.",
    image: "https://images.unsplash.com/photo-1732515742827-b46fba760ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBnbG9iYWwlMjB0cmFkZXxlbnwxfHx8fDE3NTgyMjUwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for time-sensitive shipments worldwide.",
    image: "https://images.unsplash.com/photo-1734903251820-c781932299f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydGF0aW9uJTIwaGlnaHdheXxlbnwxfHx8fDE3NTgyMjUwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Truck,
    title: "Ground Transport",
    description: "Comprehensive land transportation including FTL, LTL, and last-mile delivery.",
    image: "https://images.unsplash.com/photo-1734903251820-c781932299f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRyYW5zcG9ydGF0aW9uJTIwaGlnaHdheXxlbnwxfHx8fDE3NTgyMjUwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "State-of-the-art storage facilities with inventory management and fulfillment.",
    image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzU4MTg1OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Package,
    title: "Supply Chain",
    description: "End-to-end supply chain optimization and management solutions.",
    image: "https://images.unsplash.com/photo-1714627798569-b3e36d409c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzU4MjI1MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Globe,
    title: "Global Trade",
    description: "Customs clearance, documentation, and international trade compliance.",
    image: "https://images.unsplash.com/photo-1732515742827-b46fba760ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBnbG9iYWwlMjB0cmFkZXxlbnwxfHx8fDE3NTgyMjUwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business needs, 
            from local delivery to global supply chain management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
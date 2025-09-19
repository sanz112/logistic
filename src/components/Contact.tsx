import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+1 (555) 123-4567",
    description: "Mon-Fri 8AM-6PM EST"
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "contact@globallogistics.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "123 Logistics Way, New York, NY",
    description: "Our global headquarters"
  },
  {
    icon: Clock,
    title: "Business Hours",
    info: "24/7 Operations",
    description: "Support available worldwide"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to optimize your supply chain? Get a free quote today and 
            discover how we can transform your logistics operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl text-primary">Contact Information</h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <item.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-primary">{item.title}</h4>
                  <p className="text-muted-foreground">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ocean">Ocean Freight</SelectItem>
                        <SelectItem value="air">Air Freight</SelectItem>
                        <SelectItem value="ground">Ground Transport</SelectItem>
                        <SelectItem value="warehouse">Warehousing</SelectItem>
                        <SelectItem value="supply-chain">Supply Chain</SelectItem>
                        <SelectItem value="customs">Global Trade</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your logistics needs..."
                    rows={4}
                  />
                </div>

                <Button size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
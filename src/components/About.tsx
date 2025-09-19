import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, MapPin, Zap } from "lucide-react";

const achievements = [
  { icon: Award, label: "ISO Certified", value: "9001:2015" },
  { icon: Users, label: "Expert Team", value: "2,500+" },
  { icon: MapPin, label: "Global Offices", value: "150+" },
  { icon: Zap, label: "Years Experience", value: "25+" }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit">About GlobalLogistics</Badge>
              <h2 className="text-3xl lg:text-4xl text-primary">
                Connecting the World Through 
                <span className="block">Smart Logistics</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                For over 25 years, we've been pioneering innovative logistics solutions 
                that connect businesses to global markets. Our commitment to excellence 
                and cutting-edge technology has made us a trusted partner for companies 
                worldwide.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-primary mb-2">Our Mission</h4>
                <p className="text-muted-foreground">
                  To simplify global trade by providing reliable, efficient, and 
                  technology-driven logistics solutions that help businesses thrive 
                  in the international marketplace.
                </p>
              </div>

              <div>
                <h4 className="text-primary mb-2">Our Vision</h4>
                <p className="text-muted-foreground">
                  To be the world's most trusted logistics partner, setting the 
                  standard for innovation, sustainability, and customer excellence 
                  in supply chain management.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <achievement.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-primary">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg">Learn More About Us</Button>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1603202662706-62ead3176b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4MTYyMjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional business team"
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-6 max-w-xs">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Live Shipments</span>
                </div>
                <div className="text-2xl text-primary">12,487</div>
                <div className="text-sm text-green-600">+8.2% from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
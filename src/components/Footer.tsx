import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News & Media", href: "#" },
    { name: "Investor Relations", href: "#" }
  ],
  services: [
    { name: "Ocean Freight", href: "#services" },
    { name: "Air Freight", href: "#services" },
    { name: "Ground Transport", href: "#services" },
    { name: "Warehousing", href: "#services" },
    { name: "Supply Chain", href: "#services" }
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "Track Shipment", href: "#" },
    { name: "Get Quote", href: "#contact" },
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" },
    { name: "Compliance", href: "#" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl text-white mb-4">GlobalLogistics</h3>
                <p className="text-gray-300 max-w-md">
                  Connecting the world through smart logistics solutions. 
                  Your trusted partner for global supply chain management.
                </p>
              </div>

              <div>
                <h4 className="text-white mb-4">Stay Updated</h4>
                <p className="text-gray-300 mb-4">
                  Subscribe to our newsletter for the latest logistics insights and updates.
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                  <Button variant="secondary">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © 2024 GlobalLogistics. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
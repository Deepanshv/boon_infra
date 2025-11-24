import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/">
              <h3 className="text-2xl font-serif font-bold">
                <span className="text-luxury-gold">LUXURY</span>
                <span className="text-foreground"> ESTATES</span>
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating architectural masterpieces and luxury living spaces for over three decades.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Residential", path: "/residential" },
                { label: "Contact", path: "/contact" },
                { label: "Media", path: "/media" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Residential", path: "/residential" },
                { label: "Commercial", path: "/commercial" },
                { label: "Hospitality", path: "/hospitality" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <span>123 Luxury Avenue, Premium District, Mumbai 400001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <span>info@luxuryestates.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Luxury Estates. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-luxury-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-luxury-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

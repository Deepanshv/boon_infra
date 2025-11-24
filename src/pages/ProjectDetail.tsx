import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Ruler, Calendar, Check, ArrowLeft } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  const projectData: Record<string, any> = {
    "premium-gardens": {
      name: "Premium Gardens",
      location: "Prime Location, Mumbai",
      type: "Luxury Apartments",
      status: "Ready to Move",
      price: "Starting from ₹2.5 Cr",
      area: "1200 - 2500 sq.ft",
      possession: "Immediate",
      imagePath: property1,
      description: "Premium Gardens is a neo-classical architectural marvel that offers an unparalleled living experience. Located amid serene surroundings, this project combines luxury with nature, providing residents with a perfect escape from the city's hustle while staying well-connected.",
      amenities: [
        "Swimming Pool & Jacuzzi",
        "Fully Equipped Gymnasium",
        "Landscaped Gardens",
        "Children's Play Area",
        "Club House",
        "24/7 Security",
        "Power Backup",
        "Covered Parking",
        "Jogging Track",
        "Multi-purpose Hall",
        "Indoor Games Room",
        "Yoga & Meditation Center",
      ],
      highlights: [
        "Premium Italian Marble Flooring",
        "Modular Kitchen with Chimney",
        "Designer Bathrooms",
        "Video Door Phone",
        "Smart Home Features",
        "Vastu Compliant",
      ],
    },
    "executive-estate": {
      name: "Executive Estate",
      location: "Metropolitan Hub, Mumbai",
      type: "Integrated Township",
      status: "Under Construction",
      price: "Starting from ₹1.8 Cr",
      area: "900 - 2200 sq.ft",
      possession: "Dec 2025",
      imagePath: property2,
      description: "Executive Estate is an award-winning integrated township that redefines community living. Spread across acres of land, this project offers everything you need within the township - from schools to shopping complexes, making it a self-sustained ecosystem.",
      amenities: [
        "International School",
        "Hospital & Medical Center",
        "Shopping Complex",
        "Multiplex Cinema",
        "Sports Complex",
        "Olympic Size Swimming Pool",
        "Tennis & Badminton Courts",
        "Community Center",
        "Central Park",
        "Amphitheater",
        "Cafes & Restaurants",
        "Supermarket",
      ],
      highlights: [
        "2000+ Premium Residences",
        "Sustainable Green Building",
        "Rainwater Harvesting",
        "Solar Power Integration",
        "Wide Roads & Ample Parking",
        "Gated Community",
      ],
    },
    "riverside-enclave": {
      name: "Riverside Enclave",
      location: "Waterfront District",
      type: "Premium Villas",
      status: "Launching Soon",
      price: "Starting from ₹4.5 Cr",
      area: "2500 - 4000 sq.ft",
      possession: "Jun 2026",
      imagePath: property3,
      description: "Riverside Enclave offers an exclusive waterfront living experience. Wake up to breathtaking views of serene waters and enjoy the luxury of spacious villas with private balconies. This project is designed for those who seek tranquility without compromising on luxury.",
      amenities: [
        "Waterfront Promenade",
        "Private Beach Access",
        "Infinity Pool",
        "Spa & Wellness Center",
        "Fine Dining Restaurant",
        "Concierge Service",
        "Private Gardens",
        "Home Theater",
        "Wine Cellar",
        "Private Elevator",
        "Smart Home Automation",
        "Helipad",
      ],
      highlights: [
        "Panoramic Water Views",
        "Private Balconies",
        "Imported Fixtures",
        "Designer Interiors",
        "High-end Appliances",
        "Premium Security Systems",
      ],
    },
  };

  const project = projectData[id || ""] || projectData["premium-gardens"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <section className="pt-20">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={project.imagePath}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link to="/residential">
                <Button variant="ghost" className="mb-4 text-foreground hover:text-luxury-gold">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Button>
              </Link>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
                {project.name}
              </h1>
              <div className="flex items-center text-lg text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2 text-luxury-gold" />
                {project.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Home, label: "Type", value: project.type },
              { icon: Ruler, label: "Area", value: project.area },
              { icon: Calendar, label: "Possession", value: project.possession },
              { icon: MapPin, label: "Status", value: project.status },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-semibold">{item.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Description & Price */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">
                  About <span className="text-luxury-gold">The Project</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">Amenities</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">Key Highlights</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-secondary p-8 rounded-lg sticky top-32">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-luxury-gold mb-2">
                    {project.price}
                  </div>
                  <div className="text-sm text-muted-foreground">*Prices subject to change</div>
                </div>
                <div className="space-y-4">
                  <Link to="/contact">
                    <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-background">
                      Schedule a Visit
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                  <Button variant="outline" className="w-full">
                    Call Us Now
                  </Button>
                </div>
                <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
                  <p>Need help? Our team is available 24/7</p>
                  <p className="text-luxury-gold font-semibold mt-2">+91 12345 67890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

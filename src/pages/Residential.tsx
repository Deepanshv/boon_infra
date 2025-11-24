import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import { Home, Building, MapPin, ArrowRight } from "lucide-react";

const Residential = () => {
  const projects = [
    {
      id: "premium-gardens",
      name: "Premium Gardens",
      location: "Prime Location, Mumbai",
      type: "Luxury Apartments",
      units: "2, 3 & 4 BHK",
      status: "Ready to Move",
      imagePath: property1,
      description: "Neo-classical architectural marvel offering premium living spaces",
    },
    {
      id: "executive-estate",
      name: "Executive Estate",
      location: "Metropolitan Hub, Mumbai",
      type: "Integrated Township",
      units: "2000+ Residences",
      status: "Under Construction",
      imagePath: property2,
      description: "Award-winning township with world-class amenities",
    },
    {
      id: "riverside-enclave",
      name: "Riverside Enclave",
      location: "Waterfront District",
      type: "Premium Villas",
      units: "3 & 4 BHK Villas",
      status: "Launching Soon",
      imagePath: property3,
      description: "Exclusive waterfront living with panoramic views",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6">
              <Home className="w-8 h-8 text-luxury-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Residential <span className="text-luxury-gold">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover our collection of luxury homes designed for modern living
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-secondary rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.imagePath}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-luxury-gold text-background px-4 py-1 text-sm font-medium rounded-full">
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{project.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-1 text-luxury-gold" />
                      {project.location}
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-medium">{project.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Units:</span>
                      <span className="font-medium">{project.units}</span>
                    </div>
                  </div>

                  <Link to={`/project/${project.id}`}>
                    <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-background group mt-4">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Why Choose Our <span className="text-luxury-gold">Residential Projects</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Building, title: "Prime Locations", desc: "Strategically located in the heart of the city" },
              { icon: Home, title: "Modern Architecture", desc: "Contemporary designs with premium finishes" },
              { icon: MapPin, title: "World-Class Amenities", desc: "Everything you need for comfortable living" },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Residential;

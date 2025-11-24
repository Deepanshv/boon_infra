import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Store, Briefcase } from "lucide-react";

const Commercial = () => {
  const projects = [
    {
      name: "Business Hub",
      type: "Commercial Complex",
      location: "CBD, Mumbai",
      area: "50,000 sq.ft - 2,00,000 sq.ft",
      description: "State-of-the-art commercial spaces designed for modern businesses",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    },
    {
      name: "Retail Plaza",
      type: "Shopping Complex",
      location: "Central Mumbai",
      area: "5,000 sq.ft - 50,000 sq.ft",
      description: "Premium retail spaces in high-footfall locations",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    },
    {
      name: "Tech Park",
      type: "IT Office Space",
      location: "Tech Hub, Mumbai",
      area: "1,00,000 sq.ft+",
      description: "Cutting-edge infrastructure for technology companies",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6">
              <Building2 className="w-8 h-8 text-luxury-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Commercial <span className="text-luxury-gold">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Prime commercial spaces designed for success
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-block px-4 py-1 bg-luxury-gold/10 rounded-full text-luxury-gold text-sm font-medium">
                    {project.type}
                  </div>
                  <h2 className="text-4xl font-serif font-bold">{project.name}</h2>
                  <p className="text-lg text-muted-foreground">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{project.location}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Area:</span>
                      <span className="font-medium">{project.area}</span>
                    </div>
                  </div>
                  <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-background">
                    Get Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Why Choose Our <span className="text-luxury-gold">Commercial Spaces</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Building2, title: "Prime Locations", desc: "Strategic locations with high visibility" },
              { icon: Store, title: "Modern Infrastructure", desc: "State-of-the-art facilities and amenities" },
              { icon: Briefcase, title: "Business Ready", desc: "Move-in ready spaces with full support" },
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

export default Commercial;

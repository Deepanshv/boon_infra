import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Hotel, Coffee, Sparkles } from "lucide-react";

const Hospitality = () => {
  const projects = [
    {
      name: "Luxury Resort & Spa",
      type: "5-Star Resort",
      location: "Coastal Paradise",
      features: "200 Rooms | Private Beach | Spa & Wellness",
      description: "A world-class resort offering unparalleled luxury and hospitality",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    },
    {
      name: "Business Hotel",
      type: "4-Star Hotel",
      location: "City Center",
      features: "150 Rooms | Conference Halls | Fine Dining",
      description: "Modern business hotel with premium amenities",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    },
    {
      name: "Boutique Villa Resort",
      type: "Luxury Villas",
      location: "Hill Station",
      features: "50 Private Villas | Nature Trails | Organic Farm",
      description: "Exclusive villa resort nestled in pristine natural beauty",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6">
              <Hotel className="w-8 h-8 text-luxury-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Hospitality <span className="text-luxury-gold">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Creating memorable experiences through exceptional hospitality
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
                      <span className="text-muted-foreground">Features:</span>
                      <span className="font-medium text-right">{project.features}</span>
                    </div>
                  </div>
                  <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-background">
                    Explore Project
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
              Our <span className="text-luxury-gold">Hospitality Excellence</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Hotel, title: "World-Class Service", desc: "Exceptional guest experiences" },
              { icon: Coffee, title: "Premium Amenities", desc: "Luxury facilities and comforts" },
              { icon: Sparkles, title: "Attention to Detail", desc: "Every detail meticulously crafted" },
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

export default Hospitality;

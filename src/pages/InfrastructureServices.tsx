import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Home, Trees, Waves, MapPin, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const InfrastructureServices = () => {
  const services = [
    {
      icon: Building2,
      title: "Luxury Residential Homes",
      description: "We create iconic luxury homes with divine grandeur. From land procurement to final handover, we ensure every detail meets the highest standards of excellence.",
      features: [
        "Premium location selection",
        "Modern architectural design",
        "High-quality construction materials",
        "Timely project completion",
        "Complete legal documentation",
      ],
    },
    {
      icon: Home,
      title: "Residential Spaces",
      description: "Customized residential projects tailored to your vision. We transform dreams into reality with meticulous planning and execution.",
      features: [
        "2, 3 & 4 BHK luxury apartments",
        "Spacious villas and bungalows",
        "Gated community living",
        "World-class amenities",
        "Sustainable green building",
      ],
    },
    {
      icon: MapPin,
      title: "Office Spaces",
      description: "State-of-the-art office complexes designed for modern businesses. Strategic locations with excellent connectivity.",
      features: [
        "Prime commercial locations",
        "Modern office layouts",
        "High-speed internet connectivity",
        "24/7 power backup",
        "Ample parking facilities",
      ],
    },
    {
      icon: Building2,
      title: "Shopping Complexes",
      description: "Vibrant shopping destinations that attract footfall and create thriving business ecosystems.",
      features: [
        "Strategic retail locations",
        "Modern retail infrastructure",
        "High visibility storefronts",
        "Ample customer parking",
        "Food court facilities",
      ],
    },
    {
      icon: Waves,
      title: "Multiplexes",
      description: "Entertainment hubs with cutting-edge facilities and premium viewing experiences.",
      features: [
        "Latest projection technology",
        "Comfortable seating arrangements",
        "Premium food & beverage options",
        "Modern architectural design",
        "Accessible parking facilities",
      ],
    },
    {
      icon: Trees,
      title: "Integrated Townships",
      description: "Complete living ecosystems with residential, commercial, and recreational facilities all in one place.",
      features: [
        "Residential & commercial zones",
        "Schools and healthcare facilities",
        "Parks and recreation areas",
        "Shopping and entertainment",
        "Complete infrastructure",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle2,
      title: "Exceptional Quality",
      description: "Built with precision and passion, every project carries our legacy forward",
    },
    {
      icon: Shield,
      title: "Complete Transparency",
      description: "From land procurement to project completion, we maintain complete transparency",
    },
    {
      icon: Building2,
      title: "Sublime Grandeur",
      description: "Creating landmarks with divine grandeur and unrivalled infrastructure",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Infrastructure <span className="text-luxury-gold">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are passionate about creating landmarks with divine grandeur and building a legacy 
              of unrivalled inimitable infrastructure. From luxury homes to commercial complexes, 
              we turn your vision into reality.
            </p>
            <Link to="/contact">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-background" size="lg">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our <span className="text-luxury-gold">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive infrastructure solutions from land procurement to project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-secondary p-8 rounded-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-luxury-gold/50"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-luxury-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-luxury-gold" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Why Choose <span className="text-luxury-gold">Boon Infrastructure</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-luxury-gold/10 rounded-2xl p-12 text-center border border-luxury-gold/20">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Ready to Build Your <span className="text-luxury-gold">Dream Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We begin every project from scratch - from land procurement to turning your vision into reality. 
              Let's discuss how we can help you create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-background" size="lg">
                  Contact Us Today
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-background">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfrastructureServices;

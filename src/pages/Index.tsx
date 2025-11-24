import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertyShowcase from "@/components/PropertyShowcase";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Index = () => {
  const [currentHero, setCurrentHero] = useState(0);

  const heroSlides = [
    {
      title: "Premium Gardens",
      subtitle: "LUXURY LIVING",
      description: "Neo-classical architectural marvel located amid the serenity of nature, offering you an experience of the lifetime.",
      imagePath: hero1,
      link: "#",
    },
    {
      title: "Executive Estate",
      subtitle: "MODERN TOWNSHIP",
      description: "Winner of the best design for community living award, the largest township gives you all the amenities in one place.",
      imagePath: hero2,
      link: "#",
    },
    {
      title: "Riverside Enclave",
      subtitle: "WATERFRONT LIVING",
      description: "Located in the vicinity of pristine river, this enclave emulates the character and persona of luxury living.",
      imagePath: hero3,
      link: "#",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Carousel */}
      <div className="relative">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              index === currentHero ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <HeroSection {...slide} />
          </div>
        ))}
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`w-12 h-1 transition-all duration-300 ${
                index === currentHero ? "bg-luxury-gold" : "bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Property Showcases */}
      <PropertyShowcase
        title="Premium Gardens"
        location="Prime Location"
        description="Experience luxury redefined with our flagship residential project. A perfect blend of modern architecture and natural serenity, offering world-class amenities and spacious living spaces."
        features={[
          "2, 3 & 4 BHK luxury residences",
          "Landscaped gardens spanning 5 acres",
          "State-of-the-art clubhouse with premium amenities",
          "24/7 security with gated community",
          "Premium Italian marble flooring",
        ]}
        imagePath={property1}
        projectId="premium-gardens"
      />

      <div className="h-px bg-border container mx-auto" />

      <PropertyShowcase
        title="Executive Estate"
        location="Metropolitan Hub"
        description="An integrated township that sets new standards in community living. With world-class infrastructure and contemporary design, it's where luxury meets convenience."
        features={[
          "Over 2000 premium residences",
          "Shopping complex and entertainment zone",
          "International schools and medical facilities",
          "Sports complex with Olympic-size pool",
          "Sustainable green building design",
        ]}
        imagePath={property2}
        projectId="executive-estate"
        reverse
      />

      <div className="h-px bg-border container mx-auto" />

      <PropertyShowcase
        title="Riverside Enclave"
        location="Waterfront District"
        description="Wake up to breathtaking views of serene waters. This exclusive enclave offers a perfect retreat from the city's hustle, without compromising on luxury and connectivity."
        features={[
          "Exclusive waterfront apartments",
          "Private balconies with panoramic views",
          "Riverside promenade and walking trails",
          "Premium imported fixtures and fittings",
          "Smart home automation systems",
        ]}
        imagePath={property3}
        projectId="riverside-enclave"
      />

      <Footer />
    </div>
  );
};

export default Index;

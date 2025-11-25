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
      title: "First Light Homes",
      subtitle: "We turn your dream 'Utopia' into Reality!!!",
      description: "We are the most illustrious and renowned real estate developers from Jabalpur (M.P). Our vision is of fulfilling lives with unparalleled luxury and excel with unmatched customer satisfaction.",
      imagePath: hero1,
      link: "#",
    },
    {
      title: "Boon Infrastructure",
      subtitle: "A symbol of Sublime Grandeur",
      description: "We are passionate of creating landmarks with divine grandeur and building a legacy of unrivalled inimitable infrastructure.",
      imagePath: hero2,
      link: "#",
    },
    {
      title: "Quality & Excellence",
      subtitle: "EXCEPTIONAL DELIVERANCE",
      description: "Our projects are built with precision and passion with the insight that every project carries our name and legacy forward.",
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
        title="First Light Homes"
        location="Jabalpur (M.P)"
        description="Our flagship project featuring luxury homes with exceptional quality deliverance. We build with precision and passion, ensuring every detail reflects our commitment to excellence."
        features={[
          "Exceptional quality deliverance",
          "Timely deliverance guaranteed",
          "Round the clock loan support",
          "Unsurpassable customer support",
          "Premium construction and finishing",
        ]}
        imagePath={property1}
        projectId="first-light-homes"
      />

      <div className="h-px bg-border container mx-auto" />

      <PropertyShowcase
        title="Residential & Office Spaces"
        location="Jabalpur (M.P)"
        description="We have a vibrant portfolio of projects spanning from iconic luxury homes, residential & office spaces. Every project begins from scratch - we procure land and turn your vision into reality."
        features={[
          "Luxury residential homes",
          "Modern office spaces",
          "Shopping complex facilities",
          "Multiplexes and entertainment zones",
          "Customized planning and execution",
        ]}
        imagePath={property2}
        projectId="residential-office"
        reverse
      />

      <div className="h-px bg-border container mx-auto" />

      <PropertyShowcase
        title="Our Commitment"
        location="Jabalpur (M.P)"
        description="We believe in creating our legacy from scratch each time. Customer satisfaction is of paramount importance to us, hence each project is customly tailored and planned efficiently to be delivered in the desired timeline."
        features={[
          "Land procurement to project completion",
          "Timely delivery assured",
          "24/7 customer support",
          "Complete loan assistance",
          "Quality assurance at every step",
        ]}
        imagePath={property3}
        projectId="our-commitment"
      />

      <Footer />
    </div>
  );
};

export default Index;

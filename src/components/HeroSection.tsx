import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  link: string;
}

const HeroSection = ({ title, subtitle, description, imagePath, link }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${imagePath})`,
        }}
      />
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-slide-up">
            <h2 className="text-luxury-gold text-xl md:text-2xl font-light mb-4 tracking-widest uppercase">
              {title}
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              {subtitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              {description}
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-background transition-all duration-300 group"
            >
              LEARN MORE
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

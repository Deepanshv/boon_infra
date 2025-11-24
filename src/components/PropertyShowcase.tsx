import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PropertyShowcaseProps {
  title: string;
  location: string;
  description: string;
  features: string[];
  imagePath: string;
  reverse?: boolean;
}

const PropertyShowcase = ({
  title,
  location,
  description,
  features,
  imagePath,
  reverse = false,
}: PropertyShowcaseProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
            <div className="aspect-[4/3] rounded-none overflow-hidden">
              <img
                src={imagePath}
                alt={title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-luxury-gold opacity-20" />
          </div>

          {/* Content */}
          <div className={`space-y-6 ${reverse ? 'lg:order-1' : ''}`}>
            <div className="space-y-2">
              <p className="text-luxury-gold text-sm font-medium tracking-widest uppercase">
                {location}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                {title}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mt-2" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-background group mt-8"
              size="lg"
            >
              EXPLORE PROJECT
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;

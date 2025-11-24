import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Building2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const milestones = [
    { year: "1990", title: "Company Founded", description: "Started with a vision to redefine luxury real estate" },
    { year: "2000", title: "First Township", description: "Launched our first integrated township project" },
    { year: "2010", title: "International Recognition", description: "Received multiple international awards" },
    { year: "2024", title: "Industry Leader", description: "Completed 100+ projects with 50,000+ happy families" },
  ];

  const values = [
    { icon: Target, title: "Excellence", description: "Committed to delivering world-class quality" },
    { icon: Users, title: "Customer First", description: "Your satisfaction is our top priority" },
    { icon: Building2, title: "Innovation", description: "Pioneering new standards in construction" },
    { icon: Award, title: "Integrity", description: "Building trust through transparency" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              About <span className="text-luxury-gold">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Creating architectural masterpieces and luxury living spaces for over three decades
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold">
                Our <span className="text-luxury-gold">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over three decades, we have been at the forefront of creating luxury living spaces 
                that blend contemporary design with timeless elegance. Our commitment to excellence 
                has made us one of the most trusted names in real estate.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From residential townships to commercial complexes and hospitality ventures, we have 
                successfully delivered projects that have redefined urban living. Our focus on quality, 
                innovation, and customer satisfaction continues to drive us forward.
              </p>
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-background mt-4">
                View Our Projects
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" 
                  alt="Modern architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our <span className="text-luxury-gold">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-background p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our <span className="text-luxury-gold">Journey</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-luxury-gold/30">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-luxury-gold rounded-full border-4 border-background" />
                <div className="bg-secondary p-6 rounded-lg">
                  <div className="text-2xl font-bold text-luxury-gold mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Building2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const milestones = [
    { year: "Founded", title: "Boon Infrastructure", description: "Started with a vision to redefine luxury real estate in Jabalpur" },
    { year: "Growth", title: "Fastest Growing Developer", description: "Became one of the most illustrious and renowned real estate developers in M.P" },
    { year: "Innovation", title: "First Light Homes", description: "Launched our flagship project with exceptional quality deliverance" },
    { year: "Present", title: "Industry Leader", description: "Building a legacy of unrivalled inimitable infrastructure" },
  ];

  const values = [
    { icon: Award, title: "Exceptional Quality", description: "Our projects are built with precision and passion with the insight that every project carries our name and legacy forward" },
    { icon: Target, title: "Timely Deliverance", description: "Customer satisfaction is of paramount importance to us. Each project is customly tailored and planned efficiently to be delivered in the desired timeline" },
    { icon: Building2, title: "Round the Clock Loan Support", description: "We understand the needs and wants of customers, hence we provide round the clock guidance of all kinds of loan facilities" },
    { icon: Users, title: "Unsurpassable Customer Support", description: "We listen and respond to all the customer queries. Our executives adhere towards fulfilling all your dreams" },
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
              A symbol of Sublime Grandeur - Building a legacy of unrivalled inimitable infrastructure in Jabalpur (M.P)
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
                We are exemplary and fastest growing infrastructure developers from Jabalpur (M.P). 
                We have vibrant portfolio of projects spanning from iconic luxury homes, residential & 
                office spaces, multiplexes, shopping complex etc.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in creating our legacy from scratch each time hence we begin every project 
                by firstly procuring land and then turning customers vision into reality! We are 
                passionate of creating landmarks with divine grandeur and building a legacy of 
                unrivalled inimitable infrastructure.
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

      {/* Founder Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Meet Our <span className="text-luxury-gold">Founder</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-16 h-16 text-luxury-gold" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-2">Afzal Khan</h3>
              <p className="text-luxury-gold text-lg mb-4">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                Leading Boon Infrastructure with a vision to create architectural masterpieces and 
                turn every customer's dream into reality. With unwavering commitment to quality and 
                customer satisfaction, Afzal Khan has established Boon Infrastructure as a trusted 
                name in Jabalpur's real estate landscape.
              </p>
            </div>
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

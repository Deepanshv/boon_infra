import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle2, Clock, Shield, Users, FileCheck, Scale, Home } from "lucide-react";
import { Link } from "react-router-dom";

const RegistryServices = () => {
  const services = [
    {
      icon: FileText,
      title: "Property Registration",
      description: "Complete assistance with property registration process, ensuring all legal formalities are properly handled.",
      features: [
        "Document verification & preparation",
        "Stamp duty calculation & payment",
        "Registration at Sub-Registrar office",
        "Property title verification",
        "Complete legal compliance",
      ],
    },
    {
      icon: FileCheck,
      title: "Title Clearance",
      description: "Thorough title search and clearance to ensure the property has a clear and marketable title.",
      features: [
        "Comprehensive title search",
        "Encumbrance certificate verification",
        "Legal heir verification",
        "Mutation records check",
        "Title clearance certificate",
      ],
    },
    {
      icon: Scale,
      title: "Legal Documentation",
      description: "Expert preparation and review of all legal documents required for property transactions.",
      features: [
        "Sale deed preparation",
        "Agreement drafting",
        "Power of attorney documentation",
        "Gift deed preparation",
        "Lease agreement preparation",
      ],
    },
    {
      icon: Home,
      title: "Property Transfer",
      description: "Seamless property transfer services with complete legal and documentation support.",
      features: [
        "Ownership transfer assistance",
        "Mutation application filing",
        "Khata transfer support",
        "Property tax transfer",
        "Utility transfer guidance",
      ],
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Ensuring all property transactions comply with local laws and regulations.",
      features: [
        "RERA compliance verification",
        "Municipal approval checks",
        "NOC from authorities",
        "Building plan approval",
        "Occupancy certificate support",
      ],
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "Expert legal consultation for all your property-related queries and concerns.",
      features: [
        "Property law consultation",
        "Investment advisory",
        "Dispute resolution guidance",
        "Property valuation support",
        "Tax planning assistance",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We understand your requirements and provide complete guidance on the registration process.",
    },
    {
      step: "02",
      title: "Document Collection",
      description: "Gather all necessary documents and verify their authenticity and completeness.",
    },
    {
      step: "03",
      title: "Legal Verification",
      description: "Thorough verification of property documents, title clearance, and legal compliance.",
    },
    {
      step: "04",
      title: "Registration Process",
      description: "Complete the registration process at the Sub-Registrar office with proper documentation.",
    },
    {
      step: "05",
      title: "Post-Registration",
      description: "Assist with mutation, property tax transfer, and other post-registration formalities.",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Efficient handling of all documentation and registration formalities to save your time",
    },
    {
      icon: Shield,
      title: "Legal Security",
      description: "Complete legal compliance and protection from future disputes or complications",
    },
    {
      icon: CheckCircle2,
      title: "Expert Guidance",
      description: "Professional support from experienced legal experts throughout the process",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round the clock assistance for all your registry-related queries and concerns",
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
              Registry <span className="text-luxury-gold">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Complete property registration and legal documentation services. We handle all formalities 
              from title verification to final registration, ensuring complete legal compliance and peace of mind.
            </p>
            <Link to="/contact">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-background" size="lg">
                Get Registry Assistance
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
              Our <span className="text-luxury-gold">Registry Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive registry and legal documentation support for all property transactions
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

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our <span className="text-luxury-gold">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to make property registration hassle-free
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                {index !== process.length - 1 && (
                  <div className="absolute left-10 top-16 bottom-0 w-0.5 bg-luxury-gold/30" />
                )}
                <div className="absolute left-0 top-0 w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center border-4 border-background">
                  <span className="text-2xl font-bold text-luxury-gold">{item.step}</span>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Why Choose Our <span className="text-luxury-gold">Registry Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="bg-luxury-gold/10 rounded-2xl p-12 text-center border border-luxury-gold/20">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Need Help with <span className="text-luxury-gold">Property Registration?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our expert team is ready to assist you with all registry and legal documentation needs. 
              Get complete support from document verification to final registration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-background" size="lg">
                  Contact Us Now
                </Button>
              </Link>
              <a href="tel:+919993535333">
                <Button variant="outline" size="lg" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-background">
                  Call +91 99935 35333
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegistryServices;

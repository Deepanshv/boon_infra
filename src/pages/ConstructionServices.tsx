import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Hammer, HardHat, Ruler, Paintbrush, Wrench, CheckCircle2, Award, Clock, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ConstructionServices = () => {
  const services = [
    {
      icon: HardHat,
      title: "Complete Construction",
      description: "End-to-end construction services from foundation to finishing with precision and passion.",
      features: [
        "Site preparation & foundation work",
        "Structural construction",
        "MEP installations",
        "Interior & exterior finishing",
        "Quality inspection at every stage",
      ],
    },
    {
      icon: Ruler,
      title: "Architectural Design",
      description: "Innovative architectural designs that blend aesthetics with functionality and sustainability.",
      features: [
        "Conceptual design development",
        "3D visualization & renderings",
        "Working drawings preparation",
        "Material selection guidance",
        "Modern & traditional styles",
      ],
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with expert renovation and remodeling services.",
      features: [
        "Residential renovations",
        "Commercial space remodeling",
        "Kitchen & bathroom upgrades",
        "Structural modifications",
        "Modern design integration",
      ],
    },
    {
      icon: Paintbrush,
      title: "Interior Design",
      description: "Luxury interior design services that reflect your style and enhance living spaces.",
      features: [
        "Space planning & layout",
        "Custom furniture design",
        "Lighting design",
        "Material & color consultation",
        "Turnkey interior solutions",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive maintenance and repair services to keep your property in perfect condition.",
      features: [
        "Preventive maintenance",
        "Emergency repair services",
        "Waterproofing solutions",
        "Electrical & plumbing repairs",
        "Annual maintenance contracts",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Project Management",
      description: "Professional project management ensuring timely delivery and quality execution.",
      features: [
        "Complete project planning",
        "Resource management",
        "Timeline & budget control",
        "Quality assurance",
        "Regular progress updates",
      ],
    },
  ];

  const constructionPhases = [
    {
      phase: "Planning",
      title: "Design & Planning",
      description: "Detailed planning including architectural design, approvals, and material selection.",
      duration: "2-4 weeks",
    },
    {
      phase: "Foundation",
      title: "Foundation Work",
      description: "Site preparation, excavation, and foundation construction with quality materials.",
      duration: "3-6 weeks",
    },
    {
      phase: "Structure",
      title: "Structural Construction",
      description: "Building the core structure including walls, floors, and roof with precision.",
      duration: "8-16 weeks",
    },
    {
      phase: "MEP",
      title: "MEP Installations",
      description: "Mechanical, Electrical, and Plumbing installations by expert technicians.",
      duration: "4-8 weeks",
    },
    {
      phase: "Finishing",
      title: "Finishing Work",
      description: "Interior and exterior finishing including painting, flooring, and fixtures.",
      duration: "6-10 weeks",
    },
  ];

  const qualityStandards = [
    {
      icon: Award,
      title: "Premium Materials",
      description: "We use only high-quality, certified construction materials from trusted suppliers",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Multi-stage quality inspections ensuring every detail meets our high standards",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient project management ensuring completion within the agreed timeline",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Experienced engineers, architects, and craftsmen committed to excellence",
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
              Construction <span className="text-luxury-gold">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our projects are built with precision and passion. Every construction carries our name and 
              legacy forward with exceptional quality deliverance and timely completion.
            </p>
            <Link to="/contact">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-background" size="lg">
                Start Your Construction
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
              Our <span className="text-luxury-gold">Construction Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions with uncompromising quality and attention to detail
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

      {/* Construction Phases */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Construction <span className="text-luxury-gold">Timeline</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures quality at every stage of construction
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {constructionPhases.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-background p-6 rounded-lg border border-border h-full">
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-luxury-gold/10 rounded-full mb-3">
                        <span className="text-xl font-bold text-luxury-gold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-xs text-luxury-gold font-medium">{item.duration}</p>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      {item.description}
                    </p>
                  </div>
                  {index < constructionPhases.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-luxury-gold/30 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our <span className="text-luxury-gold">Quality Standards</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exceptional quality deliverance is at the heart of everything we build
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{standard.title}</h3>
                  <p className="text-muted-foreground">{standard.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">
                  Why Our <span className="text-luxury-gold">Construction</span> Stands Out
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Precision & Passion</h3>
                      <p className="text-muted-foreground">Every project is built with meticulous attention to detail</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Customized Planning</h3>
                      <p className="text-muted-foreground">Each project is tailored to meet your specific requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Complete Transparency</h3>
                      <p className="text-muted-foreground">Regular updates and open communication throughout construction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Round the Clock Support</h3>
                      <p className="text-muted-foreground">24/7 customer support and assistance during and after construction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                    alt="Construction Site"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-luxury-gold/10 rounded-2xl p-12 text-center border border-luxury-gold/20">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Ready to Start Your <span className="text-luxury-gold">Construction Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build something exceptional together. Our expert team is ready to turn your vision 
              into reality with precision, passion, and timely delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-background" size="lg">
                  Get a Quote
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

export default ConstructionServices;

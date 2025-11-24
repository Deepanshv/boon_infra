import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Newspaper, Award } from "lucide-react";

const Media = () => {
  const news = [
    {
      date: "15 Nov 2024",
      category: "Press Release",
      title: "Premium Gardens Project Wins Best Residential Award",
      excerpt: "Our flagship project has been recognized for architectural excellence and sustainable design practices.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      date: "10 Oct 2024",
      category: "Company News",
      title: "Expansion Plans Announced for 2025",
      excerpt: "We are excited to announce our expansion into three new cities with five upcoming luxury projects.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
      date: "28 Sep 2024",
      category: "Achievement",
      title: "50,000+ Happy Families Milestone Reached",
      excerpt: "Celebrating three decades of excellence with over 50,000 families now living in our communities.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
    },
    {
      date: "15 Aug 2024",
      category: "Sustainability",
      title: "Green Building Certification for All Projects",
      excerpt: "All our projects have received LEED Gold certification for sustainable construction practices.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
    },
  ];

  const awards = [
    "Best Real Estate Developer 2024",
    "Excellence in Residential Projects",
    "Sustainable Construction Award",
    "Customer Satisfaction Award",
    "Innovation in Design Award",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6">
              <Newspaper className="w-8 h-8 text-luxury-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Media & <span className="text-luxury-gold">News</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay updated with our latest achievements and announcements
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <article key={index} className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="inline-block px-3 py-1 bg-luxury-gold/10 text-luxury-gold rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6">
              <Award className="w-8 h-8 text-luxury-gold" />
            </div>
            <h2 className="text-4xl font-serif font-bold mb-12">
              Awards & <span className="text-luxury-gold">Recognition</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border-l-4 border-luxury-gold">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-luxury-gold flex-shrink-0" />
                    <span className="font-medium">{award}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;

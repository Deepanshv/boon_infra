const StatsSection = () => {
  const stats = [
    { number: "100%", label: "Quality Deliverance" },
    { number: "24/7", label: "Loan Support" },
    { number: "100%", label: "Timely Delivery" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="py-24 luxury-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-luxury-gold">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

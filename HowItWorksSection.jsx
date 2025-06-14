import React from 'react';
    import { motion } from 'framer-motion';
    import { Search, Users, Star } from 'lucide-react';

    const HowItWorksSection = () => {
      const steps = [
        { icon: <Search className="h-10 w-10 text-primary" />, title: "1. Discover", desc: "Search for unique places to stay and experiences across India." },
        { icon: <Users className="h-10 w-10 text-primary" />, title: "2. Book", desc: "Easily book your chosen stay with secure payments." },
        { icon: <Star className="h-10 w-10 text-primary" />, title: "3. Enjoy", desc: "Travel and enjoy your stay, creating lasting memories." }
      ];

      return (
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-10 text-center">How StayNest Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
            {steps.map((item, index) => (
              <motion.div 
                key={item.title}
                className="text-center p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 bg-primary/10 inline-block rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      );
    };

    export default HowItWorksSection;
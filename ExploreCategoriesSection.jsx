import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Compass, Building, Trees, ShoppingBag, MountainSnow } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const ExploreCategoriesSection = () => {
      const exploreCategories = [
        { name: "Sightseeing", icon: <Building className="h-8 w-8 text-primary" />, description: "Iconic landmarks and stunning views.", spots: ["Taj Mahal, Agra", "India Gate, Delhi"] },
        { name: "Cultural", icon: <Trees className="h-8 w-8 text-primary" />, description: "Museums, temples, and historical sites.", spots: ["Hawa Mahal, Jaipur", "Meenakshi Temple, Madurai"] },
        { name: "Food & Shopping", icon: <ShoppingBag className="h-8 w-8 text-primary" />, description: "Local delicacies and unique finds.", spots: ["Chandni Chowk, Delhi", "Commercial Street, Bangalore"] },
        { name: "Adventure", icon: <MountainSnow className="h-8 w-8 text-primary" />, description: "Thrilling activities and nature escapes.", spots: ["Rishikesh Rafting", "Ladakh Bike Trip"] },
      ];

      return (
        <section id="explore-section" className="py-16 bg-muted/30 rounded-xl">
          <h2 className="text-3xl font-bold mb-2 text-center">Explore India</h2>
          <p className="text-muted-foreground text-center mb-10">Discover local attractions, experiences, and hidden gems across the country.</p>
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {exploreCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 inline-block rounded-full mb-3">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {category.spots.map(spot => <li key={spot}>{spot}</li>)}
                    </ul>
                  </CardContent>
                  <CardFooter className="justify-center">
                     <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                       <Link to={`/explore?category=${category.name.toLowerCase().replace('& ', '')}`}>Discover More</Link>
                     </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
           <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                  <Link to="/explore">See All Experiences <Compass className="ml-2 h-5 w-5" /></Link>
              </Button>
          </div>
        </section>
      );
    };
    export default ExploreCategoriesSection;
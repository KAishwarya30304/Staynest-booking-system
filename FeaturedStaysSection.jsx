import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { MapPin, Star, Search } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const FeaturedStaysSection = () => {
      const featuredProperties = [
        {
          id: 1,
          title: 'Cozy Apartment in City Center',
          location: 'Mumbai, India',
          price: '₹9000/night',
          rating: 4.8,
          imageName: 'Modern city apartment balcony view',
          altText: 'Balcony view from a modern city apartment overlooking skyscrapers'
        },
        {
          id: 2,
          title: 'Beachfront Villa in Goa',
          location: 'Goa, India',
          price: '₹26000/night',
          rating: 4.9,
          imageName: 'Luxury beachfront villa with infinity pool',
          altText: 'Luxury villa with an infinity pool facing the ocean at sunset'
        },
        {
          id: 3,
          title: 'Mountain Cabin in Manali',
          location: 'Manali, India',
          price: '₹15000/night',
          rating: 4.7,
          imageName: 'Rustic wooden cabin surrounded by pine trees in snow',
          altText: 'Snow-covered rustic wooden cabin nestled among pine trees'
        },
      ];

      return (
        <section id="featured-stays-section">
          <h2 className="text-3xl font-bold mb-2 text-center">Featured Stays Across India</h2>
          <p className="text-muted-foreground text-center mb-10">Handpicked properties for an unforgettable experience.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <img    
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                      alt={property.altText}
                     src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                    <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-primary font-semibold px-3 py-1 rounded-full text-sm flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" /> {property.rating}
                    </div>
                     <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <CardTitle className="text-xl leading-tight text-white group-hover:text-accent transition-colors">{property.title}</CardTitle>
                    </div>
                  </div>
                  <CardHeader className="pt-4">
                    <CardDescription className="flex items-center pt-1">
                      <MapPin className="h-4 w-4 mr-1 text-muted-foreground" /> {property.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-primary">{property.price}</p>
                    <Button variant="outline" asChild>
                      <Link to={`/property/${property.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
           <div className="text-center mt-12">
              <Button size="lg" asChild>
                  <Link to="/listings">Explore More Stays <Search className="ml-2 h-5 w-5" /></Link>
              </Button>
          </div>
        </section>
      );
    };

    export default FeaturedStaysSection;
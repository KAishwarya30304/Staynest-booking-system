import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { MapPin, Star, Wifi, ParkingSquare, Utensils, Tv, Users, DollarSign } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const amenityIcons = {
      Wifi: <Wifi className="h-4 w-4" />,
      AC: <Tv className="h-4 w-4" />,
      Kitchen: <Utensils className="h-4 w-4" />,
      Pool: <Users className="h-4 w-4" />,
      Parking: <ParkingSquare className="h-4 w-4" />,
      Gym: <DollarSign className="h-4 w-4" />,
      Restaurant: <Utensils className="h-4 w-4" />,
      TV: <Tv className="h-4 w-4" />,
      Kitchenette: <Utensils className="h-4 w-4" />,
      Courtyard: <Users className="h-4 w-4" />, // Placeholder
    };

    const PropertyCard = ({ property, index }) => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
            <div className="relative h-56 w-full overflow-hidden">
              <img  
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                alt={property.altText}
               src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
              <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-primary font-semibold px-3 py-1 rounded-full text-sm flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" /> {property.rating}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">{property.title}</CardTitle>
              <CardDescription className="flex items-center pt-1 text-xs">
                <MapPin className="h-3 w-3 mr-1 text-muted-foreground" /> {property.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow text-sm">
              <p className="text-muted-foreground mb-2">Type: {property.type}</p>
              <div className="flex flex-wrap gap-2">
                {property.amenities.slice(0,3).map(am => (
                    <span key={am} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full flex items-center">
                        {amenityIcons[am] || <Star className="h-3 w-3"/>} <span className="ml-1">{am}</span>
                    </span>
                ))}
                {property.amenities.length > 3 && <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">+{property.amenities.length - 3} more</span>}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <p className="text-md font-semibold text-primary">{property.price}</p>
              <Button variant="outline" size="sm" asChild>
                <Link to={`/property/${property.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default PropertyCard;
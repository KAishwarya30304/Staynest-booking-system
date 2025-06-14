import React from 'react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
    import { Label } from '@/components/ui/label';
    import { Slider } from '@/components/ui/slider';
    import { Checkbox } from '@/components/ui/checkbox';
    import { Filter, Wifi, ParkingSquare, Utensils, Tv, Users, DollarSign, Star as StarIcon } from 'lucide-react'; // Renamed Star to StarIcon
    import { motion } from 'framer-motion';

    const amenityIcons = {
      Wifi: <Wifi className="h-4 w-4" />,
      AC: <Tv className="h-4 w-4" />,
      Kitchen: <Utensils className="h-4 w-4" />,
      Pool: <Users className="h-4 w-4" />,
      Parking: <ParkingSquare className="h-4 w-4" />,
      Gym: <DollarSign className="h-4 w-4" />,
      Restaurant: <Utensils className="h-4 w-4" />,
      TV: <Tv className="h-4 w-4" />,
    };

    const ListingFilters = ({
      priceRange,
      setPriceRange,
      propertyType,
      setPropertyType,
      selectedAmenities,
      setSelectedAmenities,
      initialProperties, // To derive allAmenities and propertyTypes
    }) => {

      const handleAmenityChange = (amenity) => {
        setSelectedAmenities(prev =>
          prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
        );
      };

      const allAmenities = React.useMemo(() => Array.from(new Set(initialProperties.flatMap(p => p.amenities))), [initialProperties]);
      const propertyTypes = React.useMemo(() => ['all', ...Array.from(new Set(initialProperties.map(p => p.type)))], [initialProperties]);

      return (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1 space-y-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Filter className="mr-2 h-5 w-5 text-primary"/> Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="price-range" className="text-base font-semibold">Price Range (₹)</Label>
                <Slider
                  id="price-range"
                  min={500}
                  max={15000}
                  step={100}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-3"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>

              <div>
                <Label htmlFor="property-type" className="text-base font-semibold">Property Type</Label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger id="property-type" className="w-full mt-1">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map(type => (
                      <SelectItem key={type} value={type}>{type === 'all' ? 'All Types' : type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-semibold">Amenities</Label>
                <div className="space-y-2 mt-2">
                  {allAmenities.map(amenity => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`amenity-${amenity}`} 
                        checked={selectedAmenities.includes(amenity)}
                        onCheckedChange={() => handleAmenityChange(amenity)}
                      />
                      <Label htmlFor={`amenity-${amenity}`} className="font-normal flex items-center">
                        {amenityIcons[amenity] || <StarIcon className="h-4 w-4" />} 
                        <span className="ml-2">{amenity}</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      );
    };

    export default ListingFilters;
import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { MapPin, Users, Search } from 'lucide-react';
    import BudgetFilter from '@/components/home/BudgetFilter';
    import { useNavigate } from 'react-router-dom';
    import { useToast } from '@/components/ui/use-toast';

    const indianCities = [
      "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur",
      "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna",
      "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali",
      "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad",
      "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota"
    ];

    const HeroSection = () => {
      const [location, setLocation] = React.useState('');
      const [guests, setGuests] = React.useState('');
      const [suggestions, setSuggestions] = React.useState([]);
      const navigate = useNavigate();
      const { toast } = useToast();

      const handleLocationChange = (e) => {
        const value = e.target.value;
        setLocation(value);
        if (value.length > 0) {
          setSuggestions(
            indianCities.filter(city => city.toLowerCase().startsWith(value.toLowerCase())).slice(0, 5)
          );
        } else {
          setSuggestions([]);
        }
      };

      const handleSuggestionClick = (city) => {
        setLocation(city);
        setSuggestions([]);
      };
      
      const handleSearch = () => {
        if (!location) {
          toast({
            title: "Search Incomplete",
            description: "Please enter a location to search.",
            variant: "destructive",
          });
          return;
        }
        // Navigate to listings page with query params
        navigate(`/listings?location=${encodeURIComponent(location)}&guests=${guests || 1}`);
      };

      return (
        <motion.section
          id="hero-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center py-20 md:py-32 rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 via-primary to-pink-500"
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold mb-6 text-white shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              Find Your Next <span className="text-accent drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">Perfect Stay</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-primary-foreground mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover unique homes and experiences across India. Unforgettable trips start with StayNest.
            </motion.p>

            <motion.div 
              className="max-w-3xl mx-auto bg-background/90 p-6 rounded-lg shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 items-end">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
                  <div className="md:col-span-1 relative">
                    <Label htmlFor="location" className="block text-sm font-medium text-foreground text-left mb-1">Location (All India)</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input 
                        id="location" 
                        type="text" 
                        placeholder="e.g., Coimbatore" 
                        className="pl-10" 
                        value={location}
                        onChange={handleLocationChange}
                      />
                    </div>
                    {suggestions.length > 0 && (
                      <ul className="absolute z-10 w-full bg-background border border-border rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                        {suggestions.map(city => (
                          <li 
                            key={city} 
                            className="px-3 py-2 text-sm text-left hover:bg-accent cursor-pointer"
                            onClick={() => handleSuggestionClick(city)}
                          >
                            {city}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="guests" className="block text-sm font-medium text-foreground text-left mb-1">Guests</Label>
                     <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input 
                        id="guests" 
                        type="number" 
                        placeholder="Add guests" 
                        className="pl-10" 
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        min="1"
                      />
                    </div>
                  </div>
                   <Button size="lg" className="w-full h-auto py-3 md:py-2.5 sm:col-span-2 md:col-span-1" onClick={handleSearch}>
                    <Search className="mr-2 h-5 w-5" /> Search
                  </Button>
                </div>
                <div className="mt-4">
                  <BudgetFilter />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      );
    };

    export default HeroSection;
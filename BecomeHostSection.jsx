import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';
    import { useAuth } from '@/contexts/AuthContext';

    const BecomeHostSection = () => {
      const { userRole, setUserRole } = useAuth();

      const handleBecomeHost = () => {
        // In a real app, this might involve more steps or checks
        setUserRole('host'); 
        // Potentially navigate to host dashboard or a host onboarding flow
      };

      return (
        <section id="become-host-section" className="py-16 text-center bg-gradient-to-r from-accent/80 to-primary/80 rounded-xl">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Become a StayNest Host</h2>
            <p className="text-lg text-primary-foreground mb-8 max-w-xl mx-auto">
              Join our community of hosts and start earning by sharing your space.
              It's simple to list and manage your property.
            </p>
            {userRole === 'host' ? (
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/dashboard">Go to Host Dashboard</Link>
              </Button>
            ) : (
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={handleBecomeHost} asChild>
                 <Link to="/host">Start Hosting Today</Link>
              </Button>
            )}
          </motion.div>
        </section>
      );
    };

    export default BecomeHostSection;
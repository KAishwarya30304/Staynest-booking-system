import React from 'react';
    import { BedDouble, Facebook, Twitter, Instagram } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      const footerLinks = [
        { to: "/about", label: "About Us" },
        { to: "/careers", label: "Careers" }, // Assuming /careers page will be created
        { to: "/support", label: "Support" },
        { to: "/terms", label: "Terms of Service" },
        { to: "/privacy", label: "Privacy Policy" },
        { to: "/contact-us", label: "Contact Us" },
      ];

      return (
        <footer className="bg-muted/50 border-t border-border/40">
          <div className="container py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <BedDouble className="h-8 w-8 text-primary" />
                  <span className="font-bold text-2xl gradient-text">StayNest</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your perfect stay, just a click away. Discover unique accommodations around the world.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-3">Quick Links</p>
                <ul className="space-y-2 text-sm">
                  {footerLinks.map(link => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-3">Connect With Us</p>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
                  <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
                  <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
                </div>
              </div>
            </div>
            <div className="border-t border-border/40 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} StayNest. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Platform by Hostinger Horizons
              </p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
import React from 'react';
    import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Moon, Sun, LogIn, UserPlus, Menu as MenuIcon, BedDouble, Search, Compass, FolderHeart as HomeIcon, LogOut, LayoutDashboard } from 'lucide-react';
    import { useTheme } from '@/components/ThemeProvider';
    import { useAuth } from '@/contexts/AuthContext';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
      DropdownMenuSeparator,
    } from '@/components/ui/dropdown-menu';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import { cn } from '@/lib/utils';

    const NavItem = ({ to, children, sectionId }) => {
      const location = useLocation();
      const handleClick = (e) => {
        if (location.pathname === '/' && sectionId) {
          e.preventDefault();
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      return (
        <NavLink
          to={to}
          onClick={handleClick}
          className={({ isActive }) =>
            cn(
              "text-foreground/70 hover:text-primary transition-colors",
              isActive && location.pathname !== '/' ? "text-primary font-semibold" : ""
            )
          }
        >
          {children}
        </NavLink>
      );
    };


    const Header = () => {
      const { theme, setTheme } = useTheme();
      const { isAuthenticated, user, logout, userRole } = useAuth();
      const navigate = useNavigate();
      
      const handleLogout = () => {
        logout();
        navigate('/login');
      };

      const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };
      
      const navLinks = [
        { to: "/", label: "Home", icon: <HomeIcon className="mr-2 h-4 w-4 md:hidden" />, sectionId: "hero-section", authRequired: true },
        { to: "/listings", label: "Find a Stay", icon: <Search className="mr-2 h-4 w-4 md:hidden" />, sectionId: "featured-stays-section", authRequired: true },
        { to: "/host", label: "Become a Host", icon: <BedDouble className="mr-2 h-4 w-4 md:hidden" />, sectionId: "become-host-section", authRequired: true, hostOnly: true },
        { to: "/explore", label: "Explore", icon: <Compass className="mr-2 h-4 w-4 md:hidden" />, sectionId: "explore-section", authRequired: true },
      ];

      const filteredNavLinks = navLinks.filter(link => {
        if (!link.authRequired || isAuthenticated) {
          if (link.hostOnly && userRole !== 'host') {
            return false;
          }
          return true;
        }
        return false;
      });


      return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-20 items-center justify-between">
            <Link to={isAuthenticated ? "/" : "/login"} className="flex items-center space-x-2">
              <BedDouble className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl gradient-text">StayNest</span>
            </Link>

            {isAuthenticated && (
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {filteredNavLinks.map(link => (
                  <NavItem key={link.to} to={link.to} sectionId={link.sectionId}>
                    {link.label}
                  </NavItem>
                ))}
              </nav>
            )}

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>

              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.imageUrl || `https://avatar.vercel.sh/${user.email}.png`} alt={user.name} />
                        <AvatarFallback>{user.name ? user.name.substring(0,1).toUpperCase() : 'U'}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email} ({userRole})
                        </p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {userRole === 'host' && <DropdownMenuItem asChild><Link to="/dashboard"><LayoutDashboard className="mr-2 h-4 w-4" />Dashboard</Link></DropdownMenuItem>}
                    <DropdownMenuItem asChild><Link to="/my-bookings">My Bookings</Link></DropdownMenuItem>
                    <DropdownMenuItem>Account Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" /> Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="hidden md:flex items-center space-x-2">
                  <Button variant="outline" asChild>
                     <Link to="/login"><LogIn className="mr-2 h-4 w-4" /> Log In</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/register"><UserPlus className="mr-2 h-4 w-4" /> Sign Up</Link>
                  </Button>
                </div>
              )}
              
              {isAuthenticated && (
                <div className="md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MenuIcon className="h-6 w-6" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {filteredNavLinks.map(link => (
                         <DropdownMenuItem key={link.to} asChild>
                           <NavItem to={link.to} sectionId={link.sectionId}>
                             {link.icon} {link.label}
                           </NavItem>
                         </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>
          </div>
        </header>
      );
    };

    export default Header;
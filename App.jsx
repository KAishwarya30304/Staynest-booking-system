import React from 'react';
    import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import ListingsPage from '@/pages/ListingsPage';
    import PropertyDetailsPage from '@/pages/PropertyDetailsPage';
    import HostDashboardPage from '@/pages/HostDashboardPage';
    import LoginPage from '@/pages/LoginPage';
    import RegisterPage from '@/pages/RegisterPage';
    import ExplorePage from '@/pages/ExplorePage';
    import MyBookingsPage from '@/pages/MyBookingsPage';
    import CreateListingPage from '@/pages/CreateListingPage';
    import HostSettingsPage from '@/pages/HostSettingsPage';
    import ActivitiesPage from '@/pages/ActivitiesPage';
    import TransportPage from '@/pages/TransportPage';
    import GuidesPage from '@/pages/GuidesPage';
    import ContactPage from '@/pages/ContactPage';
    import TicketsPage from '@/pages/TicketsPage';
    import TaxiPage from '@/pages/TaxiPage';
    import MapViewPage from '@/pages/MapViewPage';
    import AboutUsPage from '@/pages/AboutUsPage';
    import SupportPage from '@/pages/SupportPage';
    import TermsPage from '@/pages/TermsPage';
    import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
    import ContactUsPage from '@/pages/ContactUsPage';
    import { Toaster } from '@/components/ui/toaster';
    import { ThemeProvider } from '@/components/ThemeProvider';
    import { AuthProvider, useAuth } from '@/contexts/AuthContext';

    const ProtectedRoute = ({ children, role }) => {
      const { isAuthenticated, userRole } = useAuth();
      if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
      }
      if (role && userRole !== role) {
        // Redirect to home if role doesn't match, or a specific "unauthorized" page
        return <Navigate to="/" replace />; 
      }
      return children;
    };

    const AppRoutes = () => {
      const { isAuthenticated } = useAuth();

      return (
        <Layout>
          <Routes>
            {!isAuthenticated ? (
              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            ) : (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/listings" element={<ListingsPage />} />
                <Route path="/property/:id" element={<PropertyDetailsPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/activities" element={<ActivitiesPage />} />
                <Route path="/transport" element={<TransportPage />} />
                <Route path="/guides" element={<GuidesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/tickets" element={<TicketsPage />} />
                <Route path="/taxi" element={<TaxiPage />} />
                <Route path="/map-view" element={<MapViewPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                
                <Route path="/dashboard" element={<ProtectedRoute role="host"><HostDashboardPage /></ProtectedRoute>} />
                <Route path="/host" element={<ProtectedRoute role="host"><HostDashboardPage /></ProtectedRoute>} />
                <Route path="/my-bookings" element={<ProtectedRoute><MyBookingsPage /></ProtectedRoute>} />
                <Route path="/host/new-listing" element={<ProtectedRoute role="host"><CreateListingPage /></ProtectedRoute>} />
                <Route path="/host/settings" element={<ProtectedRoute role="host"><HostSettingsPage /></ProtectedRoute>} />
                {/* Add more protected routes as needed */}
                <Route path="/login" element={<Navigate to="/" replace />} />
                <Route path="/register" element={<Navigate to="/" replace />} />
              </>
            )}
          </Routes>
        </Layout>
      );
    };

    function App() {
      return (
        <ThemeProvider defaultTheme="light" storageKey="staynest-theme">
          <AuthProvider>
            <Router>
              <AppRoutes />
              <Toaster />
            </Router>
          </AuthProvider>
        </ThemeProvider>
      );
    }

    export default App;
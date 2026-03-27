import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-display font-bold">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Oops! Page not found
          </p>
          <a
            href="/"
            className="inline-block bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

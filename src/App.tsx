import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import Projects from "./pages/Projects";
import Placement from "./pages/Placement";
import Services from "./pages/Services";
import Freelancers from "./pages/Freelancers";
import FreelancerServices from "./pages/FreelancerServices";
import Research from "./pages/Research";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Documentation from "./pages/Documentation";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import API from "./pages/API";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAnalytics from "./pages/AdminAnalytics";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import UserDashboard from "./pages/UserDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/services" element={<Services />} />
            <Route path="/freelancers" element={<Freelancers />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/support" element={<Support />} />
            <Route path="/api" element={<API />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/analytics"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminAnalytics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/freelancer/dashboard"
              element={
                <ProtectedRoute allowedRoles={["freelancer"]}>
                  <FreelancerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/freelancer/services"
              element={
                <ProtectedRoute allowedRoles={["freelancer"]}>
                  <FreelancerServices />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/dashboard"
              element={
                <ProtectedRoute allowedRoles={["user", "customer"]}>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

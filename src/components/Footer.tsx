import { Zap, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useVisitorCounter } from "@/hooks/useVisitorCounter";

const Footer = () => {
  const visitorCount = useVisitorCounter();
  return (
    <footer className="border-t border-border bg-card/50 py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-xl">workNexus</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-4">
              Empowering Your Tech Journey Into Reality
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <h4 className="font-display font-semibold text-sm mb-3">
                Contact Info 📞
              </h4>
              <a
                href="mailto:contact@worknexus.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@worknexus.com</span>
              </a>
              <a
                href="tel:+918962306037"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 896-230-6037</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>India</span>
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=918962306037&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition-colors font-semibold"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Group</span>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-base">
              Services 🛠️
            </h4>
            <ul className="space-y-2">
              {[
                "Academic Projects",
                "Hackathon Prototypes",
                "AI/ML Projects",
                "Professional Portfolios",
                "Resume Building",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/projects"
                  className="text-sm text-primary hover:text-primary/80 transition-colors font-semibold flex items-center gap-1"
                >
                  → View Our Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-base">
              Quick Links ⚡
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact" },
                { label: "Our Works", path: "/projects" },
                { label: "Order Form", path: "/services" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-base">
              Legal 📋
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Terms of Service", path: "/terms" },
                { label: "Refund Policy", path: "/terms" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/sitemap"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Robots.txt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-sm text-muted-foreground">
              © 2025 workNexus. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Visitor Counter & WhatsApp Group */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold">Total Visitors:</span>{" "}
              <span className="text-primary">
                {visitorCount.toLocaleString()}
              </span>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=918962306037&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-600 hover:text-green-700 transition-colors font-semibold flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Join Group for more info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

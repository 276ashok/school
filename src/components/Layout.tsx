import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Faculty", path: "/faculty" },
  { name: "Admissions", path: "/admissions" },
  { name: "News & Events", path: "/news" },
  { name: "Gallery", path: "/gallery" },
  { name: "Parent Portal", path: "/parent-portal" },
  { name: "Contact", path: "/contact" },
];

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      {/* Top Bar */}
      <div className="bg-indigo-900 text-white text-xs md:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +1 (555) 123-4567</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@kinguniverse.edu</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/parent-portal" className="hover:text-indigo-200 transition-colors">Parent Portal Login</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg text-white">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">King Universe</h1>
                <p className="text-xs md:text-sm text-indigo-600 font-semibold tracking-wide uppercase">Matric Higher Secondary School</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-indigo-600 hover:bg-slate-50",
                    location.pathname === link.path ? "text-indigo-600 bg-indigo-50" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-top border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg h-[calc(100vh-80px)] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location.pathname === link.path 
                      ? "text-indigo-600 bg-indigo-50" 
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-500 p-1.5 rounded text-white flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">King Universe</h3>
                  <p className="text-xs text-indigo-400 font-semibold uppercase">Matric Higher Secondary</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Empowering minds and shaping futures through quality education, moral values, and academic excellence.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                <li><Link to="/courses" className="hover:text-white transition-colors">Academic Programs</Link></li>
                <li><Link to="/faculty" className="hover:text-white transition-colors">Our Faculty</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Student Life</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/news" className="hover:text-white transition-colors">News & Events</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link></li>
                <li><Link to="/parent-portal" className="hover:text-white transition-colors">Parent Portal</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Committees</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports & Athletics</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>123 Academic Avenue,<br />Education District, City 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>info@kinguniverse.edu</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} King Universe Matric Higher Secondary School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

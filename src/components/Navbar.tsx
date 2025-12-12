import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CrestedCrane from "./CrestedCrane";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/verify", label: "Verify Title" },
    { href: "/track", label: "Track Application" },
    { href: "/apply", label: "Apply" },
  ];

  const handleLogout = async () => {
    await signOut();
    navigate("/");
    setMobileMenuOpen(false);
  };

  const displayName = profile?.full_name || user?.email?.split("@")[0] || "User";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-2 sm:px-4 h-14 sm:h-16 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <CrestedCrane className="w-8 h-6 sm:w-10 sm:h-8 -mr-1" />
          <span className="font-heading font-bold text-lg sm:text-xl text-foreground">e<span className="text-accent">K</span>onde</span>
        </Link>
        
        {/* Auth buttons - right after logo */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>Welcome, <span className="font-semibold text-foreground">{displayName}</span></span>
              </div>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">Dashboard</Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login?signup=true">
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">Get Started</Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm transition-colors ${
                location.pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {/* Auth section on mobile */}
            {user ? (
              <div className="pb-3 border-b border-border space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>Welcome, <span className="font-semibold text-foreground">{displayName}</span></span>
                </div>
                <div className="flex gap-2">
                  <Link to="/dashboard" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm">Dashboard</Button>
                  </Link>
                  <Button variant="outline" className="flex-1 text-sm" onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-1" />
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 pb-3 border-b border-border">
                <Link to="/login?signup=true" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm">Get Started</Button>
                </Link>
                <Link to="/login" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-sm">Login</Button>
                </Link>
              </div>
            )}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-2 text-sm text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

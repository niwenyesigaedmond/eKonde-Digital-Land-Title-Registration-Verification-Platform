import { Link } from "react-router-dom";
import { Search, Shield, FileText, MapPin, Phone, Clock, CheckCircle, ArrowRight, QrCode, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-uganda-land.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-14 sm:pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Ugandan landscape with rolling green hills" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        
        {/* Uganda Pattern Overlay */}
        <div className="absolute inset-0 uganda-pattern opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 animate-fade-in">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-uganda-yellow" />
              <span className="text-primary-foreground/90 text-xs sm:text-sm font-medium">Official Uganda Lands Registry Platform</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-white">Secure Your </span>
              <span className="text-accent">Land</span>
              <span className="text-white">.</span>
              <span className="block text-white">Protect Your Future.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 sm:mb-8 max-w-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Apply for land titles, track applications, and verify ownership — all from your phone. 
              <span className="font-semibold text-primary-foreground"> Kubye ekonde ku ttaka lyo.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/apply" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  Apply for Title
                </Button>
              </Link>
              <Link to="/verify" className="w-full sm:w-auto">
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  Search Land Records
                </Button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-uganda-yellow">2.5M+</div>
                <div className="text-primary-foreground/70 text-xs sm:text-sm">Titles Issued</div>
              </div>
              <div className="text-center border-x border-primary-foreground/20">
                <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-uganda-yellow">14</div>
                <div className="text-primary-foreground/70 text-xs sm:text-sm">Days Average</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-uganda-yellow">100%</div>
                <div className="text-primary-foreground/70 text-xs sm:text-sm">Digital & Secure</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Search Card */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-96 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="glass-card rounded-2xl p-6 shadow-lg">
            <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
              <QrCode className="w-5 h-5 text-primary" />
              Quick Title Verification
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Plot Number</label>
                <input 
                  type="text" 
                  placeholder="e.g., Block 123 Plot 456"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                />
              </div>
              <Button className="w-full" size="lg">
                <Search className="w-4 h-4" />
                Verify Now
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Or scan QR code on any land certificate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              Everything You Need for Land Security
            </h2>
            <p className="text-muted-foreground">
              From first-time applications to complex transfers, we've simplified every land service for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "New Title Application",
                description: "Apply for a fresh land title with our guided step-by-step process. Upload documents directly from your phone.",
                color: "bg-primary",
              },
              {
                icon: Users,
                title: "Land Transfer",
                description: "Transfer ownership securely. We handle all the verification and registration for buyer and seller.",
                color: "bg-secondary",
              },
              {
                icon: MapPin,
                title: "Subdivision",
                description: "Split your land into multiple plots with proper surveying and individual titles for each.",
                color: "bg-accent",
              },
              {
                icon: Shield,
                title: "Title Verification",
                description: "Instantly verify any land title's authenticity using QR codes or plot numbers.",
                color: "bg-secondary",
              },
              {
                icon: Clock,
                title: "Track Application",
                description: "Real-time status updates on your application. Know exactly where you are in the process.",
                color: "bg-accent",
              },
              {
                icon: Phone,
                title: "Mobile Payments",
                description: "Pay fees instantly via MTN Mobile Money, Airtel Money, or bank card. Get digital receipts.",
                color: "bg-primary",
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-accent/40 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${service.color === 'bg-secondary' ? 'text-secondary-foreground' : 'text-accent-foreground'}`} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <a href="#" className="inline-flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              Four Simple Steps to Your Title
            </h2>
            <p className="text-muted-foreground">
              No more queues at the land office. Complete your entire application from anywhere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Register", desc: "Create account with your NIN and phone number" },
              { step: "02", title: "Apply", desc: "Fill the application form and upload documents" },
              { step: "03", title: "Pay", desc: "Pay fees via Mobile Money or bank card" },
              { step: "04", title: "Receive", desc: "Get your digital title with QR verification" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <span className="font-heading font-bold text-2xl text-accent group-hover:text-accent-foreground transition-colors">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-[60%] w-full h-0.5 bg-border" />
                  )}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/apply">
              <Button variant="accent" size="xl">
                Start Your Application
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, label: "Government Verified", desc: "Official Uganda Lands Registry" },
              { icon: Clock, label: "24/7 Access", desc: "Apply anytime, anywhere" },
              { icon: Phone, label: "Mobile First", desc: "Designed for your smartphone" },
              { icon: CheckCircle, label: "Secure & Encrypted", desc: "Bank-level data protection" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-uganda-yellow" />
                </div>
                <h3 className="font-heading font-bold text-primary-foreground mb-1">{item.label}</h3>
                <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Land?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join over 2.5 million Ugandans who have already secured their land titles through eKonde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button variant="gold" size="xl">
                  <FileText className="w-5 h-5" />
                  Apply Now — It's Free to Start
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                <Phone className="w-5 h-5" />
                Call Helpline: 0800 100 100
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

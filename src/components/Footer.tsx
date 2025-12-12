import { Link } from "react-router-dom";
import CrestedCrane from "./CrestedCrane";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center -gap-1 mb-4">
              <CrestedCrane className="w-10 h-8 -mr-1" />
              <span className="font-heading font-bold text-xl">e<span className="text-secondary">K</span>onde</span>
            </Link>
            <p className="text-background/70 text-sm">
              Uganda's official digital platform for land title registration and verification.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><Link to="/apply" className="hover:text-uganda-yellow transition-colors">New Title Application</Link></li>
              <li><Link to="/apply" className="hover:text-uganda-yellow transition-colors">Land Transfer</Link></li>
              <li><Link to="/apply" className="hover:text-uganda-yellow transition-colors">Subdivision</Link></li>
              <li><Link to="/verify" className="hover:text-uganda-yellow transition-colors">Title Verification</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#" className="hover:text-uganda-yellow transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-uganda-yellow transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-uganda-yellow transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-uganda-yellow transition-colors">Find MZO Office</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>Toll-Free: 0800 100 100</li>
              <li>Email: help@ekonde.go.ug</li>
              <li>Ministry of Lands, Housing & Urban Development</li>
              <li>Plot 13-15 Parliament Avenue, Kampala</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 eKonde - Republic of Uganda. All rights reserved.
          </p>
          <div className="flex gap-6 text-background/50 text-sm">
            <a href="#" className="hover:text-uganda-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-uganda-yellow transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-uganda-yellow transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

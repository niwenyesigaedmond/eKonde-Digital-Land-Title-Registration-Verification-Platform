import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgVerify from "@/assets/bg-verify.jpg";
import { 
  Search, 
  QrCode, 
  Shield, 
  CheckCircle, 
  XCircle,
  MapPin,
  User,
  Calendar,
  FileText,
  AlertTriangle
} from "lucide-react";

const Verify = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"plot" | "qr">("plot");
  const [searched, setSearched] = useState(false);
  const [isValid, setIsValid] = useState(true);

  // Mock verified title data
  const verifiedTitle = {
    plotNumber: "Block 123, Plot 456",
    district: "Mukono",
    county: "Mukono Municipality",
    parish: "Seeta",
    area: "0.5 Acres",
    tenure: "Freehold",
    registeredOwner: "Sarah Nakalema",
    titleNumber: "MKN-2024-001234",
    issueDate: "November 15, 2024",
    status: "Valid & Active",
    encumbrances: "None",
  };

  const handleSearch = () => {
    setSearched(true);
    // Simulate validation - in real app, this would call an API
    setIsValid(searchQuery.length > 5);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="absolute inset-0">
          <img src={bgVerify} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-uganda-yellow" />
              <span className="text-primary-foreground/90 text-xs sm:text-sm font-medium">Official Verification Tool</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary-foreground">Verify Land Title</h1>
            <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg">
              Instantly verify the authenticity of any Ugandan land title using the plot number or QR code
            </p>
          </div>

          {/* Search Options */}
          <div className="max-w-xl mx-auto">
            <div className="flex gap-2 p-1 bg-primary-foreground/10 backdrop-blur-sm rounded-lg sm:rounded-xl mb-4 sm:mb-6">
              <button
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-md sm:rounded-lg font-medium text-sm sm:text-base transition-all ${
                  searchType === "plot" 
                    ? "bg-card shadow-sm text-foreground" 
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
                onClick={() => setSearchType("plot")}
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Plot Number
              </button>
              <button
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-md sm:rounded-lg font-medium text-sm sm:text-base transition-all ${
                  searchType === "qr" 
                    ? "bg-card shadow-sm text-foreground" 
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
                onClick={() => setSearchType("qr")}
              >
                <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Scan QR
              </button>
            </div>

            {searchType === "plot" ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter Block & Plot Number"
                    className="pl-10 sm:pl-12 h-12 sm:h-14 text-sm sm:text-lg bg-card"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8" onClick={handleSearch}>
                  Verify
                </Button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-primary-foreground/30 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center bg-primary-foreground/5 backdrop-blur-sm">
                <QrCode className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-primary-foreground/70" />
                <h3 className="font-heading font-semibold text-base sm:text-lg mb-2 text-primary-foreground">Scan QR Code</h3>
                <p className="text-primary-foreground/70 text-sm sm:text-base mb-4">
                  Position the QR code from the land certificate in front of your camera
                </p>
                <Button variant="secondary">
                  <QrCode className="w-4 h-4 mr-2" />
                  Open Camera
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Search Results */}
          {searched && (
            <div className="max-w-3xl mx-auto -mt-4">
              {isValid ? (
                <div className="bg-card rounded-xl sm:rounded-2xl border border-primary/20 overflow-hidden shadow-lg">
                  {/* Valid Header */}
                  <div className="bg-primary/10 p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-primary">Title Verified</h2>
                      <p className="text-muted-foreground text-sm sm:text-base">This land title is authentic and currently active</p>
                    </div>
                  </div>

                  {/* Title Details */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="font-heading font-bold text-base sm:text-lg mb-4 sm:mb-6">Title Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground">Title Number</p>
                          <p className="font-semibold font-mono text-sm sm:text-base">{verifiedTitle.titleNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground">Plot Location</p>
                          <p className="font-semibold text-sm sm:text-base">{verifiedTitle.plotNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground">Registered Owner</p>
                          <p className="font-semibold text-sm sm:text-base">{verifiedTitle.registeredOwner}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground">Issue Date</p>
                          <p className="font-semibold text-sm sm:text-base">{verifiedTitle.issueDate}</p>
                        </div>
                      </div>
                    </div>

                    <hr className="my-4 sm:my-6 border-border" />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1">District</p>
                        <p className="font-semibold text-sm sm:text-base">{verifiedTitle.district}</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1">Land Size</p>
                        <p className="font-semibold text-sm sm:text-base">{verifiedTitle.area}</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1">Tenure Type</p>
                        <p className="font-semibold text-sm sm:text-base">{verifiedTitle.tenure}</p>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl border border-primary/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        <span className="font-semibold text-sm sm:text-base">Encumbrances & Caveats</span>
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base">{verifiedTitle.encumbrances}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-card rounded-xl sm:rounded-2xl border border-destructive/20 overflow-hidden shadow-lg">
                  {/* Invalid Header */}
                  <div className="bg-destructive/10 p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-destructive flex items-center justify-center shrink-0">
                      <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-destructive-foreground" />
                    </div>
                    <div>
                      <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-destructive">Title Not Found</h2>
                      <p className="text-muted-foreground text-sm sm:text-base">No matching land title was found in our records</p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-uganda-yellow/10 rounded-lg sm:rounded-xl border border-uganda-yellow/20">
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-uganda-yellow mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold mb-1 text-sm sm:text-base">What does this mean?</p>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• The plot number may be incorrect</li>
                          <li>• The title may not be registered in the digital system yet</li>
                          <li>• The title may be fraudulent or invalid</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-6 text-center">
                      <p className="text-muted-foreground text-sm sm:text-base mb-4">Need help? Contact the Ministry of Lands</p>
                      <Button variant="outline" size="sm" className="text-sm">
                        Call Helpline: 0800 100 100
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Info Cards */}
          {!searched && (
            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm sm:text-base mb-2">Instant Verification</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Get real-time verification results directly from the official registry
                </p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-uganda-yellow/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <QrCode className="w-5 h-5 sm:w-6 sm:h-6 text-uganda-yellow" />
                </div>
                <h3 className="font-heading font-semibold text-sm sm:text-base mb-2">QR Code Scanning</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Scan the QR code on any eKonde-issued land certificate
                </p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm sm:text-base mb-2">Prevent Fraud</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Protect yourself from land fraud by verifying before purchase
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Verify;
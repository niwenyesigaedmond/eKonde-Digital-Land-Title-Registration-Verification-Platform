import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LandMap from "@/components/LandMap";
import { useAuth } from "@/hooks/useAuth";
import bgApply from "@/assets/bg-apply.jpg";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Upload, 
  MapPin, 
  User, 
  FileText, 
  CreditCard,
  Loader2,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";

const steps = [
  { id: 1, title: "Application Type", icon: FileText },
  { id: 2, title: "Personal Details", icon: User },
  { id: 3, title: "Land Location", icon: MapPin },
  { id: 4, title: "Documents", icon: Upload },
  { id: 5, title: "Review & Submit", icon: Check },
];

const applicationTypes = [
  { id: "new-title", title: "New Title Application", desc: "Apply for a fresh land title on unregistered land", fee: "450,000" },
  { id: "transfer", title: "Land Transfer", desc: "Transfer ownership from seller to buyer", fee: "350,000" },
  { id: "mutation", title: "Mutation", desc: "Update existing title details (name change, etc.)", fee: "150,000" },
  { id: "subdivision", title: "Subdivision", desc: "Split one plot into multiple titled plots", fee: "600,000" },
];

const Apply = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    applicationType: "",
    fullName: "",
    nin: "",
    phone: "",
    email: "",
    district: "",
    county: "",
    subcounty: "",
    parish: "",
    village: "",
    blockNumber: "",
    plotNumber: "",
    landSize: "",
    landDescription: "",
    documents: [] as string[],
    latitude: null as number | null,
    longitude: null as number | null,
  });

  // Pre-fill form with user profile data
  useEffect(() => {
    if (profile || user) {
      setFormData(prev => ({
        ...prev,
        fullName: profile?.full_name || prev.fullName,
        nin: profile?.nin || prev.nin,
        phone: profile?.phone || prev.phone,
        email: user?.email || prev.email,
      }));
    }
  }, [profile, user]);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    toast.success("Application submitted successfully! 🎉", {
      description: "Your application ID is APP-2024-001235",
    });
    navigate("/dashboard");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <div>
                <h2 className="font-heading text-lg sm:text-2xl font-bold mb-0.5 sm:mb-1">Select Application Type</h2>
                <p className="text-sm sm:text-base text-muted-foreground">Choose the type of land service you need</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {applicationTypes.map((type, index) => (
                <button
                  key={type.id}
                  type="button"
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border text-left transition-all duration-300 animate-scale-in hover-lift ${
                    formData.applicationType === type.id
                      ? "border-accent bg-accent/5 ring-2 ring-accent shadow-red"
                      : "border-border hover:border-accent/50 hover:bg-secondary/30"
                  }`}
                  onClick={() => setFormData({ ...formData, applicationType: type.id })}
                >
                  <div className="flex items-start justify-between mb-1 sm:mb-2">
                    <h3 className="font-heading font-semibold text-sm sm:text-base">{type.title}</h3>
                    {formData.applicationType === type.id && (
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent flex items-center justify-center shrink-0 ml-2">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{type.desc}</p>
                  <p className="text-secondary font-heading font-bold text-base sm:text-lg">UGX {type.fee}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="font-heading text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Personal Details</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Enter your personal information as it appears on your NIN</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nin">National ID Number</Label>
                <Input
                  id="nin"
                  placeholder="CM XXXXXX XXXXX"
                  value={formData.nin}
                  onChange={(e) => setFormData({ ...formData, nin: e.target.value.toUpperCase() })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0700 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <div>
                <h2 className="font-heading text-lg sm:text-2xl font-bold mb-0.5 sm:mb-1">Land Location</h2>
                <p className="text-sm sm:text-base text-muted-foreground">Pin your land on the map and provide details</p>
              </div>
            </div>

            {/* Interactive Map */}
            <LandMap
              onLocationSelect={(lat, lng) => {
                setFormData({ ...formData, latitude: lat, longitude: lng });
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Input
                  id="district"
                  placeholder="e.g., Mukono"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="focus:border-accent focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="county">County</Label>
                <Input
                  id="county"
                  placeholder="e.g., Mukono Municipality"
                  value={formData.county}
                  onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                  className="focus:border-accent focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subcounty">Sub-county</Label>
                <Input
                  id="subcounty"
                  placeholder="e.g., Goma Division"
                  value={formData.subcounty}
                  onChange={(e) => setFormData({ ...formData, subcounty: e.target.value })}
                  className="focus:border-accent focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parish">Parish</Label>
                <Input
                  id="parish"
                  placeholder="e.g., Seeta"
                  value={formData.parish}
                  onChange={(e) => setFormData({ ...formData, parish: e.target.value })}
                  className="focus:border-accent focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="village">Village</Label>
                <Input
                  id="village"
                  placeholder="e.g., Kasangati"
                  value={formData.village}
                  onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                  className="focus:border-accent focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="blockNumber">Block Number</Label>
                <Input
                  id="blockNumber"
                  placeholder="e.g., 123"
                  value={formData.blockNumber}
                  onChange={(e) => setFormData({ ...formData, blockNumber: e.target.value })}
                  className="focus:border-accent focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plotNumber">Plot Number</Label>
                <Input
                  id="plotNumber"
                  placeholder="e.g., 456"
                  value={formData.plotNumber}
                  onChange={(e) => setFormData({ ...formData, plotNumber: e.target.value })}
                  className="focus:border-accent focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="landSize">Approximate Size (Acres)</Label>
                <Input
                  id="landSize"
                  placeholder="e.g., 0.5"
                  value={formData.landSize}
                  onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                  className="focus:border-accent focus:ring-accent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="landDescription">Land Description</Label>
              <Textarea
                id="landDescription"
                placeholder="Describe any landmarks, boundaries, or distinguishing features..."
                className="min-h-[100px] focus:border-accent focus:ring-accent"
                value={formData.landDescription}
                onChange={(e) => setFormData({ ...formData, landDescription: e.target.value })}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="font-heading text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Upload Documents</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Upload required documents. Take clear photos with your phone camera.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { id: "nin-copy", label: "National ID Copy (Front & Back)" },
                { id: "sale-agreement", label: "Sale Agreement" },
                { id: "land-photos", label: "Land Photographs" },
                { id: "survey-report", label: "Survey Report (if available)" },
              ].map((doc) => (
                <div
                  key={doc.id}
                  className="border-2 border-dashed border-border rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <Upload className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-muted-foreground" />
                  <p className="font-medium text-sm sm:text-base mb-1">{doc.label}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Click to upload or drag & drop</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Accepted formats: PDF, JPG, PNG. Max size: 10MB per file.
            </p>
          </div>
        );

      case 5:
        const selectedType = applicationTypes.find(t => t.id === formData.applicationType);
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="font-heading text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Review & Submit</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Please review your application before submitting</p>
            </div>
            
            <div className="bg-secondary/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-xs sm:text-sm text-muted-foreground">Application Type</span>
                <span className="font-semibold text-sm sm:text-base">{selectedType?.title}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-xs sm:text-sm text-muted-foreground">Applicant</span>
                <span className="font-semibold text-sm sm:text-base">{formData.fullName || "Not provided"}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-xs sm:text-sm text-muted-foreground">NIN</span>
                <span className="font-semibold text-sm sm:text-base">{formData.nin || "Not provided"}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-xs sm:text-sm text-muted-foreground">Location</span>
                <span className="font-semibold text-sm sm:text-base text-right sm:text-left">
                  Block {formData.blockNumber || "-"}, Plot {formData.plotNumber || "-"}, {formData.district || "Not provided"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-xs sm:text-sm text-muted-foreground">Land Size</span>
                <span className="font-semibold text-sm sm:text-base">{formData.landSize ? `${formData.landSize} Acres` : "Not provided"}</span>
              </div>
              <hr className="border-border" />
              <div className="flex justify-between items-center text-base sm:text-lg">
                <span className="font-semibold">Application Fee</span>
                <span className="font-heading font-bold text-primary">UGX {selectedType?.fee || "0"}</span>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <p className="text-sm text-muted-foreground">
                By submitting this application, you confirm that all information provided is accurate and truthful. 
                False information may result in rejection of your application.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="relative pt-20 sm:pt-24 pb-6 sm:pb-8">
        <div className="absolute inset-0">
          <img src={bgApply} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-primary-foreground">Apply for Land Title</h1>
            <p className="text-primary-foreground/80 text-sm sm:text-base">Complete the form below to submit your application</p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-4">
            {/* Mobile: Current step indicator */}
            <div className="flex md:hidden items-center justify-center gap-2 mb-4">
              <span className="text-sm text-primary-foreground/80">Step {currentStep} of {steps.length}:</span>
              <span className="text-sm font-semibold text-primary-foreground">{steps[currentStep - 1].title}</span>
            </div>
            
            {/* Desktop: Full stepper */}
            <div className="hidden md:flex items-center justify-between bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        currentStep > step.id
                          ? "bg-uganda-yellow text-primary"
                          : currentStep === step.id
                          ? "bg-primary-foreground text-primary ring-4 ring-primary-foreground/20"
                          : "bg-primary-foreground/20 text-primary-foreground/70"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`mt-2 text-xs font-medium ${
                      currentStep >= step.id ? "text-primary-foreground" : "text-primary-foreground/60"
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-24 h-0.5 mx-2 ${
                      currentStep > step.id ? "bg-uganda-yellow" : "bg-primary-foreground/30"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile: Progress bar */}
            <div className="flex md:hidden gap-1">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    currentStep >= step.id ? "bg-uganda-yellow" : "bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <main className="pb-16 -mt-4">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Step Content */}
          <div className="bg-card rounded-xl md:rounded-2xl border border-border p-4 sm:p-6 md:p-8 mb-6 md:mb-8 thrilling-card shadow-lg">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            {currentStep < 5 ? (
              <Button onClick={handleNext} className="w-full sm:w-auto">
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} variant="gold" disabled={loading} className="w-full sm:w-auto">
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    <span className="hidden sm:inline">Submit & Pay UGX {applicationTypes.find(t => t.id === formData.applicationType)?.fee || "0"}</span>
                    <span className="sm:hidden">Submit & Pay</span>
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apply;

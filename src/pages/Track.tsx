import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgTrack from "@/assets/bg-track.jpg";
import { 
  Search, 
  CheckCircle, 
  Clock, 
  FileText, 
  MapPin, 
  User, 
  CreditCard,
  AlertCircle,
  Download,
  Phone
} from "lucide-react";

const Track = () => {
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get("id") || "";
  const [applicationId, setApplicationId] = useState(initialId);
  const [searched, setSearched] = useState(!!initialId);

  // Mock application data
  const application = {
    id: "APP-2024-001234",
    type: "New Title Application",
    status: "in-progress",
    submittedDate: "December 2, 2024",
    applicant: "Sarah Nakalema",
    nin: "CM12345678ABCD",
    phone: "0772 123 456",
    location: "Block 123, Plot 456, Mukono",
    district: "Mukono",
    fee: "450,000",
    paymentStatus: "Paid",
    timeline: [
      { 
        step: "Application Submitted", 
        date: "Dec 2, 2024 - 10:32 AM", 
        status: "completed",
        description: "Your application has been received and is being processed."
      },
      { 
        step: "Payment Confirmed", 
        date: "Dec 2, 2024 - 10:45 AM", 
        status: "completed",
        description: "Payment of UGX 450,000 received via MTN Mobile Money."
      },
      { 
        step: "Document Verification", 
        date: "Dec 3, 2024 - 2:15 PM", 
        status: "completed",
        description: "All uploaded documents have been verified and accepted."
      },
      { 
        step: "Field Survey", 
        date: "Dec 5, 2024 - 9:00 AM", 
        status: "current",
        description: "A surveyor has been assigned. Expected visit: Dec 8-10, 2024."
      },
      { 
        step: "Technical Review", 
        date: "Pending", 
        status: "pending",
        description: "Technical team will review survey results."
      },
      { 
        step: "Final Approval", 
        date: "Pending", 
        status: "pending",
        description: "Senior Lands Officer approval."
      },
      { 
        step: "Title Issued", 
        date: "Pending", 
        status: "pending",
        description: "Your digital land title will be available for download."
      },
    ],
  };

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />;
      case "current": return <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-uganda-yellow animate-pulse" />;
      default: return <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-border" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="absolute inset-0">
          <img src={bgTrack} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary-foreground">Track Your Application</h1>
            <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg">
              Enter your application ID to see real-time status updates
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <Input
                  placeholder="Enter Application ID (e.g., APP-2024-001234)"
                  className="pl-10 sm:pl-12 h-12 sm:h-14 text-sm sm:text-lg bg-card"
                  value={applicationId}
                  onChange={(e) => setApplicationId(e.target.value.toUpperCase())}
                />
              </div>
              <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8" onClick={() => setSearched(true)}>
                Track
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {searched && (
            <div className="max-w-4xl mx-auto -mt-4">
              {/* Application Overview Card */}
              <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-lg">
                <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <span className="font-mono text-xs sm:text-sm text-muted-foreground">{application.id}</span>
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-uganda-yellow/10 text-uganda-yellow">
                        In Progress
                      </span>
                    </div>
                    <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold mb-1">{application.type}</h2>
                    <p className="text-muted-foreground text-sm sm:text-base">Submitted on {application.submittedDate}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Support
                    </Button>
                    <Button variant="outline" size="sm" disabled className="text-xs sm:text-sm">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/50 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Applicant</p>
                      <p className="font-medium text-sm sm:text-base truncate">{application.applicant}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-medium text-sm sm:text-base truncate">{application.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Payment</p>
                      <p className="font-medium text-sm sm:text-base text-primary">{application.paymentStatus}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Fee</p>
                      <p className="font-medium text-sm sm:text-base">UGX {application.fee}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-4 sm:p-6 md:p-8">
                <h3 className="font-heading text-lg sm:text-xl font-bold mb-6 sm:mb-8">Application Timeline</h3>
                <div className="space-y-0">
                  {application.timeline.map((step, index) => (
                    <div key={index} className="flex gap-3 sm:gap-4">
                      {/* Timeline line and icon */}
                      <div className="flex flex-col items-center">
                        {getStepIcon(step.status)}
                        {index < application.timeline.length - 1 && (
                          <div className={`w-0.5 h-full min-h-[60px] sm:min-h-[80px] ${
                            step.status === "completed" ? "bg-primary" : "bg-border"
                          }`} />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="pb-6 sm:pb-8 flex-1 min-w-0">
                        <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl ${
                          step.status === "current" 
                            ? "bg-uganda-yellow/10 border border-uganda-yellow/20" 
                            : step.status === "completed"
                            ? "bg-primary/5"
                            : "bg-secondary/50"
                        }`}>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1">
                            <h4 className={`font-heading font-semibold text-sm sm:text-base ${
                              step.status === "current" ? "text-uganda-yellow" : ""
                            }`}>
                              {step.step}
                            </h4>
                            <span className="text-xs sm:text-sm text-muted-foreground">{step.date}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                          {step.status === "current" && (
                            <div className="mt-2 sm:mt-3 flex items-center gap-2 text-xs sm:text-sm text-uganda-yellow font-medium">
                              <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                              Currently in progress
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Track;
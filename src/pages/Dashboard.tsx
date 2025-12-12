import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import bgApply from "@/assets/bg-apply.jpg";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Bell, 
  Search,
  Plus,
  MapPin,
  CreditCard
} from "lucide-react";

const Dashboard = () => {
  const { user, profile } = useAuth();
  const displayName = profile?.full_name || user?.email?.split("@")[0] || "User";
  const applications = [
    {
      id: "APP-2024-001234",
      type: "New Title Application",
      location: "Block 123, Plot 456, Mukono",
      status: "in-progress",
      statusLabel: "Under Review",
      date: "Dec 2, 2024",
      progress: 60,
    },
    {
      id: "APP-2024-001198",
      type: "Land Transfer",
      location: "Block 89, Plot 12, Wakiso",
      status: "pending",
      statusLabel: "Awaiting Payment",
      date: "Nov 28, 2024",
      progress: 40,
    },
    {
      id: "APP-2024-001156",
      type: "New Title Application",
      location: "Block 45, Plot 78, Jinja",
      status: "completed",
      statusLabel: "Completed",
      date: "Nov 15, 2024",
      progress: 100,
    },
  ];

  const quickActions = [
    { icon: FileText, label: "New Title", href: "/apply", color: "bg-primary" },
    { icon: Search, label: "Verify Title", href: "/verify", color: "bg-secondary" },
    { icon: Clock, label: "Track Status", href: "/track", color: "bg-accent" },
    { icon: CreditCard, label: "Pay Fees", href: "#", color: "bg-primary" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />;
      case "pending": return <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground" />;
      default: return <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-primary/10 text-primary";
      case "pending": return "bg-secondary text-secondary-foreground";
      default: return "bg-accent/10 text-accent";
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="relative pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="absolute inset-0">
          <img src={bgApply} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-secondary/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold mb-1 text-primary-foreground">Welcome, {displayName}</h1>
              <p className="text-primary-foreground/80 text-sm sm:text-base">Here's what's happening with your land applications</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Button variant="secondary" size="icon" className="relative w-9 h-9 sm:w-10 sm:h-10">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">2</span>
              </Button>
              <Link to="/apply">
                <Button size="sm" className="h-9 sm:h-10 text-sm">
                  <Plus className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">New Application</span>
                  <span className="sm:hidden">New</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {quickActions.map((action, index) => (
              <Link 
                key={index}
                to={action.href}
                className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${action.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${action.color === 'bg-secondary' ? 'text-secondary-foreground' : action.color === 'bg-accent' ? 'text-accent-foreground' : 'text-primary-foreground'}`} />
                </div>
                <h3 className="font-heading font-semibold text-sm sm:text-base">{action.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 -mt-2">
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs sm:text-sm">Total Applications</p>
                  <p className="font-heading text-xl sm:text-2xl font-bold">3</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs sm:text-sm">In Progress</p>
                  <p className="font-heading text-xl sm:text-2xl font-bold">2</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs sm:text-sm">Completed</p>
                  <p className="font-heading text-xl sm:text-2xl font-bold">1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Applications List */}
          <div className="bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-heading text-lg sm:text-xl font-bold">Your Applications</h2>
              <Link to="/track" className="text-accent font-semibold text-xs sm:text-sm hover:underline">
                View all
              </Link>
            </div>
            <div className="divide-y divide-border">
              {applications.map((app) => (
                <Link 
                  key={app.id}
                  to={`/track?id=${app.id}`}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      {getStatusIcon(app.status)}
                      <span className="font-mono text-xs sm:text-sm text-muted-foreground">{app.id}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                        {app.statusLabel}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-sm sm:text-base mb-1">{app.type}</h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="truncate">{app.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
                    <div className="sm:text-right">
                      <p className="text-xs sm:text-sm text-muted-foreground">Submitted</p>
                      <p className="font-medium text-sm sm:text-base">{app.date}</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-3">
                      <div className="w-24 sm:w-32 h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${app.progress}%` }}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{app.progress}%</span>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
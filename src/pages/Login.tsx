import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CrestedCrane from "@/components/CrestedCrane";
import bgLogin from "@/assets/bg-login.jpg";
import { Eye, EyeOff, Phone, CreditCard, ArrowRight, Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, loading: authLoading, signUp, signIn } = useAuth();
  const [isSignup, setIsSignup] = useState(searchParams.get("signup") === "true");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    email: "",
    nin: "",
    phone: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  // Redirect if already logged in
  useEffect(() => {
    if (user && !authLoading) {
      navigate("/dashboard");
    }
  }, [user, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    const emailResult = emailSchema.safeParse(formData.email);
    if (!emailResult.success) {
      toast.error(emailResult.error.errors[0].message);
      return;
    }

    // Validate password
    const passwordResult = passwordSchema.safeParse(formData.password);
    if (!passwordResult.success) {
      toast.error(passwordResult.error.errors[0].message);
      return;
    }
    
    if (isSignup && formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    if (isSignup && !formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    setLoading(true);

    if (isSignup) {
      const { error } = await signUp(formData.email, formData.password, {
        full_name: formData.fullName,
        phone: formData.phone,
        nin: formData.nin,
      });

      if (error) {
        if (error.message.includes("already registered")) {
          toast.error("This email is already registered. Please login instead.");
        } else {
          toast.error(error.message);
        }
        setLoading(false);
        return;
      }

      toast.success("Account created successfully!");
      navigate("/dashboard");
    } else {
      const { error } = await signIn(formData.email, formData.password);

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          toast.error("Invalid email or password. Please try again.");
        } else {
          toast.error(error.message);
        }
        setLoading(false);
        return;
      }

      toast.success("Welcome back!");
      navigate("/dashboard");
    }

    setLoading(false);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Left Panel - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 py-8 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Mobile background */}
        <div className="absolute inset-0 lg:hidden">
          <img src={bgLogin} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/95" />
        </div>
        
        <div className="mx-auto w-full max-w-sm lg:max-w-md relative z-10">
          <Link to="/" className="flex items-center -gap-1 mb-6 sm:mb-8">
            <CrestedCrane className="w-8 h-6 sm:w-10 sm:h-8 -mr-1" />
            <span className="font-heading font-bold text-xl sm:text-2xl text-foreground">e<span className="text-accent">K</span>onde</span>
          </Link>
          
          <div className="mb-6 sm:mb-8">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold mb-2">
              {isSignup ? "Create Your Account" : "Welcome Back"}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              {isSignup 
                ? "Register using your email, National ID and phone number" 
                : "Login to access your land applications and titles"
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {isSignup && (
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="fullName" className="text-sm">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="h-11 sm:h-12"
                />
              </div>
            )}

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-sm">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 sm:pl-11 h-11 sm:h-12"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {isSignup && (
              <>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="nin" className="text-sm">National ID Number (NIN)</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                    <Input
                      id="nin"
                      placeholder="CM XXXXXX XXXXX"
                      className="pl-10 sm:pl-11 h-11 sm:h-12"
                      value={formData.nin}
                      onChange={(e) => setFormData({ ...formData, nin: e.target.value.toUpperCase() })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0700 000 000"
                      className="pl-10 sm:pl-11 h-11 sm:h-12"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </>
            )}

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="password" className="text-sm">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-11 sm:h-12"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>
              </div>
            </div>

            {isSignup && (
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="h-11 sm:h-12"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>
            )}

            <Button type="submit" className="w-full h-11 sm:h-12 text-sm sm:text-base" disabled={loading}>
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {isSignup ? "Create Account" : "Login"}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="mt-6 sm:mt-8 text-center text-sm text-muted-foreground">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              className="text-accent font-semibold hover:underline"
              onClick={() => {
                setIsSignup(!isSignup);
              }}
            >
              {isSignup ? "Login" : "Register"}
            </button>
          </p>
        </div>
      </div>

      {/* Right Panel - Visual (Desktop only) */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center p-8 xl:p-12">
        <div className="absolute inset-0">
          <img src={bgLogin} alt="Ugandan landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
        </div>
        <div className="max-w-lg text-primary-foreground relative z-10">
          <h2 className="font-heading text-3xl xl:text-4xl font-bold mb-4 xl:mb-6">
            Secure Your Land.
            <span className="block text-gradient-gold">Protect Your Future.</span>
          </h2>
          <p className="text-primary-foreground/80 text-base xl:text-lg mb-6 xl:mb-8">
            Join over 2.5 million Ugandans who have secured their land titles through eKonde. 
            Fast, transparent, and fully digital.
          </p>
          <div className="grid grid-cols-2 gap-4 xl:gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl xl:text-3xl font-heading font-bold text-uganda-yellow">14 Days</div>
              <div className="text-primary-foreground/70 text-sm">Average Processing</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl xl:text-3xl font-heading font-bold text-uganda-yellow">100%</div>
              <div className="text-primary-foreground/70 text-sm">Digital & Secure</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
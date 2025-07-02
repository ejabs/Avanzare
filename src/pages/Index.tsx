import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  ShieldCheck,
  Moon,
  Sun,
  Mail,
  Phone,
  Loader2,
  Globe,
  Server,
  Database,
  Network,
  Lock,
  Eye,
  Users,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  Award,
  Clock,
  Zap,
  Target,
  Brain,
  Cpu,
  Wifi,
  AlertTriangle,
  ArrowRight,
  Star,
  MapPin,
  Calendar,
  Building,
  Briefcase,
  Menu,
  X,
  DollarSign,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>(
    {}
  );
  const { toast } = useToast();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully! 🚀",
      description:
        "Our cybersecurity experts will get back to you within 24 hours.",
    });
  };

  const handleGetPackageClick = (index: number) => {
    setLoadingStates((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      window.open("https://forms.gle/UmCRZi1RUC9kjib98", "_blank");
      setLoadingStates((prev) => ({ ...prev, [index]: false }));
    }, 1000);
  };

  const services = [
    {
      icon: Shield,
      title: "Vulnerability Assessment",
      description:
        "Comprehensive security audits to identify and fix vulnerabilities before they become threats",
      details:
        "Our vulnerability assessment service includes automated and manual testing to identify security weaknesses in your systems. We provide detailed reports with prioritized recommendations and remediation guidance.",
      features: [
        "Network vulnerability scanning",
        "Web application security testing",
        "Database security review",
        "Priority-based reporting",
        "Remediation guidance",
        "Compliance mapping",
      ],
      pricing: "Starting from $2,500",
      duration: "2-4 weeks",
      deliverables: [
        "Executive summary",
        "Technical report",
        "Risk matrix",
        "Remediation roadmap",
      ],
    },
    {
      icon: Eye,
      title: "Penetration Testing",
      description:
        "Ethical hacking services to test your security defenses against real-world attacks",
      details:
        "Simulated cyber attacks conducted by certified ethical hackers to test your security controls. We identify real-world attack vectors and provide actionable insights to strengthen your defenses.",
      features: [
        "External penetration testing",
        "Internal network testing",
        "Social engineering assessment",
        "Wireless security testing",
        "Executive summary reports",
        "Post-test consultation",
      ],
      pricing: "Starting from $5,000",
      duration: "3-6 weeks",
      deliverables: [
        "Penetration test report",
        "Executive briefing",
        "Attack scenarios",
        "Security recommendations",
      ],
    },
    {
      icon: Network,
      title: "Firewall Configuration",
      description:
        "Advanced firewall setup and management for robust network protection",
      details:
        "Professional firewall deployment and configuration services to create robust network perimeters. We ensure optimal security while maintaining business functionality.",
      features: [
        "Next-gen firewall setup",
        "Rule optimization",
        "Traffic monitoring",
        "24/7 management",
        "Policy documentation",
        "Performance tuning",
      ],
      pricing: "Starting from $3,000",
      duration: "1-2 weeks",
      deliverables: [
        "Configuration documentation",
        "Security policies",
        "Monitoring setup",
        "Training materials",
      ],
    },
    {
      icon: Database,
      title: "Data Protection",
      description:
        "Comprehensive data security and backup optional with encryption",
      details:
        "End-to-end data protection strategies including encryption, backup, and recovery optional. We help you comply with regulations like GDPR and HIPAA.",
      features: [
        "Data encryption",
        "Automated backups",
        "Compliance support",
        "Recovery testing",
        "Data classification",
        "Access controls",
      ],
      pricing: "Starting from $4,000",
      duration: "2-3 weeks",
      deliverables: [
        "Data protection strategy",
        "Backup procedures",
        "Recovery plan",
        "Compliance documentation",
      ],
    },
    {
      icon: Users,
      title: "Security Training",
      description:
        "Employee cybersecurity awareness programs to reduce human error",
      details:
        "Comprehensive training programs to educate your team about cybersecurity threats and best practices. Reduce human error and strengthen your security posture.",
      features: [
        "Phishing simulation",
        "Security workshops",
        "Compliance training",
        "Progress tracking",
        "Custom content",
        "Certification programs",
      ],
      pricing: "Starting from $1,500",
      duration: "Ongoing",
      deliverables: [
        "Training materials",
        "Progress reports",
        "Certificates",
        "Best practices guide",
      ],
    },
    {
      icon: Server,
      title: "Incident Response",
      description:
        "24/7 security monitoring and rapid incident response services",
      details:
        "Round-the-clock monitoring and rapid incident response services. Our SOC team detects, analyzes, and responds to security threats in real-time.",
      features: [
        "24/7 SOC monitoring",
        "Threat hunting",
        "Incident investigation",
        "Forensic analysis",
        "Containment procedures",
        "Recovery support",
      ],
      pricing: "Starting from $8,000/month",
      duration: "Ongoing",
      deliverables: [
        "Monitoring dashboard",
        "Incident reports",
        "Response procedures",
        "Monthly reviews",
      ],
    },
  ];

  const portfolioProjects = [
    {
      title: "Level 1: Foundational – Startup Basics",
      subtitle:
        "For early-stage startups (<20 staff, pre-seed to early seed stage)",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      description:
        "For Early Stage Startups: Foundational cybersecurity services to establish a secure environment for your business.",
      industry: "Startups",
      projectSize: "Enterprise",
      timeline: "5-7 Days",
      teamSize: " 15 Personnel",
      details: {
        client: "",
        duration: "5-7 Days",

        scope:
          "Comprehensive cybersecurity implementation for a tech startup with 15 employees",
        price: "Starting from $300",
        inclusions: [
          "Acceptable Use Policy",
          "Information Security Policy",
          "Data Protection Policy (NDPR/GDPR-lite)",
          "Privacy Policy (Website)",
          "Password Management Policy",
          "Remote Work Policy",
          "BYOD Policy",
          "Access Control Policy",
          "Simple Incident Response Plan",
          "Security Awareness Training Slides",
          "GRC Startup Compliance Checklist",
        ],

        optional: [
          "ISMS Scope & Objectives",
          "Data Processing Agreement (DPA)",
          "DPIA Lite Template",
          "1-Hour Monthly GRC Clinic",
        ],

        results: [
          "Baseline cybersecurity compliance framework implemented",
          "Improved audit readiness for NDPR/GDPR standards",
          "Increased employee security awareness through policy training",
          "Streamlined remote work security posture",
          "Reduction in third-party risk via access control policies",
          "Foundation laid for scalable ISMS adoption",
        ],

        technologies: [
          "OneTrust",
          "Vanta",
          "Drata",
          "Microsoft Purview",
          "Google Workspace Security Center",
          "AWS Artifact",
        ],

        metrics: {},
      },
    },
    {
      title: "Level 2: Growth – Scaling Startups",
      subtitle:
        "For teams onboarding clients, vendors, or preparing for due diligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      description:
        "For Growing Startups: Advanced cybersecurity services to support client onboarding, vendor management, and due diligence.",
      industry: "Startups & Scaleups (20 staff) ",
      projectSize: "Enterprise",
      timeline: "10-14 Days",
      teamSize: "20 Personnel",
      details: {
        client: "",
        duration: "10-14 Days",
        scope:
          "Comprehensive cybersecurity implementation for a tech scaleup with 20 employees",
        price: "Starting from $600",
        inclusions: [
          "All Level 1 Policies",
          "Third-Party Risk Management Policy",
          "Vendor Risk Assessment Template",
          "Business Continuity Plan (BCP)",
          "Asset Management Policy",
          "NDPR or GDPR Gap Assessment (Lite)",
          "Security Awareness Module (Staff & Dev)",
          "Data Inventory/Data Mapping Template",
          "Roles & Responsibilities Matrix (RACI)",
        ],

        optional: [
          "Audit Readiness Checklist",
          "Internal Audit Template",
          "GRC Maturity Assessment",
          "Custom DPIA/RoPA Templates",
        ],
        results: [
          "Enhanced client onboarding security processes",
          "Improved vendor risk management practices",
          "Achieved 98% compliance with NDPR/GDPR standards",
          "Streamlined data inventory and mapping procedures",
          "Increased employee security awareness through training",
          "Established foundation for future ISMS certification",
        ],
        technologies: [
          "OneTrust",
          "Vanta",
          "Drata",
          "Microsoft Purview",
          "Google Workspace Security Center",
          "AWS Artifact",
        ],
        metrics: {},
      },
    },
    {
      title: "Level 3: Enterprise-Ready – Compliance-Driven",
      subtitle:
        "For Series A+ startups preparing for ISO or regulatory scrutiny",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description:
        "For Enterprise-Ready Startups: Comprehensive cybersecurity services to prepare for ISO certification or regulatory scrutiny.",
      industry: "Startups & Scaleups (30 Staff) ",
      projectSize: "Enterprise",
      timeline: "15-30 Days",
      teamSize: "30 Personnel",
      details: {
        client: "",
        duration: "15-30 Days",
        scope:
          "Comprehensive cybersecurity implementation for a tech enterprise with 30 employees",
        inclusions: [
          "All Level 1 + 2 Content",
          "ISMS Framework Documentation",
          "Change Management Policy",
          "Secure Development Policy (SDLC)",
          "Code of Conduct & Ethics",
          "Legal & Regulatory Compliance Register",
          "Employee Onboarding/Offboarding GRC Kit/security policy",
          "NDPR or GDPR Full Gap Assessment",
          "Board-Level GRC Reporting Templates",
          "Quarterly Audit Support (Internal/Prep)",
        ],
        price: "Starting from $1,000",
        optional: [
          "Internal Audit Template",
          "Risk Register Template",
          "Statement of Applicability (SoA) Template",
          "Information Classification & Handling Guide",
          "Quarterly GRC Review Schedule Template",
        ],
        results: [
          "Achieved ISO 27001 certification readiness",
          "Improved regulatory compliance posture",
          "Enhanced employee security awareness through training",
          "Streamlined change management processes",
          "Established foundation for ongoing ISMS maintenance",
          "Increased audit readiness and efficiency",
        ],

        technologies: [
          "OneTrust",
          "Vanta",
          "Drata",
          "Microsoft Purview",
          "Google Workspace Security Center",
          "AWS Artifact",
        ],

        metrics: {},
      },
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
      rating: 5,
      text: "Avanzare's penetration testing revealed critical vulnerabilities we never knew existed. Their professional approach and detailed reporting helped us strengthen our security posture significantly. The ROI was immediate.",
      project: "Penetration Testing & Vulnerability Assessment",
    },
    {
      name: "Michael Chen",
      position: "CISO",
      company: "Healthcare Partners",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      text: "Outstanding service! Their team helped us achieve HIPAA compliance and implement robust data protection measures. The 24/7 support has been invaluable for our operations. Highly recommended for healthcare organizations.",
      project: "Healthcare Security Implementation",
    },
    {
      name: "David Rodriguez",
      position: "IT Director",
      company: "Financial Services Inc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      text: "The 24/7 monitoring service has been invaluable. CyberShield detected and prevented several attempted breaches, saving us from potential disasters. Their incident response time is remarkable.",
      project: "SOC Implementation & Monitoring",
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Protected", icon: Shield },
    { number: "99.9%", label: "Uptime Guaranteed", icon: Clock },
    { number: "24/7", label: "Security Monitoring", icon: Eye },
    { number: "15min", label: "Average Response Time", icon: Zap },
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Security & Availability" },
    {
      name: "CISSP",
      description: "Certified Information Systems Security Professional",
    },
    { name: "CEH", description: "Certified Ethical Hacker" },
    { name: "CISM", description: "Certified Information Security Manager" },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry-Leading Expertise",
      description:
        "Over 10+ years of combined experience with certified cybersecurity professionals",
      details:
        "Our team holds multiple industry certifications and has worked with Fortune 500 companies",
    },
    {
      icon: Clock,
      title: "24/7 Security Operations",
      description:
        "Round-the-clock monitoring and incident response capabilities",
      details:
        "Our Security Operations Center never sleeps, providing continuous protection for your assets",
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description:
        "Expert guidance for GDPR, HIPAA, SOX, PCI DSS, and ISO 27001 compliance",
      details:
        "We ensure your organization meets all regulatory requirements with comprehensive documentation",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description:
        "Customized security strategies designed for your specific industry and needs",
      details:
        "No cookie-cutter approaches - every solution is crafted for your unique environment",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 transform hover:scale-105 group"
          >
            <img
              src="https://res.cloudinary.com/daxeovezx/image/upload/v1751281242/Screenshot_2025-06-30_115931_e7kcqy.png"
              alt="Avanzare Logo"
              className="h-12 w-auto transition-all duration-300 dark:invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* <button
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button> */}
            <button
              onClick={() => scrollToSection("portfolio")}
              className="hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Packages
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full hover:scale-110 transition-all duration-300"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
              ) : (
                <Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full hover:scale-110 transition-all duration-300"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full hover:scale-110 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {/* <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 hover:text-primary transition-colors font-medium"
              >
                Services
              </button> */}
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left py-2 hover:text-primary transition-colors font-medium"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center cyber-grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Cybersecurity Background"
            className="w-full h-full object-cover opacity-50 dark:opacity-20 animate-pulse-glow"
          />

          {/* Dark overlay that adjusts based on mode */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/40 mix-blend-multiply"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Lock className="h-8 w-8 text-primary/30" />
        </div>
        <div
          className="absolute top-40 right-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Network className="h-6 w-6 text-accent/40" />
        </div>
        <div
          className="absolute bottom-40 left-20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Database className="h-7 w-7 text-primary/20" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 mb-6 animate-float">
              <ShieldCheck className="h-16 w-16 text-primary glow-effect animate-pulse-glow" />
            </div>

            <h1 className="text-7xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-slide-in">
              Secure Today.
              <br />
              Defend Tomorrow.
            </h1>

            <p
              className="text-lg md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto font-medium animate-fade-in text-white"
              style={{ animationDelay: "0.5s" }}
            >
              Your trusted cybersecurity partner, protecting businesses from
              evolving digital threats with cutting-edge solutions and expert
              guidance.
            </p>

            {/* <div
              className="flex items-center justify-center space-x-8 mb-10 animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              <Button
                className="  bg-cyber-gradient hover:opacity-90 text-white px-3 py-5   rounded-sm transition-all duration-300 transform hover:scale-105 font-semibold glow-effect"
                onClick={() => scrollToSection("portfolio")}
              >
                View Portfolio
                <ArrowRight className="ml-0 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-5  rounded-sm transition-all duration-300 transform hover:scale-105 font-semibold"
                onClick={() => scrollToSection("portfolio")}
              >
                Our Packages
                <Shield className="ml-0 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* About section */}
      <section
        id="about"
        className="py-20 bg-muted/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* <div className="text-center mb-16 animate-fade-in">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-xl font-semibold"
            >
              About Avanzare
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Protecting Digital Frontiers Since 2018
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded by a cybersecurity experts with over 10 years of
              experience, Avanzare is dedicated to protecting businesses from
              the ever-evolving landscape of cyber threats. We combine
              cutting-edge technology with human expertise to deliver
              unparalleled security optional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 italic">
                    {item.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div> */}

          {/* Company Stats */}
          {/* <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-4">
                  <stat.icon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Our Certifications & Compliance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="group">
                  <Badge
                    variant="secondary"
                    className="px-4 py-3 text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group-hover:scale-105"
                    title={cert.description}
                  >
                    {cert.name}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section id="services" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-xl font-semibold"
            >
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From vulnerability assessments to 24/7 monitoring, we provide
              end-to-end cybersecurity services tailored to protect your
              business from modern threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Dialog key={index}>
                <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group border-0 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className="h-12 w-12 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                      <Badge variant="outline" className="text-xs">
                        {service.duration}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-bold text-primary">
                        {service.pricing}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {service.features.length} features
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                  </CardContent>
                </Card>

                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <service.icon className="h-7 w-7 text-primary" />
                      {service.title}
                    </DialogTitle>
                    <DialogDescription className="text-base leading-relaxed">
                      {service.details}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6 mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          What's Included
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <div className="font-bold text-2xl text-primary">
                          {service.pricing}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Starting Price
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-2xl text-accent">
                          {service.duration}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Timeline
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-2xl text-primary">
                          {service.features.length}+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Features
                        </div>
                      </div>
                    </div>
                  </div>

                 
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section> */}
      {/* Packages Section */}
      <section
        id="portfolio"
        className="py-20 bg-muted/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-xl font-semibold"
            >
              Our Packages
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              CyberSecurity Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped organizations across various industries
              strengthen their cybersecurity posture and achieve compliance with
              our various affordable packages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Dialog key={index}>
                <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        {project.industry}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90">
                        {project.projectSize}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="group-hover:text-primary transition-colors text-xl">
                        {project.title}
                      </CardTitle>
                      <Building className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription className="text-sm font-medium text-primary mb-2">
                      {project.subtitle}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {project.timeline}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {project.teamSize}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Package Details
                      </Button>
                    </DialogTrigger>
                  </CardContent>
                </Card>

                <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold flex items-center gap-3">
                      <Building className="h-8 w-8 text-primary" />
                      {project.title}
                    </DialogTitle>
                    <div className="flex items-center gap-4 text-lg">
                      <Badge className="bg-primary">{project.industry}</Badge>
                      <Badge variant="secondary">{project.projectSize}</Badge>
                      <span className="text-muted-foreground">
                        {project.details.client}
                      </span>
                    </div>
                  </DialogHeader>

                  <div className="space-y-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-lg"
                    />

                    {/* Key Metrics */}
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-muted/50 rounded-lg">
                      {Object.entries(project.details.metrics).map(
                        ([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-primary">
                              {value}
                            </div>
                            <div className="text-sm text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        )
                      )}
                    </div> */}

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                          Project Overview
                        </h4>
                        <p className="text-muted-foreground mb-6">
                          {project.description}
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <strong>Duration:</strong>{" "}
                            {project.details.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <strong>Team Size:</strong> {project.teamSize}
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <strong>Scope:</strong> {project.details.scope}
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-primary" />
                            <strong>Price:</strong> {project.details.price}
                          </div>
                        </div>
                      </div>

                      {/* <div>
                        <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                          <Cpu className="h-5 w-5 text-primary" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.details.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="font-mono text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div> */}
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-xl mb-4 flex items-center gap-2 text-primary">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                          Core Inclusions
                        </h4>

                        <ul className="grid md:grid-cols-2 gap-4">
                          {project.details.inclusions.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 p-4 bg-muted rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                          <Brain className="h-5 w-5 text-primary" />
                          Add-Ons (Optional)
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {project.details.optional.map((optional, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg"
                            >
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{optional}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-accent" />
                          Results Achieved
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {project.details.results.map((result, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-accent/10 rounded-lg"
                            >
                              <TrendingUp className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm font-medium">
                                {result}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                        onClick={() => handleGetPackageClick(index)}
                        disabled={loadingStates[index]}
                      >
                        {loadingStates[index] ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Loading...
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Get Package
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-sm font-semibold"
            >
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
              who trust us with their cybersecurity needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-0 bg-card/50 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
                <CardContent className="pt-8 relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-3 text-xs">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-muted/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-sm font-semibold"
            >
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact our cybersecurity experts for a free consultation and
              discover how we can protect your digital assets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Phone className="h-6 w-6 text-primary" />
                Contact Information
              </h3>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-muted-foreground font-mono">
                        contact@avanzare.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Response within 2 hours
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-muted-foreground font-mono">
                        +234 123-4567
                      </p>
                      <p className="text-sm text-muted-foreground">
                        24/7 Emergency Hotline
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-muted-foreground">
                        123 Security Plaza
                        <br />
                        Abuja Nigeria
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri: 9AM-6PM WAT
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    &lt; 2hrs
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Response Time
                  </div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-sm ">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">
                    Support Available
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Get a free cybersecurity consultation tailored to your
                  business needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name *"
                      required
                      className="transition-all duration-300 focus:scale-101"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="transition-all duration-300 focus:scale-101"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Company Name"
                      className="transition-all duration-300 focus:scale-101"
                    />
                    <Input
                      placeholder="Phone Number"
                      className="transition-all duration-300 focus:scale-101"
                    />
                  </div>
                  <Input
                    placeholder="Subject *"
                    required
                    className="transition-all duration-300 focus:scale-101"
                  />
                  <Textarea
                    placeholder="Tell us about your cybersecurity needs and inclusions..."
                    rows={4}
                    required
                    className="transition-all duration-300 focus:scale-101"
                  />
                  <Button
                    type="submit"
                    className="w-sm bg-cyber-gradient hover:opacity-90 transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card border-t py-12 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 transform hover:scale-105 group"
                >
                  <img
                    src="https://res.cloudinary.com/daxeovezx/image/upload/v1751281242/Screenshot_2025-06-30_115931_e7kcqy.png"
                    alt="Avanzare Logo"
                    className="h-12 w-auto transition-all duration-300 dark:invert"
                  />
                </Link>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Protecting businesses from cyber threats with expert security
                optional and 24/7 monitoring.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Server className="h-4 w-4 text-primary" />
                Services
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Vulnerability Assessment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Penetration Testing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Security Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Incident Response
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Building className="h-4 w-4 text-primary" />
                Company
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> News
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground font-mono mb-4 md:mb-0">
              &copy; 2025 Avanzare. All rights reserved. | Securing your digital
              future.
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-xs">
                24/7 Protected
              </Badge>
              <Badge variant="secondary" className="text-xs">
                ISO 27001
              </Badge>
              <Badge variant="secondary" className="text-xs">
                SOC 2 Type II
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

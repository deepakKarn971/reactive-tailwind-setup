
import { FadeIn } from "@/components/animations/FadeIn";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { useEffect, useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroSection = heroRef.current;
      const heroTitle = heroSection.querySelector('.hero-title');
      const heroSubtitle = heroSection.querySelector('.hero-subtitle');
      const heroBackground = heroSection.querySelector('.hero-background');
      
      if (heroTitle && heroSubtitle && heroBackground) {
        const titleY = scrollY * 0.3;
        const subtitleY = scrollY * 0.2;
        const backgroundY = scrollY * 0.15;
        
        (heroTitle as HTMLElement).style.transform = `translateY(${titleY}px)`;
        (heroSubtitle as HTMLElement).style.transform = `translateY(${subtitleY}px)`;
        (heroBackground as HTMLElement).style.transform = `translateY(${backgroundY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with subtle animation */}
        <div className="hero-background absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-3xl top-1/4 -left-48 animate-float"></div>
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/20 to-teal-200/20 blur-3xl bottom-1/4 -right-40 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <Container maxWidth="lg" className="relative z-10 px-4 sm:px-6 py-12 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Introducing YourCMS
              </span>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Content Management, Reimagined
              </h1>
            </FadeIn>
            
            <FadeIn delay={400}>
              <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
                A beautifully designed CMS that's intuitive, powerful, and a joy to use. Manage your content with elegance.
              </p>
            </FadeIn>
            
            <FadeIn delay={600}>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <Button size="lg" className="h-12 px-8 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Learn More
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-white to-secondary/50">
        <Container>
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Streamlined Content Management
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Focus on creating, not configuring. Your content management system should work for you, not the other way around.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Intuitive Interface"
              description="Clean, minimal design that lets you focus on what matters most – your content."
              delay={100}
            />
            <FeatureCard 
              title="Powerful Editor"
              description="Write with confidence using our distraction-free editor with built-in AI assistance."
              delay={300}
            />
            <FeatureCard 
              title="Custom Workflows"
              description="Flexible content workflows that adapt to how your team actually works."
              delay={500}
            />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative">
        <Container maxWidth="lg">
          <div className="relative overflow-hidden rounded-2xl bg-primary">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
            
            <div className="relative px-6 py-16 sm:px-12 sm:py-20 text-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                  Ready to transform your content workflow?
                </h2>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
                  Join thousands of content creators, marketers, and developers who've already made the switch.
                </p>
                <Button size="lg" variant="secondary" className="h-12 px-8">
                  Start Your Free Trial
                </Button>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 md:py-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="font-medium text-xl tracking-tight">YourCMS</p>
              <p className="text-muted-foreground mt-2">Beautiful content management</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex gap-6">
                <FooterLink href="#">Home</FooterLink>
                <FooterLink href="#">Features</FooterLink>
                <FooterLink href="#">Pricing</FooterLink>
                <FooterLink href="#">About</FooterLink>
              </div>
              
              <div>
                <Button variant="ghost" size="sm">
                  © 2023 YourCMS
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <FadeIn delay={delay} className="p-6 rounded-2xl bg-white bg-opacity-50 backdrop-blur-sm border border-white border-opacity-20 shadow-subtle hover:shadow-elevation transition-all duration-300">
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </FadeIn>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default Index;

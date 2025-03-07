
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-medium text-xl tracking-tight transition-opacity hover:opacity-80"
          >
            YourCMS
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Dashboard</NavLink>
            <NavLink href="#">Content</NavLink>
            <NavLink href="#">Media</NavLink>
            <NavLink href="#">Settings</NavLink>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="shadow-button">Get Started</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      to={href}
      className="text-muted-foreground hover:text-foreground transition-all duration-200 ease-apple"
    >
      {children}
    </Link>
  );
};

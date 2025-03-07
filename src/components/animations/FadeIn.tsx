
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
}

export const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 500,
  distance = 20,
  threshold = 0.1,
  once = true,
  className,
  ...props
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [once, threshold]);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      default:
        return `translateY(${distance}px)`;
    }
  };

  return (
    <div
      ref={domRef}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

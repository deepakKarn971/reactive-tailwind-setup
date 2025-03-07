
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth = "xl", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          {
            "max-w-screen-sm": maxWidth === "xs",
            "max-w-screen-md": maxWidth === "sm",
            "max-w-screen-lg": maxWidth === "md",
            "max-w-screen-xl": maxWidth === "lg",
            "max-w-screen-2xl": maxWidth === "xl",
            "max-w-[1600px]": maxWidth === "2xl",
            "max-w-none": maxWidth === "full",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container };

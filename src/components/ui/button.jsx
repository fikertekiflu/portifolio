// This file assumes you have 'class-variance-authority' and '@radix-ui/react-slot' installed.
// npm install class-variance-authority @radix-ui/react-slot

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority"; // Removed 'type VariantProps' as it's TS-specific
import * as React from "react";

import { cn } from "../lib/utils"; // Assuming 'cn.js' or similar is a utility file for combining class names

// Defines the base styles and variants for the button using cva
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// No explicit interface export in JavaScript.
// The props are defined implicitly by the destructuring in the component function.

// React.forwardRef allows the component to receive a ref
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // 'asChild' prop determines if the component renders as a button or a Slot (for composition)
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        // cn utility combines conditional Tailwind classes
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref} // Forward the ref to the underlying DOM element or component
        {...props} // Spread any other props (e.g., onClick, type, etc.)
      />
    );
  },
);

// Assign a display name for easier debugging in React DevTools
Button.displayName = "Button";

// Export the Button component and its variants utility
export { Button, buttonVariants };
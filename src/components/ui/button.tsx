import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "", // color shapes look via compoundVariants
        destructive: "",
        outline: "",
        secondary: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-11",
      },
      color: {
        primary: "",
        secondary: "",
        accent: "",
        destructive: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        color: "primary",
        class:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      },
      {
        variant: "default",
        color: "secondary",
        class:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      },
      {
        variant: "default",
        color: "accent",
        class: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/80",
      },
      {
        variant: "default",
        color: "destructive",
        class:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
      },

      {
        variant: "outline",
        color: "primary",
        class: "border border-primary text-primary hover:bg-primary/5",
      },
      {
        variant: "outline",
        color: "secondary",
        class: "border border-secondary text-secondary hover:bg-secondary/5",
      },
      {
        variant: "outline",
        color: "accent",
        class: "border border-accent text-accent hover:bg-accent/5",
      },
      {
        variant: "outline",
        color: "destructive",
        class:
          "border border-destructive text-destructive hover:bg-destructive/10",
      },

      {
        variant: "ghost",
        color: "primary",
        class: "hover:bg-primary/10 text-primary",
      },
      {
        variant: "ghost",
        color: "secondary",
        class: "hover:bg-secondary/10 text-secondary",
      },
      {
        variant: "ghost",
        color: "accent",
        class: "hover:bg-accent/10 text-accent",
      },
      {
        variant: "ghost",
        color: "destructive",
        class: "hover:bg-destructive/10 text-destructive",
      },

      {
        variant: "link",
        color: "primary",
        class: "text-primary underline-offset-4 hover:underline",
      },
      {
        variant: "link",
        color: "secondary",
        class: "text-secondary underline-offset-4 hover:underline",
      },
      {
        variant: "link",
        color: "accent",
        class: "text-accent underline-offset-4 hover:underline",
      },
      {
        variant: "link",
        color: "destructive",
        class: "text-destructive underline-offset-4 hover:underline",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "primary",
    },
  }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  };

/**
 * @description A versatile button supporting variants, sizes, and colors.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      color = "primary",
      loading = false,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const disabled = loading || props.disabled;

    return (
      <Comp
        ref={ref as any}
        disabled={disabled}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, color }), className)}
        {...props}
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

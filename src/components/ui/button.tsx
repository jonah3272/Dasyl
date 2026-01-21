import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        // Modern primary with gradient and glassmorphism
        default: "bg-gradient-to-r from-earth-clay via-earth-clay to-gentle-terracotta text-white hover:from-gentle-terracotta hover:via-earth-clay hover:to-earth-clay border-0 shadow-[0_4px_14px_0_rgba(184,160,130,0.4)] hover:shadow-[0_6px_20px_0_rgba(184,160,130,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        // Modern secondary with glassmorphism
        secondary: "bg-white/90 backdrop-blur-sm text-cozy-brown border-2 border-cozy-brown/20 hover:bg-white hover:border-cozy-brown/40 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 border-0 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
        // Modern outline with animated border
        outline:
          "border-2 border-earth-clay bg-transparent text-earth-clay hover:bg-earth-clay/10 hover:text-earth-clay font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-earth-clay before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        // Modern ghost with subtle background
        ghost: "text-cozy-brown hover:bg-cozy-brown/10 hover:text-cozy-brown font-bold hover:shadow-md transition-all duration-200",
        // Modern link with underline animation
        link: "text-earth-clay underline-offset-4 hover:underline font-bold hover:text-gentle-terracotta transition-colors duration-200",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-2xl px-10 py-4 text-lg font-extrabold",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

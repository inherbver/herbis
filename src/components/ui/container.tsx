import React from "react";
import { cn } from "@/src/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("container px-4 mx-auto", className)} {...props}>
      {children}
    </div>
  );
}

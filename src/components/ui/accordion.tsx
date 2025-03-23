"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

type AccordionContextType = {
  expanded: string | null;
  setExpanded: React.Dispatch<React.SetStateAction<string | null>>;
};

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export function Accordion({
  className,
  children,
  defaultExpanded = null,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  defaultExpanded?: string | null;
}) {
  const [expanded, setExpanded] = React.useState<string | null>(defaultExpanded);

  return (
    <AccordionContext.Provider value={{ expanded, setExpanded }}>
      <div className={cn("space-y-2", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({
  className,
  children,
  value,
  ...props
}: AccordionItemProps) {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const isExpanded = context.expanded === value;
  const toggleAccordion = () => {
    context.setExpanded(isExpanded ? null : value);
  };

  return (
    <div
      className={cn(
        "rounded-md border border-border",
        className
      )}
      {...props}
    >
      {React.isValidElement(children) && React.Children.map(children, (child) => {
        // Type check and clone only if it's a valid AccordionTrigger or AccordionContent
        if (
          React.isValidElement(child) &&
          (child.type === AccordionTrigger || child.type === AccordionContent)
        ) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isExpanded,
            toggleAccordion
          });
        }
        return child;
      })}
    </div>
  );
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isExpanded?: boolean;
  toggleAccordion?: () => void;
}

export function AccordionTrigger({
  className,
  children,
  isExpanded,
  toggleAccordion,
  ...props
}: AccordionTriggerProps) {
  return (
    <button
      className={cn(
        "flex w-full items-center justify-between px-4 py-3 font-medium transition-all hover:underline",
        className
      )}
      onClick={toggleAccordion}
      aria-expanded={isExpanded}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          isExpanded ? "rotate-180" : ""
        )}
      />
    </button>
  );
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isExpanded?: boolean;
}

export function AccordionContent({
  className,
  children,
  isExpanded,
  ...props
}: AccordionContentProps) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isExpanded ? "max-h-96 pt-0" : "max-h-0",
        className
      )}
      aria-hidden={!isExpanded}
      {...props}
    >
      <div className="px-4 pb-4 pt-0">
        {children}
      </div>
    </div>
  );
}

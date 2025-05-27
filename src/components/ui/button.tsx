// src/components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`cursor-pointer px-6 py-2 rounded-full font-medium shadow hover:shadow-lg transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, required, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[10.5px] font-label uppercase tracking-[0.06em] text-[#7A8A90] mb-[7px]">
            {label}
            {required && <span className="text-[#00C97F] ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-[14px] py-[14px] rounded-[14px] border border-[#E7ECEC] bg-white",
            "text-[13px] font-medium text-[#07191E]",
            "placeholder:text-[#7A8A90]/60",
            "transition-all duration-150",
            "focus:outline-none focus:border-[#00C97F] focus:shadow-[0_0_0_3px_rgba(2,245,161,0.16)]",
            error && "border-[#E0533D] shadow-[0_0_0_3px_rgba(224,83,61,0.12)]",
            className,
          )}
          {...props}
        />
        {error && (
          <p className="mt-[6px] text-[10.5px] font-medium text-[#C0341F]">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
export type { InputProps };

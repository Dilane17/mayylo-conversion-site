"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  required?: boolean;
  options: SelectOption[];
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, label, error, required, options, placeholder, ...props },
    ref,
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[10.5px] font-label uppercase tracking-[0.06em] text-[#7A8A90] mb-[7px]">
            {label}
            {required && <span className="text-[#00C97F] ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "w-full px-[14px] py-[14px] rounded-[14px] border border-[#E7ECEC] bg-white",
              "text-[13px] font-medium text-[#07191E]",
              "appearance-none cursor-pointer",
              "transition-all duration-150",
              "focus:outline-none focus:border-[#00C97F] focus:shadow-[0_0_0_3px_rgba(2,245,161,0.16)]",
              "pr-10",
              error &&
                "border-[#E0533D] shadow-[0_0_0_3px_rgba(224,83,61,0.12)]",
              className,
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-[14px] top-1/2 -translate-y-1/2 h-4 w-4 text-[#7A8A90] pointer-events-none" />
        </div>
        {error && (
          <p className="mt-[6px] text-[10.5px] font-medium text-[#C0341F]">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select };
export type { SelectProps };

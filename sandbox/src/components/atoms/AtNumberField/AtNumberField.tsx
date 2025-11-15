import { sanitizeTailwindClassnames } from "@utilities/sanitizeTailwindClassnames";
import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface AtNumberFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
  registration?: UseFormRegisterReturn;
}

export function AtNumberField({
  label,
  error,
  registration,
  className = "",
  ...props
}: AtNumberFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={registration?.name}
          className="text-sm font-medium text-white backdrop-blur-sm"
        >
          {label}
        </label>
      )}
      <input
        id={registration?.name}
        type="number"
        className={sanitizeTailwindClassnames(`
          px-3 py-2 text-base
          backdrop-blur-md bg-white/60
          border rounded-lg
          shadow-lg shadow-black/5
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:shadow-indigo-500/20
          disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-white/30
          ${
            error ? "border-red-500/60 shadow-red-500/10" : "border-gray-300/40"
          }
          ${className}
        `)}
        {...registration}
        {...props}
      />
      <div className="min-h-5">
        {error && (
          <span className="text-sm text-red-600 font-medium">{error}</span>
        )}
      </div>
    </div>
  );
}

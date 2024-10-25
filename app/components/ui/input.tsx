"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const Input = ({
  placeholder,
  type = "text",
  isSecure = false,
  icon: Icon,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  type?: "text" | "password" | "email";
  isSecure?: boolean;
  icon?: React.ComponentType<any>;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <input
        autoComplete="off"
        {...rest}
        type={showPassword && isSecure ? "text" : type}
        className={`
          border border-gray-300 rounded-md px-4 py-3 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          w-full transition-all duration-300
        `}
        placeholder={isFocused ? "" : placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        className={`
          text-blue-500 px-1.5 text-xs bg-background left-4 font-semibold 
          absolute transition-all duration-300 ease-in-out pointer-events-none
          ${isFocused ? "-top-2.5" : "top-3 opacity-0"}
        `}
      >
        {placeholder}
      </label>
      {isSecure ? (
        <button
          type="button"
          className="absolute text-gray-400 right-4 top-4"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      ) : (
        Icon && (
          <div className="absolute text-gray-400 right-4 top-4">
            <Icon size={18} />
          </div>
        )
      )}
    </div>
  );
};

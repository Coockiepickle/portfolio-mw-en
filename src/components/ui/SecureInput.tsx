
import * as React from "react";
import { cn } from "@/lib/utils";
import { useSecureInput } from "@/hooks/useSecureInput";

interface SecureInputProps extends Omit<React.ComponentProps<"input">, 'value' | 'onChange'> {
  value?: string;
  onSecureChange?: (value: string, isValid: boolean) => void;
  maxLength?: number;
  allowedChars?: RegExp;
}

const SecureInput = React.forwardRef<HTMLInputElement, SecureInputProps>(
  ({ className, type, value = '', onSecureChange, maxLength, allowedChars, ...props }, ref) => {
    const { value: secureValue, isValid, updateValue } = useSecureInput(value, {
      maxLength,
      allowedChars,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      updateValue(newValue);
      onSecureChange?.(secureValue, isValid);
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          !isValid && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        ref={ref}
        value={secureValue}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

SecureInput.displayName = "SecureInput";

export { SecureInput };

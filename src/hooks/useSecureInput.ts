
import { useState, useCallback } from 'react';
import { sanitizeInput } from '@/lib/security';

interface UseSecureInputOptions {
  maxLength?: number;
  allowedChars?: RegExp;
}

export const useSecureInput = (initialValue: string = '', options: UseSecureInputOptions = {}) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);

  const updateValue = useCallback((newValue: string) => {
    let sanitized = sanitizeInput(newValue);
    
    // Apply length restriction
    if (options.maxLength && sanitized.length > options.maxLength) {
      sanitized = sanitized.substring(0, options.maxLength);
    }
    
    // Apply character restriction
    if (options.allowedChars && !options.allowedChars.test(sanitized)) {
      setIsValid(false);
      return;
    }
    
    setIsValid(true);
    setValue(sanitized);
  }, [options.maxLength, options.allowedChars]);

  const reset = useCallback(() => {
    setValue(initialValue);
    setIsValid(true);
  }, [initialValue]);

  return {
    value,
    isValid,
    updateValue,
    reset,
  };
};

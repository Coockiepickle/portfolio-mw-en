
import DOMPurify from 'dompurify';

/**
 * Sanitizes HTML content to prevent XSS attacks
 * @param html - The HTML string to sanitize
 * @returns Sanitized HTML string
 */
export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['strong', 'em', 'br', 'p', 'span'],
    ALLOWED_ATTR: ['class'],
    KEEP_CONTENT: true,
  });
};

/**
 * Validates and sanitizes user input
 * @param input - The input string to validate
 * @returns Sanitized input string
 */
export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

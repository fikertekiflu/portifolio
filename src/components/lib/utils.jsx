// This file assumes you have 'clsx' and 'tailwind-merge' installed.
// npm install clsx tailwind-merge

import { clsx } from "clsx"; // Removed 'type ClassValue' as it's TS-specific
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally join Tailwind CSS classes.
 * It uses `clsx` to conditionally combine class names and `tailwind-merge`
 * to resolve Tailwind conflicts.
 *
 * @param {...any} inputs - Class names, arrays of class names, or objects where keys are class names and values are booleans.
 * @returns {string} The combined and merged class names string.
 */
export function cn(...inputs) { // Removed type annotation for 'inputs'
  return twMerge(clsx(inputs));
}
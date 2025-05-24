import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate 1915 to 2025 years
export const years = Array.from({ length: 2025 - 1945 + 1 }, (_, index) => {
  const year = 1945 + index;
  return {
    id: `year-${index + 1}`,
    label: year.toString(),
  };
});

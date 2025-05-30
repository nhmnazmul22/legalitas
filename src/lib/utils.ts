import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate 1945 to 2025 years
export const years = Array.from({ length: 2025 - 1945 + 1 }, (_, index) => {
  const year = 1945 + index;
  return {
    id: `year-${index + 1}`,
    label: year.toString(),
  };
});

// Generate url or params
export const generateUrl = (text: string) => {
  const lowercaseUrl = text.split(" ").join("-").toLowerCase();
  return lowercaseUrl;
};

export const generatePageName = (name: string) => {
  const nameArray = name.split("-");
  const pageNameArray = nameArray.map((value) => {
    return `${value[0].toUpperCase()}${value.slice(1, value.length)}`;
  });
  return pageNameArray.join(" ");
};

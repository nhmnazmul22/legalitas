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

export const getRandomItems = (array: any[], count: number) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const formatDate = (date: string) => {
  const formatted = new Date(date).toLocaleDateString("en-GB");
  return formatted;
};

const allowedOrigins = [
  "http://localhost:3001",
  "https://legalitas.vercel.app",
  "http://202.74.74.123",
  "https://mitrajasalegalitas.co.id/",
];

export function getCorsHeaders(request: Request) {
  const origin = request.headers.get("origin");
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400", // 1 day cache for preflight
  };

  if (origin && allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}

export function truncateText(text: string, maxLength: number) {
  if (typeof text !== "string") return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function generateInvoiceNumber() {
  const randomNum = Math.floor(Math.random() * 90000) + 10000;
  return `INV-${randomNum}`;
}

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function parseDate(input: string): string {
  const [year, month, day] = input.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

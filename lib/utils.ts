import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
};

export function formatDateString(dateString: number) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

export function formatDateString2(dateString: number) {
  const d = new Date(dateString)
  const date = d.getUTCDate();
  const month = d.toLocaleString('default', { month: 'long' }); // Since getUTCMonth() returns month from 0-11 not 1-12
  const year = d.getUTCFullYear();
  return `${month} ${date}, ${year}`;
}

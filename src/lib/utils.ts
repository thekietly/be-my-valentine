import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/**
 * Translations lookup library
 */
const translations = {
  en: {
    yes: "Yes",
    no: "No",
  },
  vi: {
    yes: "Có",
    no: "Không",
  },
};
export function translateLanguage(language: string) {
    return 
  }
}

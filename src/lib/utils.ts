import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTemp(celsius: number): string {
  return `${celsius}°C`;
}

export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} dakika`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours} saat`;
  }
  return `${hours} saat ${remainingMinutes} dakika`;
}

export function formatWeight(grams: number): string {
  if (grams >= 1000) {
    return `${(grams / 1000).toFixed(1)} kg`;
  }
  return `${grams} g`;
}

export function calculateCookingTime(
  weightKg: number,
  minutesPerKg: number,
  difficulty: string
): { min: number; max: number } {
  const multiplier =
    difficulty === "EASY" ? 0.9 : difficulty === "HARD" ? 1.1 : 1;
  return {
    min: Math.round(weightKg * minutesPerKg * multiplier * 0.85),
    max: Math.round(weightKg * minutesPerKg * multiplier * 1.15),
  };
}

export function getDonenessColor(doneness: string): string {
  const colors: Record<string, string> = {
    RARE: "#DC2626",
    MEDIUM_RARE: "#E11D48",
    MEDIUM: "#F472B6",
    MEDIUM_WELL: "#A16207",
    WELL_DONE: "#78716C",
  };
  return colors[doneness] || "#6B7280";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

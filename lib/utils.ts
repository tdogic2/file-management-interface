import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEmojiPathForDiskUsagePercentage(
  diskUsagePercentage: number
) {
  let emojiPath;

  if (diskUsagePercentage <= 20) emojiPath = "/disk-optimal-state.svg";
  else if (diskUsagePercentage <= 40) emojiPath = "/disk-moderate-state.svg";
  else if (diskUsagePercentage <= 60) emojiPath = "/disk-advisory-state.svg";
  else if (diskUsagePercentage <= 80) emojiPath = "/disk-warning-state.svg";
  else emojiPath = "/disk-critical-state.svg";

  return emojiPath;
}

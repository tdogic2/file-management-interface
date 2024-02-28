import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { FileCategoryType, FileNameType, FileStatusType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(inputString: string): string {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
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

export function formatName(name: FileNameType) {
  const { text, extension } = name;

  return `${text}.${extension}`;
}

export function formatStatus(status: FileStatusType) {
  if (typeof status === "number") {
    return `${status}%`;
  } else if (status === "completed") {
    return "Completed";
  } else if (status === "paused") {
    const pausedSymbol = "▢";
    return `${pausedSymbol} Paused`;
  } else {
    return "Unknown Status";
  }
}

export function formatSize(sizeInBytes: number) {
  const kilobyte = 1024;
  const megabyte = kilobyte * 1024;
  const gigabyte = megabyte * 1024;

  if (sizeInBytes >= gigabyte) {
    return `${(sizeInBytes / gigabyte).toFixed(2)} GB`;
  } else if (sizeInBytes >= megabyte) {
    return `${(sizeInBytes / megabyte).toFixed(2)} MB`;
  } else if (sizeInBytes >= kilobyte) {
    return `${(sizeInBytes / kilobyte).toFixed(2)} KB`;
  } else {
    return `${sizeInBytes} bytes`;
  }
}

export function isDateEqualToToday(date: Date) {
  const today = new Date();

  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

export function calculateTimeFromSeconds(totalSeconds: number) {
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export function formatTime(
  days: number,
  hours: number,
  minutes: number,
  seconds: number
) {
  const timeComponents = [];

  if (days > 0) {
    timeComponents.push(`${days} Day${days !== 1 ? "s" : ""}`);
  }

  if (hours > 0) {
    timeComponents.push(`${hours} Hour${hours !== 1 ? "s" : ""}`);
  }

  if (minutes > 0) {
    timeComponents.push(`${minutes} Min${minutes !== 1 ? "s" : ""}`);
  }

  if (seconds > 0 || timeComponents.length === 0) {
    timeComponents.push(`${seconds} Sec${seconds !== 1 ? "s" : ""}`);
  }

  return timeComponents.join(" ");
}

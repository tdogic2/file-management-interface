"use client";

import { AppWindow, Archive, Bot, FileText, Image, Music4 } from "lucide-react";

import { DownloadFileType } from "@/types";

export const dataTable: DownloadFileType[] = [
  {
    id: "1",
    name: {
      text: "UIUXMonster",
      extension: "png",
      icon: Image,
      category: "image",
    },
    size: 762880,
    status: "completed",
    timeLeft: 0,
    lastModification: new Date("2023-08-09"),
  },
  {
    id: "2",
    name: {
      text: "2pacCover",
      extension: "mp3",
      icon: Music4,
      category: "music",
    },
    size: 3145728,
    status: 80,
    timeLeft: 70,
    lastModification: new Date("2023-10-21"),
  },
  {
    id: "3",
    name: {
      text: "UIUXMonster",
      extension: "zip",
      icon: Archive,
      category: "archive",
    },
    size: 12582912,
    status: "completed",
    timeLeft: 0,
    lastModification: new Date("2023-04-10"),
  },
  {
    id: "4",
    name: {
      text: "Details",
      extension: "pdf",
      icon: FileText,
      category: "document",
    },
    size: 2097152,
    status: 50,
    timeLeft: 312,
    lastModification: new Date("2023-02-12"),
  },
  {
    id: "5",
    name: {
      text: "Better.Call Saul.so2E10.720p",
      extension: "mp4",
      icon: Music4,
      category: "video",
    },
    size: 2684354560,
    status: 0,
    timeLeft: 0,
    lastModification: new Date("2024-01-01"),
  },
  {
    id: "6",
    name: {
      text: "Call of Duty",
      extension: "apk",
      icon: Bot,
      category: "apk",
    },
    size: 12582912,
    status: "paused",
    timeLeft: 0,
    lastModification: new Date("2023-06-14"),
  },
  {
    id: "7",
    name: {
      text: "2pacCover",
      extension: "zip",
      icon: Archive,
      category: "archive",
    },
    size: 12582912,
    status: 10,
    timeLeft: 100,
    lastModification: new Date("2024-02-27"),
  },
  {
    id: "8",
    name: {
      text: "Mima",
      extension: "exe",
      icon: AppWindow,
      category: "program",
    },
    size: 33554432,
    status: "completed",
    timeLeft: 0,
    lastModification: new Date("2023-12-30"),
  },
];

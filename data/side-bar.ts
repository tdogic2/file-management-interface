import {
  AppWindow,
  Bot,
  FileArchive,
  FileText,
  FolderCheck,
  FolderX,
  Folders,
  Image,
  Music4,
  Video,
} from "lucide-react";

import { SideBarType } from "@/types";

export const sideBar: SideBarType = [
  {
    trigger: {
      icon: Folders,
      label: "All Downloads",
    },
    content: [
      {
        icon: Music4,
        text: "Music",
        action: () => console.log("Clicked on All Downloads - Music"),
      },
      {
        icon: FileArchive,
        text: "Archive",
        action: () => console.log("Clicked on All Downloads - Archive"),
      },
      {
        icon: Video,
        text: "Videos",
        action: () => console.log("Clicked on All Downloads - Videos"),
      },
      {
        icon: AppWindow,
        text: "Programs",
        action: () => console.log("Clicked on All Downloads - Programs"),
      },
      {
        icon: FileText,
        text: "Documents",
        action: () => console.log("Clicked on All Downloads - Documents"),
      },
      {
        icon: Bot,
        text: "APKs",
        action: () => console.log("Clicked on All Downloads - APKs"),
      },
      {
        icon: Image,
        text: "Images",
        action: () => console.log("Clicked on All Downloads - Images"),
      },
    ],
  },
  {
    trigger: {
      icon: FolderX,
      label: "Unfinished",
    },
    content: [
      {
        icon: Music4,
        text: "Music",
        action: () => console.log("Clicked on Unfinished - Music"),
      },
      {
        icon: FileArchive,
        text: "Archive",
        action: () => console.log("Clicked on Unfinished - Archive"),
      },
      {
        icon: Video,
        text: "Videos",
        action: () => console.log("Clicked on Unfinished - Videos"),
      },
      {
        icon: AppWindow,
        text: "Programs",
        action: () => console.log("Clicked on Unfinished - Programs"),
      },
      {
        icon: FileText,
        text: "Documents",
        action: () => console.log("Clicked on Unfinished - Documents"),
      },
      {
        icon: Bot,
        text: "APKs",
        action: () => console.log("Clicked on Unfinished - APKs"),
      },
      {
        icon: Image,
        text: "Images",
        action: () => console.log("Clicked on Unfinished - Images"),
      },
    ],
  },
  {
    trigger: {
      icon: FolderCheck,
      label: "Finished",
    },
    content: [
      {
        icon: Music4,
        text: "Music",
        action: () => console.log("Clicked on Finished - Music"),
      },
      {
        icon: FileArchive,
        text: "Archive",
        action: () => console.log("Clicked on Finished - Archive"),
      },
      {
        icon: Video,
        text: "Videos",
        action: () => console.log("Clicked on Finished - Videos"),
      },
      {
        icon: AppWindow,
        text: "Programs",
        action: () => console.log("Clicked on Finished - Programs"),
      },
      {
        icon: FileText,
        text: "Documents",
        action: () => console.log("Clicked on Finished - Documents"),
      },
      {
        icon: Bot,
        text: "APKs",
        action: () => console.log("Clicked on Finished - APKs"),
      },
      {
        icon: Image,
        text: "Images",
        action: () => console.log("Clicked on Finished - Images"),
      },
    ],
  },
];

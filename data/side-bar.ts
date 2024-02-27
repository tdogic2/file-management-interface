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

export const sideBar = [
  {
    trigger: {
      icon: Folders,
      label: "All Downloads",
    },
    content: [
      {
        icon: Music4,
        text: "Music",
        action: () => console.log("All Downloads - Music"),
      },
      {
        icon: FileArchive,
        text: "Compressed",
        action: () => console.log("All Downloads - Compressed"),
      },
      {
        icon: Video,
        text: "Videos",
        action: () => console.log("All Downloads - Videos"),
      },
      {
        icon: AppWindow,
        text: "Programs",
        action: () => console.log("All Downloads - Programs"),
      },
      {
        icon: FileText,
        text: "Documents",
        action: () => console.log("All Downloads - Documents"),
      },
      {
        icon: Bot,
        text: "APKs",
        action: () => console.log("All Downloads - APKs"),
      },
      {
        icon: Image,
        text: "Images",
        action: () => console.log("All Downloads - Images"),
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
        action: () => console.log("Unfinished - Music"),
      },
      {
        icon: FileArchive,
        text: "Compressed",
        action: () => console.log("Unfinished - Compressed"),
      },
      {
        icon: Video,
        text: "Videos",
        action: () => console.log("Unfinished - Videos"),
      },
      {
        icon: AppWindow,
        text: "Programs",
        action: () => console.log("Unfinished - Programs"),
      },
      {
        icon: FileText,
        text: "Documents",
        action: () => console.log("Unfinished - Documents"),
      },
      {
        icon: Bot,
        text: "APKs",
        action: () => console.log("Unfinished - APKs"),
      },
      {
        icon: Image,
        text: "Images",
        action: () => console.log("Unfinished - Images"),
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
        action: () => console.log("Finished - Music"),
      },
      {
        icon: FileArchive,
        text: "Compressed",
        action: () => console.log("Finished - Compressed"),
      },
      {
        icon: Video,
        text: "Videos",
        action: () => console.log("Finished - Videos"),
      },
      {
        icon: AppWindow,
        text: "Programs",
        action: () => console.log("Finished - Programs"),
      },
      {
        icon: FileText,
        text: "Documents",
        action: () => console.log("Finished - Documents"),
      },
      {
        icon: Bot,
        text: "APKs",
        action: () => console.log("Finished - APKs"),
      },
      {
        icon: Image,
        text: "Images",
        action: () => console.log("Finished - Images"),
      },
    ],
  },
];

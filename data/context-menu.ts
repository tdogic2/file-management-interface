import {
  File,
  FileInput,
  FilePen,
  FileStack,
  FolderOpen,
  Info,
  MinusCircle,
  RefreshCcw,
  RotateCw,
  Square,
} from "lucide-react";

export const contextMenu = [
  {
    icon: File,
    label: "Open",
    action: () => console.log("Clicked on Open"),
  },
  {
    icon: FileInput,
    label: "Open With",
    action: () => console.log("Clicked on Open With"),
  },
  {
    icon: FolderOpen,
    label: "Open Folder",
    action: () => console.log("Clicked on Open Folder"),
  },
  {
    icon: FilePen,
    label: "Move/Rename",
    action: () => console.log("Clicked on Move/Rename"),
  },
  {
    icon: File,
    label: "Redownload",
    action: () => console.log("Clicked on Redownload"),
  },
  {
    icon: RotateCw,
    label: "Resume Download",
    disabled: true,
    action: () => console.log("Clicked on Resume Download"),
  },
  {
    icon: Square,
    label: "Stop Download",
    disabled: true,
    action: () => console.log("Clicked on Stop Download"),
  },
  {
    icon: RefreshCcw,
    label: "Refresh Download Address",
    disabled: true,
    action: () => console.log("Clicked on Refresh Download Address"),
  },
  {
    icon: FileStack,
    label: "Add to queue",
    sub: [
      {
        icon: FileStack,
        label: "Add to queue - Item 1",
        action: () => console.log("Clicked on Add to queue - Item 1"),
      },
      {
        icon: FileStack,
        label: "Add to queue - Item 2",
        disabled: true,
        action: () => console.log("Clicked on Add to queue - Item 2"),
      },
      {
        icon: FileStack,
        label: "Add to queue - Item 3",
        action: () => console.log("Clicked on Add to queue - Item 3"),
      },
    ],
  },
  {
    icon: MinusCircle,
    label: "Delete from Queue",
    disabled: true,
    action: () => console.log("Clicked on Delete from Queue"),
  },
  {
    icon: Info,
    label: "Properties",
    action: () => console.log("Clicked on Properties"),
  },
];

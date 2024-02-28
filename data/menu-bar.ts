import { MenuBarType } from "@/types";

export const menuBar: MenuBarType = [
  {
    trigger: "Tasks",
    items: [
      {
        label: "Tasks - Item 1",
        shortcut: "⌘A",
        action: () => console.log("Clicked on Tasks - Item 1"),
      },
      {
        label: "Tasks - Item 2",
        shortcut: "⌘S",
        action: () => console.log("Clicked on Tasks - Item 2"),
      },
      {
        label: "Tasks - Item 3",
        shortcut: "⌘D",
        action: () => console.log("Clicked on Tasks - Item 3"),
      },
    ],
  },
  {
    trigger: "File",
    items: [
      {
        label: "File - Item 1",
        shortcut: "⌘F",
        action: () => console.log("Clicked on File - Item 1"),
      },
      {
        label: "File - Item 2",
        shortcut: "⌘G",
        action: () => console.log("Clicked on File - Item 2"),
      },
      {
        label: "File - Item 3",
        shortcut: "⌘H",
        action: () => console.log("Clicked on File - Item 3"),
      },
    ],
  },
  {
    trigger: "Downloads",
    items: [
      {
        label: "Downloads - Item 1",
        shortcut: "⌘J",
        action: () => console.log("Clicked on Downloads - Item 1"),
      },
      {
        label: "Downloads - Item 2",
        shortcut: "⌘K",
        action: () => console.log("Clicked on Downloads - Item 2"),
      },
      {
        label: "Downloads - Item 3",
        shortcut: "⌘L",
        action: () => console.log("Clicked on Downloads - Item 3"),
      },
    ],
  },
  {
    trigger: "View",
    items: [
      {
        label: "View - Item 1",
        shortcut: "⌘E",
        action: () => console.log("Clicked on View - Item 1"),
      },
      {
        label: "View - Item 2",
        shortcut: "⌘R",
        action: () => console.log("Clicked on View - Item 2"),
      },
      {
        label: "View - Item 3",
        shortcut: "⌘T",
        action: () => console.log("Clicked on View - Item 3"),
      },
    ],
  },
  {
    trigger: "Help",
    items: [
      {
        label: "Help - Item 1",
        shortcut: "⌘Z",
        action: () => console.log("Clicked on Help - Item 1"),
      },
      {
        label: "Help - Item 2",
        shortcut: "⌘U",
        action: () => console.log("Clicked on Help - Item 2"),
      },
      {
        label: "Help - Item 3",
        shortcut: "⌘I",
        action: () => console.log("Clicked on Help - Item 3"),
      },
    ],
  },
];

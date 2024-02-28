import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

export type SiteConfigType = {
  title: string;
  description: string;
  icons: {
    icon: {
      url: string;
      href: string;
    };
  };
};

export type MenuBarItemType = {
  label: string;
  shortcut?: string;
  action: () => void;
};

export type MenuBarType = {
  trigger: string;
  items: MenuBarItemType[];
}[];

export type SideBarTriggerType = {
  icon: LucideIcon;
  label: string;
};

export type SideBarContentType = {
  icon: LucideIcon;
  text: string;
  action: () => void;
}[];

export type SideBarType = {
  trigger: SideBarTriggerType;
  content: SideBarContentType;
}[];

export type SemiCircleType = {
  percentage: number;
  width: number;
  height: number;
  radius: number;
  gradientColors: string[];
};

export type ProgressBarType = {
  percentage: number;
  width: number;
  height: number;
  radius: number;
};

export type FileCategoryType =
  | "music"
  | "archive"
  | "video"
  | "program"
  | "document"
  | "apk"
  | "image";

export type FileNameType = {
  text: string;
  extension: string;
  icon: LucideIcon;
  category: FileCategoryType;
};

export type FileStatusType = number | "paused" | "completed";

export type DownloadFileType = {
  id: string;
  name: FileNameType;
  size: number;
  status: FileStatusType;
  timeLeft: number;
  lastModification: Date;
};

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};

export type TableContextMenuProps = {
  trigger: ReactNode;
};

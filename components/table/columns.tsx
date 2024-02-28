"use client";

import { ChevronsUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import { DownloadFileType, FileNameType, FileStatusType } from "@/types";
import {
  calculateTimeFromSeconds,
  capitalizeFirstLetter,
  formatName,
  formatSize,
  formatStatus,
  formatTime,
  isDateEqualToToday,
} from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<DownloadFileType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer w-fit"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>Name</span>
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("name") as FileNameType;

      const formattedName = formatName(name);

      const { icon: Icon, category } = name;

      return (
        <div className="flex items-center gap-x-4">
          <Icon className="h-6 w-6 text-primary" />
          <div className="flex flex-col gap-y-2">
            <span>{formattedName}</span>
            <span className="text-muted-foreground/50">
              {capitalizeFirstLetter(category)}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "size",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer w-fit"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>Size</span>
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const size = row.getValue("size") as number;

      const formattedSize = formatSize(size);

      return formattedSize;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer w-fit"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>Status</span>
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as FileStatusType;

      const formattedStatus = formatStatus(status);

      if (typeof status === "number") {
        return (
          <div className="flex flex-col gap-y-1">
            <span>{formattedStatus}</span>
            <Progress className="h-2 bg-[#212129]" value={status} />
          </div>
        );
      }

      return formattedStatus;
    },
    sortingFn: (rowA, rowB, columnId) => {
      const getStatusPriority = (status: FileStatusType) => {
        if (status === "completed") {
          return 3;
        } else if (status === "paused") {
          return 2;
        } else if (typeof status === "number") {
          return status / 100;
        } else {
          return 0;
        }
      };

      const statusA = rowA.getValue(columnId) as FileStatusType;
      const statusB = rowB.getValue(columnId) as FileStatusType;

      const priorityA = getStatusPriority(statusA);
      const priorityB = getStatusPriority(statusB);

      return priorityA < priorityB ? 1 : priorityA > priorityB ? -1 : 0;
    },
  },
  {
    accessorKey: "timeLeft",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer w-fit"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>Time Left</span>
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const time = row.getValue("timeLeft") as number;

      const { days, hours, minutes, seconds } = calculateTimeFromSeconds(time);

      const formattedTime = formatTime(days, hours, minutes, seconds);

      return formattedTime;
    },
  },
  {
    accessorKey: "lastModification",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer w-fit"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>Last Modification</span>
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("lastModification"));

      if (isDateEqualToToday(date)) return "Today";

      const formatted = new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(date);

      return formatted.split("-").join("/");
    },
  },
];

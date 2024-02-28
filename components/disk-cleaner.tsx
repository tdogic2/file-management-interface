"use client";

import Image from "next/image";
import { HardDrive, MoreHorizontal } from "lucide-react";

import { useDisk } from "@/store/use-disk";
import { getEmojiPathForDiskUsagePercentage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ProgressBar from "@/components/progress-bar";

export default function DiskCleaner() {
  const { diskUsagePercentage, downloadsPath } = useDisk();

  return (
    <Card className="rounded-2xl">
      <CardHeader className="p-4 flex-row items-center justify-between gap-x-2">
        <div className="flex items-center gap-x-2 text-muted-foreground">
          <HardDrive className="w-6 h-6" />
          <span className="text-sm">Disk Space</span>
        </div>
        <Button
          className="rounded-full"
          variant="ghost"
          size="icon"
          onClick={() => console.log("Clicked on Three Dots")}
        >
          <MoreHorizontal className="cursor-pointer" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 py-0 relative flex flex-col items-center gap-y-8">
        <ProgressBar
          percentage={diskUsagePercentage}
          width={140}
          height={90}
          radius={50}
        />
        <Image
          className="absolute top-1/2 -translate-y-1/2"
          src={getEmojiPathForDiskUsagePercentage(diskUsagePercentage)}
          alt="Disk state"
          width={45}
          height={45}
        />
        <div className="flex flex-col items-center">
          <p className="font-bold text-xl">{diskUsagePercentage}%</p>
          <p className="text-sm text-muted-foreground">{downloadsPath}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button
          className="rounded-xl w-full"
          variant="special"
          onClick={() => console.log("Clicked on Disk Cleaner")}
        >
          Disk Cleaner
        </Button>
      </CardFooter>
    </Card>
  );
}

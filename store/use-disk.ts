import { create } from "zustand";

type DiskType = {
  diskUsagePercentage: number;
  downloadsPath: string;
  setDiskUsagePercentage: (percentage: number) => void;
  setDownloadsPath: (path: string) => void;
};

export const useDisk = create<DiskType, []>(
  (set): DiskType => ({
    /* 
      In a component we would calculate the diskUsagePercentage and in disk-cleaner.tsx we would
      use just use it for the progress bar. Same goes for the downloadsPath. 
      I will hardcore certain values because this is supposed to be a frontend task.
    */
    // diskUsagePercentage: 0,
    // downloadsPath: "",
    diskUsagePercentage: 80,
    downloadsPath: "C:\\Downloads",
    setDiskUsagePercentage: (percentage) =>
      set({ diskUsagePercentage: percentage }),
    setDownloadsPath: (path) => set({ downloadsPath: path }),
  })
);

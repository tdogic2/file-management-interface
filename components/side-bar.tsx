import DiskCleaner from "@/components/disk-cleaner";
import Downloads from "@/components/downloads";

export default function SideBar() {
  return (
    <aside className="flex flex-col w-72 custom-scrollbar border-r p-6 gap-y-4">
      <Downloads />
      <DiskCleaner />
    </aside>
  );
}

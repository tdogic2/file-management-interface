import { dataTable } from "@/data/data-table";
import Menu from "@/components/menu-bar";
import SearchInput from "@/components/search-input";
import SideBar from "@/components/side-bar";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between border-b px-8 py-4">
        <Menu />
        <SearchInput />
      </header>
      <main className="flex flex-1">
        <SideBar />
        <DataTable columns={columns} data={dataTable} />
      </main>
    </div>
  );
}

import Menu from "@/components/menu-bar";
import SearchInput from "@/components/search-input";
import SideBar from "@/components/side-bar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between border-b px-8 py-4">
        <Menu />
        <SearchInput />
      </header>
      <main className="flex flex-1">
        <SideBar />
      </main>
    </div>
  );
}

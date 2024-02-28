"use client";

import { useEffect } from "react";
import { Search } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";

import { Input } from "@/components/ui/input";

export default function SearchInput() {
  const [debouncedValue, setValue] = useDebounceValue("", 500);

  useEffect(() => {
    // Search logic
  }, [debouncedValue]);

  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3" />
      <Input
        className="rounded-xl pl-10 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        type="text"
        placeholder="Search in the List"
        defaultValue=""
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

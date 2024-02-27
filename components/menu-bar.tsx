"use client";

import { menuBar } from "@/data/menu-bar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function MenuBar() {
  return (
    <Menubar className="border-none rounded-none">
      {menuBar.map(({ trigger, items }) => (
        <MenubarMenu key={`menu-bar-${trigger}`}>
          <MenubarTrigger className="cursor-pointer text-base text-muted-foreground">
            {trigger}
          </MenubarTrigger>
          <MenubarContent>
            {items.map(({ label, shortcut, action }) => (
              <>
                <MenubarItem
                  key={`menu-bar-item-${trigger}-${label}`}
                  className="cursor-pointer gap-x-4 text-muted-foreground"
                  onClick={() => action()}
                >
                  <MenubarLabel>{label}</MenubarLabel>
                  <MenubarShortcut>{shortcut}</MenubarShortcut>
                </MenubarItem>
              </>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}

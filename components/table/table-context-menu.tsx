"use client";

import { TableContextMenuProps } from "@/types";
import { contextMenu } from "@/data/context-menu";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function TableContextMenu({ trigger }: TableContextMenuProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{trigger}</ContextMenuTrigger>
      <ContextMenuContent className="p-4 rounded-2xl">
        {contextMenu.map(({ icon: Icon, label, disabled, action, sub }) => {
          if (sub) {
            return (
              <ContextMenuSub key={label}>
                <ContextMenuSubTrigger
                  className="gap-x-4 cursor-pointer"
                  disabled={disabled}
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span>{label}</span>
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="p-4 rounded-2xl">
                  {sub.map(({ icon: Icon, label, action }) => (
                    <ContextMenuItem
                      key={label}
                      className="gap-x-4 cursor-pointer"
                      onClick={() => action()}
                    >
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span>{label}</span>
                    </ContextMenuItem>
                  ))}
                </ContextMenuSubContent>
              </ContextMenuSub>
            );
          }

          return (
            <ContextMenuItem
              key={label}
              className="gap-x-4 cursor-pointer"
              disabled={disabled}
              onClick={() => action()}
            >
              <Icon className="w-4 h-4 text-muted-foreground" />
              <span>{label}</span>
            </ContextMenuItem>
          );
        })}
      </ContextMenuContent>
    </ContextMenu>
  );
}

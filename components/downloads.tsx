"use client";

import { sideBar } from "@/data/side-bar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Downloads() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="pb-0">
        {sideBar.map(({ trigger: { icon: Icon, label }, content }, index) => (
          <Accordion
            key={`side-bar-${label}`}
            className="w-full"
            type="single"
            collapsible
          >
            <AccordionItem
              value={`side-bar-${label}-item-${index + 1}`}
              className="border-none"
            >
              <AccordionTrigger className="hover:no-underline text-muted-foreground data-[state=open]:text-accent-foreground">
                <div className="flex items-center gap-x-3 text-sm">
                  <Icon className="w-6 h-6" />
                  <p>{label}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-2 pl-6">
                {content.map(({ icon: Icon, text, action }) => (
                  <div
                    key={`side-bar-item-${label}-${text}`}
                    className="px-3 py-1.5 rounded-xl flex items-center gap-x-2 cursor-pointer text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={() => action()}
                  >
                    <Icon className="w-4 h-4" />
                    <p className="font-light">{text}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
}

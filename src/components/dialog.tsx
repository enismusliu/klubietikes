"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Dialog as ShadcnDialog,
} from "@/components/ui/dialog";
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  Drawer as ShadcnDrawer,
} from "@/components/ui/drawer";

import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { useDialogStore } from "@/stores/dialog.store";

export default function Dialog() {
  /**
   * @globalstore
   */
  const { open, dialog, onClose } = useDialogStore();

  /**
   * @hooks
   */
  const isDesktop = useMediaQuery("(min-width: 680px)");

  if (!dialog) return null;

  return isDesktop ? (
    <ShadcnDialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={cn("", dialog.classes?.content)}
        onInteractOutside={(e) => {
          const hasPacContainer = e.composedPath().some((el: EventTarget) => {
            if ("classList" in el) {
              return Array.from((el as Element).classList).includes(
                "pac-container"
              );
            }
            return false;
          });

          if (hasPacContainer) {
            e.preventDefault();
          }
        }}
      >
        <DialogHeader className={cn("", dialog.classes?.header)}>
          <DialogTitle>{dialog.title}</DialogTitle>
          <DialogDescription>{dialog.description}</DialogDescription>
        </DialogHeader>

        {dialog.children}
      </DialogContent>
    </ShadcnDialog>
  ) : (
    <ShadcnDrawer
      open={open}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DrawerContent className="fixed bottom-0 left-0 right-0 max-h-[90dvh] bg-white">
        <ScrollArea className="overflow-auto p-4">
          <DrawerHeader>
            <DrawerTitle>{dialog.title}</DrawerTitle>
            <DrawerDescription>{dialog.description}</DrawerDescription>
          </DrawerHeader>
          {dialog.children}
        </ScrollArea>
      </DrawerContent>
    </ShadcnDrawer>
  );
}

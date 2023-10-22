import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

function MediaDialog({
  children,
  title,
  size,
  technique,
}: {
  children: ReactNode;
  title: string;
  size: string;
  technique: string;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="transition-all hover:scale-105">{children}</div>
      </DialogTrigger>
      <DialogContent className="max-h-90">
        {children}
        <DialogFooter>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{`${technique}, ${size}`}</DialogDescription>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default MediaDialog;

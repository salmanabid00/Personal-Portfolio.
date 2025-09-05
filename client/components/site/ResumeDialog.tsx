import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React from "react";

interface ResumeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfUrl: string;
}

export default function ResumeDialog({ open, onOpenChange, pdfUrl }: ResumeDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
        <Dialog.Content className="fixed inset-4 md:inset-10 bg-card text-foreground rounded-xl border border-border shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <Dialog.Title className="text-lg font-semibold">Resume</Dialog.Title>
            <a
              href={pdfUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="btn-yellow mr-2"
            >
              Download
            </a>
            <Dialog.Close className="p-2 rounded-md hover:bg-white/10">
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>
          <div className="flex-1 bg-black/30">
            <iframe
              title="Resume"
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className="w-full h-full"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

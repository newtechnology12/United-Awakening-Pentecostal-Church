"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EmbeddedFormModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-darkMossGreen text-white hover:bg-earthYellow">
        Get Connected
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] sm:w-[90vw] max-w-[425px] md:max-w-[700px] lg:max-w-[900px] h-[95vh] max-h-[95vh] flex flex-col p-2 sm:p-4 md:p-6">
        <DialogHeader className="flex-shrink-0 space-y-1 sm:space-y-2">
          <DialogTitle className="text-lg sm:text-xl md:text-2xl">
          U.A.P.C Connection Form
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm md:text-base">
            Please fill out the form below to connect with U.A.P.C.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-auto mt-2 sm:mt-4">
          <iframe
            src="https://paperform.co/edit/agdvcnrh/share/social"
            className="w-full h-full border-none min-h-[230vh] md:min-h-[130vh]"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
